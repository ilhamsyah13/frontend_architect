function LatestPost() {
  return (
    <div className="max-w-4xl my-20  mx-10 lg:mx-auto  ">
      <div className="text-brown">
        <h2 className="text-4xl pb-7">Latest Post</h2>
        <p className="text-2xl">
          Digital Technology Revolutionising the Interior Design Industry
        </p>
        <div
          //   style={{
          //     background: `url(https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          //     backgroundSize: "cover",
          //     backgroundRepeat: "no-repeat",
          //     backgroundPosition: "center",
          //   }}
          className={`bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] max-h-screen h-[33vh] min-w-full  align-middle bg-cover bg-no-repeat bg-center my-5`}
        ></div>
        <p className="text-justify text-sm">
          The interior design industry is undergoing a tremendous transformation
          as digital technology takes centre stage. The integration of
          artificial intelligence (AI) and digital tools has paved the way for
          optimised processes, enhanced creativity, and immerse design
          experiences.
        </p>
      </div>
    </div>
  );
}

export default LatestPost;
