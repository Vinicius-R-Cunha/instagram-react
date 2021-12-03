const sugestaoArray = [
    {nome: "bad.vibes.memes", razao: "Segue você"},
    {nome: "chibirdart", razao: "Segue você"},
    {nome: "razoesparaacreditar", razao: "Novo no Instagram"},
    {nome: "adorable_animals", razao: "Segue você"},
    {nome: "smallcutecats", razao: "Segue você"},
];

export default function Sugestoes() {
    return (
      <div class="sugestoes">
          
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
  
        {sugestaoArray.map(sugestao)}
  
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
  
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
}
  
function sugestao(objeto) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={`assets/img/${objeto.nome}.svg`} />
          <div class="texto">
            <div class="nome">{objeto.nome}</div>
            <div class="razao">{objeto.razao}</div>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    );
}