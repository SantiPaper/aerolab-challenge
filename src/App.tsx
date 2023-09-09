import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
      </main>
    </>
  );
}

export default App;
