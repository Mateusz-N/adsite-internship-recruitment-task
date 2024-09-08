import img_logo from "@/resources/logo.png";
import ButtonPrimary from "./ButtonPrimary";

const Navbar: React.FC<{}> = () => {
    return(
        <nav className = "w-full h-auto bg-primary-light py-4">
            <main className = "w-container-width h-auto mx-auto flex justify-between items-center">
                <img src = {img_logo} alt = "CarsSpot logo" />
                <ul className = "flex gap-x-24 font-buttons">
                    <li>Galeria zdjęć</li>
                    <li>FaQ</li>
                </ul>
                <ButtonPrimary>Zadzwoń do nas</ButtonPrimary>
            </main>
        </nav>
    );
}

export default Navbar;