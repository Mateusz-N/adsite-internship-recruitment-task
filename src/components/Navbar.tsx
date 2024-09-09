import img_logo from "@/resources/logo.png";

import ButtonPrimary from "@/components/ButtonPrimary";

const Navbar: React.FC<{}> = () => {
    return(
        <nav className = "w-full h-auto bg-primary-light py-4">
            <section className = "w-container-width h-auto mx-auto flex justify-between items-center relative z-10">
                <img src = {img_logo} alt = "CarsSpot logo" />
                <ul className = "flex gap-x-24 font-buttons">
                    <li>Galeria zdjęć</li>
                    <li>FaQ</li>
                </ul>
                <ButtonPrimary>Zadzwoń do nas</ButtonPrimary>
            </section>
        </nav>
    );
}

export default Navbar;