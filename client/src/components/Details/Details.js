import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AddComment } from "./AddComment";
import { AuthContext } from "../../contexts/AuthContext";
import * as pictureService from "../../services/picturesService";

const Details = ({
    pictures,
    deletePicture,
    updatePicture
}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    
    const picture = pictures.find(p => p._id === id);

    const delPic = (e) => {
        e.preventDefault();

        pictureService.deleteOne(id, user.token)
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
                {picture.owner === user._id 
                ?   <>
                        <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
                        <button className="btn btn-secondary" onClick={delPic}>Delete</button>
                    </>
                : ''
                }
               
                </div>
            </div>
        <AddComment picture={picture} updatePicture={updatePicture}/>
        </section>

        </> 
      
    );
}



export default Details;