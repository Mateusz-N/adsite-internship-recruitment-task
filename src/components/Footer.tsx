import {Link} from "react-router-dom";

const Footer: React.FC<{}> = () => {
    return(
        <footer className = "w-full h-auto flex justify-between gap-2.5 py-6 px-[120px] bg-primary-dark text-white border-t border-white">
            <p className = "font-bold"><Link to = "/">Cars Spot</Link></p>
            <p className = "underline"><Link to = "https://www.example.com/">Polityka prywatności</Link></p>
        </footer>
    );
}

export default Footer;