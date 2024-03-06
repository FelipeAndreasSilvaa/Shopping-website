import Image from "next/image";
import Hero from "./components/Hero/Hero";
import NewProduct from "./components/NewProduct/NewProduct";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProduct />
      <Testimonial />
    </main>
  );
}
