import HeaderFooter from "../components/All/HeaderFooter";
import TitlePage from "../components/All/TitlePage";
import ArticleNews from "../components/Blog/ArticleNews";
import LatestPost from "../components/Blog/LatestPost";

function Blog() {
  return (
    <>
      <HeaderFooter>
        <TitlePage
          imageUrl={
            "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg"
          }
          title={"News & Articles"}
          subtitle={"Home / Blog"}
        />
        <LatestPost />
        <ArticleNews />
      </HeaderFooter>
    </>
  );
}

export default Blog;
