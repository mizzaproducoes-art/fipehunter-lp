export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-black mb-4">FIPE<span className="text-accent">HUNTER</span></h3>
          <p className="text-foreground/40 text-sm">
            A ferramenta definitiva para o lojista moderno. Analisando o mercado em milissegundos.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Políticas</h4>
          <ul className="text-foreground/40 text-sm space-y-2">
            <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Reembolso</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contato</h4>
          <p className="text-foreground/40 text-sm">
            suporte@fipehunter.com.br<br />
            Copyright © 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
