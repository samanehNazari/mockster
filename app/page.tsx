
export default function Home() {

  const arr = [{ text: "Social Media", url: '/posts' }, { text: "Todo" }, { text: "Movies" }, { text: "Podcast" }, { text: "Gallery" }, { text: "Video" }, { text: "Shop" }]
  return (
    <article className="grid auto-rows-[192px] grid-cols-3 gap-4 py-8">
      {arr.map((_, i) => (
        <a
          key={i}
          className={`flex items-center justify-center row-span-1 rounded-xl border border-color bg-color ${i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          href={arr[i].url}
        >{arr[i].text}</a>
      ))}
    </article>
  )
}
