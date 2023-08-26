import HeaderFooter from "../components/All/HeaderFooter";
import TitlePage from "../components/All/TitlePage";
import Join from "../components/Services/Join";
import ReadMore from "../components/Services/ReadMore";
import WeWork from "../components/Services/WeWork";

function Services() {
  return (
    <>
      <HeaderFooter>
        <TitlePage
          imageUrl={
            "https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Services"}
          subtitle={"Home / Services"}
        />
        <ReadMore />
        <WeWork />
        <Join />
      </HeaderFooter>
    </>
  );
}

export default Services;
