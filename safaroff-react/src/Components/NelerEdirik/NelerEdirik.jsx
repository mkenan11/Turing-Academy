import "./NelerEdirik.css";
import { NelerCards } from "./NelerCards/NelerCards";

export function NelerEdirik() {
  return (
    <div className="neleredirik">
      <div className="container">
        <h2>Biz nələr edirik?</h2>
        <div className="card_wrapper">
          <NelerCards
            title="İT məhsulların hazırlanması"
            description="Yaratdığımız tam funksional İT həllərin köməyi ilə müştərilərimiz böyük həcmli informasiya ilə rahat işləyir, mürəkkəb prosesləri effektiv idarə edirlər."
          />
          <NelerCards
            title="UX/UI dizayn"
            description="İstifadə zamanı maksimal rahat və aydın, vizual olaraq mükəmməl interfeyslər yaradırıq."
          />
          <NelerCards
            title="Mobil tətbiqlərin və saytların yaradılması"
            description="Onlarla böyük funksionallı sayt və platformaları hazırlamış heyətimiz bu sahədə ölkədə qabaqcıl təcrübəyə malikdir."
          />
          <NelerCards
            title="Media"
            description="Məhsul haqqında aydın və müfəssəl fikir yaradacaq video və audio məzmunlar hazırlayır və media kanallarında effektiv yerləşdirilməsini təmin edirik."
          />
          <NelerCards
            title="Rəqəmsal marketinq"
            description="Rəqəmsal mühit üçün sadəcə məzmun yox, sizi hədəflərinizə doğru aparacaq kompleks marketinq strategiyası hazırlayırıq."
          />
          <NelerCards
            title="Brendinq"
            description="Brend üçün aydın və müfəssəl imic, işlək kommunikasiya istiqaməti yaradırıq."
          />
          <NelerCards
            title="Reputasiyanın idarə olunması"
            description="Heyətimiz rəqəmsal mühitdə müştərilərin şirkətiniz haqqında fikirlərini öyrənir, bunun əsasında reputasiyanızın korreksiyası üçün kompleks addımlar təklif edirik."
          />
          <NelerCards
            title="Şəhər mühitinin dizaynı"
            description="Məkanın üslubunu və məqsədini vurğulayaraq ictimai və yaşayış interyerlərini dizayn edirik."
          />
        </div>
      </div>
    </div>
  );
}
