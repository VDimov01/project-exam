import { useParams, useNavigate, Link } from "react-router-dom";

import * as pictureService from "../../services/picturesService";

import { AddComment } from "./AddComment";

const Details = ({
    pictures,
    deletePicture,
    updatePicture
}) => {
    const { id } = useParams();
    const navigate = useNavigate();
   
    
    const picture = pictures.find(p => p._id === id);

    const delPic = (e) => {
        e.preventDefault();

        pictureService.deleteOne(id)
            .then(result => {
                deletePicture(id);
                navigate('/catalog');
            })
    }

   

    return (
        <>
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
                <button className="btn btn-secondary" onClick={delPic}>Delete</button>
                </div>
            </div>
        </section>

        <AddComment picture={picture} updatePicture={updatePicture}/>
        </> 
      
    );
}



export default Details;