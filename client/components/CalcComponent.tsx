import Image from 'next/image';
import React from 'react';
import BlockActions from "./BlockActions";

const CalcComponent:React.FC = () => {
  return (
    <div className="container-calc">
    <section className="section-calc">
      <div className="left-part">
        <h1 className="section-cals__title">Калькулятор <br/> unit-экономики</h1>
        <p className="section-cals__description">Это мини-версия калькулятора, созданная нами чтобы иметь возможность наглядно пояснить концепцию юнит-экономики и быстро на примерах провалидировать гипотезы о том, сходится ли бизнес-модель в каком-либо конкретном рекламном канале.</p>
      </div>
       <div className="right-part">
         <Image className="section-cals__rectangle" src="/img/Rectangle.png" width="585" height="585" alt="rectangle" />
       </div>
    </section>
    <BlockActions />
      </div>
  )
}
export default CalcComponent;