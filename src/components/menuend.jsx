function Menuend() {
    return (
        <svg
            className="menu-end"
            width="380"
            height="78"
            viewBox="0 0 375 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_8782_1338)">
                <path
                    d="M1 23C1 11.9543 9.9543 3 21 3H355C366.046 3 375 11.9543 375 23V83H1V23Z"
                    fill="white"
                />
            </g>

            {/* HOME */}
            <a href="/homepage">
                <rect x="40" y="20" width="50" height="40" fill="transparent" />
                <path
                    d="M75 35.25L67.5645 27.862C66.4224 26.7127 62.5721 26.7127 61.4297 27.862L54 35.25V37.843V46.9384C54 48.0762 54.916 49 56.0468 49H60.5731C61.0574 49 61.4503 48.6042 61.4503 48.1165V41.6372C61.4503 41.1483 61.8432 40.7537 62.3275 40.7537H66.6667C67.1509 40.7537 67.5439 41.1483 67.5439 41.6372V48.1165C67.5439 48.6042 67.9368 49 68.4211 49H72.9532C74.084 49 75 48.0762 75 46.9384V37.8489V35.25Z"
                    fill="black"
                />
            </a>

            {/* SEARCH */}
            <a href="/discover">
                <rect x="120" y="20" width="55" height="40" fill="transparent" />
                <path
                    d="M159.43 47.8248L155.337 43.7276C158.533 39.6016 158.197 33.7253 154.523 30.0232C152.589 28.0739 150.008 27 147.262 27C144.514 27 141.934 28.074 140 30.0232C138.066 31.9724 137 34.573 137 37.3411C137 40.1104 138.066 42.7098 140 44.6589C141.934 46.6082 144.515 47.6821 147.262 47.6821C149.533 47.6821 151.777 46.9194 153.571 45.4779L157.636 49.6324C157.888 49.8863 158.197 50 158.533 50C158.87 50 159.179 49.8587 159.43 49.6324C159.935 49.1523 159.935 48.3333 159.43 47.8245Z"
                    fill="#E6E8EC"
                />
            </a>

            {/* ORDERS */}
            <a href="/myorders1">
                <rect x="205" y="20" width="55" height="40" fill="transparent" />
                <path
                    d="M227.538 32.2083V31.6875C227.538 29.1017 229.638 27 232.226 27C234.814 27 236.913 29.1001 236.913 31.6875V32.2083H238.594C239.994 32.2083 241.211 33.3053 241.353 34.6997L242.629 47.2141C242.779 48.6856 241.669 49.9167 240.192 49.9167H224.26C222.78 49.9167 221.672 48.6899 221.823 47.2141L223.098 34.6997C223.24 33.3093 224.46 32.2083 225.858 32.2083H227.538Z"
                    fill="#E6E8EC"
                />
            </a>

            {/* PROFILE */}
            <a href="/profile">
                <rect x="290" y="20" width="55" height="40" fill="transparent" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M323.783 45.8923C323.783 49.7376 318.321 50.1821 314.214 50.1821L313.92 50.1819C311.303 50.1758 304.643 50.0162 304.643 45.869C304.643 42.1021 309.885 41.5987 313.961 41.5797L314.508 41.5794C317.124 41.5855 323.783 41.745 323.783 45.8923Z"
                    fill="#E6E8EC"
                />
            </a>

            <defs>
                <filter
                    id="filter0_d_8782_1338"
                    x="-2"
                    y="0"
                    width="380"
                    height="86"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_8782_1338"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_8782_1338"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default Menuend;