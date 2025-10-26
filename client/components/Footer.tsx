import DescribeNews from "./DescribeNews";
import BlockProject from "./BlockProject";
import FooterMenu from "./FooterMenu";
import BlockOurOffices from "./BlockOurOffices";

const Footer = () => {
  return (
    <section className="section-footer">
      <DescribeNews />
      <BlockProject />
      <BlockOurOffices/>
      <FooterMenu/>
    </section>
  )
}
export default Footer;
