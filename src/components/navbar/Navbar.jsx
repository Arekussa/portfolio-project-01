import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Your Name
                </motion.span>
                <div className="social">
                    <a href="https://github.com/Arekussa" target="_blank" rel="noopener noreferrere">
                        <img src="/github.png" alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexsandra-nicole-barra-cancino-b8794122a/" target="_blank" rel="noopener noreferrere">
                        <img src="/linkedin.png" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
