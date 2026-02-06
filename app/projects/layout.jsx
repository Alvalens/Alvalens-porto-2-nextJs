import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Alvalens",
  description:
    "Selected projects spanning web development, AI/ML, and more. Built with Next.js, Spring Boot, Python, and modern frameworks.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}