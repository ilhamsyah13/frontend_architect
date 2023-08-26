import { useEffect, useState } from "react";
import { carousel } from "../../data/room.json";
import { AiOutlineRight } from "react-icons/ai";

function Deals() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(carousel);

  useEffect(() => {
    let carousel = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > data.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(carousel);
    };
  }, [index, data]);
  return (
    <div
      style={{
        background: `url(${data[index].img}) no-repeat center center `,
        backgroundSize: "cover",
      }}
      className={` min-h-[40vh] flex items-center bg-cover bg-no-repeat bg-center  mt-32 relative`}
    >
      <div className="ml-10 text-6xl  text-ui-white">
        <p>Flash deals</p>
        <div className="my-5 flex items-center gap-3">
          <p className="font-thin text-xl">Shop now</p>
          <div className="bg-emerald-100 p-2 rounded-full">
            <AiOutlineRight className="text-xs text-brown" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-0 right-0 origin-bottom flex justify-center  gap-4">
        {data.map((item) => (
          <div key={item.id} className="">
            <button
              className="rounded-full bg-white h-4 w-4 hover:bg-slate-300"
              onClick={() => setIndex(item.id - 1)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
