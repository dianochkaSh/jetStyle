import React from "react";
import Image from 'next/image';
import FormNewProject from "./FormNewProject";

const BlockProject:React.FC = () => {
  return (
    <section className="block-new-project">
      <Image src="/img/logo-big.png" width="184" height="138" alt="logo"/>
      <section className="section-form-new-project">
        <FormNewProject/>
      </section>
    </section>
  )
}
export default BlockProject;
