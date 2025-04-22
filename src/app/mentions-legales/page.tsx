import FooterSection from "../components/footer";
import MentionsLegalesPage from "./components/mentions-legales";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <MentionsLegalesPage />
      <FooterSection />
    </main>
  );
}
