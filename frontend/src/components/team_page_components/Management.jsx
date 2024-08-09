import React from "react";
import { styles } from "../../utils/styles.js";
import { assets } from "../../assets/assets";

const Management = () => {
  return (
    <section className="m-body">
      <h1 className={`${styles.homePageSectionTitle} text-center my-16`}>
        Management
      </h1>

      <div className="grid grid-cols-2 phone:grid-cols-1 gap-[20px] m-auto  h-full my-20">
        <div className="shadow-md">
          <img
            className="h-96 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className="flex justify-between items-center my-3">
              <h1 className="font-medium">David Olurin Jnr.</h1>
              <p className="text-xs text-primary">C.E.O</p>
            </div>
            <p>
              David is an astute business professional with over twenty years of
              successful business experience in various sectors including
              commodity trading. His Professional background has given him a
              huge leverage to sit as the chief executive of Cardinal Torch. He
              is an Alumni of the Metropolitan school of business management
              London (MSBM) and the Lagos business School (LBS).
            </p>
          </div>
        </div>
        <div className="shadow-md">
          <img
            className="h-96 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className="flex justify-between items-center my-3">
              <h1 className="font-medium">David Imosili</h1>
              <p className="text-xs text-primary">C.F.O</p>
            </div>
            <p>
              David is an astute business professional with over twenty years of
              successful business experience in various sectors including
              commodity trading. His Professional background has given him a
              huge leverage to sit as the chief executive of Cardinal Torch. He
              is an Alumni of the Metropolitan school of business management
              London (MSBM) and the Lagos business School (LBS).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 phone:grid-cols-1 gap-[20px]">
        <div className="shadow-md">
          <img
            className="h-64 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className=" my-3">
              <h1 className="font-medium">Ndutimobong Enang</h1>
              <p className="text-xs text-primary">
                Client Rel./Business Development officer
              </p>
            </div>
            <p>
              Ndutim is tasked with Business Development and collaborating with
              ﬁeld teams to deliver solutions in line with Cardinal Torch’s
              vision. An eclectic, she has garnered Product Management
              experience from diverse sectors such as construction where she
              holds a Master’s degree in Construction Technology. With an aﬃnity
              for IT, SEM and having recently interned at Microsoft, she’s
              bringing a unique blend of skills and insight to help Cardinal
              Torch achieve operational goals.
            </p>
          </div>
        </div>
        <div className="shadow-md">
          <img
            className="h-64 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className="my-3">
              <h1 className="font-medium">Ayotunde Adebayo</h1>
              <p className="text-xs text-primary">
                Trade Finance / Treasury Officer
              </p>
            </div>
            <p>
              Ayotunde is a seasoned Credit and Treasury Specialist with
              commendable years of work experience in consumer lending, treasury
              and portfolio management in the banking sector with core
              competencies in Credit Risk and Treasury management with
              certification in Enterprise Risk Management. He holds BSc. in
              Economics and Masters in Business Studies. He is a member of
              Nigeria Institute of management as well as a prospective member of
              Chartered Risk Management of Nigeria.
            </p>
          </div>
        </div>
        <div className="shadow-md">
          <img
            className="h-64 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className="flex justify-between items-center my-3">
              <h1 className="font-medium">Nancy Ossai</h1>
              <p className="text-xs text-primary">HR/Admin Officer</p>
            </div>
            <p>
              Nancy is an experienced Client Relations and Administrative
              Manager with over nine years working experience in the Telecoms
              and Banking sector. She holds an MBA in Human Resources.
              Self-motivated, committed, and passionate about relations in
              general, a professional with competence in organizational
              procedures. She oversees all administrative functions at Cardinal
              Torch and is a primary point of contact between the organization,
              management and the operations team, supplier and consumers.
            </p>
          </div>
        </div>
        <div className="shadow-md">
          <img
            className="h-64 w-[100%] rounded-t-md object-cover object-top"
            src={assets.ceo_img}
            alt="CEO"
          />
          <div className="py-2 px-3 ">
            <div className="flex justify-between items-center my-3">
              <h1 className="font-medium">Kushimo Seun</h1>
              <p className="text-xs text-primary">Head of Operations</p>
            </div>
            <p>
              Oluwaseun possesses years of sound experience and certiﬁcations in
              agri-business and its processes such as agronomy, agro processing,
              food safety/food handling etc with a bachelor’s degree in
              Agriculture.He has skills required for training and management in
              areas such as Good Agricultural Practices and Food Safety
              Management. He is a certiﬁed COLEACP coach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
