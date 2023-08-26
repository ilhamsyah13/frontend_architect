import { AiOutlineRight } from "react-icons/ai";

function Projects() {
  return (
    <article className="my-24">
      <div className="flex justify-center my-12">
        <div className="text-center text-brown max-w-3xl mx-8 md:mx-0">
          <h2 className="text-3xl my-5">Follow Our Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            adipisci, illo tenetur nisi temporibus aliquid placeat eaque,
            possimus omnis eveniet iste atque eos animi doloremque a dolore
            excepturi, repellat ea?
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl flex justify-center items-center">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 mx-8 xl:mx-0">
          <section>
            <img
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-tl-3xl  md:rounded-tr-3xl md:rounded-none"
            />
            <div className="py-5 flex justify-between items-center">
              <div>
                <p>Modular kitchen</p>
                <p className="font-thin">Interior / Architecture</p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-full">
                <AiOutlineRight className="text-2xl " />
              </div>
            </div>
          </section>
          <section>
            <img
              src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-bl-3xl md:rounded-tl-3xl md:rounded-none"
            />
            <div className="py-5 flex justify-between items-center">
              <div>
                <p>Bathroom</p>
                <p className="font-thin">Decor / Architecture</p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-full">
                <AiOutlineRight className="text-2xl " />
              </div>
            </div>
          </section>
          <section className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-br-3xl"
            />
            <div className="py-5 flex justify-between items-center">
              <div>
                <p>Commercial Office</p>
                <p className="font-thin">Decor / Architecture</p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-full">
                <AiOutlineRight className="text-2xl " />
              </div>
            </div>
          </section>
          <section className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-bl-3xl"
            />
            <div className="py-5 flex justify-between items-center">
              <div>
                <p>Living Room</p>
                <p className="font-thin">Decor / Architecture</p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-full">
                <AiOutlineRight className="text-2xl " />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default Projects;
