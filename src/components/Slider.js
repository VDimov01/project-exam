
export const Slider = () => {
    return (
        <section className=" slider_section position-relative">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1 ">
                    <div className="detail_box">
                      <h1>
                        photography 
                        studio
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content
                      </p>
                      <div className="btn-box">
                        <a href="/about" className="btn-1">
                          About Us
                        </a>
                        <a href="/quote" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail_box">
                      <h1>
                        photography 
                        studio
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content
                      </p>
                      <div className="btn-box">
                        <a href="/about" className="btn-1">
                          About Us
                        </a>
                        <a href="/quote" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail_box">
                      <h1>
                        photography
                        studio
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content
                      </p>
                      <div className="btn-box">
                        <a href="/about" className="btn-1">
                          About Us
                        </a>
                        <a href="/quote" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
  
      </section>
    );
}