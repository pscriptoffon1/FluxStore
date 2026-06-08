





import Menuend from "../components/menuend"
import Back from "../components/back"


function Wishit2() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="p-3">
                    <Back />


                    <div className="products">

                        <div className="tabs">
                            <a href="/wishit"><button className="tab ">All items</button></a>
                            <button className="tab active">Boards</button>
                        </div><br /><br />

                        <div className="wishlist-board">

                            <div className="wishlist-images">
                                <img src="https://i.postimg.cc/VvYgSP22/15fabd854b7cb3b15474b1d58ae3661dd03a76db.jpg" alt="" />
                                <img src="https://i.postimg.cc/Tw5T5Zv2/6b91ceb1e5663eb925669ef0d4570836637e8117.png" alt="" />
                                <img src="https://i.postimg.cc/25R5FkT3/550c305749d6c4a8efe5849bb6952d297db4e2c1.png" alt="" />
                                <img src="https://i.postimg.cc/QNRJ7550/071373fad51ad0143a98105907f84f8d80c53d58.png" alt="" />
                                <img src="https://i.postimg.cc/QNSfWVSH/253f5374175bb9210b2f2de3f4abe98c37fd3cbb.png" alt="" />
                            </div>

                            <div className="wishlist-info">
                                <div>
                                    <h3>Going out-out</h3>
                                    <span>23 items</span>
                                </div>

                                <button className="wishlist-menu">
                                    ⋮
                                </button>
                            </div>

                        </div>

                    </div>

                    <Menuend />

                </div>




            </div>

        </div>

    );
}

export default Wishit2;