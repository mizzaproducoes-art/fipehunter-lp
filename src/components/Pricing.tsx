"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const benefits = [
    "Leitor Universal v0.9 (IA)",
    "Detector Automático de Taxas",
    "Filtro de Lucro Real (Sniper)",
    "Acesso Vitalício (Sem Mensalidade)",
    "Bônus: Painel Administrativo",
    "Suporte VIP"
  ];

  return (
    <section className="py-24 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-[2rem] bg-glass border-2 border-accent/20 relative overflow-hidden shadow-2xl">
          {/* Badge */}
          <div className="absolute top-6 right-6 bg-accent text-black font-bold px-4 py-1 rounded-full text-xs animate-pulse">
            OFERTA LIMITADA
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Oferta de Lançamento
              </h2>
              <p className="text-accent font-semibold text-xl mb-8">
                Lifetime Deal (Acesso para sempre)
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center p-8 rounded-2xl bg-black/40 border border-white/5">
              <span className="text-foreground/40 line-through text-xl">
                R$ 997,00
              </span>
              <div className="mt-2 mb-6">
                <span className="text-accent text-6xl font-black">R$ 297</span>
                <span className="text-foreground/60 text-sm ml-2">Pagamento Único</span>
              </div>
              
              <motion.a
                href="https://pay.kiwify.com.br/KLov85V"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-accent hover:bg-accent-dark text-black font-black text-xl rounded-2xl shadow-neon transition-all flex items-center justify-center decoration-none"
              >
                GARANTIR MINHA VAGA AGORA
              </motion.a>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground/50">
                <ShieldCheck size={16} />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
              
              <p className="mt-4 text-xs text-red-400 font-bold uppercase tracking-wider">
                Restam apenas 12 vagas com este valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
