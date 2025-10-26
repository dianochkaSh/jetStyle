import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";

const OtherMetrics = () => {
  const[isOpen, setIsOpen ] = useState(false);

  const handlerClick = () => {
      setIsOpen(!isOpen);
  }

  return (
    <div className="container-other-metrics">
      <div className="container-other-metrics__actions">
        <Image onClick={handlerClick} className="container-other-metrics__arrow" src="/img/arrow-blue.svg" width="16" height="20" alt="arrow" />
        <Link  className="container-other-metrics__link" href="#">Остальные метрики</Link>
      </div>
      { isOpen &&
        <section className="section-other-metricks">
      <div className="section-other-metricks__column1">
        <div className="section-other-metricks__column1__left">
          <p>Пороговый CPC</p>
          <p>Пороговый CPA</p>
          <p>ARPPU</p>
          <p>ARPUC</p>
          <p>CPA (Cost Per Acquisition)</p>
          <p>CPPU (Cost Per Paying User)</p>
        </div>
          <div className="section-other-metricks__column1__right">
            <p><b>19,74 ₽</b></p>
            <p><b>604,80 ₽</b></p>
            <p><b>1 520,00 ₽</b></p>
            <p><b>19,74 ₽</b></p>
            <p><b>571,43 ₽</b></p>
            <p><b>1 078,17 ₽</b></p>
          </div>
      </div>
        <div className="section-other-metricks__column2">
          <div className="section-other-metricks__column2__left">
            <p>Leads</p>
            <p>Buyers</p>
            <p>Budjet</p>
            <p>Margin</p>
            <p>Retention (APC)</p>
            <p>LTV (Life Time Value)</p>
          </div>
            <div className="section-other-metricks__column2__right">
              <p><b>490,00 ₽</b></p>
              <p><b>259,70 ₽</b></p>
              <p><b>280 000,00 ₽</b></p>
              <p><b>800,00 ₽</b></p>
              <p><b>1,9</b></p>
              <p><b>1 520,00 ₽</b></p>
            </div>
        </div>
        <div className="section-other-metricks__column3">
          <div className="section-other-metricks__column3__left">
            <p>Revenue (без вычета COGS)</p>
            <p>Gross Profit</p>
            <p>Profit Per Paying User</p>
            <p>Profit</p>
            <p>Retention (APC)</p>
            <p>Operating Profit</p>
          </div>
            <div className="section-other-metricks__column3__right">
              <p><b>518 101,50 ₽</b></p>
              <p><b>114 744,00 ₽</b></p>
              <p><b>441,83 ₽</b></p>
              <p><b>125 480,00 ₽</b></p>
              <p><b>114,14 %</b></p>
            </div>
        </div>

    </section>
      }
      </div>
  )

}
export default OtherMetrics;