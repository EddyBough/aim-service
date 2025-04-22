export default function MentionsLegalesPage() {
  return (
    <section className="min-h-screen bg-[#111] text-gray-300 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">
          Mentions légales
        </h1>
        <p className="mb-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
          numérique, nous vous informons :
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Éditeur du site
        </h2>
        <p className="mb-4">
          AIM Services
          <br />
          10, Rue Gaston Berger 13010 Marseille
          <br />
          Email : aim_service@hotmail.com
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Hébergement
        </h2>
        <p className="mb-4">
          Vercel Inc.
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, USA
          <br />
          Site : vercel.com
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Propriété intellectuelle
        </h2>
        <p className="mb-4">
          L’ensemble des contenus présents sur ce site (textes, images, vidéos,
          logos…) est la propriété exclusive de AIM Services ou de ses
          partenaires. Toute reproduction, même partielle, est interdite sans
          autorisation préalable.
        </p>
      </div>
    </section>
  );
}
