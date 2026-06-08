





import Menuend from "../components/menuend"
import Back from "../components/back"


function Newcard() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />






                    <div className="row position-sh">
                       
                      
                        <div className="card-header">
                            <h3 className="card-title">Choose your card</h3>
                            <a href="/addnew">
                                <button className="add-card-btn">
                                    Add new +
                                </button>
                            </a>
                        </div>
                        <div className="cards-wrapper">
                            <div className="credit-card visa-card">
                                <div className="card-logo">VISA</div>

                                <div className="card-number">
                                    <span>4364</span>
                                    <span>1345</span>
                                    <span>8932</span>
                                    <span>8378</span>
                                </div>

                                <div className="card-footer">
                                    <div>
                                        <p className="card-label">CARDHOLDER NAME</p>
                                        <p className="card-value">Sunie Pham</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="card-label">VALID THRU</p>
                                        <p className="card-value">05/24</p>
                                    </div>
                                </div>
                            </div>

                            <div className="credit-card mastercard-card">
                                <div className="mastercard-logo">
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="card-number">
                                    <span>4364</span>
                                    <span>1345</span>
                                    <span>8932</span>
                                    <span>8378</span>
                                </div>

                                <div className="card-footer">
                                    <div>
                                        <p className="card-label">CARDHOLDER NAME</p>
                                        <p className="card-value">Sunie Pham</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="card-label">VALID THRU</p>
                                        <p className="card-value">05/24</p>
                                    </div>
                                </div>
                            </div>

                            <div className="credit-card visa-card">
                                <div className="card-logo">VISA</div>

                                <div className="card-number">
                                    <span>5214</span>
                                    <span>8765</span>
                                    <span>1234</span>
                                    <span>9876</span>
                                </div>

                                <div className="card-footer">
                                    <div>
                                        <p className="card-label">CARDHOLDER NAME</p>
                                        <p className="card-value">John Smith</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="card-label">VALID THRU</p>
                                        <p className="card-value">08/27</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <small>or check out with</small> <br /><br />
                        <div className="payment-logos">

                            <button className="payment-logo">
                                <img src="https://static.vecteezy.com/system/resources/previews/028/766/351/non_2x/paypal-payment-icon-symbol-free-png.png" alt="PayPal" />
                            </button>

                            <button className="payment-logo">
                                <img src="https://i.pinimg.com/1200x/43/ed/1d/43ed1d4685a1e776836cf19557cfca73.jpg" alt="Visa" />
                            </button>

                            <button className="payment-logo">
                                <img src="data:image/png;base64,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" alt="Mastercard" />
                            </button>

                            <button className="payment-logo">
                                <img src="https://www.nopcommerce.com/images/thumbs/0002310_alipay-payment-module_550.png" alt="Alipay" />
                            </button>

                            <button className="payment-logo amex">
                                <span>AMEX</span>
                            </button>
                        </div><br /><br />





                        <div className="checkout-panel">
                         
                            

                           <a href="/check2"> <button className="order-btn">
                                Place my order
                            </button></a>
                        </div>
                    </div>
                </div>




            </div>

        </div>

    );
}

export default Newcard;