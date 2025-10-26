import {useEffect, useState} from "react";
import ModalWindowEmail from "./ModalWindowEmail";
import Image from "next/image";

const CompareResults = () => {
    const [isOpen, setIsOpen] = useState(false);
  const handlerOpenWindow = () => {
    setIsOpen(!isOpen);
  }
  return (
    <section className="section-results">
      <h4 className="section-results__title">Сравнение результатов</h4>
      <table className="section-results__table">
        <thead>
          <tr>
              <th className="first-col">Расчеты</th>
              <th>Пороговый <br/>CPC, ₽</th>
              <th>Пороговый <br/>CPA, ₽</th>
              <th>ARPPU, ₽</th>
              <th>ARPU, ₽</th>
              <th>CPA, ₽</th>
              <th>Revenue, ₽.</th>
              <th>Gross Profit, ₽</th>
              <th>PPPU, ₽</th>
          </tr>
        </thead>
        <tbody>
         <tr>
              <td className="first-row">Выручка на выходных</td>
              <td>19,74</td>
              <td>604,80</td>
              <td>1 520,00</td>
              <td>19,74</td>
              <td>571,43</td>
              <td>518 101,56</td>
              <td>114 744,00</td>
              <td className="text-red">-352,80</td>
          </tr>
         <tr>
           <td className="first-row">Новый год</td>
           <td>20,60</td>
           <td>805,60</td>
           <td>1 120,00</td>
           <td>52,80</td>
           <td>805,60</td>
           <td>989 805,60</td>
           <td>805,60</td>
           <td className="text-green">102 730,80</td>
        </tr>
         <tr>
          <td className="first-row">Выезд на ярмарку</td>
          <td>18,50</td>
          <td>745,00</td>
          <td>1 380,00</td>
          <td>13,00</td>
          <td>745,00</td>
          <td>1 780 520,00</td>
          <td>1 520,00</td>
          <td className="text-green">12 568,60</td>
        </tr>
        </tbody>
      </table>
      <div className="section-results__container_bt">
          <button className="section-results__container_bt_blue"><Image width="34" height="34" src="/img/Icon1.svg" alt="icon"/>Поделится</button>
          <button className="section-results__container_bt_white" onClick={handlerOpenWindow}><Image width="34" height="34" src="/img/download-white.svg" alt="icon"/>Скачивание XSL</button>
      </div>
        {isOpen && <ModalWindowEmail isOpen={isOpen}  onClose={handlerOpenWindow }/>}
    </section>
  )
}

export default CompareResults;