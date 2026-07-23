const capabilities = [
  "AI Voice Generator",
  "Text to Speech",
  "Music",
  "Speech to Text",
  "Voice Cloning",
  "Dubbing"
];

export function Capabilities() {
  return (
    <section className="py-6 border-y border-hairline bg-canvas">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[12px] font-semibold text-ink uppercase tracking-[0.96px]">Core Capabilities</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
          {capabilities.map((cap) => (
            <div key={cap} className="px-[10px] py-[4px] rounded-full bg-surface-strong text-ink text-[12px] font-semibold uppercase tracking-[0.96px] cursor-default">
              {cap}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
