import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";

export const Comment = ({
    comment,
    creator
}) => {
    console.log(creator);
    return(
        <h3>{creator.email}: {comment.text}</h3>
    );
}