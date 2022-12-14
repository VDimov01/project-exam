import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as commentsService from "../../services/commentsService";
import * as pictureService from "../../services/picturesService";

export const EditComment = ({
    pictures,
    updatePicture
}) => {

    const [comment, setComment] = useState({});
    const navigate = useNavigate();
    const { id, pictureId } = useParams();

    const picture = pictures.find(p => p._id === pictureId);

    useEffect(() => {
        commentsService.getOne(id)
            .then(comment => setComment(comment));
    }, []);

    const onChange = (e) => {
        setComment(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        });
        console.log('change');
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await commentsService.updateOne(id, comment);
        
        picture.comments.map(c => c._id === id ? result : c);
        pictureService.updateOne(picture._id, picture)
            .then(data => {
                updatePicture(picture);
                navigate(`/details/${picture._id}`);
            })
                
           
    }

    return (
        <section>
            <div className='form-wrapper'>
                <form className="create-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="text">Edit comment: </label>
                        </div>
                        <textarea type="text" className="form-input" id="text" name="text" value={comment.text} onChange={onChange} placeholder="Enter comment" ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </section>
    );
}