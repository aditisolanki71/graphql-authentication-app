import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { Link } from 'react-router';
import getCurrentUserQuery from "../queries/CurrentUser";
import Logout from "../mutations/Logout";

class Header extends Component{
    onLogout() {
        console.log('logout clicked')
        this.props.mutate({
            refetchQueries: [{
                query: getCurrentUserQuery
            }]
        });
    }

    renderButtons() {
        const { loading, user } = this.props.data;
        console.log('inside render button', loading,user)
        if(loading) {
            return <div></div>
        }
        if(user) {
            return (
                <li>
                    <a onClick={this.onLogout.bind(this)}>
                        Logout
                    </a>
                </li>
            )
        }
        else{
            return (
                <div>
                    <li>
                        <Link to="/signup" >
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" >
                            Log In
                        </Link>
                    </li>
                </div>
            );
        }
     }

   render() {
    console.log("data", this.props.data)
        return (
           <nav>
            <div className='nav-wrapper'>
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className='right'>
                    {this.renderButtons()}
                </ul>
            </div>
           </nav>
        )
   }
}

// export default graphql(getCurrentUserQuery)(Header);
export default graphql(Logout)(
    graphql(getCurrentUserQuery)(Header)
);