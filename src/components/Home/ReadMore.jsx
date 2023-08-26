import { AiOutlineArrowRight } from "react-icons/ai";

function ReadMore() {
  return (
    <section className="flex justify-center items-center my-16 ">
      <div className="grid grid-cols-1 mx-10 max-w-4xl text-center bg-emerald-200 p-7 rounded-3xl font-light md:grid-cols-3 shadow-lg">
        <article>
          <p className="font-medium">Project Plan</p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            blanditiis reprehenderit quo dolor praesentium.
          </p>
          <p className="flex justify-center items-center gap-3">
            Read More
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </article>
        <article className="hidden md:block">
          <p className="font-medium">Interior Design</p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            blanditiis reprehenderit quo dolor praesentium.
          </p>
          <p className="flex justify-center items-center gap-3">
            Read More
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </article>
        <article className="hidden md:block">
          <p className="font-medium">Shop Furniture</p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            blanditiis reprehenderit quo dolor praesentium.
          </p>
          <p className="flex justify-center items-center gap-3">
            Read More
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </article>
      </div>
    </section>
  );
}

export default ReadMore;
