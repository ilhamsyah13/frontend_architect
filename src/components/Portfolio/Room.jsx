import { useState } from "react";
import { rooms } from "../../data/room.json";
import { AiOutlineRight } from "react-icons/ai";

function Room() {
  //   const [data, setData] = useState(rooms);
  const [filter, setFilter] = useState("residence");

  return (
    <article className="my-24">
      <div className="flex justify-center my-12 ">
        <div className="text-center text-ui-black max-w-3xl mx-8 md:mx-0 flex  border border-brown rounded-xl">
          <button
            onClick={() => setFilter("commercial")}
            className="hover:bg-brown hover:border-brown px-3 md:px-10 py-3 rounded-xl hover:text-ui-white"
          >
            Commercial
          </button>
          <button
            onClick={() => setFilter("residence")}
            className="hover:bg-brown hover:border-brown px-3 md:px-10 py-3 rounded-xl hover:text-ui-white"
          >
            Residence
          </button>
          <button
            onClick={() => setFilter("industrial")}
            className="hover:bg-brown hover:border-brown px-3 md:px-10 py-3 rounded-xl hover:text-ui-white"
          >
            Industrial
          </button>
          <button
            onClick={() => setFilter("decor")}
            className="hover:bg-brown hover:border-brown px-3 md:px-10 py-3 rounded-xl hover:text-ui-white"
          >
            Decor
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl flex justify-center items-center ">
        <div className="columns-2 gap-8  mx-8 xl:mx-0">
          {rooms
            .filter((item) => {
              return item.category === filter;
            })
            .map((item) => (
              <section key={item.id} className="inline-block">
                <img src={item.img} alt="" className="" />
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <p>{item.title}</p>
                    <p className="font-thin">Interior / Architecture</p>
                  </div>
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <AiOutlineRight className="md:text-2xl " />
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
    </article>
  );
}

export default Room;
