import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Harshith",
  description:
    "Mechatronics engineer specializing in control systems, robotics, and Model Predictive Control (MPC). Focused on real-time control, system identification, and data-driven control for complex physical systems.",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
