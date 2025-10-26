import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {SERVER_URL} from "../consts/consts";
import axios from "axios";

const ModalWindowEmail = ({  isOpen,  onClose }) => {
  const [email, setEmail ] = useState();
  const popupRef = useRef<HTMLDivElement>(null);
  const handlerEmail = (e) => {
      setEmail(e.target.value);
  }
    const handleClickOutside = (event: MouseEvent) => {
     const target = event.target as HTMLElement;
     if(popupRef.current && popupRef.current.contains(target)) return;
     setEmail(null);
      onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }
  async function handlerSendEmail (e) {
    e.preventDefault();
    let form = {
      email: email
    };
    try {
      let response = await axios.post(SERVER_URL + '/api/subscribes', form);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
      <div className="section-modal-subscribe">
           <div className="section-modal-subscribe__content">
          <p className="section-modal-subscribe__title">Скачивание расчёта</p>
          <p className="section-modal-subscribe__text">Напишите свой email. <br/>Мы отправим вам xsl-файл с<br/>расчётами</p>
          <form ref={popupRef}  onSubmit={handlerSendEmail} className="section-modal-subscribe__form">
             <label className="section-modal-subscribe__label">Email</label>
              <input type="text" className="section-modal-subscribe__input" name="email" value={email} onChange={handlerEmail}/>
            <button className="section-modal-subscribe__bt_submit bt__red" type="submit">Отправить</button>
          </form>
          <p className="section-modal-subscribe__text ">Нажимая кнопку, я даю<br/> согласие <Link className="text-red" href="#">на обработку персональных<br/> данных</Link></p>
       </div>
      </div>
  )
}
export default ModalWindowEmail;
