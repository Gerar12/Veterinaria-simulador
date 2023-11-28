import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../utils/Layout";
import Form from "../components/Form/intext";

const UI = () => {
  return (
    <>
      <Header />
      <Layout>
        <Form />
      </Layout>
      <Footer />
    </>
  );
};

export default UI;
