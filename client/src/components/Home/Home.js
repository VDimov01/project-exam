import CatalogItem from "./HomeItem";
import { Link } from "react-router-dom";

export const Home = ({
  pictures
}) => {
    return (
        <section className="portfolio_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our portfolio
        </h2>
        <p>
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>
      <div className="portfolio_container layout_padding2">
        
        {pictures.map(picture => <CatalogItem key={picture._id} picture={picture} />)}

        {/* <div className="box-2">
          <div className="box-2-top">
            <div className="img-box b-3">
              <img src="images/p-3.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
          <div className="box-2-top2">
            <div className="img-box b-4">
              <img src="images/p-4.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
          <div className="box-2-btm">
            <div className="img-box b-5">
              <img src="images/p-5.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
            <div className="img-box b-6">
              <img src="images/p-6.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="see_btn">
        <Link to="/catalog">
          See More
        </Link>
      </div>
    </div>

  </section>
    );
}