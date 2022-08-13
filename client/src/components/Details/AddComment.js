import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as pictureService from "../../services/picturesService";
import * as commentsService from "../../services/commentsService";
import { Comment } from "./Comment";

export const AddComment = ({
    picture,
    updatePicture
}) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    const {user} = useContext(AuthContext);

    const onChange = (e) => {
        setComment(e.target.value);
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await commentsService.create(user._id, comment);
        
            console.log(result);
        picture.comments.push(result._id);
        pictureService.updateOne(picture._id, picture)
            .then(result => {
                setComment("");
                updatePicture(picture);
                navigate(`/details/${picture._id}`);
            })
    }

    return (
        <>
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
                    {picture.comments.map(x => <Comment key={x._id} comment={x.text} creator={x.creator?.email}/>)}
                </div>
            </div>
        </section>
        </>
    );
}