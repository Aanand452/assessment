import React, {Component, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";






class App extends Component{

 

createuser = async (event) => { 
    event.preventDefault();
    //let firstName, lastName, userName, password = this.state;
    //console.log("this",firstName, lastName, userName, password);
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        
      
      headers: { 'Content-Type': 'application/json' ,Accept: 'application/json' },
      body: JSON.stringify({ fistname: this.state.firstName, lastname:this.state.lastName, username:this.state.userName, password:this.state.password })
  };
await fetch('http://localhost:8080/api/users', requestOptions)
.then(response => response.json())
.then(json => console.log(json))
.catch(e => console.error(e));

  
  }
    
  
  //const [firstname, lastname, username, password,setFirstname, setLastname, setUsername,setPassword] = useState("");

  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
}
render(){


 return (
   <div>
    <div>
      <div class="container mt-5">
        <h1 class="text-center alert alert-danger">User Information Project</h1>
    
      <div class="row">
        <div class="col-sm-4">
          <h4 class="text-center alert alert-info">User Sign Form </h4>

<form onSubmit={this.createuser}>
<label for="FirstName">Firstname</label>
          <input type="text" value={this.state.firstName} onChange={ (e) => this.setState({firstName:e.target.value})} class="form-control" ></input>


          <label for="LastName">Lastname</label>
          <input type="text" value={this.state.lastName} onChange={ (e) => this.setState({lastName:e.target.value})} class="form-control" ></input>


          <label for="UserName">Username</label>
          <input type="text"value={this.state.userName} onChange={ (e) => this.setState({userName:e.target.value})} class="form-control" ></input>


          <label for="Password">Password</label>
          <input type="text" value={this.state.password} onChange={ (e) => this.setState({password:e.target.value})}class="form-control" ></input>
          <br></br>
          <button type="submit" class="btn btn-primary">Signin</button>


</form>
        
      
      </div>
    
        <div class="col-sm-8">
          <h1 class="text-center alert alert-danger">Show User Information</h1>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
             
            </tbody>
          </table>


      </div>

        </div>





      </div>
  

  </div>

</div>
  );
 }
}




export default App;



