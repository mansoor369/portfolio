import Footer from "@/components/Footer";

export const metadata = {
  title: "Mansoor | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
