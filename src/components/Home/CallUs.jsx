import { AiOutlinePhone, AiOutlineArrowRight } from "react-icons/ai";

function CallUs() {
  return (
    <section className="flex justify-center items-center my-10 ">
      <div className="grid grid-cols-1 mx-10 max-w-5xl bg-white rounded-t-3xl md:rounded-r-3xl md:grid-cols-5 order-last ">
        <div className="col-span-2 p-5 order-2 md:order-1">
          <p className="text-3xl text-brown">
            We Create The Art Of Stylish Living Stylishly
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sed doloremque ducimus minima dolorum soluta praesentium, architecto
            magni nisi, perspiciatis error? Dolores modi quod necessitatibus,
            aperiam similique molestias doloribus impedit!
          </p>
          <div className="flex items-center gap-3 pb-5">
            <div className="p-2 rounded-full bg-emerald-200 ">
              <AiOutlinePhone className="text-3xl" />
            </div>
            <div>
              <p className="font-bold">012345678</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <button className="py-3 px-7 bg-brown text-ui-white rounded-xl flex items-center gap-3 shadow-2xl hover:bg-emerald-200 hover:text-brown">
            Get Free Estimate <AiOutlineArrowRight />
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/6283972/pexels-photo-6283972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Call Us Image"
          className="rounded-3xl col-span-3 h-full order-1"
        />
      </div>
    </section>
  );
}

export default CallUs;
