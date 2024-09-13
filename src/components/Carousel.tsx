import {useEffect, useRef, useState} from "react";

import NavigationDot from "@/components/NavigationDot";

interface CarouselProps {
    images: string[]
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
    const [activeImage, setActiveImage] = useState(images[0]);
    const carouselRef = useRef<HTMLElement | null>(null);

    const handleImageChange = (image: string) => {
        setActiveImage(image);
        if(carouselRef.current) {
            carouselRef.current.style.transition = "left ease-in-out 0.25s";
        }
    }

    useEffect(() => {
        if(carouselRef.current) {
            carouselRef.current.style.transition = "none";
        }
    },[images]);

    return(
        <section className = "w-full h-auto py-20 flex flex-col flex-auto gap-12 bg-primary-light overflow-hidden">
            <section
                className = {`w-gallery mx-auto flex gap-16 relative transition-none ease-in-out`}
                style = {{left: `calc(-1 * ${images.length > 0 ? images.indexOf(activeImage) : 0} * (4rem + 601px))`}}
                ref = {carouselRef}
            >
                {
                    images.length > 0 ? images.map(image => (
                        <img src = {image} alt = "" key = {image}/>
                    )) : <p className = "w-full text-center text-4xl text-gray-500">Ta galeria jest pusta</p>
                }
            </section>
            <nav className = "mx-auto py-2 flex gap-[10px]">
                {
                    images.length > 0 ? images.map(image => (
                        <NavigationDot active = {activeImage === image} onClick = {() => handleImageChange(image)} key = {image}/>
                    )) : null
                }
            </nav>
        </section>
    );
}

export default Carousel;