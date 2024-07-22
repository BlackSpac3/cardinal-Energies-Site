import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about-us"
      className="grid grid-cols-[1fr_1fr] bg-white mx-[7vw] phone:flex flex-col"
    >
      <h2 className="text-primary font-semibold text-[28px] col-span-2 ">
        About Us
      </h2>
      <p className="w-[90%] mt-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate
        adipisci totam atque, ad labore nesciunt vel corporis quod ab? Aperiam
        aspernatur facilis quo consequatur eaque soluta tempore dolor
        saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        voluptate adipisci totam atque, ad labore nesciunt vel corporis quod ab?
        Aperiam aspernatur facilis quo consequatur eaque soluta tempore dolor
        saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        voluptate adipisci totam atque, ad labore nesciunt vel corporis quod ab?
        Aperiam aspernatur facilis quo consequatur eaque soluta tempore dolor
        saepe.
      </p>
      <div className="">
        <img
          src={assets.about_us_thumbnail2}
          alt=""
          className=" w-[90%] h-[90%] m-auto object-cover rounded-[30px] overflow-hidden"
        />
      </div>
    </div>
  );
};
export default About;
