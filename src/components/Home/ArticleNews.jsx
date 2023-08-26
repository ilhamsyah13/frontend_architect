import { AiOutlineRight } from "react-icons/ai";

function ArticleNews() {
  return (
    <article className="my-24">
      <div className="flex justify-center my-12">
        <div className="text-center text-brown max-w-3xl mx-8 md:mx-0">
          <h2 className="text-3xl my-5">Articles & News</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            adipisci, illo tenetur nisi temporibus aliquid placeat eaque,
            possimus omnis eveniet iste atque eos animi doloremque a dolore
            excepturi, repellat ea?
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl flex justify-center items-center">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 mx-8 xl:mx-0">
          <section className="border border-emerald-200 rounded-3xl hover:bg-emerald-200 cursor-pointer">
            <div className="p-3 relative ">
              <img
                src="https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded-tl-3xl  md:rounded-tr-3xl"
              />

              <p className="absolute py-1 px-2 text-sm font-thin bottom-7 left-7  bg-ui-white max-w-fit rounded-lg">
                Kitchen Design
              </p>
            </div>
            <div className="px-3 mb-5">
              <p>Let&apos;s Get Solution For Building Construction Work</p>

              <div className="my-5 flex justify-between items-center">
                <p className="font-thin text-sm">26 December 2022</p>
                <div className="bg-emerald-100 p-2 rounded-full">
                  <AiOutlineRight className="text-2xl " />
                </div>
              </div>
            </div>
          </section>
          <section className="border border-emerald-200 rounded-3xl hover:bg-emerald-200 cursor-pointer">
            <div className="p-3 relative ">
              <img
                src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded-tl-3xl  md:rounded-tr-3xl"
              />

              <p className="absolute py-1 px-2 text-sm font-thin bottom-7 left-7  bg-ui-white max-w-fit rounded-lg">
                Living Design
              </p>
            </div>
            <div className="px-3 mb-5">
              <p>Low Cost Latest Invented Interior Designing</p>

              <div className="my-5 flex justify-between items-center">
                <p className="font-thin text-sm">26 December 2022</p>
                <div className="bg-emerald-100 p-2 rounded-full">
                  <AiOutlineRight className="text-2xl " />
                </div>
              </div>
            </div>
          </section>
          <section className="border border-emerald-200 rounded-3xl hover:bg-emerald-200 cursor-pointer">
            <div className="p-3 relative ">
              <img
                src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded-tl-3xl  md:rounded-tr-3xl"
              />

              <p className="absolute py-1 px-2 text-sm font-thin bottom-7 left-7  bg-ui-white max-w-fit rounded-lg">
                Interior Design
              </p>
            </div>
            <div className="px-3 mb-5">
              <p>Best For Any Office & Business Interior</p>

              <div className="my-5 flex justify-between items-center">
                <p className="font-thin text-sm">26 December 2022</p>
                <div className="bg-emerald-100 p-2 rounded-full">
                  <AiOutlineRight className="text-2xl " />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default ArticleNews;
