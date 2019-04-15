import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './liste.css'


class Liste extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      nom:"",
      prenom:""
       };
  }
  // onChange1(e){
  //   this.setState(
  //     {
  //       nom:e.target.value
  //     }
  //   )
  // }
  // onChange2(e){
  //   this.setState(
  //     {
  //       prenom:e.target.value
  //     }
  //   )
  //   console.log(e.target.value);
    
  // }

  callAPI() {
      fetch("http://localhost:8080/List")
          .then(res => res.json())
          .then(res => this.setState({ apiResponse: res }));
          
  }
  componentWillMount() {
    this.callAPI();
    console.log(this.state.apiResponse);
    
  
}
submit1 = (a,nom,prenom) => {
  confirmAlert({
      customUI: ({ onClose }) => {
        return (  
          <div className="custom-ui" id="popup">
            <form method="POST" action="http://localhost:8080/list" enctype="application/x-www-form-urlencoded">
                <input type="hidden" name="_method" value="PUT"></input>
                <label>nom:   </label> <input 
                    placeholder={nom} type="text" 
                    name="nom" /><br/>


                <label>prenom:</label>
                 <input 
                    placeholder={prenom} 
                    type="text"
                    name="prenom"/><br/>


                 <input type="hidden"name="id" value={a}/>
                <button className="btn btn-primary">edit</button>
            </form>
          </div>
        );
      }
    })
};
 
  render() {
    return (
      <div>    
         {/* <button onClick={()=> {
            var test=this.state.apiResponse
            // console.log(JSON.parse(test));
            
          //  var test=JSON.parse(test)
           
            for(let i=0;i<test.length;i++){ 
          
              document.getElementById('va').innerHTML+="<div>"+test[i].nom+"</div>"
              document.getElementById('va').innerHTML+="<div>"+test[i].prenom+"</div> <br/>"
              
            }
            
           }}>Liste</button> */}

        <div id="va">
            <form action="http://localhost:8080/list" method = "POST" >
              <div className="row">
                  
                  <div className="col-md-4"> <label>nom:   </label>
                   <input 
                           type="text" 
                           name="nom"/><br/></div>


                  <div className="col-md-4"> <label>prenom:</label> 
                  <input type="text"
                  name="prenom"/><br/></div>


                  <div className="col-md-4"><button className="btn btn-secondary" type='submit' >ajouter</button> </div>
                
              </div>
            </form>
      


        <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                 
            {this.state.apiResponse.length>0?this.state.apiResponse.map((im)=>{
              return  <tr>
                <th scope="row">{im.id}</th>
                    <td>{im.nom}</td>
                    <td>{im.prenom}</td>
                    <td> <button className="btn btn-primary"  onClick={()=>{this.submit1(im.id,im.nom,im.prenom)}}>edit</button></td>
                   
                    <td>
                    <form   method="POST" action="http://localhost:8080/list" enctype="application/x-www-form-urlencoded">
                      <input type="hidden" name="_method" value="DELETE"></input>  
                      <input type="hidden"name="id" value={im.id}/>   
                      <button className="btn btn-danger" >delete</button>
                    </form>
                    </td>

                
                </tr>     
        }  
              ):(<div></div>)}

          </tbody>

         </table>
              
              
              
 

        </div> 
              
      </div>
    );
  }
}

export default Liste;