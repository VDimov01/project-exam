import { Link } from "react-router-dom";

const CatalogItem = ({
    picture
}) => {
    return(
    <div className="responsive">
  <div className="gallery">
    <Link to={`/details/${picture._id}`}>  {/* Add redirect to details */}
      <img src={picture.imageUrl} alt="Cinque Terre" width="600" height="400" />
    </Link>
    <div className="desc">{picture.title}
    </div>
    
  </div>
</div>
);
}

export default CatalogItem;