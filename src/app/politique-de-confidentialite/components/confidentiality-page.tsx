export default function PolitiqueConfidentialitePage() {
  return (
    <section className="min-h-screen bg-[#111] text-gray-300 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">
          Politique de confidentialité
        </h1>
        <p className="mb-4">
          AIM Services accorde une grande importance à la protection de vos
          données personnelles. Cette politique explique comment nous
          collectons, utilisons et protégeons vos informations.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Données collectées
        </h2>
        <p className="mb-4">
          Nous collectons uniquement les données nécessaires à la prise de
          contact et au traitement de vos demandes : nom, prénom, adresse email,
          numéro de téléphone, etc.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Utilisation des données
        </h2>
        <p className="mb-4">
          Ces informations sont utilisées uniquement dans le cadre de notre
          activité (prise de contact, établissement de devis, suivi client).
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Vos droits
        </h2>
        <p className="mb-4">
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification et de suppression de vos données. Pour exercer ces
          droits, vous pouvez nous contacter à : contact@aim-services.fr.
        </p>
      </div>
    </section>
  );
}
