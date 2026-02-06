import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Alvalens",
  description:
    "Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou. Computer Science graduate from Universitas Negeri Malang.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
