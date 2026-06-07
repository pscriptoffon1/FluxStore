





import Menuend from "../components/menuend"
import Back from "../components/back"
import Navbar from "../components/navbar"


function Orderinfo1() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />


                    <div class="order-details-page">

                        <div class="delivery-banner">
                            <div>
                                <h3>Your order is delivered</h3>
                                <p>Rate product to get 5 points for collect.</p>
                            </div>

                            <div class="delivery-icon"><svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2588 38.9503C18.6958 38.5133 19.1558 37.8002 20.5588 37.8002C21.9619 37.8002 36.4062 37.8002 37.8092 37.8002C39.0857 37.8002 46.1124 30.7506 47.0094 29.7501C47.8719 28.7841 51.7015 23.0339 52.7595 20.5499C52.0925 19.6529 50.287 18.9053 48.1594 19.3999C46.1239 19.8714 44.9279 21.3319 43.5593 24L38.2922 26.737" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M25.158 30.9008C25.158 30.9008 34.3582 30.9008 35.5082 30.9008C40.1083 30.9008 40.1083 25.1506 35.5082 25.1506C34.3582 25.1506 31.4831 25.1506 28.286 25.1506C27.3315 25.1506 25.526 22.8506 24.0079 22.8506C23.3294 22.8506 19.8103 22.8506 18.2578 22.8506C16.7053 22.8506 14.7732 24.1156 13.6577 25.1506C11.9327 26.8757 9.05762 29.7507 9.05762 29.7507" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M6.7492 27.451L1 33.2002L14.7997 46.9999L20.5489 41.2507L6.7492 27.451Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M6.75781 33.2002L9.05786 35.5002" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M49.3091 19.4004V1H17.1084V22.8505" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M37.8086 1V5.6001H28.6084V1" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M20.5576 18.25H22.8577" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M24.0078 18.25H26.3079" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M27.458 18.25H29.7581" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            </svg>
                            </div>
                        </div>

                        <div class="order-info">

                            <div class="info-row">
                                <span class="info-label">Order number</span>
                                <span class="info-value">#1514</span>
                            </div>

                            <div class="info-row">
                                <span class="info-label">Tracking Number</span>
                                <span class="info-value">IK987362341</span>
                            </div>

                            <div class="info-row">
                                <span class="info-label">Delivery address</span>
                                <span class="info-value">
                                    SBI Building, Software Park
                                </span>
                            </div>

                        </div>

                        <div class="order-summary">

                            <div class="product-row">
                                <div class="product-name">
                                    <span>Maxi Dress</span>
                                    <span>x1</span>
                                </div>

                                <span class="product-price">$68.00</span>
                            </div>

                            <div class="product-row">
                                <div class="product-name">
                                    <span>Linen Dress</span>
                                    <span>x1</span>
                                </div>

                                <span class="product-price">$52.00</span>
                            </div>

                            <div class="summary-row">
                                <span>Sub Total</span>
                                <span>$120.00</span>
                            </div>

                            <div class="summary-row">
                                <span>Shipping</span>
                                <span>$0.00</span>
                            </div>

                            <div class="summary-divider"></div>

                            <div class="summary-row summary-total">
                                <span>Total</span>
                                <span>$120.00</span>
                            </div>

                        </div>

                        <div class="order-actions">
                           <a  href="/myorders1"><button class="btn-outline p-1">
                                Return home
                            </button>
</a> 
                           <a href="/rateproduct"><button class="btn-dark">
                                Rate
                            </button>
                            </a> 
                        </div>

                    </div>

                </div>




            </div>

        </div>

    );
}

export default Orderinfo1;