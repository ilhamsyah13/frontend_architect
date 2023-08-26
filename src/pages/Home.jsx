import HeaderFooter from "../components/All/HeaderFooter";
import ArticleNews from "../components/Home/ArticleNews";
import CallUs from "../components/Home/CallUs";
import Hero from "../components/Home/Hero";
import PeopleThinks from "../components/Home/PeopleThinks";
import Projects from "../components/Home/Projects";
import ReadMore from "../components/Home/ReadMore";
import Subscribe from "../components/Home/Subscribe";

function Home() {
  return (
    <>
      <HeaderFooter>
        <Hero />
        <ReadMore />
        <CallUs />
        <PeopleThinks />
        <Projects />
        <ArticleNews />
        <Subscribe />
      </HeaderFooter>
    </>
  );
}

export default Home;
