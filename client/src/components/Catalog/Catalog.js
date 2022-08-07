import CatalogItem from "./CatalogItem";

const Catalog = ({
    pictures
}) => {
    return(
        <>
            <h1>Catalog</h1>
            {pictures.map(picture => <CatalogItem key={picture._id} picture={picture} />)}
            <div class="clearfix"></div>
            </>
        
    );
}

export default Catalog;