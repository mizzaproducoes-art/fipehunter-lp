import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <section className="py-24 px-4 bg-black/40">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden aspect-video bg-white/5 border border-white/10 flex items-center justify-center relative group">
          {/* Placeholder for Video/Demo */}
          <div className="text-center z-10 transition-transform duration-500 group-hover:scale-110">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto shadow-neon">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1" />
            </div>
            <p className="font-bold text-xl uppercase tracking-widest text-accent">Veja o FipeHunter em Ação</p>
            <p className="text-foreground/40 mt-2 text-sm italic">"Eu levava 2 horas. Agora levo 10 segundos."</p>
          </div>
          
          {/* Decorative background for demo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </section>
      <Solution />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
