import React from 'react'
import { axiosWithAuth } from '../utils/axioswithAuth'


class Login extends React.Component {
    state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  
    handleChange = (e) => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then((res) => {
          console.log(res)
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/friends");
        })
        .catch((err) => console.log(err));
    };
  
    render() {
      return (
        <div className='login'>
                  <img className='logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1280px-Friends_logo.svg.png'/>
        <p>...the app</p>
          <form onSubmit={this.login}>
            <label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder='username'
              />
              </label>
              <label>
              <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder= 'password'
            />
              </label>
            
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
export default Login