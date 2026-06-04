function Verification() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <a href="/password">
                    <svg className="next-btn" width="46" height="46" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_8782_1260)">
                            <path d="M18 33C26.8366 33 34 25.8366 34 17C34 8.16344 26.8366 1 18 1C9.16344 1 2 8.16344 2 17C2 25.8366 9.16344 33 18 33Z" fill="white" />
                        </g>
                        <path d="M20.9744 11L15 16.9691L20.9744 22.938" stroke="#1E3354" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <filter id="filter0_d_8782_1260" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8782_1260" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8782_1260" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </a>

                <div className="forgot-text-1"><b>Verification code</b></div>
                <small className="forgot-text-1-small">Please enter the verification code we sent to your email address</small>
                <div className="code-inputs">
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                </div>
                <p className="resend-time"><small><small>Resend in 00:10</small></small></p><br />

                <a href="/newpassword">
                    <button className="sign-up-button"><b>next</b></button><br />
                </a>

            </div>
        </div>
    );
}

export default Verification;
