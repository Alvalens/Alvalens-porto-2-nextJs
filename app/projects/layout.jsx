// generate layour with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sandi Hari Sukmana | Projects"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}