import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

import img_logo from "@/resources/logo.png";

import LinkButtonPrimary from "@/components/LinkButtonPrimary";

const Navbar: React.FC<{}> = () => {
    return(
        <nav className = "w-full h-auto bg-primary-light py-4">
            <section className = "w-container-width h-auto mx-auto flex flex-wrap flex-col md:flex-row gap-2.5 justify-between items-center relative z-10">
                <Link to = "/"><img src = {img_logo} alt = "CarsSpot logo" /></Link>
                <ul className = "flex gap-x-6 md:gap-x-24 font-buttons">
                    <li><HashLink smooth to = "/#galleryHeaders">Galeria zdjęć</HashLink></li>
                    <li><Link to = "https://www.example.com/">FaQ</Link></li>
                </ul>
                <LinkButtonPrimary to = "https://www.example.com/">Zadzwoń do nas</LinkButtonPrimary>
            </section>
        </nav>
    );
}

export default Navbar;