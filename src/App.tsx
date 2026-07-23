import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { ProductModules } from './components/ProductModules';
import { UseCases } from './components/UseCases';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-surface-strong">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <ProductModules />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}
