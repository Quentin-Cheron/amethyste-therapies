import { services } from "@/data/services";

// SHADCN COMPONENTS

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardService() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl m-auto"
    >
      <CarouselContent>
        {services.map((post) => (
          <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="absolute inset-0 bg-black bg-opacity-50 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center justify-center p-4">
                <span className="text-white text-sm line-clamp-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nihil officiis, voluptatum adipisci asperiores veniam, cum
                  quos eius maxime ut quibusdam. Commodi praesentium aliquam
                  deleniti quam odit dolor dolores sequi.
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
