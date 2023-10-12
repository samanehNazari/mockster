import { Card } from "@package/card";

const arr = [
  { text: "Twitter", url: "/posts" },
  { text: "Todo" },
  { text: "Movies" },
  { text: "Podcast" },
  { text: "Gallery" },
  { text: "Video" },
  { text: "Shop" },
];

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center tracking-tight font-semibold text-[2.5rem] lg:text-5xl pb-8 pt-16">
        Mock it till you rock it!
      </h1>
      <article className="grid auto-rows-[192px] grid-cols-3 gap-4 py-8">
        {arr.map((_, i) => (
          <Card
            key={arr[i].text}
            className={`items-center justify-center row-span-1 rounded-xl border border-color bg-color ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
            href={arr[i].url}
          >
            {arr[i].text}
          </Card>
        ))}
      </article>
    </>
  );
}
