





import Menuend from "../components/menuend"
import Back from "../components/back"


function Wishit() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />


                    <div className="products">

                        <div className="tabs">
                            <button className="tab active">All items</button>
                           <a href="/wishit2"> <button className="tab">Boards</button></a>
                        </div>

                        <div className="products-grid">

                            <div className="product-card">
                                <div className="product-image">
                                    <img src="https://i.postimg.cc/C5mZm352/5ff7fc25c9e3fc5d6a2e06d04f48aed5873b9be1.png" alt="" />
                                    <button className="favorite">❤</button>
                                </div>

                                <h4>Front Tie Mini Dress</h4>

                                <div className="price-row">
                                    <span className="price">$59.00</span>
                                    <span className="reviews">(38)</span>
                                </div>

                                <div className="rating">★★★★☆</div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src="https://i.postimg.cc/SN2cNKP0/fc91d640491a54d6427825d70d17317b32339301.png" alt="" />
                                    <button className="favorite">❤</button>
                                </div>

                                <h4>Linen Dress</h4>

                                <div className="price-row">
                                    <span className="price">$52.00</span>
                                    <span className="old-price">$90.00</span>
                                    <span className="reviews">(64)</span>
                                </div>

                                <div className="rating">★★★★★</div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src="https://i.postimg.cc/9MBH9Vgt/ab2f4ed424ae6384ab7d20a54f772bf15d7db671.png" alt="" />
                                    <button className="favorite">❤</button>
                                </div>

                                <h4>Ohara Dress</h4>

                                <div className="price-row">
                                    <span className="price">$85.00</span>
                                    <span className="reviews">(50)</span>
                                </div>

                                <div className="rating">★★★★☆</div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src="https://i.postimg.cc/hGj2snjK/afe1124daae45a0f616c3229768c00d4df765aff.png" alt="" />
                                    <button className="favorite">❤</button>
                                </div>

                                <h4>Tie Back Mini Dress</h4>

                                <div className="price-row">
                                    <span className="price">$67.00</span>
                                    <span className="reviews">(39)</span>
                                </div>

                                <div className="rating">★★★★★</div>
                            </div>

                        </div>

                    </div>



                </div>




            </div>

        </div>

    );
}

export default Wishit;