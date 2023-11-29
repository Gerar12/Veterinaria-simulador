import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../utils/Layout";
import Form from "../components/Form/intext";
import Pets from "../components/Pets";

const UI = () => {
  return (
    <>
      <Header />
      <Layout>
        <Form>
          <Pets />
        </Form>
      </Layout>
      <Footer />
    </>
  );
};

export default UI;
