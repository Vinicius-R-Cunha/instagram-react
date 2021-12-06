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

function post({ nome, conteudo, curtida, likes }) {
  return (
    <div class="post">
      <Topo nome={nome} />
      <Conteudo conteudo={conteudo} />
      <Fundo curtida={curtida} likes={likes} />
    </div>
  );
}

function Topo({ nome }) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${nome}.svg`} />
        {nome}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo({ conteudo }) {
  return (
    <div class="conteudo">
      <img src={`assets/img/${conteudo}.svg`} />
    </div>
  );
}

function Fundo({ curtida, likes }) {
  
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
        <img src={`assets/img/${curtida}.svg`} />
        <div class="texto">
          Curtido por <strong>{curtida}</strong> e <strong>outras {likes} pessoas</strong>
        </div>
      </div>
    </div>
  );
}