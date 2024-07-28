import { assets } from "../../assets/assets";
import { styles } from "../../utils/styles";

const ServicesSection = () => {
  const thumbnailStyle = "h-full rounded-3xl my-auto object-cover";
  const titleStyle = styles.homePageSectionTitle;
  const descStyle = "mt-5";
  return (
    <div className="m-body">
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-10 my-32">
        <div>
          <div className="inline-block">
            <h2 className={titleStyle}>Source Energy</h2>
            <div className="w-full h-[2.5px] mt-3 rounded-full bg-primary"></div>
          </div>
          <p className={descStyle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            maxime est consequatur quibusdam, veritatis quam provident ipsum
            tempore tenetur dolores et, obcaecati itaque sint doloribus nostrum.
            Minima repellendus maxime odio! Saepe fugit error illum ullam
            dolores assumenda ipsam velit porro quisquam dolore quas architecto
            ex esse in, praesentium blanditiis, ab tempora fugiat iure at
            repellendus repellat corrupti, mollitia quis. Provident facilis
            omnis odio a iure aspernatur facere optio aliquid labore. <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            enim error accusantium vel nobis debitis laborum quo recusandae
            animi minima consectetur ipsa, voluptatibus explicabo rem ea.
            Repellat delectus voluptates officia?
          </p>
        </div>
        <img
          src={assets.about_us_thumbnail1}
          alt=""
          className={thumbnailStyle}
        />
      </div>

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-10 my-32">
        <img
          src={assets.about_us_thumbnail1}
          alt=""
          className={thumbnailStyle}
        />
        <div>
          <div className="inline-block">
            <h2 className={titleStyle}>Store Energy</h2>
            <div className="w-full h-[2.5px] mt-3 bg-primary rounded-full"></div>
          </div>
          <p className={descStyle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            maxime est consequatur quibusdam, veritatis quam provident ipsum
            tempore tenetur dolores et, obcaecati itaque sint doloribus nostrum.
            Minima repellendus maxime odio! Saepe fugit error illum ullam
            dolores assumenda ipsam velit porro quisquam dolore quas architecto
            ex esse in, praesentium blanditiis, ab tempora fugiat iure at
            repellendus repellat corrupti, mollitia quis. Provident facilis
            omnis odio a iure aspernatur facere optio aliquid labore. <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            enim error accusantium vel nobis debitis laborum quo recusandae
            animi minima consectetur ipsa, voluptatibus explicabo rem ea.
            Repellat delectus voluptates officia?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-10 my-32">
        <div>
          <div className="inline-block">
            <h2 className={titleStyle}>Sell Energy</h2>
            <div className="w-full h-[2.5px] mt-3 rounded-full bg-primary"></div>
          </div>
          <p className={descStyle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            maxime est consequatur quibusdam, veritatis quam provident ipsum
            tempore tenetur dolores et, obcaecati itaque sint doloribus nostrum.
            Minima repellendus maxime odio! Saepe fugit error illum ullam
            dolores assumenda ipsam velit porro quisquam dolore quas architecto
            ex esse in, praesentium blanditiis, ab tempora fugiat iure at
            repellendus repellat corrupti, mollitia quis. Provident facilis
            omnis odio a iure aspernatur facere optio aliquid labore. <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            enim error accusantium vel nobis debitis laborum quo recusandae
            animi minima consectetur ipsa, voluptatibus explicabo rem ea.
            Repellat delectus voluptates officia?
          </p>
        </div>
        <img
          src={assets.about_us_thumbnail1}
          alt=""
          className={thumbnailStyle}
        />
      </div>
    </div>
  );
};
export default ServicesSection;
