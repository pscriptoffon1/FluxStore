





import Menuend from "../components/menuend"
import Back from "../components/back"


function Profilesetting() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />


                    <div className="edit-profile">

                        <div className="avatar-wrapper1">
                            <img
                                src="images/f792d3326d08a9e5b5ea5bab640e7074d47d8480.jpg"
                                alt="avatar"
                                className="avatar1"
                            />

                            <button className="avatar-edit">
                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17625 11.0238C7.79221 11.0238 6.66612 9.92139 6.66612 8.56838C6.66612 7.21452 7.79221 6.11212 9.17625 6.11212C10.5603 6.11212 11.6864 7.21452 11.6864 8.56838C11.6864 9.92139 10.5603 11.0238 9.17625 11.0238ZM9.17532 5.09725C7.21828 5.09725 5.62651 6.65432 5.62651 8.56869C5.62651 10.4822 7.21828 12.0393 9.17532 12.0393C11.1324 12.0393 12.7241 10.4822 12.7241 8.56869C12.7241 6.65432 11.1324 5.09725 9.17532 5.09725ZM17.3117 12.2916C17.3117 13.0494 16.6816 13.6649 15.9069 13.6649H2.44393C1.66925 13.6649 1.03912 13.0494 1.03912 12.2916V4.97615C1.03912 4.21921 1.66925 3.60282 2.44393 3.60282H4.35856C4.97743 3.60282 5.53659 3.22011 5.74952 2.64944L6.25154 1.30066C6.31386 1.13048 6.48178 1.01618 6.66701 1.01618H11.6838C11.869 1.01618 12.037 1.13048 12.1001 1.30151L12.6013 2.65029C12.8142 3.22011 13.3734 3.60282 13.9923 3.60282H15.9069C16.6816 3.60282 17.3117 4.21921 17.3117 4.97615V12.2916ZM15.9064 2.58749H13.9918C13.8075 2.58749 13.6404 2.47234 13.5763 2.30216L13.0761 0.954222C12.8649 0.383551 12.3048 0 11.6834 0H6.66656C6.04509 0 5.48507 0.383551 5.27474 0.953375L4.77358 2.30131C4.70953 2.47234 4.54247 2.58749 4.35811 2.58749H2.44348C1.0958 2.58749 0 3.6594 0 4.97601V12.2914C0 13.6089 1.0958 14.6799 2.44348 14.6799H15.9064C17.2541 14.6799 18.3499 13.6089 18.3499 12.2914V4.97601C18.3499 3.6594 17.2541 2.58749 15.9064 2.58749Z" fill="white" />
                                </svg>

                            </button>
                        </div>

                        <div className="form">

                            <div className="row">
                                <div className="field field-sm">
                                    <label>First Name</label>
                                    <input defaultValue="Sunie" />
                                </div>

                                <div className="field field-sm">
                                    <label>Last Name</label>
                                    <input defaultValue="Pham" />
                                </div>
                            </div>

                            <div className="field">
                                <label>Email</label>
                                <input defaultValue="sunieux@gmail.com" />
                            </div>

                            <div className="row">
                                <div className="field gender">
                                    <label>Gender</label>
                                    <input defaultValue="Female" />
                                </div>

                                <div className="field">
                                    <label>Phone</label>
                                    <input defaultValue="(+1) 23456789" />
                                </div>
                            </div>

                        </div>

                        <button className="save-btn">
                            Save change
                        </button>

                    </div>



                </div>




            </div>

        </div>

    );
}

export default Profilesetting;