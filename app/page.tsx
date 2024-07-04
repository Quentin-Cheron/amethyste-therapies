import { Button } from "@/components/ui/button";
import CardHeader from "@/components/ui/card-header";
import CardService from "@/components/ui/card-service";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="hidden sm:block bg-im sm:py-32 bg-header-banner bg-no-repeat bg-cover"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-bold tracking-tight text-white sm:text-5xl">
              Le bonheur n’est pas un objectif mais un carburant pour Vivre.
            </h1>
            <div className="flex items-center mt-6 gap-36">
              <p className="text-lg leading-8 text-white">Christophe André</p>
              <Button>Prendez rendez-vous</Button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-primary">
              Cabinet de Thérapies
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ma mission au Cabinet de Thérapies
            </h2>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
              <div data-aos="fade-right">
                <CardHeader
                  title="Pourquoi consulter le Cabinet de Thérapies ?"
                  description="Pour se relaxer, surmonter des troubles anxieux, alimentaires, sexuels, et des dépendances, ainsi qu'améliorer le sommeil, l'humeur et soulager les douleurs psychosomatiques, il est essentiel de mieux se connaître, s'accepter et mieux communiquer pour vivre pleinement, heureux et en accord avec soi-même."
                />
              </div>
              <div data-aos="fade-left">
                <CardHeader
                  title="Pour qui ?"
                  description="Pour toute personne, quel que soit son âge, les thérapies brèves offrent une aide rapide et efficace sans risque de rechute ni effets secondaires, en utilisant des méthodologies sûres et scientifiquement reconnues pour surmonter diverses difficultés physiques, émotionnelles et psychiques."
                />
              </div>
            </div>
            <div className="mt-16 mx-auto max-w-4xl" data-aos="fade-up">
              <CardHeader
                title="Ma mission au Cabinet de Thérapies"
                description="Je vous accompagne, avec une écoute bienveillante et sans jugement, en utilisant des méthodologies humanistes, cognitives et comportementales pour traiter les troubles anxieux, de l'humeur et les psycho-traumatismes, en respectant votre rythme et vos souhaits, avec des rendez-vous en présentiel (parking gratuit) ou en visio/téléconsultation."
              />
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div data-aos="fade-up" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our offices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                Los Angeles
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                New York
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                Toronto
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                London
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>114 Cobble Lane</p>
                <p>London N1 2EF</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mb-24" />
      <div data-aos="fade-up" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <CardService />
        </div>
      </div>
    </>
  );
}
