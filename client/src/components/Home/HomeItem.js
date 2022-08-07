
const CatalogItem = ({
    picture
}) => {

    return(
        <div className="box-1">
          <div className="img-box b-1">
            <img src={picture.imageUrl} alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
            </div>
          </div>
          
        </div>
    );
}

export default CatalogItem;