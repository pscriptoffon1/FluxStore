





import Menuend from "../components/menuend"
import Back from "../components/back"
import Navbar from "../components/navbar"


function Orders2() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Navbar />

                    <div class="orders-page">
                        <br />
                        <div class="order-tabs">
                                 <a href="/myorders1"><button class="tab active2">Pending</button></a>
                            <a href="/orders2"><button class="tab active">Delivered</button></a>
                            <a href="/orders3"><button class="tab active2">Cancelled</button></a>
                        </div>
                        <br />
                        <div class="orders-list">

                            <div class="order-card">
                                <div class="order-header">
                                    <h3>Order #1524</h3>
                                    <span>13/05/2021</span>
                                </div>

                                <p><span>Tracking number:</span> IK287368838</p>
                                <p><span>Quantity:</span> 2</p>

                                <div class="order-price">
                                    <span>Subtotal:</span>
                                    <strong>$110</strong>
                                </div>

                                <div class="order-footer">
                                    <span class="status pending1">DELIVERED</span>
                                    <a href="/orderinfo1"><button>Details</button></a>
                                </div>
                            </div>

                            <div class="order-card">
                                <div class="order-header">
                                    <h3>Order #1524</h3>
                                    <span>12/05/2021</span>
                                </div>

                                <p><span>Tracking number:</span> IK2873218897</p>
                                <p><span>Quantity:</span> 3</p>

                                <div class="order-price">
                                    <span>Subtotal:</span>
                                    <strong>$230</strong>
                                </div>

                                <div class="order-footer">
                                    <span class="status pending1">DELIVERED</span>
                                    <button>Details</button>
                                </div>
                            </div>

                            <div class="order-card">
                                <div class="order-header">
                                    <h3>Order #1524</h3>
                                    <span>10/05/2021</span>
                                </div>

                                <p><span>Tracking number:</span> IK237368820</p>
                                <p><span>Quantity:</span> 5</p>

                                <div class="order-price">
                                    <span>Subtotal:</span>
                                    <strong>$490</strong>
                                </div>

                                <div class="order-footer">
                                    <span class="status pending1">DELIVERED</span>
                                    <button>Details</button>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>



                <Menuend />
            </div>

        </div>

    );
}

export default Orders2;