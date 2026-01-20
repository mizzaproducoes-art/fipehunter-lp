"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Target } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: "Arraste seu PDF",
      text: "Aceita R3R, Alphaville, Barueri, Desmobja e as principais do mercado."
    },
    {
      icon: <Cpu size={32} />,
      title: "O Cirurgião Trabalha",
      text: "Nossa IA separa Preço, KM e Taxas ocultas automaticamente em segundos."
    },
    {
      icon: <Target size={32} />,
      title: "Sniper Mode",
      text: "Receba uma lista limpa, mastigada e ordenada pelo MAIOR lucro real."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Inteligência que <span className="text-accent">multiplica seu tempo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-3xl bg-glass border border-white/[0.05] hover:border-accent/30 transition-all duration-500 hover:shadow-neon/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-lg">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
