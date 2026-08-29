  export function Footer() {
    return (
      <footer className="border-t border-border/40 bg-background py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          <div> 
            <img src="/src/components/img/Logo.svg" alt="Play Analytics" className="h-15" draggable={false} />  
            <p className="mt-2 text-sm text-muted-foreground">Inteligência para o turismo esportivo regional do Paraná.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Produto</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Organizadores</li><li>Patrocinadores</li><li>Cidades</li><li>API</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Empresa</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Sobre</li><li>Imprensa</li><li>Carreiras</li><li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Londrina · Paraná</h4>
            <p className="mt-3 text-sm text-muted-foreground">© {new Date().getFullYear()} Play Analytics. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
