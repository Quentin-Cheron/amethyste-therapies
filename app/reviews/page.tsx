import { Metadata } from "next";

const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
  },
  {
    id: 1,
    title: "Can't say enough good things",
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
  },
  {
    id: 1,
    title: "Can't say enough good things",
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
  },
  {
    id: 1,
    title: "Can't say enough good things",
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
  },
];

export const metadata: Metadata = {
  title: "Avis",
  description: "Generated by create next app",
};

export default function Reviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {reviews.map((review) => (
            <div key={review.id} className="pt-10">
              <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {review.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="mt-3 space-y-6 text-sm text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
