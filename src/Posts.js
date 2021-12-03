const ionIconArray = ["heart-outline","chatbubble-outline","paper-plane-outline"];

const postArray = [
  {nome:"meowed", conteudo:"gato-telefone", curtida:"respondeai", likes:"101.523"},
  {nome:"barked", conteudo:"dog", curtida:"adorable_animals", likes:"99.159"}
]

export default function Posts() {
    return (
      <div class="posts">
        {postArray.map(post)}
      </div>
    );
}

function post(objeto) {
  return (
    <div class="post">
      <Topo nome={objeto.nome} />
      <Conteudo conteudo={objeto.conteudo} />
      <Fundo curtida={objeto.curtida} likes={objeto.likes} />
    </div>
  );
}

function Topo(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.nome}.svg`} />
        {props.nome}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={`assets/img/${props.conteudo}.svg`} />
    </div>
  );
}

function Fundo(props) {
  
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          {ionIconArray.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={`assets/img/${props.curtida}.svg`} />
        <div class="texto">
          Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.likes} pessoas</strong>
        </div>
      </div>
    </div>
  );
}