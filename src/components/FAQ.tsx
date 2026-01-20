"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "O FipeHunter lê qualquer lista?",
      a: "Sim! Ele foi treinado para ler as principais listas do mercado (Alphaville, R3R, Barueri, Localiza, Desmobja) e até PDFs com formatação bagunçada."
    },
    {
      q: "Funciona no celular?",
      a: "Sim, o FipeHunter é 100% Web. Você pode analisar as listas direto do seu celular, no pátio ou na loja."
    },
    {
      q: "Tem mensalidade?",
      a: "Não nesta oferta! Ao adquirir hoje, você garante o Acesso Vitalício (Lifetime). Paga uma vez e usa para sempre sem custos adicionais."
    },
    {
      q: "Como recebo o acesso?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso ao painel exclusivo."
    },
    {
      q: "Qual a garantia?",
      a: "Oferecemos 7 dias de garantia incondicional. Se você não achar que o FipeHunter te economiza tempo, devolvemos seu dinheiro na hora."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Dúvidas Frequentes
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-foreground/60 leading-relaxed border-t border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
