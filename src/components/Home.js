import React from 'react';

function Home() {
  return (
    <div className="hero_area">
     
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>Neogym</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="why.html">Why us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="trainer.html">Trainers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <div className="user_option">
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}

      {/* slider section */}
      <section className="slider_section position-relative">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                      </p>
                      <div>
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add additional carousel items here */}
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            {/* Add more indicators as needed */}
          </ol>
        </div>
      </section>
      {/* end slider section */}

      {/* Additional sections */}
      <section className="us_section layout_padding">
        {/* Section content */}
      </section>
      <section className="heathy_section layout_padding">
        {/* Section content */}
      </section>
      <section className="trainer_section layout_padding">
        {/* Section content */}
      </section>
      <section className="contact_section">
        {/* Section content */}
      </section>
      <section className="info_section layout_padding2">
        {/* Section content */}
      </section>

      {/* footer section */}
      <footer className="container-fluid footer_section">
        <p>
          &copy; 2020 All Rights Reserved. Design by{' '}
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
      {/* end footer section */}

      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </div>
  );
}

export default Home;
