const ionIconArray = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

export default function FundoMobile() {
    return (
      <div class="fundo-mobile">
        {ionIconArray.map(icon => <ion-icon name={icon}></ion-icon>)}
      </div>
    );
}