import {useState} from "react";

import Tab from "@/components/Tab";

const Headers: React.FC<{}> = () => {
    const tabs = [
        {name: "cars", label: "Samochody osobowe"},
        {name: "vans", label: "Samochody dostawcze"},
    ];
    
    const [activeTab, setActiveTab] = useState<string>("cars");

    const handleTabChange = (tabName: string): void => {
        setActiveTab(tabName);
    }

    return(
        <section className = "w-full h-auto pt-20 bg-primary-light" id = "galleryHeaders">
            <section className = "w-gallery mx-auto flex flex-col gap-6">
                <header>
                    <p className = "text-secondary text-[21.5px] leading-[32.25px]">Prezentacja firmy</p>
                    <h2 className = "font-headers text-[40px] leading-[48px] text-[#1d1d1b]">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h2>
                </header>
                <nav>
                    <ul className = "flex gap-12 font-buttons">
                        {
                            tabs.map(tab => (
                                <Tab active = {activeTab === tab.name} onTabChange = {() => handleTabChange(tab.name)} key = {tab.name}>{tab.label}</Tab>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </section>
    );
}

export default Headers;