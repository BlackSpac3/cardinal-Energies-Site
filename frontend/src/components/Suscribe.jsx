import React from "react";

const Suscribe = () => {
  return (
    <section className="bg-newsletter-subscribe bg-primary bg-no-repeat bg-cover bg-center h-[55vh] m-body rounded-3xl flex justify-end  p-6  text-white">
      <div className="w-[45%] my-auto mr-14">
        <div>
          <h2 className="text-3xl font-semibold font-['Montserrat'] mb-5">
            Subscribe to our news letter
          </h2>
          <p className="text-sm w-[90%] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas illo
            ex dolorem accusantium! Ipsum odio cumque eos.
          </p>
        </div>
        <div className="bg-white text-black flex justify-between items-center p-1 rounded-full">
          <div>
            <input
              className="h-[6vh] px-4 outline-0"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <button className="bg-black text-white px-10 rounded-3xl py-3">
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suscribe;
