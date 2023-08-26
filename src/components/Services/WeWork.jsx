import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { GiTeamIdea, GiArchiveRegister, GiPodium } from "react-icons/gi";

function WeWork() {
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className="text-center bg-emerald-200 rounded-2xl shadow-lg max-w-5xl py-16 px-10">
        <h2 className="text-4xl  text-brown my-5">How We Work</h2>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptate odit libero commodi possimus rerum?
        </p>
        <article className="grid grid-cols-1 md:grid-cols-2 my-16 md:gap-10">
          <section className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="border border-brown rounded-3xl md:rounded-br-3xl md:rounded-none"
            />
          </section>
          <section className="p-16 order-1 md:order-2">
            <div className="flex justify-between items-center mb-8">
              <HiOutlinePresentationChartLine className="text-7xl text-green-500" />
              <p className="text-brown text-7xl">01</p>
            </div>
            <p className="text-left text-xl">Concept & Details</p>
            <p className="text-left font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, quidem!
            </p>
          </section>
          <section className="p-16 order-3 md:order-3">
            <div className="flex justify-between items-center mb-8">
              <GiTeamIdea className="text-7xl text-green-500" />
              <p className="text-brown text-7xl">02</p>
            </div>
            <p className="text-left text-xl">Idea for Work</p>
            <p className="text-left font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, quidem!
            </p>
          </section>
          <section className="order-4 md:order-4">
            <img
              src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="border border-brown rounded-3xl md:rounded-l-3xl md:rounded-none"
            />
          </section>
          <section className="order-6 md:order-5">
            <img
              src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="border border-brown rounded-3xl md:rounded-r-3xl md:rounded-none"
            />
          </section>
          <section className="p-16 order-5 md:order-6">
            <div className="flex justify-between items-center mb-8">
              <GiArchiveRegister className="text-7xl text-green-500" />
              <p className="text-brown text-7xl">03</p>
            </div>
            <p className="text-left text-xl">Design</p>
            <p className="text-left font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, quidem!
            </p>
          </section>
          <section className="p-16 order-7 md:order-7">
            <div className="flex justify-between items-center mb-8">
              <GiPodium className="text-7xl text-green-500" />
              <p className="text-brown text-7xl">04</p>
            </div>
            <p className="text-left text-xl">Perfection</p>
            <p className="text-left font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, quidem!
            </p>
          </section>
          <section className="order-8 md:order-8">
            <img
              src="https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="border border-brown rounded-3xl md:rounded-bl-3xl md:rounded-none"
            />
          </section>
        </article>
      </div>
    </div>
  );
}

export default WeWork;
