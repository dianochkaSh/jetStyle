import React from "react";
import Image from "next/image";

const Metricks:React.FC = () => {
  return(
    <section className="section-calculation">
      <div className="section-calculation_container">
        <div className="section-calculation_container_formula">
                    <h5>На новый год</h5>
                    <p>
                        <span className="text-blue sign">&minus;</span>
                        <span className="text-blue sign">(</span>
                        <span className="section-calculation_container_text">14</span>
                        <span className="text-blue sign">/</span>
                        <span className="section-calculation_container_text">2,43</span>
                        <span className="text-blue sign">/</span>
                        <span className="section-calculation_container_text">53,00</span>
                        <span className="text-blue sign">)</span>
                        <span className="text-blue sign">+</span>
                        <span className="text-blue sign">(</span>
                        <span className="section-calculation_container_text">1050,00</span>
                        <span className="text-blue sign">&minus;</span>
                        <span className="section-calculation_container_text">250</span>
                        <span className="text-blue sign">)</span>
                        <span className="text-blue sign">&times;</span>
                        <span className="text-blue sign">=</span>
                        <span className=" text-blue section-calculation_container_text ">1520,00</span>
                    </p>
                </div>
        <div className="section-calculation_container_action">
            <button className="section-calculation_container_bt text-dark-blue">
                <Image className="icon-bt" src="/img/edit.svg" alt="edit" width="15" height="15" />
              Редактировать
            </button>
          </div>
        </div>
      <div className="section-calculation_container">
            <div className="section-calculation_container_formula">
                <h5>Выезд на ярмарку</h5>
                <p>
                    <span className="text-blue sign">&minus;</span>
                    <span className="text-blue sign">(</span>
                    <span className="section-calculation_container_text">14</span>
                    <span className="text-blue sign">/</span>
                    <span className="section-calculation_container_text">2,43</span>
                    <span className="text-blue sign">/</span>
                    <span className="section-calculation_container_text">53,00</span>
                    <span className="text-blue sign">)</span>
                    <span className="text-blue sign">+</span>
                    <span className="text-blue sign">(</span>
                    <span className="section-calculation_container_text">1050,00</span>
                    <span className="text-blue sign">&minus;</span>
                    <span className="section-calculation_container_text">250</span>
                    <span className="text-blue sign">)</span>
                    <span className="text-blue sign">&times;</span>
                    <span className="text-blue sign">=</span>
                    <span className=" text-blue section-calculation_container_text ">1520,00</span>
                </p>
            </div>
            <div className="section-calculation_container_action">
                <button className="section-calculation_container_bt text-dark-blue">
                    <Image className="icon-bt" src="/img/edit.svg" alt="edit" width="15" height="15"/>
                    Редактировать
                </button>
            </div>
        </div>
        <div className="section-calculation_container">
            <div className="section-calculation_container_formula">
                <h5>Скрыть сравнение рассчетов</h5>
            </div>
            <div className="section-calculation_container_other_actions">
                <button className=" text-dark-blue">
                    <Image className="icon-bt" src="/img/plus-white.svg" alt="edit" width="15" height="15"/>
                    Новый расчет
                </button>
            </div>

        </div>
    </section>
  )
}
export default Metricks;