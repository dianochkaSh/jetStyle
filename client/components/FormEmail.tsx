import React from "react";

const FormEmail:React.FC = () => {
  return (
    <section className="form-email">
      <form>
       <input className="form-email__input" type="text"></input>
       <button className="bt__red form-email__bt" type="submit">&gt;</button>
      </form>
    </section>
  )
}

export default FormEmail;