import { assets } from "../../assets/assets";
import { styles } from "../../utils/styles";

const ServicesSection = () => {
  const thumbnailStyle =
    "w-full aspect-square rounded-3xl my-auto object-cover";
  const titleStyle = styles.homePageSectionTitle;
  const descStyle = "mt-5";
  return (
    <div className="m-body">
      <div className="grid grid-cols-[1.2fr_0.8fr] phone:grid-cols-1 gap-10 my-32">
        <div>
          <div className="inline-block">
            <h2 className={titleStyle}>Source Energy</h2>
            <div className="w-full h-[2.5px] mt-3 rounded-full bg-primary"></div>
          </div>
          <p className={descStyle}>
            We utilize a balanced combination of traditional and renewable
            methods to source energy in order to meet global energy demands. Our
            extraction of oil and natural gas is carried out responsibly and
            efficiently using advanced technology, providing a stable foundation
            for our operations.
            <br />
            <br /> In addition to our work with oil and natural gas, we are
            dedicated to expanding our renewable energy portfolio. This involves
            actively sourcing power from solar, wind, and geothermal energy in
            order to decrease our carbon footprint. Furthermore, we are
            exploring innovative technologies such as hydrogen fuel and
            bioenergy to diversify our energy sources. By integrating these
            energy solutions, Cardinal Energies ensures a sustainable, reliable,
            and forward-looking approach to energy sourcing.
          </p>
        </div>
        <img src={assets.store1_img} alt="" className={thumbnailStyle} />
      </div>

      <div className="grid grid-cols-[0.8fr_1.2fr] phone:grid-cols-1 gap-10 my-32">
        <img
          src={assets.pet2_img}
          alt=""
          className={`${thumbnailStyle} order-first phone:order-last`}
        />
        <div id="store-energy">
          <div className="inline-block">
            <h2 className={titleStyle}>Store Energy</h2>
            <div className="w-full h-[2.5px] mt-3 bg-primary rounded-full"></div>
          </div>
          <p className={descStyle}>
            Energy storage allows for the efficient capture, storage, and
            deployment of energy when it's needed most, especially in the
            renewable energy sector. By utilizing solar, wind, and other
            renewable sources, along with innovative battery storage systems, we
            can ensure a consistent and stable energy supply, even when natural
            conditions fluctuate. <br />
            <br /> We offer advanced energy storage solutions that enable
            businesses and communities to better harness, store, and manage
            energy. Through strategic investments in cutting-edge storage
            technologies such as lithium-ion batteries, hydrogen storage, and
            pumped hydroelectric storage, Cardinal Energies is positioned to
            enhance energy efficiency, reduce waste, and help create a more
            resilient power grid.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1.2fr_0.8fr] phone:grid-cols-1 gap-10 my-32">
        <div>
          <div className="inline-block">
            <h2 className={titleStyle}>Sell Energy</h2>
            <div className="w-full h-[2.5px] mt-3 rounded-full bg-primary"></div>
          </div>
          <p className={descStyle}>
            We are committed to offering dependable and effective energy
            solutions to businesses, industries, and communities around the
            world. Our extensive range of energy options, spanning oil, natural
            gas, and renewable sources, is designed to meet our clients'
            specific requirements, guaranteeing a consistent and sustainable
            supply.
            <br />
            <br /> We provide energy in the form of traditional fossil fuels
            such as oil and natural gas, which are essential for powering
            industries and supporting infrastructure development. In addition,
            we offer renewable energy options sourced from solar, wind, and
            other sustainable resources, empowering our clients to transition to
            cleaner, more environmentally friendly energy sources. With a focus
            on customer satisfaction and environmental responsibility, We ensure
            that the energy we offer is delivered reliably, cost-effectively,
            and with minimal environmental impact. Whether you are interested in
            conventional energy or renewable alternatives, we have the right
            solutions to power your future.
          </p>
        </div>
        <img src={assets.sell_energy} alt="" className={thumbnailStyle} />
      </div>
    </div>
  );
};
export default ServicesSection;
