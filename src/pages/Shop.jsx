import HeaderFooter from "../components/All/HeaderFooter";
import TitlePage from "../components/All/TitlePage";
import BestSellers from "../components/Shop/BestSellers";
import Care from "../components/Shop/Care";
import Categories from "../components/Shop/Categories";
import Deals from "../components/Shop/Deals";

function Shop() {
  return (
    <>
      <HeaderFooter>
        <TitlePage
          imageUrl={
            "https://images.pexels.com/photos/7040700/pexels-photo-7040700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Furniture & More"}
          subtitle={"Home / Shop"}
        />
        <Deals />
        <Categories />
        <Care />
        <BestSellers />
      </HeaderFooter>
    </>
  );
}

export default Shop;
