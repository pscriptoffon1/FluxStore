





import Menuend from "../components/menuend"
import Back from "../components/back"


function Addnew() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />

                    <div className="credit-card gold-card">
                        <div className="gold-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                        </div>

                        <div className="card-number">
                            <span>****</span>
                            <span>****</span>
                            <span>****</span>
                            <span>****</span>
                        </div>

                        <div className="card-footer">
                            <div>
                                <p className="card-label">CARDHOLDER NAME</p>
                                <p className="card-value">NAME</p>
                            </div>

                            <div className="text-right">
                                <p className="card-label">VALID THRU</p>
                                <p className="card-value">MM/YY</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-cardholder"><small>Cardholder Name</small></small>
                    <input
                        type="text"
                        className="promo-input"
                        placeholder="Sunie Pham"
                    /> <br />
                    <small className="text-cardholder1"><small>Card Number</small></small>
                    <input
                        type="text"
                        className="promo-input1"
                        placeholder="5412363272837284"
                    /> <br /><br /><br /><br />

                    <div className="row">
                        <div className="card-details">
                            <div className="input-group">
                                <label>Expires</label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                />
                            </div>

                            <div className="input-group">
                                <label>CVV</label>
                                <input
                                    type="password"
                                    placeholder="***"
                                    maxLength={3}
                                />
                            </div>
                        </div> <br /><br /><br /><br /><br /><br />
                       <a className="add-card-button" href=""> <button className="add-card-button">
                            Add card
                        </button></a>
                    </div>

                </div>




            </div>

        </div>

    );
}

export default Addnew;