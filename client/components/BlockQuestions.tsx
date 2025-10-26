import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ModalSubscribe from "./ModalSubscribe";

const BlockQuestions:React.FC = () => {
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const handlerModalWindow = () => {
    setIsOpenModalWindow(!isOpenModalWindow);
  }
  return (
    <>
      <section className="section-block-questions">
        <h2>Остались вопросы?</h2>
        <div className="section-block-questions__container">
        <div className="section-block-questions_left_block">
          <h5>Для успешного применения методологии в бизнесе потребуются:</h5>
          <ul className="section-block-questions_left_block_list">
            <li className="section-block-questions_left_block_li">
              <Link className="section-block-questions_left_block_item" href="#">Длительность консультации  —  1 час.</Link>
            </li>
            <li className="section-block-questions_left_block_li">
              <Link className="section-block-questions_left_block_item" href="#">Стоимость 6 000 рублей.Стоимость 6 000 рублей.</Link>
            </li>
            <li className="section-block-questions_left_block_li">
              <Link className="section-block-questions_left_block_item" href="#">На связи — Евгений Кузнецов, диджитал-стратег JetStyle. Более 10 лет в интернет-маркетинге.</Link>
            </li>
          </ul>
          <p className="section-block-questions_left_block__text">
            На онлайн-встрече вы сможете задать вопросы о юнит-экономике и веб-аналитике, сформировать и упорядочить гипотезы, поделиться наболевшим.
          </p>
          <button onClick={handlerModalWindow} className="bt__red">Записатся</button>
        </div>
        <div className="section-block-questions_right_block">
          <Image src="/img/picture-man.png" width="586" height="390" alt="man"/>
        </div>
      </div>
       </section>
      {isOpenModalWindow && <ModalSubscribe isOpen={isOpenModalWindow} onClose={() =>  setIsOpenModalWindow(false) } />}
    </>
  )
}

export default BlockQuestions;