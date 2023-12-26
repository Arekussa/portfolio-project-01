import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "rgb(132, 126, 243)" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "rgb(132, 126, 243)" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "radial-gradient(circle at 50% -20.71%, #b2dafc 0, #b8d9fd 6.25%, #bed7fd 12.5%, #c5d5fd 18.75%, #ccd4fc 25%, #d2d2fa 31.25%, #d9d0f8 37.5%, #dfcff5 43.75%, #e5cdf2 50%, #eaccee 56.25%, #efcaea 62.5%, #f4c9e5 68.75%, #f8c8e0 75%, #fbc8db 81.25%, #fdc7d6 87.5%, #ffc7d1 93.75%, #ffc7cc 100%)", color: "black" }}
                >
                    <h2>Your Text:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "radial-gradient(circle at 50% -20.71%, #b2dafc 0, #b8d9fd 6.25%, #bed7fd 12.5%, #c5d5fd 18.75%, #ccd4fc 25%, #d2d2fa 31.25%, #d9d0f8 37.5%, #dfcff5 43.75%, #e5cdf2 50%, #eaccee 56.25%, #efcaea 62.5%, #f4c9e5 68.75%, #f8c8e0 75%, #fbc8db 81.25%, #fdc7d6 87.5%, #ffc7d1 93.75%, #ffc7cc 100%)", color: "black" }}
                >
                    <h2>Your Text:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "radial-gradient(circle at 50% -20.71%, #b2dafc 0, #b8d9fd 6.25%, #bed7fd 12.5%, #c5d5fd 18.75%, #ccd4fc 25%, #d2d2fa 31.25%, #d9d0f8 37.5%, #dfcff5 43.75%, #e5cdf2 50%, #eaccee 56.25%, #efcaea 62.5%, #f4c9e5 68.75%, #f8c8e0 75%, #fbc8db 81.25%, #fdc7d6 87.5%, #ffc7d1 93.75%, #ffc7cc 100%)", color: "black" }}
                >
                    <h2>Your Text:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
