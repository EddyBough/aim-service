import Link from "next/link";
import { Button } from "./components/ui/button";
import ConditionalForm from "./components/conditional-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à passer à la{" "}
            <span className="text-[#FFD700]">mobilité électrique</span> ?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet
            d&apos;installation de borne de recharge.
          </p>
          <Link href="#formulaire">
            <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold px-8 py-6 text-lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>

      {/* Formulaire Conditionnel Section */}
      <section id="formulaire" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Contactez-nous
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous pour nous faire part de votre
            projet ou de votre demande. Nous vous répondrons dans les plus brefs
            délais.
          </p>

          <div className="max-w-4xl mx-auto">
            <ConditionalForm />
          </div>
        </div>
      </section>
    </div>
  );
}
