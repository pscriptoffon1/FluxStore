





import Menuend from "../components/menuend"
import Back from "../components/back"


function Checkout1() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />



                    <div className="row icon-three">
                        <div className="col-1">  <i class="fa-solid fa-location-dot c-ic-1"></i></div>
                        <div className="col-3">
                            <svg width="63" height="2" viewBox="0 0 63 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H62" stroke="#C8C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 15" />
                            </svg>

                        </div>
                        <div className="col-1">
                            <i class="fa-solid fa-credit-card c-ic-2"></i>
                        </div>
                        <div className="col-3">
                            <svg width="63" height="2" viewBox="0 0 63 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H62" stroke="#C8C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 15" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <i class="fa-solid fa-check c-ic-3"></i>

                        </div>
                    </div>
                    <div className="row position-sh">
                        <div className="text-step-1">
                            <small className="step-text">STEP 1</small><br />
                            <b><big><big>Shipping</big></big></b>
                        </div>
                        <form className="form">
                            <div className="field">
                                <label>First name *</label>
                                <input type="text" />
                            </div>

                            <div className="field error">
                                <label>Last name *</label>
                                <input type="text" />
                                <span className="error-text">Field is required</span>
                            </div>

                            <div className="field">
                                <label>Country *</label>
                                <select>
                                    <option>Select country</option>
                                    <option>Kyrgyzstan</option>
                                    <option>Kazakhstan</option>
                                </select>
                            </div>

                            <div className="field">
                                <label>Street name *</label>
                                <input type="text" />
                            </div>

                            <div className="field">
                                <label>City *</label>
                                <input type="text" />
                            </div>

                            <div className="field">
                                <label>State / Province</label>
                                <input type="text" />
                            </div>

                            <div className="field">
                                <label>Zip-code *</label>
                                <input type="text" />
                            </div>

                            <div className="field">
                                <label>Phone number *</label>
                                <input type="tel" />
                            </div>
                        </form><br />
                        <div className="delivery-options">
                            <p><big>Shipping method</big></p>
                            <label className="delivery-option">
                                <input type="radio" name="delivery" defaultChecked />
                                <div>
                                    <div className="row">
                                        <span className="price">Free</span>
                                        <span className="title">Delivery to home</span>
                                    </div>
                                    <p>Delivery from 3 to 7 business days</p>
                                </div>
                            </label>

                            <label className="delivery-option">
                                <input type="radio" name="delivery" />
                                <div>
                                    <div className="row">
                                        <span className="price">$9.90</span>
                                        <span className="title">Delivery to home</span>
                                    </div>
                                    <p>Delivery from 4 to 6 business days</p>
                                </div>
                            </label>

                            <label className="delivery-option">
                                <input type="radio" name="delivery" />
                                <div>
                                    <div className="row">
                                        <span className="price">$9.90</span>
                                        <span className="title">Fast Delivery</span>
                                    </div>
                                    <p>Delivery from 2 to 3 business days</p>
                                </div>
                            </label>
                        </div><br /><br />
                        <p>Coupon Code</p>
                        <div className="promo-code">

                            <input
                                type="text"
                                placeholder="Have a code? type it here..."
                            />

                            <button type="button">
                                Validate
                            </button>
                        </div>
                        <div className="billing-address">
                            <p>Billing Address</p>
                            <input type="checkbox"></input><b>Copy address data from shipping</b>
                        </div><br /><br /><br />
                    <br /><br />
                       <a className="i-b" href="/check2"> <button className="continue-btn">
                            Continue to payment
                        </button></a>
                    </div>
                </div>




            </div>

        </div>

    );
}

export default Checkout1;
