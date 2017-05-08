import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
const styless = {
  margin: 12,
  height: 60,
  width: 120
};
const style = {
  height: 80,
  width: 300,
  margin: 130,
  backgroundColor: '#7B1FA2',
  color: 'white',
  textAlign: 'center',
  display: 'inline-block',
};
const styles = {
  height: 400,
  width: 800,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
class UserData extends Component {

  constructor(props) {
    super(props)


  }


handleForm = (e,v)=>{
  e.preventDefault();
  let msg = this.refs.msg.getValue();
  let obj = {
    msg : msg
  }
  console.log('obbbbbj',obj)
  this.props.postdata (obj)
}


handleInput =(e,v,i)=>{

         const target = e.target;
        const value = target.type === 'checked' ? target.checked : target.value;
        const name = target.name;


        this.setState({
            [name]: value
        })

}

deleteData=(_id)=>{
this.props.Delletion(_id)
console.log('propssss',this.props.Delletion(_id))
}


  render() {
    const userData = this.props && this.props.AllData && this.props.AllData ? this.props.AllData : [];
    console.log('daataaaaaaa', userData)
   // const post = this.props && this.props.postData && this.props.postData ? this.props.postData : [];
  //  console.log('posttttt', post)
    return (
      <div >
        <div>
          <AppBar
            title='Fetching Data'
            style={{ textAlign: 'center' }}



          />
          <center>
            <RaisedButton primary={true} onClick={this.props.fetchUserData} label="FetchData" style={styless} /><br /><br />



            <Paper style={styles} zDepth={4} >

              <Table adjustForCheckbox={false} displayRowCheckbox={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                  <TableRow >

                    <TableHeaderColumn style={{ color: "#7B1FA2" }}>messages</TableHeaderColumn>
                    <TableHeaderColumn style={{ color: "#7B1FA2" }}> id</TableHeaderColumn>
                       <TableHeaderColumn style={{ color: "#7B1FA2" }}> dalete</TableHeaderColumn>



                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                  {userData.map((val, i) => {
                    return (
                      <TableRow key={i} >
                        <TableRowColumn key={i}>{val.text}</TableRowColumn>
                        <TableRowColumn key={i}>{val._id}</TableRowColumn>
                     <RaisedButton label="Delete" onClick={() => { this.deleteData() }} primary={true}/>



                      </TableRow>
                    )
                  })}
                </TableBody>



              </Table>
            </Paper>


            <br />
            <form onSubmit = {this.handleForm}>
            <TextField
              hintText="Add Text"
              name='msg'
              onChange = {this.handleInput}
              ref='msg'
              type='text'
              floatingLabelText="Floating Label Text"
            /><br />

            <RaisedButton label="Add" type = 'submit' primary={true} style={styless} /><br /><br />
</form>
          </center>



        </div>
      </div>
    );
  }
}

export default UserData;
