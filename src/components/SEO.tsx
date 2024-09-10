import SEOArticle from "@/components/SEOArticle";

const SEO: React.FC<{}> = () => {
    return(
        <aside className = "w-full h-auto py-[88px] bg-primary-dark">
            <section className = "w-container-width mx-auto flex justify-between text-white">
                <SEOArticle/>
                <SEOArticle/>
            </section>
        </aside>
    );
}

export default SEO;