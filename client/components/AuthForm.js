import React, {Component} from "react";
class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email,password } = this.state;
        this.props.onSubmit({ email, password})
    }
  
    render() {
        console.log('error', this.props.errors);
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field">
                        {/* <label>Email</label> */}
                        <input 
                            value={this.state.email}  
                            placeholder="Email"
                            onChange={e => this.setState({email: e.target.value})}  
                        />
                    </div>
                    <div className="input-field">
                        {/* <label>Password</label> */}
                        <input 
                            type="password"
                            value={this.state.password}  
                            placeholder="password"
                            onChange={e => this.setState({password: e.target.value})}  
                        />
                    </div>
                    <div className="errors">
                        {/* {
                            this.props?.errors?.length > 0 && 
                            this.props?.errors?.map(error => <div key={error}>{error}</div>)
                        } */}
                        {this.props && this.props.errors && this.props.errors.length > 0 &&
  this.props.errors.map((err, index) => <div key={index}>{err}</div>)
}

                        {/* {this.props?.errors && this.props?.errors?.length > 0 ? this.props?.errors?.map((err) => <div>{err}</div>) : undefined} */}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;