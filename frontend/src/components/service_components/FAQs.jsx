import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { icons } from "../../assets/assets";
import { styles } from "../../utils/styles";

const FAQs = () => {
  const expandIconStyle = "w-[15px] cursor-pointer duration-[0.2s]";
  const cardStyle =
    "flex justify-between items-center gap-10 rounded-xl px-8 py-5 w-full cursor-pointer duration-[0.1s]";
  const cardOpenedStyle =
    "bg-neutral-100 text-black border-b-2 border-primary shadow-md";
  const cardClosedStyle = "bg-neutral-800 text-white";
  const cardTitleStyle = "font-medium";
  const cardDescstyle = "`text-neutral-400`";
  const answerDivStyle = "w-full px-[7.5%] duration-[0.2s]  overflow-hidden";

  const faqs = [
    {
      question: "How to Contact Cardinal Energies?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias illo tempora fugiat debitis aperiam consequatur temporibus inventore sit porro in, obcaecati fugit eaque assumenda libero reprehenderit magnam est modi?",
    },
    {
      question: "Where to Find Cardinal Energies?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias illo tempora fugiat debitis aperiam consequatur temporibus inventore sit porro in, obcaecati fugit eaque assumenda libero reprehenderit magnam est modi?",
    },
    {
      question: "Who Founded Cardinal Energies?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias illo tempora fugiat debitis aperiam consequatur temporibus inventore sit porro in, obcaecati fugit eaque assumenda libero reprehenderit magnam est modi?",
    },
  ];

  const [col1IsOpen, setCol1IsOpen] = useState([false, ""]);
  const [col2IsOpen, setCol2IsOpen] = useState([false, ""]);

  const col1handleExpand = (index) => {
    index === col1IsOpen[1]
      ? setCol1IsOpen((prev) => [!prev[0], index])
      : setCol1IsOpen((prev) => [true, index]);
  };

  const col2handleExpand = (index) => {
    index === col2IsOpen[1]
      ? setCol2IsOpen((prev) => [!prev[0], index])
      : setCol2IsOpen((prev) => [true, index]);
  };

  return (
    <section>
      <div className="m-body flex flex-col items-center">
        <h2 className={`${styles.homePageSectionTitle} text-center`}>FAQs</h2>
        <p className="text-center w-[60%] phone:w-[90%] mt-3 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea impedit
          aperiam voluptatum consequuntur blanditiis obcaecati ipsum quia
          debitis eum culpa.
        </p>

        <div className="grid grid-cols-2 phone:grid-cols-1 gap-x-10 w-full">
          <div>
            {faqs.map((faq, index) => {
              return (
                <div className="my-2">
                  <div
                    onClick={() => col1handleExpand(index)}
                    className={`${
                      col1IsOpen[0] && col1IsOpen[1] === index
                        ? cardOpenedStyle
                        : cardClosedStyle
                    } ${cardStyle}`}
                  >
                    <p className={cardTitleStyle}>{faq.question}</p>
                    <img
                      src={
                        col1IsOpen[0] && col1IsOpen[1] === index
                          ? icons.expand_arrow_black
                          : icons.expand_arrow_white
                      }
                      className={`${
                        col1IsOpen[0] && col1IsOpen[1] === index
                          ? "-rotate-180"
                          : "rotate-0"
                      } ${expandIconStyle}`}
                    />
                  </div>
                  <div
                    className={`${
                      col1IsOpen[0] && col1IsOpen[1] === index
                        ? "h-fit py-[5%] "
                        : "h-0 "
                    } ${answerDivStyle}`}
                  >
                    <p className={cardDescstyle}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {faqs.map((faq, index) => {
              return (
                <div className="my-2">
                  <div
                    onClick={() => col2handleExpand(index)}
                    className={`${
                      col2IsOpen[0] && col2IsOpen[1] === index
                        ? cardOpenedStyle
                        : cardClosedStyle
                    } ${cardStyle} `}
                  >
                    <p className={cardTitleStyle}>{faq.question}</p>
                    <img
                      src={
                        col2IsOpen[0] && col2IsOpen[1] === index
                          ? icons.expand_arrow_black
                          : icons.expand_arrow_white
                      }
                      className={`${
                        col2IsOpen[0] && col2IsOpen[1] === index
                          ? "-rotate-180"
                          : "rotate-0"
                      } ${expandIconStyle}`}
                    />
                  </div>
                  <div
                    className={`${
                      col2IsOpen[0] && col2IsOpen[1] === index
                        ? "h-fit py-[5%] "
                        : "h-0 "
                    } ${answerDivStyle}`}
                  >
                    <p className={cardDescstyle}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQs;
