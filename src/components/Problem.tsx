"use client";

import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertCircle } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Clock className="text-red-500" />,
      title: "Tempo é Dinheiro",
      text: "Enquanto você calcula margem na mão, outro lojista já reservou o carro."
    },
    {
      icon: <TrendingDown className="text-red-500" />,
      title: "Prejuízo Invisível",
      text: "Taxas ocultas e IPVA que você esquece de descontar comem sua margem."
    },
    {
      icon: <AlertCircle className="text-red-500" />,
      title: "Listas Caóticas",
      text: "50 páginas com formatação quebrada que levam horas para analisar."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O mercado de repasse é rápido.<br />
            <span className="text-red-500/80">Quem demora, perde.</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Você recebe listas de 50 páginas com formatação quebrada. O processo manual é um convite ao erro e à lentidão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-red-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
