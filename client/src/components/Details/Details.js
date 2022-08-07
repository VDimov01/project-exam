import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = ({
    pictures
}) => {
    const { id } = useParams();
    
    const picture = pictures.find(picture => picture._id === id);

    return (
        <section className="form-wrapper">
            <div className="section-content">
                <img src={picture.imageUrl} alt="Cinque Terre" width="600" height="400" />
                <p>Photo title: {picture.title}</p>
                <div>
                <label htmlFor="description">Description: </label>
                </div>
                <textarea className="description" id="description" value={picture.description} disabled></textarea>
                <div className="button-div">
                <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
                <button className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </section>

      
    );
}



export default Details;