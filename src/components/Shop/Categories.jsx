import { categories } from "../../data/room.json";

function Categories() {
  return (
    <div className="flex justify-center items-center my-10 ">
      <div>
        <h2 className="text-brown text-3xl text-center my-10">
          Shop By Categories
        </h2>
        <article className="grid grid-cols-2 mx-6 md:grid-cols-4 gap-2 max-w-5xl">
          {categories.map((item) => (
            <section key={item.id}>
              <img
                src={item.img}
                alt=""
                className="max-h-36 w-full object-cover object-center shadow-md shadow-slate-400"
              />
              <p className="py-3 text-brown">{item.title}</p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

export default Categories;
