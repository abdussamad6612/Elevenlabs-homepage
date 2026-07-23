export function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline px-[48px] py-[64px]">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-display font-medium text-[20px] tracking-tight text-ink">
          <div className="h-4 w-4 rounded-full bg-ink"></div>
          ElevenLabs
        </div>
        <div className="flex gap-8 text-[15px] font-normal text-body tracking-[0.15px]">
           <a href="#" className="hover:text-ink transition-colors">Privacy</a>
           <a href="#" className="hover:text-ink transition-colors">Terms</a>
           <a href="#" className="hover:text-ink transition-colors">Twitter</a>
           <a href="#" className="hover:text-ink transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
