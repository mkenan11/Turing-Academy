import "./Ustunluk.css";

export function Ustunluk() {
  return (
    <div className="ustunluk">
      <div className="container">
        <h2>Üstünlüyümüz</h2>
        <div className="wrapper">
          <div className="ustunluk-card">
            <img
              src="https://safaroff.com/storage/211/LrIBQNu8UI-icon0.svg"
              alt="icon"
            />
            <h3>Məhsul yanaşması</h3>
            <p>
              Hər şey istehlakçıların tələblərinin öyrənilməsi ilə başlayır. <br />
              Yaratdığımız məhsullar analiz zamanı əldə etdiyimiz məlumatlar və <br />
              böyük bazar təcrübəsindən əldə etdiyimiz biliklər əsasında
              hazırlanır.
            </p>
          </div>
          <div className="ustunluk-card">
            <img
              src="https://safaroff.com/storage/212/2YaVgCTzsN-icon1.svg"
              alt="icon"
            />
            <h3>Dövlət sektoru və böyük biznes</h3>
            <p>
              Sektora xas olan yüksək təhlükəsizlik tələbləri, dövlət
              standartları ilə sənədləşmələr, mürəkkəb təsdiq sistemləri ilə
              böyük iş təcrübəmiz var, büdcə və iş vaxtını effektiv idarə
              edirik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
