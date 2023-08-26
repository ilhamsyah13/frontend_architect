import { best } from "../../data/room.json";

function BestSellers() {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <h2 className="text-brown text-3xl text-center my-10">
          Shop Bestseller
        </h2>
        <article className="grid grid-cols-2 mx-6 md:grid-cols-6 gap-3 max-w-5xl">
          {best.map((item) => (
            <section key={item.id}>
              <img
                src={item.img}
                alt=""
                className="h-48 w-full object-cover object-center shadow-sm shadow-slate-400"
              />
              <p className="pt-3 text-brown font-bold">{item.title}</p>
              <p className=" text-brown">{item.option}</p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

export default BestSellers;
