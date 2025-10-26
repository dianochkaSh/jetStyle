import Link from "next/link";
import Image from "next/image";

const  FooterMenu = () => {
  return (
    <section className="section-footer-menu">
      <div className="section-footer-menu-col1">
        <Image src="/img/bim.png" width="324" height="128" alt="bim"/>
        <Image src="/img/promo.png"  width="324" height="128" alt="promo"/>
      </div>
        <div className="section-footer-menu-col2">
          <ul className="section-footer-menu_list">
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Мы</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Услуги</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Работы</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Презентация</Link>
            </li>
          </ul>
        </div>
        <div className="section-footer-menu-col3">
          <ul className="section-footer-menu_list">
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Приходи на стажировку</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Опыты Алексея Кулакова</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Новогодние поздравления</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Партнерские программы</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Калькулятор unit-экономики</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">JetStyle дарит плакаты</Link>
            </li>
          </ul>
        </div>
        <div className="section-footer-menu-col4">
          <ul className="section-footer-menu_list">
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Дизайн</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Разработка</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Маркетинг</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Чат-боты</Link>
            </li>
            <li className="section-footer-menu_list__li">
               <Link className="section-footer-menu_list__item" href="#">AR/VR</Link>
            </li>
            <li className="section-footer-menu_list__li">
              <Link className="section-footer-menu_list__item" href="#">Motion</Link>
            </li>
          </ul>
        </div>
      </section>
  )
}
export default FooterMenu;
