// generate layour with footer
import Footer from "@/components/Footer";
export default function Layout({ children }) {
  return (
    <>

      {children}
      <Footer />
    </>
  );
}