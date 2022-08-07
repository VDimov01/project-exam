import CatalogItem from "./CatalogItem";

const Catalog = ({
    pictures
}) => {
    return(
        <>
            <div className="heading_container">
                <h2>Catalog</h2>
            </div>
          
            {pictures.map(picture => <CatalogItem key={picture._id} picture={picture} />)}
            <div className="clearfix"></div>
        </>
        
    );
}

export default Catalog;