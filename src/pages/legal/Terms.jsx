import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Terms.css"


const Terms = () => (
  <>
    <Header/>
    <main className="terms-container">
      <article className="terms-content">
        <h1>Terms and Conditions of Sale</h1>
        <p>These terms and conditions govern the purchase of fictitious products in this prototype.</p>
        <ul>
          <li>No transactions involving real money are carried out.</li>
          <li>Access to characters is subject to DLC availability.</li>
        </ul>
      </article>
    </main>
    <Footer/>
  </>
);
export default Terms;