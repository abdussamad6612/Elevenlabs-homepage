const useCases = [
  {
    title: "Narration",
    description: "Produce pristine audiobooks and documentaries with voices that capture every nuance.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Advertisement",
    description: "Create compelling ad reads instantly, tuning the emotion to match your brand.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef43eeed7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Characters",
    description: "Bring video games and animations to life with distinct, memorable character voices.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Conversational",
    description: "Build incredibly natural sounding AI assistants and customer service bots.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Social Media",
    description: "Generate engaging voiceovers for TikTok, YouTube Shorts, and Instagram Reels.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  }
]

export function UseCases() {
  return (
    <section className="py-[96px] bg-canvas">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-[48px] font-light tracking-[-0.96px] text-ink leading-[1.08]">
                One voice engine.<br/>Endless possibilities.
              </h2>
            </div>
            <button className="rounded-full bg-transparent border border-hairline-strong px-[19px] h-[40px] text-[15px] font-medium text-ink hover:bg-surface-strong transition-colors whitespace-nowrap self-start md:self-auto flex items-center justify-center">
              View all use cases
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {useCases.map((uc, idx) => (
              <div key={idx} className="group relative rounded-[16px] bg-surface-card ring-1 ring-hairline shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="aspect-[4/3] relative bg-canvas-soft overflow-hidden">
                   <img src={uc.image} alt={uc.title} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-[20px] font-medium text-ink leading-[1.35] mb-2">{uc.title}</h3>
                  <p className="text-[16px] text-body tracking-[0.16px] leading-[1.5]">{uc.description}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  )
}
