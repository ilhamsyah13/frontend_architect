import PropTypes from "prop-types";

function TitlePage({ imageUrl, title, subtitle }) {
  return (
    <div
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`max-h-screen h-[65vh] flex justify-center items-end bg-center`}
    >
      <div className=" text-ui-black bg-ui-white text-center px-20 py-10 rounded-t-3xl">
        <p className="text-5xl">{title}</p>
        <p className="pt-3">{subtitle}</p>
      </div>
    </div>
  );
}

TitlePage.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TitlePage;
