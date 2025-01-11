import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { HeroImg1, HeroImg2, HeroImg3, HeroImg4 } from "@/assets";

const carouselImages = [HeroImg1, HeroImg2, HeroImg3, HeroImg4];

function HeroCarousel() {
  return (
    <Carousel className="hidden lg:block">
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="p-2">
                <img
                  src={image}
                  alt={`hero-image-${index + 1}`}
                  className="h-96 w-full rounded-md object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;
