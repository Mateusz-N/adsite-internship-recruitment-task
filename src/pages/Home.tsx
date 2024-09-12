import {Fragment} from "react";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Headers from "@/components/Headers";
import Gallery from "@/components/Gallery";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const HomePage: React.FC<{}> = () => {
    return(
        <Fragment>
            <Navbar/>
            <Main/>
            <Headers/>
            <Gallery/>
            <SEO/>
            <Footer/>
        </Fragment>
    );
}

export default HomePage;