import Footer from "@/components/Footer";

export const metadata = {
  title: "Sandi Hari Sukmana | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
