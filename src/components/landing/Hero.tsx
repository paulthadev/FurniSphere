import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          reprehenderit delectus voluptatem mollitia molestias, quas
          exercitationem illum quidem, ut suscipit similique temporibus?
          Quibusdam explicabo quas voluptas aspernatur ullam ut soluta.
        </p>

        <Button asChild size="lg" className="mt-10">
          <Link to="/products">Our Products</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
}

export default Hero;
