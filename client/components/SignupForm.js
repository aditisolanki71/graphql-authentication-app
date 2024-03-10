import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from "react-apollo";
// import { Link } from 'react-router';
import getCurrentUserQuery from "../queries/CurrentUser";
import Signup from "../mutations/Signup";
import { hashHistory } from "react-router";

class SignupForm extends Component{
   constructor(props) {
      super(props);
      this.state = {
         error: [],
         error: ''
      }
   }

   componentWillUpdate(nextProps) {
      console.log('did update', this.props, nextProps)
      if(!this.props.data.user && nextProps.data.user) {
         hashHistory.push('/dashboard');
      }
   }
   onSubmit({email, password}) {
      this.props.mutate({
         variables: {email, password},
         refetchQueries: [{
            query: getCurrentUserQuery
         }]
      }).catch(res => { 
         console.log('res', res.graphQLErrors)
         // const errors = res.graphQLErrors?.map(error => error.message)
         const errors = res.graphQLErrors ? res.graphQLErrors.map(error => error.message) : [];

         console.log('errors', errors)
         // this.setState({ error: res.graphQLErrors?.[0].message || '' });
         this.setState({ errors })
       });
   }
   render() {
        return (
         <div>
            <h3>Sign up</h3>
            <AuthForm 
               errors={this.state.errors}
               // error={this.state.error}
               onSubmit={this.onSubmit.bind(this)}
            />
         </div>
        )
   }
}

// export default graphql(Signup)(SignupForm);

//query associate with component
export default graphql(getCurrentUserQuery)(graphql(Signup)(SignupForm));
