import { Link } from "react-router-dom";

const CatalogItem = ({
    picture
}) => {

    return(
        <div className="box-1">
          <div className="img-box b-1">
            <img src={picture.imageUrl} alt="" />
            <div className="btn-box">
              <Link to={`/details/${picture._id}`} className="btn-1">

              </Link>
            </div>
          </div>
          
        </div>
    
    );
}

export default CatalogItem;