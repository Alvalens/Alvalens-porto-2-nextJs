import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Harshith",
  description:
    "A collection of projects focused on control systems, robotics, and data-driven modeling, with emphasis on real-time implementation and experimental validation.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}