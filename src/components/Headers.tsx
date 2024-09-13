import {Tab} from "@/components/Gallery";

import NavigationTab from "@/components/NavigationTab";

interface HeadersProps {
    tabs: Tab[],
    activeTab: Tab,
    onTabChange: (tab: Tab) => void
}

const Headers: React.FC<HeadersProps> = ({tabs, activeTab, onTabChange}) => {
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
                                <NavigationTab active = {activeTab.name === tab.name} onTabChange = {() => onTabChange(tab)} key = {tab.name}>{tab.label}</NavigationTab>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </section>
    );
}

export default Headers;