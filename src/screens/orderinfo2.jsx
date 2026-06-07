import Back from "../components/back";

function Orderinfo2() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="p-3">
                    <Back />

                    <div className="tracking-page">
                        <div className="tracking-banner">
                            <div>
                                <h3>Your order is on the way</h3>
                                <p>Click here to track your order</p>
                            </div>

                            <div className="tracking-icon"><svg width="59" height="39" viewBox="0 0 59 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_11113_2425)">
                                    <path d="M38.1045 9.75H47.8641C48.6753 9.75 49.4374 10.1522 49.8922 10.8103L54.0837 18.2812H55.3128C56.6895 18.2812 57.7712 19.1831 57.7712 20.9747V29.25C57.7712 30.5906 56.6649 31.6875 55.3128 31.6875H52.8545" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M17.208 1.21875H38.1038V31.6875H19.6663" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M9.83333 31.6875H3.6875" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M52.854 32.9185C52.854 35.5997 50.6538 37.7813 47.9251 37.7813C45.2086 37.7813 42.9961 35.5997 42.9961 32.9185C42.9961 30.2372 45.1963 28.0557 47.9251 28.0557C50.6538 28.0557 52.854 30.225 52.854 32.9185Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M19.6909 32.9185C19.6909 35.5997 17.4907 37.7813 14.762 37.7813C12.0332 37.7813 9.83301 35.5997 9.83301 32.9185C9.83301 30.2372 12.0332 28.0557 14.762 28.0557C17.4907 28.0557 19.6909 30.225 19.6909 32.9185Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M38.1045 31.6875H43.0212" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M40.5625 19.5H49.1667V18.2812L46.7083 14.625" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M0 15.8438H20.8958" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M9.83301 8.53125H28.2705" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M7.37533 8.53125H4.91699" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M14.7503 1.21875H12.292" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_11113_2425">
                                        <rect width="59" height="39" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            </div>
                        </div>

                        <div className="tracking-info-card">
                            <div className="info-row">
                                <span>Order number</span>
                                <strong>#1524</strong>
                            </div>

                            <div className="info-row">
                                <span>Tracking Number</span>
                                <strong>IK287368838</strong>
                            </div>

                            <div className="info-row">
                                <span>Delivery address</span>
                                <strong>SBI Building, Software Park</strong>
                            </div>
                        </div>

                        <div className="order-summary-card">
                            <div className="product-row">
                                <div>
                                    <p>Sportwear Set</p>
                                    <small>x1</small>
                                </div>
                                <strong>$80.00</strong>
                            </div>

                            <div className="product-row">
                                <div>
                                    <p>Cotton T-shirt</p>
                                    <small>x1</small>
                                </div>
                                <strong>$30.00</strong>
                            </div>

                            <div className="summary-row">
                                <span>Sub Total</span>
                                <strong>$110.00</strong>
                            </div>

                            <div className="summary-row">
                                <span>Shipping</span>
                                <strong>$0.00</strong>
                            </div>

                            <hr />

                            <div className="summary-row total">
                                <span>Total</span>
                                <strong>$110.00</strong>
                            </div>
                        </div>
                      <a className="continue-shopping-btn1" href="/trackorder"><button className="continue-shopping-btn">
                            Continue shopping
                        </button>
                        </a>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orderinfo2;