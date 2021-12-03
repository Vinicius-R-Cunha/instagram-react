const storyArray = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"]

export default function Stories() {
  return (
      <div class="stories">

      {storyArray.map(nome => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={`assets/img/${nome}.svg`}/>
            </div>
            <div class="usuario">
              {nome}
            </div>
          </div>
      );})}

      <div class="setinha">
         <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

      </div>
    );
}