





import Menuend from "../components/menuend"
import Back from "../components/back"


function Notification() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />

                    <div className="notifications">

                        <div className="notification-card large">
                            <div className="notification-content">
                                <h3>Lucile Banks</h3>
                                <p>
                                    Don't forget buy a watch for dad's birthday. We need to choose a gift
                                    before Friday.
                                </p>
                            </div>
                        </div>

                        <div className="notification-card">
                            <div className="notification-content">
                                <h3>Lucile Banks</h3>
                                <p>Meeting starts in 30 minutes.</p>
                            </div>
                        </div>

                        <div className="notification-card">
                            <div className="notification-content">
                                <h3>Lucile Banks</h3>
                                <p>Your order has been delivered.</p>
                            </div>
                        </div>

                    </div>

                </div>




            </div>

        </div>

    );
}

export default Notification;