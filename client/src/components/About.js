
export const About = () => {
    return (
        <section className="about_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          About Us
        </h2>
      </div>
      <div className="box">
        <div className="img-box">
          <img src="images/about-img.jpg" alt="" />
          <div className="about_img-bg">
            <img src="images/about-img-bg.png" alt="" />
          </div>
        </div>
        <div className="detail-box">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters,
          </p>
          <div>
            <a href="/">
              about More
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
    );
}