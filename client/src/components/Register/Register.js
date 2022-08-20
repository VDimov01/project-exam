import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Register = () => {
    
    const navigate = useNavigate();
    const {userLogin} = useContext(AuthContext);
    const [user, setUser] = useState({
        email:"",
        password:"",
        confirmPassword:""
    });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setUser(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const isMatch = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: user.password !== user.confirmPassword,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(user.password !== user.confirmPassword) {
            return alert("Passwords do not match");
        }

        authService.register(user.email, user.password)
            .then(user => {
                if(user.errors) {
                    alert(user.errors[0].msg);
                }else{
                    userLogin(user);
                    navigate('/');
                }
            })
    }

    return (
        <div className="form-wrapper">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={onChange} placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={onChange} placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" name="confirmPassword" value={user.confirmPassword} onBlur={(e) => isMatch(e)} onChange={onChange} placeholder="Confirm Password" />
                {errors.confirmPassword && <p className="error">Passwords must match</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default Register;