





import Back from "../components/back"


function Support() {
    return (
        <div className="mobile-wrapper">
            <Back />
            <div className="page">

                <div className="p-3">


                    {/* Header */}
                    <div className="chat-header">

                        <button className="back-btn">
                        </button>

                        <div className="admin-avatar">
                            <span className="online-dot"></span>
                        </div>

                        <div className="admin-info">
                            <h3>Admin</h3>
                            <span>Online</span>
                        </div>

                        <button className="menu-btn">
                            <svg width="4" height="19" viewBox="0 0 4 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.81507 3.63014C2.8175 3.63014 3.63014 2.8175 3.63014 1.81507C3.63014 0.812634 2.8175 0 1.81507 0C0.812634 0 0 0.812634 0 1.81507C0 2.8175 0.812634 3.63014 1.81507 3.63014Z" fill="black" />
                                <path d="M1.81507 10.8904C2.8175 10.8904 3.63014 10.0778 3.63014 9.07532C3.63014 8.07289 2.8175 7.26025 1.81507 7.26025C0.812634 7.26025 0 8.07289 0 9.07532C0 10.0778 0.812634 10.8904 1.81507 10.8904Z" fill="black" />
                                <path d="M1.81507 18.1506C2.8175 18.1506 3.63014 17.338 3.63014 16.3356C3.63014 15.3331 2.8175 14.5205 1.81507 14.5205C0.812634 14.5205 0 15.3331 0 16.3356C0 17.338 0.812634 18.1506 1.81507 18.1506Z" fill="black" />
                            </svg>

                        </button>

                    </div>

                    <div className="header-line"></div>

                    {/* Admin Message */}
                    <div className="message-row left">

                        <div className="message admin">
                            Hello! Can I help you?
                        </div>

                        <span className="time">
                            Today, 7:02pm
                        </span>

                    </div>

                    {/* User Message */}
                    <div className="message-row right">

                        <div className="message user">
                            Hi! I have a question about my order
                        </div>

                        <span className="time">
                            Today, 7:02pm
                        </span>

                    </div>

                    {/* Bottom */}
                    <div className="chat-footer">

                        <div className="input-box">
                            Type your messages here
                        </div>

                        <button className="send-btn">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5508 6.22407L3.89308 0.136644C2.19493 -0.559623 0.567182 1.56085 1.70535 2.88309L5.61809 7.42865L0.659288 11.6971C-0.783163 12.9387 0.330813 15.1451 2.18136 14.5594L18.1703 9.4293C19.6082 8.91096 19.8555 6.82758 18.5508 6.22407Z" fill="white" />
                            </svg>

                        </button>

                    </div>

                </div>





            </div>





        </div>

    );
}

export default Support;