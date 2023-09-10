import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { useEffect } from "react";
import { useProductsContext } from "./hooks/useProductsContext";
import { Catalogo } from "./components/Catalogo";

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
      .then((data) => setProducts(data));
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
    </>
  );
}

export default App;
