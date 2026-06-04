function Intro1() {
  return (
    <div className="mobile-wrapper">
         <div className="page">
      <div className="intro-all">

        <div className="text-intro1">
          <h2>Discover something new</h2>
          <small>
            <b>Special new arrivals just for you</b>
          </small>
        </div>

        <div className="carousel-wrapper">
          <input type="radio" name="r" id="r1" defaultChecked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />

          <div className="track">
            <div className="card-1">
              <img src="images/c1d3d3e1be2cfb3f965bed3adac708def3155c93.png" alt="" />
            </div>

            <div className="card-2">
              <img src="images/d5b6540adf45a5c63d3967608a29321bbd90e53d.png" alt="" />
            </div>

            <div className="card-3">
              <img src="images/6b91ceb1e5663eb925669ef0d4570836637e8117.png" alt="" />
            </div>
          </div>

          <div className="dots">
            <label htmlFor="r1"></label>
            <label htmlFor="r2"></label>
            <label htmlFor="r3"></label>
          </div>
        </div>

        <a className="button-w-text1" href="/signup">
          <button className="button-intro">
            <b>Get Started</b>
          </button>
        </a>

      </div>
    </div>
    </div>
  );
}

export default Intro1;