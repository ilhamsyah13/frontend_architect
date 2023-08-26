import { AiOutlineArrowRight } from "react-icons/ai";

function Join() {
  return (
    <div className="flex justify-center items-center mb-72 bg-emerald-200 max-w-5xl mx-auto p-14 text-brown rounded-2xl">
      <div>
        <h2 className="text-4xl">Wanna join the interolab</h2>
        <p className="text-center mt-3 mb-5">
          It is a log established fact will be distracted
        </p>
        <button className="px-5 py-4 flex items-center  md:gap-5 justify-center  bg-brown text-ui-white text-center rounded-lg md:rounded-2xl mx-auto">
          <p>Contact With Us</p>
          <span>
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Join;
