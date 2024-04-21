import ProductsSection from "../ProductsSection"

import "./index.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="button-tabs-container">
                <button type="button" className="button-tab">HOME</button>
                <button type="button" className="button-tab">SHOP</button>
            </div>
            <div className="text-container">
                <h1 className="text-heading">
                    DISCOVER OUR PRODUCTS
                </h1>
                <p className="text-info">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
            <ProductsSection />
        </div>
    )
}
export default Home