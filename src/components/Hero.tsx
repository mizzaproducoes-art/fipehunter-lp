"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
          <Zap size={14} className="fill-accent" />
          <span>V0.9 - DISPONÍVEL AGORA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Encontre <span className="text-accent text-glow">R$ 30k de Lucro Real</span> antes do seu concorrente abrir o PDF.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pare de perder tempo com calculadora. O <span className="text-white font-semibold">FipeHunter</span> lê as listas da Alphaville, R3R, Localiza e Desmobja e te entrega o filé mignon em 3 segundos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="https://pay.kiwify.com.br/KLov85V"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-neon hover:shadow-neon-hover transition-all duration-300 no-underline"
          >
            QUERO ACESSO VITALÍCIO (R$ 297)
            <ArrowRight size={20} />
          </motion.a>
          
          <p className="text-sm text-foreground/50 sm:ml-4">
            Acesso imediato • Pagamento Único
          </p>
        </div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
