"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import {
  Upload,
  X,
  Info,
  ArrowLeft,
  ArrowRight,
  Zap,
  Wrench,
  ClipboardList,
  Home,
  Building2,
  BuildingIcon,
} from "lucide-react";
import Image from "next/image";

type ServiceType = "installation" | "depannage" | "autres" | null;
type ClientType = "particulier" | "entreprise" | null;
type ResidenceType = "maison" | "residence" | null;
type ElectricalType = "monophase" | "triphase" | "nsp" | null;
type BorneFournie = "oui" | "non" | null;

interface FormData {
  serviceType: ServiceType;
  clientType: ClientType;
  residenceType: ResidenceType;
  borneFournie: BorneFournie;
  cableLongueur: string;
  electricalType: ElectricalType;
  vehicleModel: string;
  projetPhotovoltaique: boolean;
  forfaitEnergie: string;
  consommation: string;
  puissanceMax: string;
  adresse: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  descriptionPanne: string;
}

export default function ConditionalForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    serviceType: null,
    clientType: null,
    residenceType: null,
    borneFournie: null,
    cableLongueur: "",
    electricalType: null,
    vehicleModel: "",
    projetPhotovoltaique: false,
    forfaitEnergie: "",
    consommation: "",
    puissanceMax: "",
    adresse: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    descriptionPanne: "",
  });

  const [uploadedImages, setUploadedImages] = useState<{
    tableauElectrique: File[] | null;
    disjoncteurAbonne: File[] | null;
    murBorne: File[] | null;
    consoleCompteur: File[] | null;
    complementaires: File[] | null;
  }>({
    tableauElectrique: null,
    disjoncteurAbonne: null,
    murBorne: null,
    consoleCompteur: null,
    complementaires: null,
  });

  const [previewUrls, setPreviewUrls] = useState<{
    tableauElectrique: string[] | null;
    disjoncteurAbonne: string[] | null;
    murBorne: string[] | null;
    consoleCompteur: string[] | null;
    complementaires: string[] | null;
  }>({
    tableauElectrique: null,
    disjoncteurAbonne: null,
    murBorne: null,
    consoleCompteur: null,
    complementaires: null,
  });

  // Déterminer le nombre total d'étapes en fonction des choix
  useEffect(() => {
    if (formData.serviceType === "installation") {
      setTotalSteps(formData.clientType === "particulier" ? 12 : 11);
    } else if (formData.serviceType === "depannage") {
      setTotalSteps(4);
    } else if (formData.serviceType === "autres") {
      setTotalSteps(4);
    } else {
      setTotalSteps(1);
    }
  }, [formData.serviceType, formData.clientType]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof typeof uploadedImages
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setUploadedImages((prev) => ({
        ...prev,
        [type]: prev[type] ? [...prev[type]!, ...newFiles] : newFiles,
      }));

      setPreviewUrls((prev) => ({
        ...prev,
        [type]: prev[type]
          ? [...prev[type]!, ...newPreviewUrls]
          : newPreviewUrls,
      }));
    }
  };

  const removeImage = (type: keyof typeof uploadedImages, index: number) => {
    if (previewUrls[type] && previewUrls[type]![index]) {
      URL.revokeObjectURL(previewUrls[type]![index]);
    }

    setUploadedImages((prev) => ({
      ...prev,
      [type]: prev[type] ? prev[type]!.filter((_, i) => i !== index) : null,
    }));

    setPreviewUrls((prev) => ({
      ...prev,
      [type]: prev[type] ? prev[type]!.filter((_, i) => i !== index) : null,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous traiteriez l'envoi du formulaire
    console.log("Form data:", formData);
    console.log("Uploaded images:", uploadedImages);

    toast.success("Demande envoyée avec succès", {
      description:
        "Nous vous contacterons rapidement pour traiter votre demande.",
      duration: 2000,
    });

    // Rafraîchir la page après 2 secondes
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // Composant pour afficher les aperçus d'images
  const ImagePreviews = ({ type }: { type: keyof typeof previewUrls }) => {
    if (!previewUrls[type] || previewUrls[type]!.length === 0) return null;

    return (
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {previewUrls[type]!.map((url, index) => (
          <div key={index} className="relative group">
            <div className="relative h-24 w-full rounded overflow-hidden border border-gray-200">
              <Image
                src={url || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <button
              type="button"
              onClick={() => removeImage(type, index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    );
  };

  // Composant pour l'upload d'images
  const ImageUploader = ({
    type,
    label,
    description,
  }: {
    type: keyof typeof uploadedImages;
    label: string;
    description?: string;
  }) => {
    return (
      <div className="mb-6">
        <Label className="block text-gray-700 mb-2">{label}</Label>
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
          {description && (
            <div className="flex items-center mb-2">
              <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          )}

          <label className="flex flex-col items-center justify-center w-full h-32 bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Cliquez pour ajouter</span> ou
                glissez-déposez
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG ou JPEG (max. 5 Mo par image)
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={(e) => handleImageUpload(e, type)}
            />
          </label>

          <ImagePreviews type={type} />
        </div>
      </div>
    );
  };

  // Barre de progression
  const ProgressBar = () => {
    const progress = (currentStep / totalSteps) * 100;

    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div
          className="bg-[#FFD700] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">Formulaire de demande</h2>
      <p className="text-gray-600 mb-6">
        {currentStep === 1
          ? "Sélectionnez le type de service dont vous avez besoin"
          : `Étape ${currentStep} sur ${totalSteps}`}
      </p>

      <ProgressBar />

      <form onSubmit={handleSubmit}>
        {/* Étape 1: Type de service */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                  formData.serviceType === "installation"
                    ? "border-[#FFD700] bg-[#FFD700]/10"
                    : "border-gray-200"
                }`}
                onClick={() => handleRadioChange("serviceType", "installation")}
              >
                <Zap
                  className={`h-12 w-12 mx-auto mb-4 ${
                    formData.serviceType === "installation"
                      ? "text-[#FFD700]"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">Installation</h3>
                <p className="text-sm text-gray-500">
                  Installation d&apos;une nouvelle borne de recharge
                </p>
              </div>

              <div
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                  formData.serviceType === "depannage"
                    ? "border-[#FFD700] bg-[#FFD700]/10"
                    : "border-gray-200"
                }`}
                onClick={() => handleRadioChange("serviceType", "depannage")}
              >
                <Wrench
                  className={`h-12 w-12 mx-auto mb-4 ${
                    formData.serviceType === "depannage"
                      ? "text-[#FFD700]"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">Dépannage</h3>
                <p className="text-sm text-gray-500">
                  Résolution de problèmes sur votre borne existante
                </p>
              </div>

              <div
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                  formData.serviceType === "autres"
                    ? "border-[#FFD700] bg-[#FFD700]/10"
                    : "border-gray-200"
                }`}
                onClick={() => handleRadioChange("serviceType", "autres")}
              >
                <ClipboardList
                  className={`h-12 w-12 mx-auto mb-4 ${
                    formData.serviceType === "autres"
                      ? "text-[#FFD700]"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">
                  Autres travaux électriques
                </h3>
                <p className="text-sm text-gray-500">
                  Autres interventions électriques
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.serviceType}
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* PARCOURS INSTALLATION */}

        {/* Étape 2: Type de client (si Installation) */}
        {currentStep === 2 && formData.serviceType === "installation" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Vous êtes :</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                  formData.clientType === "particulier"
                    ? "border-[#FFD700] bg-[#FFD700]/10"
                    : "border-gray-200"
                }`}
                onClick={() => handleRadioChange("clientType", "particulier")}
              >
                <Home
                  className={`h-12 w-12 mx-auto mb-4 ${
                    formData.clientType === "particulier"
                      ? "text-[#FFD700]"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">Particulier</h3>
                <p className="text-sm text-gray-500">
                  Installation pour un usage personnel
                </p>
              </div>

              <div
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                  formData.clientType === "entreprise"
                    ? "border-[#FFD700] bg-[#FFD700]/10"
                    : "border-gray-200"
                }`}
                onClick={() => handleRadioChange("clientType", "entreprise")}
              >
                <Building2
                  className={`h-12 w-12 mx-auto mb-4 ${
                    formData.clientType === "entreprise"
                      ? "text-[#FFD700]"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">Entreprise</h3>
                <p className="text-sm text-gray-500">
                  Installation pour une flotte ou des employés
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.clientType}
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 3: Type de résidence (si Particulier) */}
        {currentStep === 3 &&
          formData.serviceType === "installation" &&
          formData.clientType === "particulier" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Votre logement est :
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                    formData.residenceType === "maison"
                      ? "border-[#FFD700] bg-[#FFD700]/10"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleRadioChange("residenceType", "maison")}
                >
                  <Home
                    className={`h-12 w-12 mx-auto mb-4 ${
                      formData.residenceType === "maison"
                        ? "text-[#FFD700]"
                        : "text-gray-400"
                    }`}
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Maison individuelle
                  </h3>
                  <p className="text-sm text-gray-500">
                    Avec garage ou parking privé
                  </p>
                </div>

                <div
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                    formData.residenceType === "residence"
                      ? "border-[#FFD700] bg-[#FFD700]/10"
                      : "border-gray-200"
                  }`}
                  onClick={() =>
                    handleRadioChange("residenceType", "residence")
                  }
                >
                  <BuildingIcon
                    className={`h-12 w-12 mx-auto mb-4 ${
                      formData.residenceType === "residence"
                        ? "text-[#FFD700]"
                        : "text-gray-400"
                    }`}
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Résidence collective
                  </h3>
                  <p className="text-sm text-gray-500">
                    Appartement en copropriété
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.residenceType}
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 4: Borne fournie par concessionnaire */}
        {currentStep === (formData.clientType === "particulier" ? 4 : 3) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Votre concessionnaire vous a-t-il fourni une borne ?
              </h3>
              <p className="text-sm text-red-500 mb-4">
                <Info className="h-4 w-4 inline mr-1" />
                Attention : la borne n&apos;est pas garanti si la borne est
                fournie par le concessionnaire.
              </p>

              <RadioGroup
                value={formData.borneFournie || ""}
                onValueChange={(value) =>
                  handleRadioChange("borneFournie", value)
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oui" id="borne-oui" />
                  <Label htmlFor="borne-oui">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non" id="borne-non" />
                  <Label htmlFor="borne-non">Non</Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.borneFournie}
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 5: Longueur de câble */}
        {currentStep === (formData.clientType === "particulier" ? 5 : 4) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Longueur de câble nécessaire
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Veuillez indiquer une valeur large pour la longueur de câble
                nécessaire (en mètres).
              </p>

              <div className="mb-4">
                <Label
                  htmlFor="cableLongueur"
                  className="block text-gray-700 mb-2"
                >
                  Longueur approximative (en mètres)
                </Label>
                <Input
                  type="number"
                  id="cableLongueur"
                  name="cableLongueur"
                  value={formData.cableLongueur}
                  onChange={handleInputChange}
                  placeholder="Ex: 15"
                  className="w-full"
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.cableLongueur}
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 6: Photo tableau électrique */}
        {currentStep === (formData.clientType === "particulier" ? 6 : 5) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <ImageUploader
                type="tableauElectrique"
                label="Photo de votre tableau électrique"
                description="Prenez une photo claire et complète de votre tableau électrique, avec les disjoncteurs visibles."
              />

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !uploadedImages.tableauElectrique ||
                    uploadedImages.tableauElectrique.length === 0
                  }
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 7: Type d'installation électrique */}
        {currentStep === (formData.clientType === "particulier" ? 7 : 6) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Votre installation électrique est :
              </h3>

              <RadioGroup
                value={formData.electricalType || ""}
                onValueChange={(value) =>
                  handleRadioChange("electricalType", value)
                }
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monophase" id="monophase" />
                  <Label htmlFor="monophase">
                    Monophasée (installation standard)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="triphase" id="triphase" />
                  <Label htmlFor="triphase">
                    Triphasée (installation industrielle ou puissante)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nsp" id="nsp" />
                  <Label htmlFor="nsp">Je ne sais pas</Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.electricalType}
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 8: Modèle de véhicule */}
        {currentStep === (formData.clientType === "particulier" ? 8 : 7) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Modèle de votre véhicule électrique
              </h3>

              <div className="mb-4">
                <Label
                  htmlFor="vehicleModel"
                  className="block text-gray-700 mb-2"
                >
                  Marque et modèle
                </Label>
                <Input
                  type="text"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="Ex: Tesla Model 3, Renault Zoé, etc."
                  className="w-full"
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.vehicleModel}
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 9: Photo disjoncteur abonné */}
        {currentStep === (formData.clientType === "particulier" ? 9 : 8) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <ImageUploader
                type="disjoncteurAbonne"
                label="Photo du disjoncteur abonné"
                description="Prenez une photo claire du disjoncteur principal (disjoncteur de branchement)."
              />

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !uploadedImages.disjoncteurAbonne ||
                    uploadedImages.disjoncteurAbonne.length === 0
                  }
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 10: Projet photovoltaïque */}
        {currentStep === (formData.clientType === "particulier" ? 10 : 9) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Avez-vous un projet photovoltaïque ?
              </h3>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="projetPhotovoltaique"
                  name="projetPhotovoltaique"
                  checked={formData.projetPhotovoltaique}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-[#FFD700] focus:ring-[#FFD700]"
                />
                <Label htmlFor="projetPhotovoltaique">
                  Oui, j&apos;ai un projet d&apos;installation de panneaux
                  solaires
                </Label>
              </div>

              <div className="mt-4">
                <ImageUploader
                  type="murBorne"
                  label="Photo du mur où se trouvera la borne à poser"
                  description="Prenez une photo de l'emplacement prévu pour l'installation de la borne."
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !uploadedImages.murBorne ||
                    uploadedImages.murBorne.length === 0
                  }
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 11: Informations sur la consommation */}
        {currentStep === (formData.clientType === "particulier" ? 11 : 10) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Informations sur votre consommation électrique (présent sur
                votre compteur Linky)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label
                    htmlFor="forfaitEnergie"
                    className="block text-gray-700 mb-2"
                  >
                    Forfait énergie souscrit (kVA)
                  </Label>
                  <Input
                    type="text"
                    id="forfaitEnergie"
                    name="forfaitEnergie"
                    value={formData.forfaitEnergie}
                    onChange={handleInputChange}
                    placeholder="Ex: 9 kVA"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="consommation"
                    className="block text-gray-700 mb-2"
                  >
                    Consommation moyenne (kWh/an)
                  </Label>
                  <Input
                    type="text"
                    id="consommation"
                    name="consommation"
                    value={formData.consommation}
                    onChange={handleInputChange}
                    placeholder="Ex: 4500 kWh/an"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label
                  htmlFor="puissanceMax"
                  className="block text-gray-700 mb-2"
                >
                  Puissance maximale soutirée (kW)
                </Label>
                <Input
                  type="text"
                  id="puissanceMax"
                  name="puissanceMax"
                  value={formData.puissanceMax}
                  onChange={handleInputChange}
                  placeholder="Ex: 7 kW"
                  className="w-full"
                />
              </div>

              <ImageUploader
                type="consoleCompteur"
                label="Photos de vos consoles/compteur (minimum 2)"
                description="Prenez des photos claires de votre compteur électrique et de l'affichage de consommation."
              />

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.forfaitEnergie ||
                    !formData.consommation ||
                    !formData.puissanceMax ||
                    !uploadedImages.consoleCompteur ||
                    uploadedImages.consoleCompteur.length < 2
                  }
                  className="bg-black hover:bg-gray-800 text-[#FFD700]"
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

        {/* Étape 12: Photos complémentaires et coordonnées */}
        {currentStep === (formData.clientType === "particulier" ? 12 : 11) &&
          formData.serviceType === "installation" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Informations complémentaires
              </h3>

              <ImageUploader
                type="complementaires"
                label="Photos complémentaires"
                description="Prenez des photos du parcours que le technicien devra emprunter pour l'installation (accès, obstacles éventuels, etc.)"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="nom" className="block text-gray-700 mb-2">
                    Nom
                  </Label>
                  <Input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="prenom" className="block text-gray-700 mb-2">
                    Prénom
                  </Label>
                  <Input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="telephone"
                    className="block text-gray-700 mb-2"
                  >
                    Téléphone
                  </Label>
                  <Input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="adresse" className="block text-gray-700 mb-2">
                  Adresse complète
                </Label>
                <Textarea
                  id="adresse"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full"
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  className="border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold"
                >
                  Envoyer ma demande
                </Button>
              </div>
            </div>
          )}

        {/* PARCOURS DÉPANNAGE */}

        {/* Étape 2: Coordonnées (si Dépannage) */}
        {currentStep === 2 && formData.serviceType === "depannage" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Vos coordonnées</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="nom" className="block text-gray-700 mb-2">
                  Nom
                </Label>
                <Input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="prenom" className="block text-gray-700 mb-2">
                  Prénom
                </Label>
                <Input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="telephone" className="block text-gray-700 mb-2">
                  Téléphone
                </Label>
                <Input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="adresse" className="block text-gray-700 mb-2">
                Adresse complète
              </Label>
              <Textarea
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  !formData.nom ||
                  !formData.prenom ||
                  !formData.email ||
                  !formData.telephone ||
                  !formData.adresse
                }
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 3: Description de la panne (si Dépannage) */}
        {currentStep === 3 && formData.serviceType === "depannage" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Description de la panne
            </h3>

            <div className="mb-6">
              <Label
                htmlFor="descriptionPanne"
                className="block text-gray-700 mb-2"
              >
                Décrivez en détail le problème rencontré
              </Label>
              <Textarea
                id="descriptionPanne"
                name="descriptionPanne"
                value={formData.descriptionPanne}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Décrivez les symptômes, depuis quand le problème existe, les circonstances d'apparition, etc."
                className="w-full"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.descriptionPanne}
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 4: Photos complémentaires (si Dépannage) */}
        {currentStep === 4 && formData.serviceType === "depannage" && (
          <div className="space-y-6">
            <ImageUploader
              type="complementaires"
              label="Photos complémentaires"
              description="Ajoutez des photos qui pourraient aider à diagnostiquer le problème (borne, messages d'erreur, etc.)"
            />

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="submit"
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold"
              >
                Envoyer ma demande
              </Button>
            </div>
          </div>
        )}

        {/* PARCOURS AUTRES TRAVAUX ÉLECTRIQUES */}

        {/* Étape 2: Coordonnées (si Autres travaux électriques) */}
        {currentStep === 2 && formData.serviceType === "autres" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Vos coordonnées</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="nom" className="block text-gray-700 mb-2">
                  Nom
                </Label>
                <Input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="prenom" className="block text-gray-700 mb-2">
                  Prénom
                </Label>
                <Input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="telephone" className="block text-gray-700 mb-2">
                  Téléphone
                </Label>
                <Input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="adresse" className="block text-gray-700 mb-2">
                Adresse complète
              </Label>
              <Textarea
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  !formData.nom ||
                  !formData.prenom ||
                  !formData.email ||
                  !formData.telephone ||
                  !formData.adresse
                }
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 3: Description des travaux (si Autres travaux électriques) */}
        {currentStep === 3 && formData.serviceType === "autres" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Description des travaux
            </h3>

            <div className="mb-6">
              <Label
                htmlFor="descriptionPanne"
                className="block text-gray-700 mb-2"
              >
                Décrivez en détail les travaux souhaités
              </Label>
              <Textarea
                id="descriptionPanne"
                name="descriptionPanne"
                value={formData.descriptionPanne}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Décrivez les travaux souhaités, vos attentes, les contraintes particulières, etc."
                className="w-full"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.descriptionPanne}
                className="bg-black hover:bg-gray-800 text-[#FFD700]"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 4: Photos complémentaires (si Autres travaux électriques) */}
        {currentStep === 4 && formData.serviceType === "autres" && (
          <div className="space-y-6">
            <ImageUploader
              type="complementaires"
              label="Photos complémentaires"
              description="Ajoutez des photos qui pourraient aider à comprendre la nature des travaux (zone concernée, équipements existants, etc.)"
            />

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                className="border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button
                type="submit"
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold"
              >
                Envoyer ma demande
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
