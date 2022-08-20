import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as picturesService from "../../services/picturesService";
import { AuthContext } from "../../contexts/AuthContext";

const Edit = ({
    pictures,
    updatePicture
}) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        title: "",
        description: "",
        imageUrl: ""
    });

    const picture = pictures.find(picture => picture._id === id);

    useEffect(() => {
        setData(picture);
        console.log('change');
    }, []);

    const onChange = (e) => {
        setData(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const minLength = (e, bound) => {

        setErrors(state => ({
            ...state,
            [e.target.name]: data[e.target.name].length < bound,
        }))

    }

    const isUrl = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !data[e.target.name].includes('http'),
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        picturesService.updateOne(id, data, user.token)
            .then(picture => {
                if(picture.errors){
                    alert(picture.errors[0].msg);
                }else{
                    updatePicture(data);
                    navigate('/catalog');
                }
            })
    }

    return (
        <div className='form-div'>
            <form className="create-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" onBlur={(e) => minLength(e, 3)} value={data.title} onChange={onChange} />
                    {errors.title && <p className="error">Title must be at least 3 characters long</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image url</label>
                    <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Image url" onBlur={(e) => isUrl(e)} value={data.imageUrl} onChange={onChange} />
                    {errors.imageUrl && <p className="error">Image url must be a valid url</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" className="form-control" name="description" placeholder="Description..." onBlur={(e) => minLength(e, 5)} value={data.description} onChange={onChange}></textarea>
                    {errors.description && <p className="error">Description must be at least 5 characters long</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Edit;