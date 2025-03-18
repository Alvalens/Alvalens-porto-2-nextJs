import Footer from "@/components/Footer";

export const metadata = {
  title: "Alvalens | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
