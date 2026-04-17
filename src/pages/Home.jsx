import Hero3D from "../sections/Hero3D";
import AboutHome from "../sections/AboutHome";
import Benefits from "../sections/Benefits";
import FeaturedProducts from "../sections/FeaturedProducts";
import Testimonials from "../sections/Testimonials";
import Ingredients from "../sections/Ingredients";

export default function Home() {
  return (
    <>
      <Hero3D />
      <AboutHome />
      <Benefits />
      <FeaturedProducts />
      <Testimonials />
      <Ingredients />
    </>
  );
}