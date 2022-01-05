// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [data,setdata]=useState([])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos').then(
//       response=>response.json()
//     ).then(json=>setdata(json))
//   },[])
//   return (
//     <div>
//      {data.map(item=><li key={item.id}>{item.title}</li>)}
//     </div>
//   )
// }

// export default App

 


// import React,{useEffect,useState} from 'react'
// import axios from 'axios'

// const App = () => {
//   const[data,setdata]=useState([])
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>setdata(response.data))
//   })
//   return (
//     <div>
//       {data.map(item=><li key={item.id}>{item.title}</li>)}
//     </div>
//   )
// }

// export default App




// import React from 'react';
// import { useFormik } from 'formik';
// import './App.css';

// const App = () => {
//   const formik = useFormik({
//     initialValues:{
//       name:'',
//       email:'',
//       password:''
//     },
//     onSubmit:(values) =>{
//       console.log('form submitted', values)
//     },
//     validate:(values) =>{
//       let errors = {};
//       if(!values.name.length>5){ 
//         errors.name = "Name Rquired"
//       }
//       if(!values.email){
//         errors.email = "Email Rquired"
//       }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//          errors.email="invalid format "
//       }
//       if(!values.password){
//         errors.password = "Password Rquired"
//       }
//       return errors;
//     }
//   })
//   //console.log('form values', formik.values)
//   return (
//     <div className="App">
//       <form autoComplete="off" onSubmit={formik.handleSubmit}>
//         <label>Name</label><br />
//         <input type="text" name="name" id="name"
//         value={formik.values.name} onChange={formik.handleChange}/><br />
//         {formik.errors.name?<div className="errors">{formik.errors.name}</div>:null}

//         <label>E-mail</label><br />
//         <input type="email" name="email" id="email"
//         value={formik.values.email} onChange={formik.handleChange}/><br />
//         {formik.errors.email?<div className="errors">{formik.errors.email}</div>:null}

//         <label>Password</label><br />
//         <input type="password" name="password" id="password"
//         value={formik.values.password} onChange={formik.handleChange}/><br /> 
//         {formik.errors.password?<div className="errors">{formik.errors.password}</div>:null}

//         <button type="submit">Register</button>

//       </form>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'


// const App = () => {
//   const[data,setdata]=useState({
//     username:"",
//     password:""
//   })
//   const {username,password} =data;
//   const changeHandler =e=>{
//     setdata({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler =e=>{
//     e.preventDefault()
//     if(username.length<=5){
//       alert("must have 5 characters")
//     }
//       else{
//       console.log(data)
//     }
    
//   }
//   return (
//     <div>
//       <center>
//       <form onSubmit={submitHandler}>
//         <label>username</label>
//         <input type="text" name="username" value={username} onChange={changeHandler}/><br />
//         <label>password</label>
//         <input type="text" name="password" value={password} onChange={changeHandler}/><br />
//         <input type="submit" name="submit"/>
//       </form>
//       </center>
      
//     </div>
//   )
// }

// export default App

// import React,{Component} from 'react';
// class App extends Component {
//   constructor(props){
//     super(props)
//       this.state={items:[],
//       }
//     }
  
//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(json=>{
//       this.setState({items:json})
//     })
//   }
//   render(){
//     var {items}=this.state;
//     return(
//       <div>
//         <ul>{items.map(item => (<li key={item.id}>Name:{item.title}</li>))}</ul>
//       </div>
//     )
//   }f
// }
// export default App



//parent to child
// import React from 'react';
// import  New from './New';
// function App(){
//   const name='Mohn'

// return (
  
//   <div>
//     hi
//     <New person = {name}/>
//   </div>
// )
// }
// export default App

// import React,{useState} from 'react';
// function App() {
//   const[data,setdata]=useState("vinay");
//   return (
//     <div>
//       {data}
//       <button onClick={()=>setdata("vijay")}>hi click me</button>

//     </div>
//   )
// }
// export default App

// import React,{Component} from 'react';
// class App extends Component{
//   state={name:"hi"}
//   render(){
//     return(
//       <div>
//         {this.state.name}
//         <button onClick={()=>this.setState({name:"vijay"})}>hi click me</button>
//       </div>

//     )
//   }

// }
// export default App



import React,{useState} from 'react';
function App() {
   const[data,setdata]=useState([]);
   const[height,setheight]=useState([]);

   handleSubmit=(event)={
     setdata({
       data: event.target.value
     })
   }
  return (
    <div>
       BMI Tracker
       <form>
         Weight(in kg)
         <input type="text" name="text" placeholder="50" value={data} onChange={"handleSubmit"} />
         Height(in cm)
         <input type="text" name="text" placeholder="176" value={height}/>
         <button onClick={()=>setdata("[weight (lb) / (height (in) * height (in)] x 720")} >Calculate BMI</button>
         [weight (lb) / (height (in) * height (in)] x 720
       </form>
    </div>
  )
}
export default App