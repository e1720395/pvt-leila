import './entete.scss';

export default function entete(){
    return(
        <header>
        <div class="barre-haut">
          <nav class="social">
            <button href="http://www.twitter.com" target="lien-externe" class="icone-twitter"></button>
            <button href="http://www.facebook.com" target="lien-externe" class="icone-facebook"></button>
          </nav>
          <nav class="i18n">
            <button href="#" title="English">En</button>
            <button href="#" class="actif" title="Français">Fr</button>
          </nav>
        </div>
        <div class="titre-page">
          <h1>MENU</h1>
        </div>
      </header>

    );

}