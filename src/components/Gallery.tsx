import {useState} from "react";

import img_carsGallery1 from "@/resources/gallery1.png";
import img_carsGallery2 from "@/resources/gallery2.png";
import img_carsGallery3 from "@/resources/gallery3.png";

import Carousel from "@/components/Carousel";
import Headers from "@/components/Headers";

export interface Tab {
    name: string,
    label: string,
    images: string[]
}

const Gallery: React.FC<{}> = () => {
    const tabs = [
        {name: "cars", label: "Samochody osobowe", images: [img_carsGallery1, img_carsGallery2, img_carsGallery3]},
        {name: "vans", label: "Samochody dostawcze", images: []},
    ];
    
    const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

    const handleTabChange = (tab: Tab): void => {
        setActiveTab(tab);
    }
    
    return(
        <section>
            <Headers tabs = {tabs} activeTab = {activeTab} onTabChange = {handleTabChange}/>
            <Carousel images = {activeTab.images}/>
        </section>
    );
}

export default Gallery;