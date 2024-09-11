const Footer: React.FC<{}> = () => {
    return(
        <footer className = "w-full h-auto flex justify-between gap-2.5 py-6 px-[120px] bg-primary-dark text-white border-t border-white">
            <p className = "font-bold">Cars Spot</p>
            <p className = "underline">Polityka prywatności</p>
        </footer>
    );
}

export default Footer;