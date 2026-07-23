import { Play } from 'lucide-react';
import heroVisualizer from '../assets/images/hero_visualizer_1784788864272.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-[96px] bg-canvas">
      {/* Atmospheric Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-gradient-sky)_0%,transparent_60%)] opacity-30 pointer-events-none blur-3xl"></div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="mx-auto max-w-[900px] font-display text-[48px] sm:text-[64px] font-light tracking-[-1.92px] text-ink leading-[1.05]">
          Bringing technology <br className="hidden sm:inline" /> to life
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[16px] tracking-[0.16px] text-body leading-[1.5]">
          The most realistic AI voice generator and text to speech software. 
          Serving enterprises, creators, and developers with expressive audio.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button className="rounded-full bg-primary px-[20px] h-[40px] text-[15px] font-medium text-white hover:bg-primary-active transition-colors flex items-center justify-center">
            Sign up
          </button>
          <button className="rounded-full bg-transparent border border-hairline-strong px-[19px] h-[40px] text-[15px] font-medium text-ink hover:bg-surface-strong transition-colors flex items-center justify-center">
            Book a demo
          </button>
          <button className="rounded-full bg-transparent border border-hairline-strong px-[19px] h-[40px] text-[15px] font-medium text-ink hover:bg-surface-strong transition-colors flex items-center justify-center">
            Contact sales
          </button>
        </div>
        
        {/* Visualizer / Product Image */}
        <div className="mt-16 mx-auto max-w-[1000px] rounded-[16px] bg-surface-card p-2 shadow-[0_4px_16px_rgba(0,0,0,0.04)] ring-1 ring-hairline relative group">
           <div className="aspect-[16/9] sm:aspect-[2.2/1] rounded-[12px] bg-canvas-soft overflow-hidden relative">
              <img src={heroVisualizer} alt="Voice AI Generation" className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-1000" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-[48px] w-[48px] rounded-full bg-white text-ink flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform group/btn">
                  <Play className="h-5 w-5 ml-0.5 group-hover/btn:opacity-70 transition-opacity" fill="currentColor" />
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
