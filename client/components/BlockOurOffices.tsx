import Image from "next/image";

const BlockOurOffices = () => {
  return(
    <section className="section-our-offices">
      <div className="section-our-offices_column1">
        <p className="section-our-offices_column1_phone">8 800 365-78-79</p>
        <p className="section-our-offices_column1_mail">info+site@jetstyle.ru</p>
        <div className="section-our-offices_column1_social">
          <Image src="/img/vc.png" width="48" height="48" alt="vc" />
          <Image src="/img/telegram-small.png" width="48" height="48" alt="telegram" />
          <Image src="/img/vk.png" width="48" height="48" alt="vk" />
          <Image src="/img/star.png" width="48" height="48" alt="star" />
          <Image src="/img/di.png" width="48" height="48" alt="di" />
        </div>
      </div>
      <div className="section-our-offices_column2">
        <Image src="/img/eka.png" width="41" height="50" alt="" />
        <p className="section-our-offices_column1_title text-red">Екатеринбург</p>
        <p className="section-our-offices_column1_text">Малышева, 51 (Высоцкий, 29-й этаж)</p>
      </div>
      <div className="section-our-offices_column3">
          <Image src="/img/pic2.png" width="41" height="50" alt="" />
          <p className="section-our-offices_column1_title text-red">Arrakis</p>
          <p className="section-our-offices_column1_text">29th floor, Grand Palace, Arrakeen</p>
      </div>
      <div className="section-our-offices_column4">
          <Image src="/img/pic2.png" width="41" height="50" alt="" />
          <p className="section-our-offices_column1_title text-red">Tatoonie</p>
          <p className="section-our-offices_column1_text">14, Kerner Plaza, Mos Eisley</p>
      </div>
    </section>
  )
}
export default BlockOurOffices;
