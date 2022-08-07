import { Link } from "react-router-dom";

const CatalogItem = ({
    picture
}) => {
    return(
    <div class="responsive">
  <div class="gallery">
    <Link to="/">  {/* Add redirect to details */}
      <img src={picture.imageUrl} alt="Cinque Terre" width="600" height="400" />
    </Link>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>
);
}

export default CatalogItem;