const SEOArticle: React.FC<{}> = () => {
    return(
        <article className = "w-seo-article flex flex-col gap-4">
            <h3 className = "font-headers text-seo-header tracking-h3">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h3>
            <section className = "w-full flex flex-col items-start gap-6 text-seo-paragraph">
                <p>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
                <button className = "flex items-center gap-1.5 border-b-expand-button border-white pb-1.5">
                    <p className = "">Rozwiń</p>
                    <svg width = "13" height = "15" viewBox = "0 0 13 15" fill = "none" xmlns = "http://www.w3.org/2000/svg">
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