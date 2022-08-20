import * as pictureService from '../../services/picturesService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

const CreatePost = ({
    addPicture
}) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        owner: ""
    });

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

    const onSubmit=  (e) => {
        e.preventDefault();

        data.owner = user._id;
        const token = user.token

        const {title, description, imageUrl, owner } = data;

        pictureService.create(title, description, imageUrl, owner, token)
            .then(result => {
                if(result.errors){
                    alert(result.errors[0].msg);
                }else{
                    addPicture(result);
                }
                navigate('/catalog');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='form-div'>
        <form className="create-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={data.title} onBlur={(e) => minLength(e,3)} onChange={onChange} placeholder="Enter title" />
                {errors.title && <p className="error">Title must be at least 3 characters long</p>}
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image url</label>
                <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={data.imageUrl} onBlur={(e) => isUrl(e)} onChange={onChange} placeholder="Image url" />
                {errors.imageUrl && <p className="error">Image url must be a valid url</p>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="form-control" name="description" value={data.description} onBlur={(e) => minLength(e, 10)} onChange={onChange} placeholder="Description..."></textarea>
                {errors.description && <p className="error">Description must be at least 10 characters long</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default CreatePost;