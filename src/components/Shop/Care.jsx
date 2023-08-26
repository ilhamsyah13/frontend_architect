function Care() {
  return (
    <div className="mx-auto ">
      <div>
        <h2 className="text-brown text-3xl text-center">
          Care For Your Furniture
        </h2>
        <article className="grid grid-cols-1  md:grid-cols-2  gap-2 max-w-5xl h-[70vh] md:h-[35vh] mx-7 lg:mx-auto">
          <section className="bg-[url('https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  w-full align-middle bg-cover bg-no-repeat bg-center my-5">
            <div className="p-5 text-brown text-xl">
              <p>Easy Furniture Insurance</p>
              <p className="underline">Read More</p>
            </div>
          </section>
          <section className="bg-[url('https://images.pexels.com/photos/1566994/pexels-photo-1566994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  w-full align-middle bg-cover bg-no-repeat bg-center my-5">
            <div className="p-5 text-brown text-xl">
              <p>Furniture Care Kit for Fabric and Solid Wood</p>
              <p className="underline">Read More</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default Care;
