import React from 'react'
import { easeOut, motion } from "framer-motion";

const Header = () => {
    return (
        <section className=''>
            <div
                id="about-header"
                className="relative flex h-[25vw] tab-s:h-[30vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
            >
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        ease: "easeOut",
                        type: "spring",
                    }}
                    id="header-contents"
                    className="absolute flex flex-col items-center place-self-center left-0 right-0 mx-auto tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
                >
                    <h2
                        id="header-title"
                        className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px]"
                    >
                        GALLERY
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}

export default Header