import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as pictureService from "../../services/picturesService";
import * as authService from "../../services/authService";
import * as commentsService from "../../services/commentsService";
import { Comment } from "./Comment";

const Details = ({
    pictures,
    deletePicture,
    updatePicture
}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [comment, setComment] = useState("");
    
    const picture = pictures.find(p => p._id === id);

    console.log(picture.comments);
    const delPic = (e) => {
        e.preventDefault();

        pictureService.deleteOne(id)
            .then(result => {
                deletePicture(id);
                navigate('/catalog');
            })
    }

    const creator = (x) => {
        authService.getOne(x)
            .then(result => {
                return result;
            })
    }

    const onChange = (e) => {
        setComment(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await commentsService.create(user._id, comment)
            // .then(result => {    
            //     setComment("");
            //     navigate(`/details/${id}`);
            // })
        picture.comments.push(result._id);
        pictureService.updateOne(id, picture)
            .then(result => {
                updatePicture(picture);
                navigate(`/details/${id}`);
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
        <section>
            <div className='form-wrapper'>
            <form className="create-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <div>
                        <label htmlFor="comment">Add comment: </label>
                    </div>
                        <textarea type="text" className="form-input" id="comment" name="comment" value={comment} onChange={onChange} placeholder="Enter comment" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                </div>
        </section>

        <section>
            <div className="form-wrapper">
                <div>
                    {picture.comments.map(x => <Comment key={x._id} creator={creator(x)} comment={x}/>)}
                </div>
            </div>
        </section>
        </> 
      
    );
}



export default Details;