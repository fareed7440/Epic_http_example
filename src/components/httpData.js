import React, { Component } from 'react';

class UserData extends Component {
  constructor(props) {
    super(props)
    // this.props.fetchUserData()
  }
  componentDidMount() {
    //console.log(state.userReducer.userList,'jjjjhgsfghgf')

  }
  render() {
    const userData = this.props && this.props.AllData && this.props.AllData ? this.props.AllData : [];
    console.log('daataaaaaaa', userData)
    return (
      <div >
        <div>

          <button onClick={this.props.fetchUserData}>User Data</button><br />
        </div>
        <div>
          <h2>DAta</h2>
          <ul>
            {
              userData ? userData.map((item, index) => {
                return (
                  <li key={index + 1}>{item.gender}</li> ,
                  <li>{item.name.first}</li>
                )
              }) : ''
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default UserData;
