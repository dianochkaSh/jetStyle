import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const BlockActions = () => {
 const [inputValue, setInputValue] = useState<string>('Ресторан на Малышева');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  return (
    <section className="section-block-actions">
        <div className="section-block-actions__div">
            <input className="section-block-actions__input" type="text" value={inputValue} onChange={handleChange} name="title"/>
        </div>
        <div className="section-block-actions_actions">
            <Link className="section-block-link" href="#">
                <Image alt="download" className="download" width="16" height="20" src="/img/download.svg"/>
            </Link>
            <Link className="section-block-link" href="#">
                <Image alt="copy" className="copy" width="16" height="20" src="/img/copy.svg"/>
        </Link>
        <Link className="section-block-link" href="#">
          <Image alt="delete" className="delete" width="16" height="20" src="/img/delete.svg"/>
        </Link>
      </div>


    </section>
  )
}
export  default BlockActions;
