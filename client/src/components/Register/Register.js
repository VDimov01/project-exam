
const Register = () => {

    return (
        <div className="form-wrapper">
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="confirmPassword" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default Register;