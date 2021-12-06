export default function Usuario({ usuario, nome }) {
    return (
      <div class="usuario">
        <img src={`assets/img/${usuario}.svg`} />
        <div class="texto">
          <strong>{usuario}</strong>
          {nome}
        </div>
      </div>
    );
}