function PeopleThinks() {
  return (
    <section className="flex justify-center items-center my-10 ">
      <div className="mx-10 max-w-5xl  bg-emerald-200 p-7 rounded-3xl shadow-lg ">
        <h2 className="text-2xl text-center mb-10 mt-4">
          What the People Thinks
        </h2>
        <div className="grid grid-cols-1 my-7 gap-10 md:grid-cols-3">
          <article className="bg-ui-white p-5 rounded-3xl hidden md:block">
            <div className="flex items-center gap-5 mb-5">
              <img
                src="https://randomuser.me/api/portraits/women/15.jpg"
                alt=""
                width={70}
                className="rounded-full"
              />
              <div>
                <p>Disha HindoCha</p>
                <p>Pune, India</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus aliquid amet repellendus autem quasi minus, natus
              explicabo aut alias aperiam.
            </p>
          </article>
          <article className="bg-ui-white p-5 rounded-3xl ">
            <div className="flex items-center gap-5 mb-5">
              <img
                src="https://randomuser.me/api/portraits/women/29.jpg"
                alt=""
                width={70}
                className="rounded-full"
              />
              <div>
                <p>Emma Morgen</p>
                <p>Sydney, Australia</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus aliquid amet repellendus autem quasi minus, natus
              explicabo aut alias aperiam.
            </p>
          </article>
          <article className="bg-ui-white p-5 rounded-3xl hidden md:block">
            <div className="flex items-center gap-5 mb-5">
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt=""
                width={70}
                className="rounded-full"
              />
              <div>
                <p>Edward Stephen</p>
                <p>Frankfurt, Germany</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus aliquid amet repellendus autem quasi minus, natus
              explicabo aut alias aperiam.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PeopleThinks;
