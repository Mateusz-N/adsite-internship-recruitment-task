import img_decorativeLines from "@/resources/lines.png";
import img_cars from "@/resources/main.png";

import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";

const Main: React.FC<{}> = () => {
    return(
        <main className = "h-[825px] w-full py-[120px] flex-none bg-primary-light relative">
            <img src = {img_decorativeLines} alt = "" className = "max-w-none absolute top-[-158px] md:top-[-79px] w-[420px] xs:w-[400px] sm:w-[670px] md:w-[650px] lg:w-auto right-[-320px] xs:right-[-240px] sm:right-[-320px] md:right-[-180px] lg:right-[-24px] xl:right-[71px] z-0" />
            <section className = "w-container-width mx-auto flex flex-col gap-y-12 relative z-10">
                <section className = "flex flex-col gap-y-8">
                    <h1 className = "font-headers text-h1-sm sm:text-h1-md md:text-h1 leading-h1 tracking-h1">SPRZEDAJEMY SAMOCHODY<br/>Z EUROPY</h1>
                    <p>Kup komfortowy pojazd, aby każda podróż<br/>była wyjątkowym przeżyciem.</p>
                </section>
                <section className = "flex gap-x-6">
                    <ButtonPrimary>Zobacz zdjęcia</ButtonPrimary>
                    <ButtonSecondary>Zadzwoń do nas</ButtonSecondary>
                </section>
            </section>
            <img src = {img_cars} alt = "" className = "absolute top-[220px] xs:top-[180px] sm:top-[420px] md:top-[400px] lg:top-[360px] xl:top-[328px] right-0 w-2/5 sm:w-3/5 md:w-2/3 lg:w-3/4 xl:w-full max-w-[1064px]" />
        </main>
    );
}

export default Main;