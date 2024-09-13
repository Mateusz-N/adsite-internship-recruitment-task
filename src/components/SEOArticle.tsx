import {useState} from "react";

const SEOArticle: React.FC<{}> = () => {
    const [articleExpanded, setArticleExpanded] = useState(false);

    const handleExpandButtonClick = () => {
        setArticleExpanded(prev => !prev);
    }

    return(
        <article className = "w-seo-article flex flex-col gap-4">
            <h3 className = "font-headers text-seo-header tracking-h3">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h3>
            <section className = "w-full flex flex-col items-start gap-6 text-seo-paragraph">
                <p>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  <span className = {articleExpanded ? "hidden" : ""}>[...]</span><span className = {articleExpanded ? "" : "hidden"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                <button className = "flex items-center gap-1.5 border-b-expand-button border-white pb-1.5" onClick = {handleExpandButtonClick}>
                    <p className = "">{articleExpanded ? "Zwiń" : "Rozwiń"}</p>
                    <svg width = "13" height = "15" viewBox = "0 0 13 15" fill = "none" xmlns = "http://www.w3.org/2000/svg" className = {`${articleExpanded ? "rotate-180" : "rotate-0"} transition-all duration-300`}>
                        <path
                            d = "M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                            fill = "white"
                        />
                    </svg>
                </button>
            </section>
        </article>
    );
}

export default SEOArticle;