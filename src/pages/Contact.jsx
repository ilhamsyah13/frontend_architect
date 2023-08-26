import HeaderFooter from "../components/All/HeaderFooter";
import TitlePage from "../components/All/TitlePage";
import Form from "../components/Contact/Form";

function Contact() {
  return (
    <>
      <HeaderFooter>
        <TitlePage
          imageUrl={
            "https://images.pexels.com/photos/198272/pexels-photo-198272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Contact Us"}
          subtitle={"Home / Contact"}
        />
        <Form />
      </HeaderFooter>
    </>
  );
}

export default Contact;
