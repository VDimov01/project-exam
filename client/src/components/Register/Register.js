import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Register = () => {
    
    const navigate = useNavigate();
    const {userLogin} = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password,
            confirmPassword
        } = Object.fromEntries(new FormData(e.target));

        if(password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(user => {
                userLogin(user);
                navigate('/');
            })
    }

    return (
        <div className="form-wrapper">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" name="confirmPassword" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default Register;