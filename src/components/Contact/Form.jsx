import { AiOutlineArrowRight } from "react-icons/ai";

function Form() {
  return (
    <div className="flex justify-center items-center my-32">
      <div>
        <h2 className="text-3xl text-brown my-5 text-center">
          We love meeting new people and helping them
        </h2>
        <form action="" className="text-center">
          <div className="flex gap-7 justify-center">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 border-brown bg-transparent placeholder-brown"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-brown bg-transparent placeholder-brown"
            />
          </div>
          <div className="flex gap-7 justify-center my-5">
            <input
              type="text"
              placeholder="Subject"
              className="border-b-2 border-brown bg-transparent placeholder-brown"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-b-2 border-brown bg-transparent placeholder-brown"
            />
          </div>
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            className="resize-none border-b-2 border-brown bg-transparent placeholder-brown text-brown"
            placeholder="Hello i'm Interested in.."
          ></textarea>
          <button
            type="submit"
            className="px-5 py-4 my-5 flex items-center gap-1 md:gap-5 justify-end  bg-brown text-ui-white  rounded-lg md:rounded-2xl mx-auto md:ml-auto md:mx-0 "
          >
            <p>Send Now</p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
