// generate layour with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Alvalens | Projects"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}