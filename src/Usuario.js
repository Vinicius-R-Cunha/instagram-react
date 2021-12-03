export default function Usuario(props) {
    return (
      <div class="usuario">
        <img src={`assets/img/${props.usuario}.svg`} />
        <div class="texto">
          <strong>{props.usuario}</strong>
          {props.nome}
        </div>
      </div>
    );
}