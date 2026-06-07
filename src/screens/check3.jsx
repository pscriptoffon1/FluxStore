





import Menuend from "../components/menuend"
import Back from "../components/back"


function Check3() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />



                    <div className="row icon-three">
                        <div className="col-1">  <i class="fa-solid fa-location-dot c-ic-111"></i></div>
                        <div className="col-3">
                            <svg width="63" height="2" viewBox="0 0 63 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H62" stroke="#C8C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 15" />
                            </svg>

                        </div>
                        <div className="col-1">
                            <i class="fa-solid fa-credit-card c-ic-222"></i>
                        </div>
                        <div className="col-3">
                            <svg width="63" height="2" viewBox="0 0 63 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H62" stroke="#C8C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 15" />
                            </svg>
                        </div>
                        <div className="col-1">
                            <i class="fa-solid fa-check c-ic-333"></i>

                        </div>
                    </div>




                    <div className="row position-sh">
                        <div className="order-success">
                            <h1 className="success-title">
                                Order Completed
                            </h1>

                            <div className="success-icon">
                                ✓
                            </div>

                            <p className="success-text">
                                Thank you for your purchase.
                                <br />
                                You can view your order in
                                <br />
                                "My Orders" section.
                            </p>

                            <a className="continue-btn" href="myorders1"><button className="continue-btn">
                                Continue shopping
                            </button>
                            </a>
                        </div>
                    </div>
                </div>




            </div>

        </div>

    );
}

export default Check3;