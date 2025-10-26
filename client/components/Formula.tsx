import React, {useEffect, useState} from "react";
import Tooltip from '@mui/joy/Tooltip';
import { styled } from '@mui/material/styles';

const Formula:React.FC = () => {
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
    });

  const[total, setTotal] = useState<number>();

  const handlerChangeInput = (key:string, value:number) => {
      setFormData((prevData) => ({
          ...prevData,
          [key]: value,
      }));
  }

    const calculateResult = () => {
      let firstSoporte1 = (formData.field1 && formData.field2 && formData.field3) &&  (formData.field1 / formData.field2 / formData.field3);
      let firstSoporte2 = (formData.field4 && formData.field5 ) && formData.field4 - formData.field5;
      let firstSoporte3 = firstSoporte2 * formData.field6;
      let res = (firstSoporte3 - firstSoporte1).toFixed(2);
      setTotal(res);
  }
    useEffect(() => {
        calculateResult();
    }, [formData]);



  return (
      <section className="section-formula">
          <div className="section-formula__left">
              <div className="section-formula__left__top">
                  <Tooltip


                      arrow title={<div><b>Cost Per Click, пороговое значение</b><br/>
                      <span className="tooltip-text"> Стоимость привлечения посетителя – затраты<br/> на привлечение одного посетителя<br/> с рекламной кампании на <br/>сайт
                      или сервис</span></div>} variant="outlined" size="lg">
                  <p>CPC, ₽</p>
                  </Tooltip>
                  <p>CR1, %</p>
                  <p>CR2, %</p>
              </div>
              <div className="section-formula__left__center">
                  <div>
                      <p className="text-blue sign section-formula_align_sign"><span>&minus;</span><span>(</span></p>
                      <input type="text" name="field1" value={formData.field1} onChange={(e) => handlerChangeInput('field1', e.target.value)}/>
                  </div>
                  <div>
                      <p className="text-blue sign section-formula_align_sign">/</p>
                      <input type="text" name="field2" value={formData.field2} onChange={(e) => handlerChangeInput('field2', e.target.value)}/>
                  </div>
                  <div>
                      <p className="text-blue sign section-formula_align_sign">/</p>
                      <input type="text" name="field3" value={formData.field3} onChange={(e) => handlerChangeInput('field3', e.target.value)}/>
                      <p className="text-blue sign section-formula_align_sign">)</p>
                  </div>
              </div>

              <div className="section-formula__left__bottom">
                  <div className="section-formula__left__bottom_container">
                      <p><b>CPPU</b></p>
                      <p>Стоимость привлечения платащего пользователя</p>
                  </div>
                  <div>
                      <p className="text-red">−1 078,17 ₽</p>
                  </div>

              </div>
          </div>
          <p className="text-blue sign section-formula_align_sign section-formula_align_sign_center">+</p>
          <div className="section-formula__right">
              <div className="section-formula__right__container">
              <div className="section-formula__right__center__blue">
                  <div className="section-formula__right__top">
                      <p>AVP, ₽</p>
                      <p>COGS, %</p>
                  </div>
                  <div className="section-formula__right__center">
                      <div>
                          <p className="text-blue sign section-formula_align_sign">(</p>
                          <input type="text" name="field4" value={formData.field4} onChange={(e) => handlerChangeInput('field4', e.target.value)}/>
                      </div>
                      <div>
                          <p className="text-blue sign section-formula_align_sign">&minus;</p>
                          <input type="text" name="field5" value={formData.field5} onChange={(e) => handlerChangeInput('field5', e.target.value)}/>
                      </div>
                      <div>
                          <p className="text-blue sign section-formula_align_sign">)</p>

                      </div>
                  </div>
                  <div className="section-formula__left__bottom">
                      <p className="section-formula__left__bottom__text"><b>Margin</b> (Прибыль)</p>
                      <p className="section-formula__left__bottom__text"><b>800 ₽</b></p>
                  </div>
              </div>
              <div className="section-formula__right__center__grey">
                  <div className="section-formula__right__top">
                      <p>Ret</p>
                  </div>
                  <div className="section-formula__right__center">
                      <p className="text-blue sign section-formula_align_sign">&times;</p>
                      <input type="text" name="field6" value={formData.field6} onChange={(e) => handlerChangeInput('field6', e.target.value)}/>

                  </div>

              </div>
              </div>
              <div className="section-formula__right__bottom">
                  <p className="section-formula__right__bottom__text"><b>LTV</b> (Доход с одного клиента за все время)
                  </p>
                  <p className="section-formula__right__bottom__text"><b>1 520 ₽</b></p>
              </div>
          </div>
          <div className="section-formula__result">
              <div className="section-formula__result__top">
                  <p>PPPU, ₽</p>
              </div>
              <div className="section-formula__result__center">
                  <p>
                      <span className="text-blue sign section-formula_align_sign">=</span>
                      <span className="text-dark-blue">{total} ₽</span>
                  </p>

              </div>
          </div>
          <div className="section-formula__other">
              <div className="section-formula__other__top">
                  <p>AU</p>
              </div>
              <div className="section-formula__other__center">
                  <input type="text" name="field6" value=""/>
              </div>
              <div className="section-formula__other__bottom">
                  <p>Количество привлеченных пользователей</p>
              </div>
          </div>

      </section>
  )
}
export default Formula;
