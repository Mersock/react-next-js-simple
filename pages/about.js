import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class About extends Component{

   static async getInitialProps(){
      const res =  await fetch('https://api.github.com/users/Mersock')
      const data = await res.json();
      
      return {user: data}
    }

    render(){
        const {user} = this.props
;        return(
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Reed" height="100px" />
            </Layout>
        )
    }
}

export default About