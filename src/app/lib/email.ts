import emailjs from "@emailjs/browser";

interface FormData {
  serviceType: string | null;
  clientType: string | null;
  residenceType: string | null;
  borneFournie: string | null;
  cableLongueur: string;
  electricalType: string | null;
  vehicleModel: string;
  projetPhotovoltaique: boolean;
  forfaitEnergie: string;
  puissanceMax: string;
  adresse: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  descriptionPanne: string;
}

interface UploadedUrls {
  [key: string]: string[];
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "aim_service");
  formData.append(
    "cloud_name",
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
  );

  console.log("Fichier uploadé :", file.name);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Erreur lors de l'upload vers Cloudinary");
  }

  const data = await response.json();
  return data.secure_url;
};

export const sendEmail = async (
  formData: FormData,
  uploadedUrls: UploadedUrls
): Promise<void> => {
  const formatImageUrls = (urls: string[] | undefined) => {
    if (!urls || urls.length === 0) return "Aucune photo";
    return urls.map((url) => `<a href="${url}">Voir la photo</a>`).join("<br>");
  };

  const templateParams = {
    serviceType: formData.serviceType,
    clientType: formData.clientType,
    residenceType: formData.residenceType,
    borneFournie: formData.borneFournie,
    cableLongueur: formData.cableLongueur,
    electricalType: formData.electricalType,
    vehicleModel: formData.vehicleModel,
    projetPhotovoltaique: formData.projetPhotovoltaique ? "Oui" : "Non",
    forfaitEnergie: formData.forfaitEnergie,
    puissanceMax: formData.puissanceMax,
    adresse: formData.adresse,
    nom: formData.nom,
    prenom: formData.prenom,
    email: formData.email,
    telephone: formData.telephone,
    descriptionPanne: formData.descriptionPanne,
    tableauElectrique: formatImageUrls(uploadedUrls.tableauElectrique),
    disjoncteurAbonne: formatImageUrls(uploadedUrls.disjoncteurAbonne),
    murBorne: formatImageUrls(uploadedUrls.murBorne),
    consoleCompteur: formatImageUrls(uploadedUrls.consoleCompteur),
    complementaires: formatImageUrls(uploadedUrls.complementaires),
  };

  // Debug: afficher les paramètres envoyés
  console.log("Template params:", templateParams);

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
  );
};
