import { AiOutlineArrowRight } from "react-icons/ai";

function ReadMore() {
  return (
    <div className="flex justify-center items-center my-28 ">
      <article className="grid grid-cols-2 md:grid-cols-3 mx-10 max-w-5xl gap-10">
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>Project Plan</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>Interior Work</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>Retail Design</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>2d/3d Art</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>Customized Furniture</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
        <section className="text-center py-5 px-2 rounded-xl border border-transparent hover:border-brown hover:shadow-xl hover:bg-emerald-200 cursor-pointer">
          <p>Decoration Work</p>
          <p className="font-light mt-3 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, suscipit.
          </p>
          <p className="flex justify-center items-center gap-3 font-light">
            Read More
            <span>
              <AiOutlineArrowRight className="text-brown" />
            </span>
          </p>
        </section>
      </article>
    </div>
  );
}

export default ReadMore;
