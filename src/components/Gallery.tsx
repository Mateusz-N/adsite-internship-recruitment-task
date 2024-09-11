import img_gallery1 from "@/resources/gallery1.png";
import img_gallery2 from "@/resources/gallery2.png";
import img_gallery3 from "@/resources/gallery3.png";

import NavigationDot from "@/components/NavigationDot";

const Gallery: React.FC<{}> = () => {
    return(
        <section className = "w-full h-auto py-20 flex flex-col flex-auto gap-12 bg-primary-light overflow-hidden">
            <section className = "w-gallery mx-auto flex gap-16">
                <img src = {img_gallery1} alt = ""/>
                <img src = {img_gallery2} alt = ""/>
                <img src = {img_gallery3} alt = ""/>
            </section>
            <nav className = "mx-auto py-2 flex gap-[10px]">
                <NavigationDot active = {true}/>
                <NavigationDot/>
                <NavigationDot/>
                <NavigationDot/>
                <NavigationDot/>
            </nav>
        </section>
    );
}

export default Gallery;