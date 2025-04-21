import AboutSection from "./components/about-section";
import ConditionalForm from "./components/conditional-form";
import FAQSection from "./components/faq-section";
import FooterSection from "./components/footer";
import Hero from "./components/hero-section";
import InstallationsSection from "./components/installation-section";
import ServicesSection from "./components/service-section";
import TestimonialsSection from "./components/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <InstallationsSection />
        <TestimonialsSection />
        <FAQSection />
      </section>
      <section id="formulaire" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Contactez-nous
          </h3>
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
      <FooterSection />
    </div>
  );
}
