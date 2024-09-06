import { Fragment } from "react";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Gallery from "@/components/Gallery";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const HomePage: React.FC<{}> = () => {
    return(
        <Fragment>
            <Navbar>

            </Navbar>
            <Main>

            </Main>
            <Gallery>

            </Gallery>
            <SEO>

            </SEO>
            <Footer>

            </Footer>
        </Fragment>
    );
}

export default HomePage;