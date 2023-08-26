import { AiOutlineArrowRight } from "react-icons/ai";

function Subscribe() {
  return (
    <section className="flex justify-center items-center my-10 text-brown">
      <div className=" mx-10 max-w-4xl md:w-3/5  bg-emerald-200 p-7 rounded-3xl shadow-lg">
        <h2 className="text-center my-7 font-medium">
          Subscribe to our newsletter and get a chance to win special discount
          on furniture shopping
        </h2>
        <div className="text-center flex justify-center md:gap-7 mb-7">
          <input
            type="text"
            placeholder="Your Email ID"
            className="px-5 py-2 md:w-2/5"
          />
          <button className="lg:w-1/4 flex items-center  md:gap-5 justify-center  bg-brown p-2 text-ui-white text-center rounded-lg md:rounded-2xl">
            <p>Subscribe</p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
