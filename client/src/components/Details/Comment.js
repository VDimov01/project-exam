import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";

export const Comment = ({
    comment,
    creator
}) => {
    return(
        <h3>{creator}: {comment}</h3>
    );
}