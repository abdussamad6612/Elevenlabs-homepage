import { ArrowRight } from 'lucide-react';
import creativeUi from '../assets/images/eleven_creative_ui_1784788810834.jpg';
import agentsUi from '../assets/images/eleven_agents_ui_1784788832933.jpg';
import apiUi from '../assets/images/eleven_api_ui_1784788851074.jpg';

export function ProductModules() {
  return (
    <section className="py-[96px] bg-canvas">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-[48px] font-light tracking-[-0.96px] text-ink leading-[1.08] mb-6">
            Built for any scale
          </h2>
          <p className="text-[16px] text-body tracking-[0.16px] leading-[1.5] mb-12 max-w-2xl">
            From solo creators to global enterprises, our platform provides the tools you need to build the future of audio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ElevenCreative - Large Hero Module */}
          <div className="group rounded-[16px] bg-surface-card ring-1 ring-hairline shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex flex-col relative overflow-hidden lg:col-span-2">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="p-8 sm:p-10 lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-[32px] font-display font-light text-ink tracking-[-0.32px] leading-[1.13] mb-4">ElevenCreative</h3>
                <p className="text-[16px] text-body tracking-[0.16px] leading-[1.5] mb-8">
                  The ultimate studio for creators. Generate lifelike voices, clone your own, and produce studio-quality audio in seconds.
                </p>
                <div>
                   <a href="#" className="inline-flex items-center justify-center rounded-full bg-primary px-[20px] h-[40px] text-[15px] font-medium text-white hover:bg-primary-active transition-all group/link">
                     Explore Creative 
                     <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
              <div className="lg:w-3/5 bg-canvas-soft p-6 lg:p-10 flex items-center justify-center min-h-[300px]">
                <img src={creativeUi} alt="ElevenCreative UI" className="rounded-[8px] shadow-sm ring-1 ring-hairline w-full h-auto object-cover max-w-[800px]" />
              </div>
            </div>
          </div>

          {/* ElevenAgents */}
          <div className="group rounded-[16px] bg-canvas-deep ring-1 ring-hairline shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all flex flex-col relative overflow-hidden">
            {/* Atmospheric Orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,var(--color-gradient-peach)_0%,transparent_60%)] opacity-10 pointer-events-none blur-3xl translate-x-1/4 -translate-y-1/4"></div>

            <div className="p-8 sm:p-10 pb-0 z-10 relative">
              <h3 className="text-[32px] font-display font-light text-on-dark tracking-[-0.32px] leading-[1.13] mb-4">ElevenAgents</h3>
              <p className="text-[16px] text-on-dark-soft tracking-[0.16px] leading-[1.5] mb-8">
                Deploy conversational AI voice agents that sound entirely human. Perfect for customer support, sales, and interactive experiences.
              </p>
              <div>
                 <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-[20px] h-[40px] text-[15px] font-medium text-ink hover:bg-surface-strong transition-all group/link">
                   Explore Agents
                   <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                 </a>
              </div>
            </div>
            <div className="pt-10 px-8 pb-0 mt-auto relative z-0 flex justify-center bg-canvas-deep">
              <img src={agentsUi} alt="ElevenAgents UI" className="rounded-t-[8px] shadow-lg ring-1 ring-white/10 w-full object-cover object-top h-[260px] max-w-[500px]" />
            </div>
          </div>

          {/* ElevenAPI */}
          <div className="group rounded-[16px] bg-surface-card ring-1 ring-hairline shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex flex-col relative overflow-hidden">
            {/* Atmospheric Orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,var(--color-gradient-lavender)_0%,transparent_60%)] opacity-[0.08] pointer-events-none blur-3xl translate-x-1/4 -translate-y-1/4"></div>

            <div className="p-8 sm:p-10 pb-0 z-10 relative">
              <h3 className="text-[32px] font-display font-light text-ink tracking-[-0.32px] leading-[1.13] mb-4">ElevenAPI</h3>
              <p className="text-[16px] text-body tracking-[0.16px] leading-[1.5] mb-8">
                Integrate the world's most advanced audio AI into your own applications with our robust, low-latency API designed for developers.
              </p>
              <div>
                 <a href="#" className="inline-flex items-center justify-center rounded-full bg-transparent border border-hairline-strong px-[19px] h-[40px] text-[15px] font-medium text-ink hover:bg-surface-strong transition-all group/link">
                   Explore API
                   <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                 </a>
              </div>
            </div>
            <div className="pt-10 px-8 pb-0 mt-auto relative z-0 flex justify-center bg-canvas-soft">
              <img src={apiUi} alt="ElevenAPI UI" className="rounded-t-[8px] shadow-lg ring-1 ring-hairline w-full object-cover object-top h-[260px] max-w-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
