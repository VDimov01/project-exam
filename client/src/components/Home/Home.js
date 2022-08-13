import CatalogItem from "./HomeItem";
import { Link } from "react-router-dom";

export const Home = ({
  pictures
}) => {
  pictures = pictures.slice(pictures.length - 2);
  return (
    <section className="portfolio_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Our portfolio
          </h2>
          <p style={{ fontWeight: "bold" }}>
            Welcome to our website! You can browse our users' photos and see their work.
            After successfull registration you can add your own photos as well as comments to the other users' photos.
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