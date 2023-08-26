import HeaderFooter from "../components/All/HeaderFooter";
import TitlePage from "../components/All/TitlePage";
import Room from "../components/Portfolio/Room";

function Portfolio() {
  return (
    <>
      <HeaderFooter>
        <TitlePage
          imageUrl={
            "https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Portfolio"}
          subtitle={"Home / Portfolio"}
        />
        <Room />
      </HeaderFooter>
    </>
  );
}

export default Portfolio;
