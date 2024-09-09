import img_decorativeLines from "@/resources/lines.png";
import img_cars from "@/resources/main.png";

import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";

const Main: React.FC<{}> = () => {
    return(
        <main className = "h-[825px] w-full py-[120px] bg-primary-light relative">
            <img src = {img_decorativeLines} alt = "" className = "absolute top-[-79px] right-[71px] z-0" />
            <section className = "w-container-width mx-auto flex flex-col gap-y-12 relative z-10">
                <section className = "flex flex-col gap-y-8">
                    <h1 className = "font-headers text-[76.36px] leading-[1.1] tracking-h1">SPRZEDAJEMY SAMOCHODY<br/>Z EUROPY</h1>
                    <p>Kup komfortowy pojazd, aby każda podróż<br/>była wyjątkowym przeżyciem.</p>
                </section>
                <section className = "flex gap-x-6">
                    <ButtonPrimary>Zobacz zdjęcia</ButtonPrimary>
                    <ButtonSecondary>Zadzwoń do nas</ButtonSecondary>
                </section>
            </section>
            <img src = {img_cars} alt = "" className = "absolute top-[328px] right-0" />
        </main>
    );
}

export default Main;