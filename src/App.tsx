import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { useEffect } from "react";
import { useProductsContext } from "./hooks/useProductsContext";
import { Catalogo } from "./components/Catalogo";
import { Footer } from "./components/Footer";

function App() {
  const { setProducts } = useProductsContext();

  useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else throw new Error("Error obteniendo los productos");
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
        <Catalogo />
      </main>
      <Footer />
    </>
  );
}

export default App;
