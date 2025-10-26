import React from "react";
import Link from "next/link";

const UnitEconomics:React.FC = () => {
  return (
      <section className="section-unit-economica">
        <h2>Что такое юнит-экономика?</h2>
        <p className="section-unit-economica__text">Если кратко — это методология, которая позволяет оценить сходимость экономики на конкретных цифрах. То
          есть, рассчитывая юнит-экономику, мы пытаемся оценить, масштабируем ли мы прибыль или убыток. Для этого мы
          оцениваем, сколько мы тратим на привлечение одного клиента в выбранном рекламном канале и сколько с него
          зарабатываем. А затем смотрим, как это работает в масштабе (на десятках, сотнях и тысячах привлеченных
          пользователей).
        </p>
        <h3>Подробнее про юнит-экономику читайте тут:</h3>
        <ul className="section-unit-economica_list">
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item" href="#"><span className="text-red">Илья Красинский про юнит-экономику, точки роста и управление продуктом</span> (VC.ru)</Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#"><span className="text-red">Юнит-экономика — как посчитать и какие метрики использовать</span> (Блог Productstar)</Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#"><span className="text-red">Сколько стоит реклама в Яндекс.Директ? Разбираем, как и за что списываются деньги</span> (Блог
                  Callibri)
            </Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#"><span className="text-red">Пример плана Product Discovery для проверки идеи «Предзаказ в ресторанах»</span> (Denis
                  Beskov)
            </Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#"><span className="text-red">Юнит-экономика: полный разбор</span> (Skillbox)</Link>
          </li>
        </ul>
        <h3>Подробнее про юнит-экономику читайте тут:</h3>
        <h5>Для успешного применения методологии в бизнесе потребуются:</h5>
        <ul className="section-unit-economica_list">
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#">настроенная веб-аналитика для отслеживания действий пользователей на сайте (позволит оценить CPC по каналам,  CR1  —  т. е. конверсию в заявку, и CPA);</Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#">CRM-система  —  позволит оценить доходную часть формулы (т. е. доход с привлеченных пользователей  —  AvP, CoGS, APC);</Link>
          </li>
          <li className="section-unit-economica_li">
            <Link className="section-unit-economica_item"  href="#">интеграция CRM с системой веб-аналитики (необходима, чтобы оценить CR2 — т. е. конверсию из заявки в продажу, в разрезе по рекламным каналам. Также это позволит строить аналитику в разрезе по каналам, а не в среднем. Для связи достаточно сохранять ClientID из веб-аналитики в CRM — это позволит построить сквозную аналитику на коленке при помощи Гугл-таблиц и некоторого терпения).</Link>
          </li>
        </ul>
      </section>
  )
}
export default UnitEconomics;
