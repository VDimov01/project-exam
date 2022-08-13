import { useContext, useEffect } from "react";
import * as commentsService from "../../services/commentsService";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export const Comment = ({
    comment,
    commentId,
    creator,
    picture
}) => {
    const username = creator?.split('@')[0];
    const { user } = useContext(AuthContext);

    const deleteComment = (e) => {
        e.preventDefault();

        commentsService.deleteOne(commentId, user.token)
            .then(result => {
                console.log(result);
            })
    }
    return(
        <div className="card p-3 container mt-5">
            <div className="user d-flex flex-row align-items-center">
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" className="user-img rounded-circle mr-2" width="30"/>
                <span>
                    <small className="font-weight-bold text-primary username">{username}</small>
                    <small className="font-weight-bold">{comment}</small>
                </span>
                
            </div>
            {user.email === creator 
            ?
            <div className="comments-button-div">
                <Link className="btn btn-primary comment-button" to={`/edit/comment/${commentId}/${picture._id}`}>Edit</Link>
                <button className="btn btn-secondary" onClick={deleteComment}>Delete</button> 
            </div>
            :''
        }
            
        </div>
    );
}