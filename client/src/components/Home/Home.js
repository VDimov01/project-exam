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