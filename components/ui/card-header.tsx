import { Button } from "./button";

export default function CardHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 mt-8">
        {title}
      </h3>
      <p>{description}</p>

      <Button className="mt-3">En savoir plus</Button>
    </>
  );
}
