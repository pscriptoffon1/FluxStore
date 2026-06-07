import Back from "../components/back";

function Trackorder() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="p-3">
                    <Back />

                    <div className="tracking-page">

                        <div className="tracking-header">
                            <p>Delivered on 15.05.21</p>

                            <div className="tracking-number">
                                <span>Tracking Number :</span>
                                <strong>IK287368838</strong>
                            </div>
                        </div>

                        <div className="tracking-timeline">
                            {[
                                ["Parcel is successfully delivered", "15 May 10:20"],
                                ["Parcel is out for delivery", "14 May 08:00"],
                                ["Parcel is received at delivery Branch", "13 May 17:25"],
                                ["Parcel is in transit", "13 May 07:00"],
                                ["Sender has shipped your parcel", "12 May 14:25"],
                                ["Sender is preparing to ship your order", "12 May 10:01"],
                            ].map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-dot" />

                                    <div className="timeline-content">
                                        <span>{item[0]}</span>
                                        <small>{item[1]}</small>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rate-reminder">
                            <div className="gift-icon">
                                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1836 7.36914H13.3984V4.30664C13.3984 1.93196 11.4665 0 9.0918 0C6.71712 0 4.78516 1.93196 4.78516 4.30664V12.1543H4.30664C1.93196 12.1543 0 14.0863 0 16.4609V19.3164C0 20.4928 0.603791 21.9504 1.43555 22.7821L2.87109 24.2177V29.8438C2.87109 30.6366 3.51384 31.2793 4.30664 31.2793H21.0547C21.8475 31.2793 22.4902 30.6366 22.4902 29.8438V11.6758C22.4902 9.3011 20.5583 7.36914 18.1836 7.36914ZM2.87109 16.4609C2.87109 15.6694 3.51508 15.0254 4.30664 15.0254H6.2207C7.01351 15.0254 7.65625 14.3826 7.65625 13.5898V4.30664C7.65625 3.51508 8.30024 2.87109 9.0918 2.87109C9.88336 2.87109 10.5273 3.51508 10.5273 4.30664V8.80469C10.5273 9.59749 11.1701 10.2402 11.9629 10.2402H18.1836C18.9752 10.2402 19.6191 10.8842 19.6191 11.6758V22.1875H4.90124L3.4657 20.752C3.17677 20.4631 2.87109 19.7252 2.87109 19.3164V16.4609ZM5.74219 28.4082V25.0586H19.6191V28.4082H5.74219Z" fill="#474340" />
                                </svg>
                            </div>

                            <div className="rate-content">
                                <h4>Don't forget to rate</h4>

                                <p>Rate product to get 5 points for collect.</p>

                                <div className="rate-stars">
                                    ★★★★★
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trackorder;