import React from "react";
import Image from "next/image";
import Link from "next/link";

const FormNewProject:React.FC = () => {
  return (
    <form className="section-form-new-project_form">
        <p className="section-form-new-project_form__text">Привет JetStyle,</p>
        <p className="section-form-new-project_form__text">Я бы хотел обсудить с вами проект.</p>
        <div className="section-form-new-project_form_top">
          <div className="section-form-new-project_form_top_div">
            <label className="section-form-new-project_form__label">
              Пожалуйста, представьтесь*
            </label>
            <input className="section-form-new-project_form__input" type="text" name="name"/>
          </div>
          <div className="section-form-new-project_form_top_div">
            <label className="section-form-new-project_form__label">
              Email или Телефон*
            </label>
            <input className="section-form-new-project_form__input" type="text" name="email"/>
          </div>
        </div>
        <div className="section-form-new-project_form_container_texarea">
          <label className="section-form-new-project_form__label">
            Комментарии
          </label>
          <textarea className="section-form-new-project_form__textarea" name="comments" />
        </div>
        <div className="section-form-new-project_form__upload_file">
          <label htmlFor="hiddenFileInput" className="section-form-new-project_form__upload_file_label">
            <Image className="icon-bt" src="/img/upload.svg" width="20" height="20" alt="upload"/>
            <span>Добавить файл</span>
          </label>
          <input className="section-form-new-project_form__upload_file_input" type="file" name="file"/>
        </div>
        <div className="section-form-new-project_form__actions">
          <button className="bt__red lg_bt">Отправить</button>
          <button className="bt__white-text-red lg_bt">
            <Image className="icon-bt" src="/img/Vector.svg" width="20" height="20" alt="telegram"/>
            Написать в Telegram
          </button>
        </div>
        <div className="section-form-new-project_form__agreement">
          <p>Нажимая кнопку, я даю согласие
            <Link href="#" className="text-red"> обработку персональных данных</Link></p>
        </div>
        </form>
  )

}

export default FormNewProject;
