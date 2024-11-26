# IMPORTANT TOPICS:-
# State and Props in class Components:-
## states:-
### Defination:-
oka component lo multiple varaibles yokka values ni declare cheyadaaniki we can use it.

#### Process:-
first of all shortform of class component is is rcc+enter chesi aandulo boiler plate 
vachaka export kindha state object form ga rayaali.

next div tag lopala vaatini aakada use cheyali like ala anty, this.state.name. so aandulo unnadhi aantha ikadiki vachestundhi.

```
import React, { Component } from 'react'
import Display from './Display';

export default class App extends Component {
  state ={
    name: "I'm a Frontend Developer"
  }
  render() {
    return (
      <div>
        <center>
        <h2>{this.state.name}</h2>
        </center>
      </div>
    )
  }
}

```

```
import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>i'm a display component</h2>
      </div>
    )
  }
}
```

```
output:- i'm a display component
```

## props:-
### Defination:-
oka compennt nunche inko component ki values send cheyadaaniki props use chestham.

##### Process:-
aa  folder loony inko class component .js tho create chesi, 1st daanilo import chyeali.then ikada div tag loony h2 or some thing raasi daanini next aakada aa div tag lo just aa daani ikada initilise cheyali.

```
import React, { Component } from 'react'
import Display from './Display';

export default class App extends Component {
  state ={
    name: "I'm a Frontend Developer"
  }
  render() {
    return (
      <div>
        <center>
        <Display name={this.state.name}/>
        </center>
      </div>
    )
  }
}
```

```
import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

```

```
output:- i'm a frontend developer.
```

# styling use css
## 1. inline styling:-
### this is one way:-

```
import React, { Component } from 'react'

export default class App extends Component {
  state ={
    name: "I'm a Frontend Developer"
  }
  render() {
    return (
      <div style={{margin: "10px"}}>
        <h1 style={{color:"red", backgroundColor:"lightpink", padding:"20px", textAlign:"center", }}>welcome to React..</h1>
      </div>
    )
  }
}
```
### this is second way:-
```
import React   from 'react';

const App =() => {
  const styling ={
    color:"red",
     backgroundColor:"lightgrey",
      padding:"20px",
       textAlign:"center"
  }
    return (
      <div style={{margin: "10px"}}>
        <h1 style={styling}>welcome to React..</h1>
      </div>
    )
}

export default App
```

## 2. external styling:-
```
import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
  state ={
    name: "I'm a Frontend Developer"
  }
  render() {
    return (
      <div className='container'>
        <h1>welcome to React..</h1>
      </div>
    )
  }
}
```

```
h1{
  color:white;
  background-color: lightsalmon;
  padding: 50px;
  text-align: center;
}
.container{
  margin: 10px;
}
```

# onClick Event Handler:-
```
import React   from 'react';

const App =() => {
 
    return (
      <div style={{margin: "10px"}}>
      <button onClick={()=>console.log("Clicked")}>Click Here</button>
      </div>
    )
}

export default App
```
not only button tag  we can use headings tag also.

```
import React   from 'react';

const App =() => {
 
    return (
      <div style={{margin: "10px"}}>
      <h1 onClick={()=>console.log("Clicked")}>Click Here</h1>
      </div>
    )
}

export default App
```

## useState:-
 intially manam useState ni import chesukovali, then actually oka button ki assign cheyali..
 manam intial ga oka varaible undaali, then aadhi click cheygaany next change aavali. 
 second ga chesetapudu we can use setName property.

 ```
 import React,{useState}  from 'react';

const App =() => {
  const [name, setName] =useState("SkillHub")
    return (
      <div>
      <center>
        <h1>{name}</h1>
        <button onClick={()=> setName("Telugu SkillHub")}>Change</button>
      </center>
      </div>
    )
}

export default App
 ```

if u want to increment the count value.
```
import React,{useState}  from 'react';

const App =() => {
  const [count, setCount] =useState(0)
    return (
      <div>
      <center>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Change</button>
      </center>
      </div>
    )
}

export default App
```

## useEffcet:-
firstly manam useEffcet ni import chesukoovali, then epudaithy return stmt lo useState trigger aavagaany chrome console lo ventany
useEffect trigger avutundhi.
```
import React,{useState, useEffect}  from 'react';

function App ()  {
  const [count, setCount] =useState(0);
  useEffect(()=> console.log("clicked"),[count])
    return (
      <div>
      <center>
        <p>You Clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
      </center>
      </div>
    )
}

export default App
```
## onChange{} -> event handler:-
onchange aanedhi wrk aavali anty firstly useState ni import chesukoovali and next return statement lo input field tesukooni daaniki onChange()  event handler ni assign cheyaali. incase input kindha manaki appear aavali anty aanduloony user ni pedithy 
saripotundhi.

```
import React,{useState}  from 'react';

function App ()  {
  const [user, setUser] =useState("");
  const handler = e =>{
    setUser(e.target.value)
  }
    return (
      <div>
      <center>
        <input type="text" placeholder="username" value={user} name="user" onChange={handler} 
        /><br/>
        {user}
      </center>
      </div>
    )
}

export default App
```

## onChange -> eventhandler:-

```
import React,{useState}  from 'react';

function App ()  {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const {username, password} =data;
  const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
    return (
      <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="username" value={username} name="useruser" onChange={onChange}/><br/>

        <input type="passsword" placeholder="password" value={password} name="password" onChange={onChange}/><br/>
        
        <input type="submit" name="submit"></input>
        </form>
      </center>
      </div>
    )
}

export default App
```

# Map function:-
oka array of value, or array of object ni itterate chesi oka individual component lo print cheyadaaniki gaani or 
aadhy oka individual component lo use cheydaaniki gaani use chestham.

## Array of values:- 
```
import React  from 'react';

function App ()  {
  const  arr = ["javascript", "react js", "node js", "angular js", "Express js", "react js"]
  
    return (
      <div>
        {
          arr.map(
            (value, index) => <li key={index}>{value}</li>
          )
        }
      </div>
    )
}

export default App
```

### Array of Object :-
```
import React  from 'react';

function App ()  {
  const  arr = [
    {
      id:1,
      title: "java script"
    },
    {
      id :2,
      title : "React js"
    },
    {
      id :3,
      title : "Express js"
    },
    {
      id :4,
      title : "Angular js"
    },
    {
      id :5,
      title : "node js"
    },
    {
      id :6,
      title : "vue js"
    },
  ]
  
    return (
      <div>
        {
          arr.map(
            (value) => <li key={value.id}>{value.id}</li>
          )
        }
      </div>
    )
}

export default App
```

# Filter function:-
oka Array of values or objects of values ni itterate chesi oka individual varaibles ki assign chesi based on condition
values ni extract cheyadaaniki use chestham.
```
import React  from 'react';

function App ()  {
  const  names = ["loka", "loki", "dinu", "akka", "amma", "nanna"]
  const filtered = names.filter(name=> name.includes('l'))

    return (
      <div>
        {
          filtered.map(item => <li>{item}</li>)
        }
      </div>
    )
}

export default App
```
output:- loka, loki

```
import React  from 'react';

function App ()  {
  // i want to print more than 40 values using based on condition.
  const arr =[10,20,30,40,50,60,70]
  const filtered = arr.filter(item=> item>40)

    return (
      <div>
        {
          filtered.map(item => <li>{item}</li>)
        }
      </div>
    )
}

export default App
```
output:- 50,60,70

# Difference between export vs default export:-

if i use export:-
    export -> import {component}

if i use defalut export:-
   export default -> import component.

firstly i use to create components folder in that i have to create 3 js files, names are Header, HOme, footer.
now i do import these files in my mail App.js file. lets see.

### default export:-
```
import React  from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App ()  {

    return (
      <div>
       <Header/>
       <Home/>
       <Footer/>
      </div>
    )
}

export default App
```
```
import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>Header</h1>
    </div>
  )
}

export default Header
```

```
import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home
```

```
import React from 'react'

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}

export default Footer
```

output:- header,  Home,   Footer.

### export:-
    in this export we use {} curly braces in side we import. the files, but the export files must be declare 
    export keyword starting of the const variable.
```
import React  from 'react';
import {Header} from './Components/Header';
import {Home} from './Components/Home';
import {Footer} from './Components/Footer';

function App ()  {

    return (
      <div>
       <Header/>
       <Home/>
       <Footer/>
      </div>
    )
}
```
```
import React from 'react'

export const Header = () => {
  return (
    <div>
        <h1>Header</h1>
    </div>
  )
}
```

```
import React from 'react'

export const Home = () => {
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}
```

```
import React from 'react'

 export const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}
```

output:- Header, Home, Footer.

# How to create login form.
### preRequistic Concepts:-
1.onClick():-
2.onChange():-
3.onSubmit():-
4.useState:-   react hook
5.Object destructuring
```
import React,{useState} from 'react'

const App = () =>{
  // using useState
  const [data,setData] =useState({
   username : '',
   password : ''
 })
 // object Destructure
 const {username,password} =data;
 const changeHandler =e =>{
  setData({...data,[e.target.name]:[e.target.value]})
 }
 const submitHandler = e =>{
  e.preventDefault()
  console.log(data);
 }
  return (
    <div>
    {/* // login form  */}
      <center>
        <form onSubmit={submitHandler}>
         <input type="text" name="username" placeholder="Enter the Username" value={username} onChange={changeHandler}></input>
          <br/><br/>
         <input type="password" name="password" placeholder="Enter the password" value={password} onChange={changeHandler}></input>
          <br/><br/>
         <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default App
```

# How to create sign up form
## preRequistic Concepts:-
1.onClick():-
2.onChange():-
3.onSubmit():-
4.useState:-   react hook
5.Object destructuring

```
import React,{useState} from 'react'

const App = () =>{
  // using useState
  const [data,setData] =useState({
   username : '',
   email : '',
   password : '',
   confompassword : ''
 })
 // object Destructure
 const {username,email,password,confompassword} =data;
 const changeHandler = e =>{
  setData({...data,[e.target.name]:e.target.value})
 }
 // declare onSubmit
 const submitHandler = e =>{
  e.preventDefault();
  if(password === confompassword){
    console.log(data);
  }
  else{
    console.log("password are not matching..");
  }
 }
  return (
    <div>
    {/* // login form  */}
      <center>
        <form onSubmit={submitHandler}>
         <input type="text" name="username" placeholder="Enter the Username" value={username} onChange={changeHandler}></input><br/>
         <input type="email" name="email" placeholder="Enter your email" value={email} onChange={changeHandler}></input><br/>
         <input type="password" name="password" placeholder="Enter the password" value={password} onChange={changeHandler}></input><br/>
         <input type="password" name="confompassword" placeholder="Enter the password" value={confompassword} onChange={changeHandler}></input><br/>
         <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default App
```
# How to form Validate.
validate mean's just if it is check correct or incorrect, and we insert some conditions.

```
import React,{useState} from 'react'

const App = () =>{
  // using useState
  const [data,setData] =useState({
   username : '',
   email : '',
   password : '',
   confompassword : ''
 })
 // object Destructure
 const {username,email,password,confompassword} =data;
 const changeHandler = e =>{
  setData({...data,[e.target.name]:e.target.value})
 }
 // declare onSubmit
 const submitHandler = e =>{
  e.preventDefault();
  if(username.length < 5){
    alert("username must be atleast 5 characters ")
  }
  else if(password !== confompassword){
    alert("passwords are not matching")
  }
  else{
    console.log(data);
  }
 }
  return (
    <div>
    {/* // login form  */}
      <center>
        <form onSubmit={submitHandler}>
         <input type="text" name="username" placeholder="Enter the Username" value={username} onChange={changeHandler}></input><br/>
         <input type="email" name="email" placeholder="Enter your email" value={email} onChange={changeHandler}></input><br/>
         <input type="password" name="password" placeholder="Enter the password" value={password} onChange={changeHandler}></input><br/>
         <input type="password" name="confompassword" placeholder="Enter the password" value={confompassword} onChange={changeHandler}></input><br/>
         <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default App
```
# Create Calculator App:-
## preRequistic Concepts:-
1.onClick():-
2.onChange():-
3.onSubmit():-
4.useState:-   react hook
5.Object destructuring

#### js file
```
import React,{useState} from 'react'
import './App.css';

function App() {
  // object destructure.
  const [input, setInput] = useState("");
  const [result , setResult] = useState("");
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={handler} />
        <br />
       <button onClick={() =>setResult(eval(input))}>Result</button> 
       <h4>Result is : {result}</h4>
       
      <button onClick={()=> setInput(input+'1')}>1</button>
      <button onClick={()=> setInput(input+'2')}>2</button>
      <button onClick={()=> setInput(input+'3')}>3</button>
      <button onClick={()=> setInput(input+'4')}>4</button>
      <button onClick={()=> setInput(input+'5')}>5</button><br/>

      <button onClick={()=> setInput(input+'6')}>6</button>
      <button onClick={()=> setInput(input+'7')}>7</button>
      <button onClick={()=> setInput(input+'8')}>8</button>
      <button onClick={()=> setInput(input+'9')}>9</button>
      <button onClick={()=> setInput(input+'0')}>0</button><br/>

      <button onClick={()=> setInput(input+'+')}>+</button>
      <button onClick={()=> setInput(input+'-')}>-</button>
      <button onClick={()=> setInput(input+'*')}>*</button>
      <button onClick={()=> setInput(input+'/')}>/</button>
      <button onClick={()=> setInput('')}>clr</button><br/>
      </center>  
    </div>
  )
}

export default App
```
#### css file
```
button{
  padding:5px;
  margin: 4px;
  
}
```
# How to Get API data using Fetch API:-
## preRequistic Concepts:- 
1.useEffect,
2.useState
3.Fetch
4.Map function

```
import React,{useEffect, useState} from 'react'

const  App=() =>{
  // destructuring.
  const [data, setData] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response =>response.json()
    ).then(json => setData(json))
  },[])
  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App
```
# How to Get API data from using axios:-
Actually Axios is a library.
if u want to use axios firstly we should install axios from terminal,
This axios we regurarly use useEffect hoook, 
useEffect follows two arguments, first one is arrow function second one is dependency.
#### command for instlliation:-
  npm install axios
```
import React,{useEffect, useState} from 'react'
import axios from 'axios';


const  App=() =>{
  // destructuring.
  const [data, setData] =useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      response =>setData(response.data)
  )
  },[])
  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App
```
# How to use firebase realtime database
## react js form submission to firebase database:-
### firebase:-
  it is a cloud base platform, we can deploy to any  project to firebase and we can create our own real time database also.
### Process to create Database:-
1. go to goole search firebase.
2. click to go to console button from top right side 
3.  click to add project
4. Enter the project name and click to continue
5. unable to radio button(enable google analytics for this project) now project is getting ready.
6. now go to left side build options -> in that click to realtime database.
7. now click to create databse -> then click next ->then change the mode start to test mode. -> click enable.
8. now we can see one click. now go to Rules options then change the there is two options now set the true both options. then   publish.
9.  now copy the link and go to vscode mow import the axios.
10. now use the post method to axios. and follow the code.
11. now go to signup form enter the details and check if it is stored data from database or nor.

### CRUD operatins:-
1. C - post() => data ni url lo post cheyadaaniki.
2. R - get() => URL lo unna data ni get cheyadaaniki.
3. U - put()/Patch() => database lo unna values ni modifiy cheyadaaniki.
4. D - delete() => delete data from database.

```
import React,{useState} from 'react'
import axios from 'axios';

const App = () =>{
  // using useState
  const [data,setData] =useState({
   username : '',
   email : '',
   password : '',
   confompassword : ''
 })
 // object Destructure
 const {username,email,password,confompassword} =data;
 const changeHandler = e =>{
  setData({...data,[e.target.name]:e.target.value})
 }
 // declare onSubmit
 const submitHandler = e =>{
  e.preventDefault();
  axios.post('https://react-signup-form-f0db5-default-rtdb.firebaseio.com/register.json',
    data).then(()=> alert("Submission Sucessfully."))
    
  if(username.length < 5){
    alert("username must be atleast 5 characters ")
  }
  else if(password !== confompassword){
    alert("passwords are not matching")
  }
  else{
    console.log(data);
  }
 }
  return (
    <div>
    {/* // login form  */}
      <center>
        <form onSubmit={submitHandler}>
         <input type="text" name="username" placeholder="Enter the Username" value={username} onChange={changeHandler}></input><br/>
         <input type="email" name="email" placeholder="Enter your email" value={email} onChange={changeHandler}></input><br/>
         <input type="password" name="password" placeholder="Enter the password" value={password} onChange={changeHandler}></input><br/>
         <input type="password" name="confompassword" placeholder="Enter the password" value={confompassword} onChange={changeHandler}></input><br/>
         <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default App
```
# How to use React Router:-
  we can use to develop the multipage applications for using React Router.
## PreRequistic concepts:-
### install recact router
  npm install react-router-dom

 without this modile we can't develop multipage applications aso compulsory we want it.

### Components to use:-
1. import {BrowserRouter,switch,Route}
2. import {link}

### Syntax:-
```
<BrowserRouter>
  <Switch>
    <Route path='/' Exact component={name}/>
      .............................
    <Route path='/*' Exact component={*}/>
  </Switch>
 </BrowserRouter>
```
### Process:-
1. firstly i take one App.js file in that file basic boiler plate is there.
2. second i create a one navbar in that navbar i decalre ul>li 3 tags.(Home, DashBoard, About)
3. then each one of li tag i was take separate js files.
4. then navbar and three js files are imported to App.js mail file.
5. and that to import react-route-dom also imported.
6. then follow the given code.

### App.js file(Main file):-

```
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  )
}

export default App
```
### Navbar file:-
```
import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/About"><li>About</li></Link>

      </ul>
    </div>
  )
}

export default Navbar
```
### index.css file:-
```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul{

  text-align: right;

  text-decoration: none;

}

li{

  display: inline;

  padding:10px

}
div{
  background-color: cadetblue;
  top:10px;
}
```
### Home.js file:-
```
import React from 'react'

const Home = () => {
  return (
    <div>
       <center>
            <h4>Welcome to Home Page</h4>
      </center>
    </div>
  )
}

export default Home
```
### Dashboard.js file:-
```
import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <center>
            <h4>Displaying Dashboard Page Content.</h4>
      </center>
    </div>
  )
}

export default Dashboard
```
### About.js file:-
```
import React from 'react'

const About = () => {
  return (
    <div>
      <center>
            <h4>Displaying About Page Content.</h4>
      </center>
    </div>
  )
}

export default About
```

# Redirect Component:-
Whenever we develop multipage we can use this Redirect component. like to move one page to another page definatly we can use Redirect component.

now i develop this Redirect but i only add here only few changes to the last routing pages.
### home.js file:- 
here i move home page to dashboard page.

```
import React,{useState} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {
  const [auth,setAuth] = useState(false);
  if(auth){
    return <Redirect to='/Dashboard'/>
  }
  return (
    <div>
       <center>
            <h4>Welcome to Home Page</h4>
            <button onClick={()=>setAuth(true)}>Log In</button>
      </center>
    </div>
  )
}

export default Home
```
# useHistory Hook:-
  *. whenever we develop multipage Application and to move or Redirect one component to another component or one page to another
  page we can use this useHistory hook. <br/>
  *. THen the Redirect component is we can use class level components and functional level components but this useHistory
    hook only use in functional level components and don't use class level components.<br/>
  *. firstly we can import this useHistory hook.<br/>
```
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Home = () => {
 let history =useHistory();
  return (
    <div>
       <center>
            <h4>Welcome to Home Page</h4>
            <button onClick={()=>history.push('./About')}>Log In</button>
      </center>
    </div>
  )
}

export default Home
```
*. it will go to About page<br/>

# How to use URL parameters And path params VS Query Params:-
when ever we use to develop multipage applications can use this params.
## path params:-
if suppose manam send cheisna URL value varaible name manaki mundhy telisapudu path params use chestham
## syntax:-
```
<Route path="/profile/:name" component={profile}/ >
https://localhost:300/profile/teluguskillhub
    varaible --> name=teluguskillhub
```
## Query params:-
if suppose manaki aa varaible name teliyaalsina aavasaram ledhu. query parameters lo manam send chesinapudy
varaible name equal to value ani send chestham.
## syntax:-
```
<Route path="/profile" component={profile}/ >
https://localhost:300/profile? name=teluguskillhub
    varaible --> name=teluguskillhub

ex:-https://www.google.com/search?client=ubuntu-sn&channel=fs&q=facebook  you can see that question mark.
```
# How to use URL path parameters:-
## path params:-
if suppose manam send cheisna URL value varaible name manaki mundhy telisapudu path params use chestham
## syntax:-
```
<Route path="/profile/:name" component={profile}/ >
https://localhost:300/profile/teluguskillhub
    varaible --> name=teluguskillhub
```
```
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard/:name' exact component={Dashboard}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  )
}

export default App
```
```
import React from 'react'

const Dashboard = ({match}) => {
  return (
    <div>
       <center>
            <h4>Displaying Dashboard profile name is : {match.params.name}</h4>
      </center>
    </div>
  )
}

export default Dashboard
```
# how to import images :-
import varaible name mana istam.
```
import React from 'react';
import Reactpic from './reactlogo.jpg';

const App = () => {
  return (
    <div>
      <img src={Reactpic} height="250" width="auto"></img>
      <h3>Lokesh prabhavat</h3>
    </div>
  )
}

export default App
```

# How to import audio:-
import varaible name mana istam.
```
import React from 'react';
import Audio from './music.mp3';

const App = () => {
  return (
    <div>
      <audio controls>
        <source src={Audio} type='audio/org'></source>
      </audio>
    </div>
  )
}

export default App
```
# How to import video:-
import varaible name mana istam.
```
import React from 'react';
import Videofile from './videosfile.mp4';


const App = () => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={Videofile} type="videofile.mp4"></source>
      </video>
    </div>
  )
}

export default App
```

# How  to use useContext hook:-
## context:-
  context provides a way to pass data through the component tree without having to pass props down manually
  at every level.
                    or
  oka component nunche manaki kavalsina component ki direct ga prop values ni send cheyadaaniki react hooks
  use chestham.
  ```
                          |APP Component| (username)
  |-------------------------------|--------------------------------------|
  |                               |                                      |
  A (component)                   B(component)                           C(component)
                                  |                                       |
                                  D (component)                          E(component)
                                                                           |
                                                                         F(component).
```
1. oka username any componet nenu A,D,F ki pass cheyaali anty first A ki direct ga pass chestha.
2. next B through D ki pass chestha.
3. next C, E  THrough F ki pass chestha.
4. ilaa 100's  of component unty naaku time taken process.. so idhi deeni overcome cheyadaaniki useContext ni use chestha.
```
import React from 'react';
import ComponentC from './componentC';

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <center>
      <UserContext.Provider value={"Lokesh kumar"}>
        <ComponentC/>
     </UserContext.Provider>
      </center>
     
    </div>
  )
}

export default App
```  
          ikada nenu B component ni avoid chesthunaa. direct ga c ki link chestha. 
```
import React from 'react'

const componentB = () => {
  return (
    <div>
      <h1>this is component B</h1>
    </div>
  )
}

export default componentB
```

```
import React from 'react';
import { UserContext } from './App';


const componentC = () => {
  return (
    <div>
        <UserContext.Consumer>
            {value => <div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default componentC
```
# Redux in React js:-
its  all about   **MANAGING STATE VALUES IN MULTIPLE COMPONENTS AT A TIME, USING REDUX STORE**.
```
  ----------------->                ----------------------->               -------->
 |---------------------          |---------------------------------|           |--------------------------------|
 |    ACTIONS         |          |           REDUCERS              |           |          STORE                 |
 | {                  |--------->|  (check the actions             |---------> |   (Combined application state  |
 |  type:'Add_phots'  |          |   type and updates applicatios  |           |    from all components big     |
 |  payloads:{img...} |          |   state with the payload)       |           |      java scripts objects)     |
 | }                  |          |----------------------------------           |---------------------------------
 |--------------------                                                                          |
        |                                                                                       |
        |                                                                                       |
        |                                                                                       |
        |                                                                                       |
   |-------------|                                                                        |---------------------------|
   | Components  |                                                                        |     PROVIDERS             |
   |-------------|                                                                        |  (provides the state data |
         |                 (Encapsulated the mail component)                              |  to all components)       |
         |--------------------------------------------------------------------------------|---------------------------|
  |---------------|
  |     USER      |
  |---------------|
```
## Dependincies to be install for Redux
1. npm install redux
2. npm install react-redux
3. npm install redux-thunk

## App.js file:-
```
import React from 'react';
import { connect } from 'react-redux';
import Inc from './inc';

const App = ({count}) => {
  return (
    <div>
      <center>
        Count From App Js Component : {count} <br></br>
        <Inc />
      </center>
    </div>
  )
}

export default App
```
## Actions.js file:-
```
export const increase = () => dispatch =>{
    dispatch ({
        type: "INCREMENT"
    })
}

export const decrease = () => dispatch =>{
    dispatch ({
        type: "DECREASE"
    })
}
```
## Reducers.js file:-
```
const initialState =0;

 function countReducer(state = initialState, action ){
    const {type, payload} =action;

    switch(type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state
    }
 }
 export default countReducer;
```
## inc.js file:-
```
import React from "react";
import {connect} from 'react-redux';
import { increase, decrease } from "./Action";

const inc = ({count, increase, decrease}) =>{
    return(
        <div>
            Count From Inc Component: {count} <br></br>
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>decrease</button>
        </div>
    )
}
```
#  mapStateToProps in react-redux:-
## Defination:-
  function that you would use to provide the store data to your component.
                  or
  React store looni data ni mana component looki destructure chesi use chesukoovadaniki use chestham

## App.js file:-
```
import React from 'react';
import { connect } from 'react-redux';
import Inc from './inc';

const App = ({count, username, email}) => {
  return (
    <div>
      <center>
        Count From App Js Component : {count} <br></br>
        <Inc />
      </center>
    </div>
  )
}
const mapStateToProps = (state)=>({
  count :state,
  username : state.username,
  email : state.email
})
export default connect(mapStateToProps)(App);
```
## reducers.js file:-
```
const initialState = {
    username : "lokeshrevanuru",
    email : "lokeshrevanuru7@gmail.com"
}

 function countReducer(state = initialState, action ){
    const {type, payload} =action;

    switch(type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state
    }
 }
 export default countReducer;
```
## inc.js file:-
```
import React from "react";
import {connect} from 'react-redux';
import { increase, decrease } from "./Action";

const inc = ({count, increase, decrease}) =>{
    return(
        <div>
            Count From Inc Component: {count} <br></br>
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>decrease</button>
        </div>
    )
}
```
## Actions.js file:-
```
export const increase = () => dispatch =>{
    dispatch ({
        type: "INCREMENT"
    })
}

export const decrease = () => dispatch =>{
    dispatch ({
        type: "DECREASE"
    })
}
```

# mapDispatchToProps in React-Redux:-
  mapDispatchToProps is use to provide the actions creators as props to your component.
                                    or
  mana own component loony action  creators ni dispatch cheyalanukunapudu deeni use chestham. aala 
  chesina functions aani reducer ki move avuthai.
## inc.js file:-
```
import React from "react";
import {connect} from 'react-redux';
import { increase, decrease } from "./Action";
import { type } from "@testing-library/user-event/dist/type";

const inc = ({count, increase, decrease}) =>{
    return(
        <div>
            Count From Inc Component: {count} <br></br>
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>decrease</button>
        </div>
    )
}
const mapStateToProps  = (state) =>({
    count :state
})
const mapDispatchToProps = (dispatch) =>{
    return {
        // dispatching plain actions.
        increase: () => dispatch({type: 'INCREMENT'}),
        decrease: () => dispatch({type: 'DECREMENT'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(inc); 
```
## reducer.js file:-
```
const initialState = 0;


 function countReducer(state = initialState, action ){
    const {type, payload} =action;

    switch(type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state
    }
 }
 export default countReducer;
```
# life cycle methods in react
## life cycyle class-based components:-
###  side-effects in functional components : useEffect()
```
 class-based components can't use react hooks
                                  |
----------------------------------------------------------------------------
|                                 |                                        |
|                                 |                                        |
componentDidMount()             called once component mounted             useEffcet(...,[])
                                (was evaluated & rendered)

componentDidUpdate()            called once component updated             useEffect(...,[some_value])
                                (was evaluated & rendered)

componentwillUnMount()          called right before component             useEffect(()=>{
                                is unmounted (removed from DOM)             return()=>{...}},[])
```
```
import React from 'react';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      show: true,
      count : 0
    };
  }
  delHeader = () =>{
    this.setState({show: false});
  }
  componentDidMount(){
    console.log("componentDidMount Method");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate Method");
  }

  render() {
    let myheader;
    if(this.state.show){
      myheader = <Child />;
    };
    return (
      <div>
         <center>
            {myheader}
            <button type="button" onClick={this.delHeader}>Delete Header</button><br></br>
            <h3>count : {this.state.count}</h3>
            <button onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>
         </center>
      </div>
    )
  }
}
class Child extends React.Component{
  componentWillUnmount() {
    console.log("componentWillUnmount Method");
  }
  return(){
    return (
      <h1>Hello world</h1>
    );
  }
}

export default Container;
```

# how to use bootsrap in react:-
## process:-
1. go to google search react-bootstarp.github.io
2. go to get started and copy that install commands and paste in terminal.
3. see the package.json if it is installed or not.
4. copy the seconf link of  css and paste the index.html
5. go to components and copy the jumbotraon and paste in the inside return statement.
5. import the jumbotraon components, BUtton aswell

## commands:-
```
npm install react-bootstrap bootstrap@4.6.0
```
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
```
### App.js file:-
```
import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap';


const App = () => {
  return (
    <div>
      <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
             extra attention to featured content or information.
          </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default App
```
# how to use Material-UI in React:-
it is a framework of react.js
## process:-
1. go to google and search Material-ui and gothrough offical documentation.
2. go to get started and copy that install link and paste it on terminal.
3. see the package .json if it is installed or not.
4. copy the any component in that documentation and paste it on App.js and check it is running or not.

### App.js file:-
```
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
    /  </SwipeableViews>
    </Box>
  );
}
```
# How to downlode files in React:-
1. firstly aa folder lo manaki pics undaali.
2. unna pic ni import chesukoovali.
3. follow the below code.
```
import React from 'react';
import Thumbnail from './reactlogo.jpg';

const App = () => {
  return (
    <div>
      <center>
        <img src={Thumbnail} alt="thumbnail" height="250px" width="450px"></img><br/>
        <a href={Thumbnail} className="btn-btn-primary" download="thumbnail">Click to Download</a>
      </center>
    </div>
  )
}

export default App
```

# How to send a email in React:-
oka customer submit chesina from manaki mail ki msg raavali anedhi process ipudu chudam.
## process:-
1. go to emailjs official website in google. and signup. and verify your email.
2. now go to Docs and gothrough react, there is code in onSubmit handler lo manam ala cheyaali ani copy that code.
3. now open that admin page, now we have to focus on two things. 1. Email-servises, 2. Email-Templates.
4. 1. Email-servises:-
     * manam a particular mail lo receive chesukoovali anukuntunaamo daani choose chesukoovali.
     *  go to create new service and select the email option and choose the which email do u  connect and give some 
        permissions and final create account.
   2. Email-Templates:-
     * manam template ala undaali ani indulo untundhi. and A format lo undaali and ala undaali ani untundhi.
     * and if u want to change any changes do it and save. 
5. now install the emailjs-com to terminal.
6. and import from top of the App.js file.
7. follow the code.

```
import React,{useState} from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  const [data, setData] = useState({
    subject : '',
    email : '',
    message : ''
  })
  const {subject, email,message}=data;
  const submitHandler = e =>{
    e.preventDefault();

    emailjs.sendForm('service_afu2m57', 'template_do12khr', e.target, 'FLxGXpyQTCOBaWLQn')
      .then((result)=>{
        console.log(result.text);
      },(error)=>{
        console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <div>
      <center>
      <form onSubmit={submitHandler} autoComplete='off'>
        <label>Subject :</label><br/>
        <input type="subject" name="subject" placeholder="subject" value={subject} onChange={submitHandler}></input><br/>
        <label>E-mail :</label><br/>
        <input type="email" name="email" placeholder="email" value={email} onChange={submitHandler}></input><br/>
        <label>Message :</label><br/>
        <input type="text" name="message" placeholder="message" value={message} onChange={submitHandler}></input><br/>
        <input type="submit" name="submit"></input> 
      </form>
      </center>   
    </div>
  )
}

export default App
```

# search filter in react:-
manaki kavlsina ooru ni search cheyagaany ravadaaniki manam e search filter process ni chudam.
### App.js file:-
```
import React,{useState} from 'react'
import data from './city.json';


const App = () => {
  const [search, setSearch] =useState('');
  return (
    <div>
      <center>
       <h4>Enter the City:</h4>
       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
       {data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
          return <div style={{"border":"1px solid black", "padding":"3px","margin":"10px","maxWidth":"70%"}}>
              {city.name}
          </div>
       
      })}
       </center>
     </div>
   
  )
}

export default App
```
### city.json file:-
```
[
    {
        "id": "1",
        "name" :"kadapa"

    },
   
    {
        "id": "2",
        "name" :"kadiri"

    },

    {
        "id": "3",
        "name" :"kurnool"

    },

    {
        "id": "4",
        "name" :"chitoor"

    },

    {
        "id": "5",
        "name" :"tirupathi"

    },

    {
        "id": "6",
        "name" :"annamaiah"

    },

    {
        "id": "7",
        "name" :"vizag"

    },

    {
        "id": "8",
        "name" :"aamalapuram"

    },

    {
        "id": "9",
        "name" :"konaseema"

    },

    {
        "id": "10",
        "name" :"west godavari"

    },

    {
        "id": "11",
        "name" :"east godavari"

    },

    {
        "id": "12",
        "name" :"vijayawada"

    },

    {
        "id": "13",
        "name" :"bapatla"

    },

    {
        "id": "14",
        "name" :"aananthapur"

    },

    {
        "id": "15",
        "name" :"hindupur"

    }
]
```

# React.Js Interview Questions:-
```
1. what is react.js?
A. react js frontend js library and used for building components 
    based user interface UI.
    it is maintained by facebook 

2. what is jsx in react js?
A. jsx stands for jsXML
  jsx allows us to write HTML in react
  ex:- const tag = <h1> text</h1>

3. what is useContext hook?
A. useContext hook allows passing data to children elements 
    without using redux
  
4. what is redux in react?
A.  redux is an open-source js library and used to manage state values
    globally.

5. what is redux thunk?
A. its a middleware.allows you to write action creators that 
    return a function  instead of an action.

6.difference b/w useContext and Redux?
A. useContext                       Redux
-------------------              ----------------------------
  1. use context is a hook        1. redux is a state management library
  2. it is used to share data     2. it used to manage data& state.
  3. it re-renders all            3. iy only re-render the updated 
    components whenever these         components.
    is any updates in the 
    provider's value prop          4. prefer for larger applications
  4. Recommended for small 
    applications   

7.what is the use of react-hook?
A.  hooks are functions use to manage both
   **React state and lifecycle** features from functions components.

  Hooks don't work inside classes.

8. what is mounting and unmounting in react?
A. MOUNTING:-
  it is the process of outputting or additional components to the DOM

  UNMOUNTING:-
  it is the process of removing or blocking them from the DOM.

9. which DOM is faster in react?
A.  VIRTUAL DOM:-
    it is extremely faster bcoz it is an abstraction of the HTML DOM 
    and lightweight.

    REAL DOM :-
    it is a bit slower bcoz of update the content, structure, and style of an document.
```
# React-Redux Tutorial:-
```
1. what is redux in react?
A.  redux is an open-source js library and used to manage state values
    globally.

2. packages required to use redux?
  1. npm install redux
  2. npm install react-redux
  3. npm install redux-thunk
  4. npm install redux-devtools-extension

3. Major Terms in redux?
  Action
  store----> e store lo (reducer) untindhi

  ACTION ---------> dispatch action-----------
    | 1                                      | 2
    |                                        |
    |                                        |
    event                                   REDUX-THUNK
     |                                      middleware
     |                                         |
     |                                         |
     |                                         |
     |                                         | 3
     |                                       effects
     |                                          |
     |                                          |
     |                                          |
     |                                         Reducers   
     |                                          |
     React    (4)                               | 3
    components(UI)----------Provider-----Store---                   
```
# Class components in recat:-

shortform   rcc+ enter
```
import React, { Component } from 'react'

export default class App extends Component {
  state={
    name : "Skillhub"
  }
  render() {
    return (
      <div>
        <center>
          <h1>{this.state.name}</h1>
          <br/>
          <button onClick={()=>this.setState({name: "Telugu SkillHub"})}>Change</button>
        </center>
        
      </div>
    )
  }
}

```

# useRef() in react hook:-
user dagara nunche value ni tesukovadam kosam, and tesukunaa value  ni proper ga oka varaible ki assign chesukovadam 
kosam use chestham.
```
useState():-
  it will re-render when the content change and update in UI.

useRef():-
it doesn't notify you when it's content changes, mutating the (.current) property doesn't cause a re-render.

```

```
import React,{useRef, useEffect} from 'react';


const App = () => {
  const data =useRef(null);

  const submitHandler = e => {
      e.preventDefault();
      console.log(data.current.value);
  }
  useEffect(()=>{
    data.current.focus();
  },[])
  return (
    <div>
     <center>
      <form  onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder="Enter your name" ></input><br/>
        <input type="submit"/>
      </form>
     </center>
    </div>
  )
}

export default App
```

# useReducer() React hook:-
* it has work flow as Reduce()

* REDUX:- use to store state values in Redux-store.
* useReducer:- use to store state values to local const varaible.

### syntax:-

const[state,dispatch] = useReducer(reducer,initialState);

```
import React,{useReducer} from 'react';

const initialState = {count : 0};

function reducer(state, action){
  switch(action.type){
    case 'increment':
        return {count: state.count+1};
    case 'decrement':
        return {count: state.count -1};
    default:
      throw new Error();
  }
}
function  App (){
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <center>
        Count: {state.count}
        <button onClick={() =>dispatch({type: 'decrement'})}>-</button>
        <button onClick={() =>dispatch({type: 'increment'})}>+</button>
      </center>
    </div> 
  )
}

export default App
```

# Context API in React:-
Context API is an kind of featutes used to share data with multiple components,  without passing the data through props manually.

firstly we have to known what is prop drilling and context API

### PROP DRILLING:-
DATA ni hirarchey level ga ikada use chestham (Anty direct ga grand child ki use cheyalalem, first patent and next child aala)
```
                --------
               |  DATA |
               ---------
                   |
                   |
                   |
  ------------------------------------
  |            container             |
  |            component             |
  |-----------------------------------
           |                      |
           |                      |
  -----------------               -----------------
  | child         |               | child         |
  | component     |               | component     |
  |----------------               -----------------
    |             |                |             |
    |             |                |              |
  ------------- -------------     -----------   -------------
  | child     | | child     |     | child    |  | child     |
  | component | | component |     | component|  | component |
  ------------- ------------      ------------  --------------
```

### CONTEXT API
DATA ni manaki kavalsina child component ki direct ga use chestham, to avoid the prop drilling. 
```
                --------
               |  DATA |
               ---------
                   |
                   |
                   |
  ------------------------------------
  |            container             |
  |            component             |
  |-----------------------------------
                                
                                 
  -----------------               -----------------
  | child         |               | child         |
  | component     |               | component     |
  |----------------               -----------------
                                          
  
  ------------- -------------     -----------   -------------
  | child     | | child     |     | child    |  | child     |
  | component | | component |     | component|  | component |
  ------------- ------------      ------------  --------------
```

### APP.JS File:-
```
import React,{createContext, useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';


export const store = createContext();

const App = () => {
  const [data, setData] = useState(0);
  return (
    <store.Provider value={[data,setData]}>
      <center>
      <ComponentA /> 
      <ComponentB />
      <button onClick={() =>setData(data+1)}>Increment</button>
      <br/>
      <button onClick={() =>setData(data-1)}>Decrement</button>
      </center>      
    </store.Provider>
  )
}

export default App
```

```
import React,{useContext} from 'react';
import {store} from './App';

const ComponentA = () => {
  const [data, setData] =useContext(store)
  return (
    <div>
      Component A {data}
    </div>
  )
}

export default ComponentA
```

```
import React,{useContext} from 'react';
import { store } from './App';

const ComponentB = () => {
  const [data, setData] =useContext(store)
  return (
    <div>
      Component B {data}
    </div>
  )
}

export default ComponentB
```
NOW SEE THE REAL TIME EXAMPLES:-

```
import React,{createContext, useState} from 'react';
import Count from './Components/Count';
import Display from './Components/Display';


export const store = createContext();

const App = () => {
  const [data, setData] = useState([
    {
      brandname : "nokia"
    },
    {
      brandname : "Realme"
    },
    {
      brandname : "Mi"
    }
  ]);
  return (
    <store.Provider value={[data,setData]}>
      <center>
      <Count /> 
      <Display />
      </center>      
    </store.Provider>
  )
}

export default App
```

### Count.js file:-

```
import React,{useContext} from 'react'
import {store} from '../App';



const Count = () => {
    const [data, setData] = useContext(store);
  return (
    <div className='card'>
      <div className='card-body'>
       <h3 className='card-title'>Count : {data.length}</h3>
      </div>
    </div>
  )
}

export default Count
```

### Display.js file:-

```
import React,{useContext, useState} from 'react';
import {store} from '../App';

const Display = () => {
    const [data,setData] = useContext(store);
    const [name,setName] = useState(' ');
    const submitHandler = e =>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
  return (
    <div className='card'>
    <div className='card-body'>
      {data.map(item => <h3 className='card-title'>{item.brandname}</h3>)}
      <form className='form' onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter your brand'></input>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  </div>
  )
}

export default Display
```

# Higher-Order Components(HOC):-
* it is a function that takes a component and returns a new components.
* it is a advanced technique in react for reusing component logic.
* HOC is a pure function with zero side-effects and doesn't modift the input component.

EX:-
```
    /login page         HOC(reuse logic)
    ---------->           user                    ------------> /Home page
                          authorize
                                                  ------------> /Profile page
                                                  
                                                  -------------> / service page
```

### App.js file :-
```
import React from "react";
import HOC from './Components/HOC';

const App = (props) =>{
  return (
    <h1>welcome to user..!!{props.name}</h1>
  )
}

export default HOC(App);
```

### Hoc file:-
```
import React from "react";

const HOC = (component) => {
    return (
        class extends React.Component {
            state = {
                auth : true
            }
            render(){
                return(
                    <div>
                        {this.state.auth ? <component name="loka" /> : <h1>Please Login</h1>}
                    </div>
                )
            }
        }
    )
}

export default HOC;
```

# useMEMO() hook:-
* entire Application performance ni betterment kosam useMEMO hook ni use chestham.
*                     (or)
* help us to improve the performance of application when we are performing most expensive function.
* useMEMO will not run for every re-render happens.
* it will run during the first render and when it's dependency values changes.

* useEFFCET() will run after render of the component.
* useMEMO() will run during render of the component. 

### APP.js without useMEMO():-
```
import React from "react";


const App = () =>{
  const [counter,setCounter] = React.useState(0);
  const [number,setNumber] = React.useState(5);
  const Factorial = fact(number);
    return (
    <center>
       Factorial : {Factorial} <br/> 
      <button onClick={() => setCounter(counter+1)}>Counter Increment</button> <br/>
      counter : {counter}
    </center>
  )
}

const fact =(n) =>{
  let answer =1;
  for(var i=n; i>=1; i--){
    answer = answer * i;
  }
  console.log('factorial function calling');
  return answer;
}

export default App;
```

### APP.js with useMEMO():-
```
import React from "react";


const App = () =>{
  const [counter,setCounter] = React.useState(0);
  const [number,setNumber] = React.useState(5);
  const Factorial = React.useMemo(() =>fact(number),[number]);
    return (
    <center>
       Factorial : {Factorial} <br/> 
      <button onClick={() => setCounter(counter+1)}>Counter Increment</button> <br/>
      <button onClick={() => setNumber(number+1)}>Number Increment</button> <br/>
      counter : {counter}
    </center>
  )
}

const fact =(n) =>{
  let answer =1;
  for(var i=n; i>=1; i--){
    answer = answer * i;
  }
  console.log('factorial function calling');
  return answer;
}

export default App;
```

# useEffect VS useMemo in react:-
## syntax:-
* useEffect (() => {},[a...]);
* useMemo (() =>{},[a..]);

### App.js file:-
```
import React from "react";


const App = () =>{
  const [effect,setEffect] = React.useState(0);
  const [memo,setMemo] = React.useState(0);

  React.useEffect(() => {console.log('from useEffect' + effect)},[effect]);
  React.useMemo(() =>{console.log('from useMemo' +memo)},[memo]);
 
    return (
    <center>

      <button onClick={() => setEffect(effect+1)}>useEffect Increment</button> <br/>
      <button onClick={() => setMemo(memo+1)}>useMemo Increment</button> <br/>
    
    </center>
  )
}
export default App;
```

# statefull and stateless in react:-
## statefull:-
  manam edainaa oka component lo state values ni declare cheyadam, or state values ni store chesi handle cheyadam gaani chesthy
  so this type of actions is called statefull.

## stateless:-
  manam edainaa oka component lo state values ni use cheyakunda just html  content ni return (or) props ni render chesthy
  is called stateless.

## App.js file:-
```
import React from "react";
import Test from "./Components/Test";

const App = () =>{
  const [count,setCount] =React.useState(0);
    return (
    <center>

     <h3> Count : {count}</h3>
     <button onClick={() => setCount(count+1)}>Increment</button>
      <Test  count={count}/>
    </center>
  )
}
export default App;
```

## Test.js file:-
```
import React from 'react'

const Test = (props) => {
  return (
    <div>
        <center>
            <h3> Count : {props.count} from stateless component..!!</h3>
        </center>
    </div>
  )
}

export default Test
```

# Controlled and Uncontrolled Components in React:-
## Controlled Components:-
  element data can be controlled by parent component through callbacks like onChange().

### App.js file:-
```
import React from "react";
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontroled';

const App = () =>{
 
    return (
    <center>
      <Controlled />
    </center>
  )
}


export default App;
```
### Controlled file:-
```
import React from 'react';
import Test from './Test';

const Controlled = () => {
    const [name,setName] = React.useState('');
    const changeHandler = e =>{
        setName (e.target.value);
    }
  return (
    <div>
        <center>
            Name : {name} <br/>
            <input type="text" onChange={changeHandler}/> <br />
            <Test changeHandler={changeHandler}/>
        </center>
    </div>
  )
}

export default Controlled
```

### Test file:-
```
import React from 'react'

const Test = (props) => {
  return (
    <div>
        <center>
           <input type="text" onChange={props.changeHandler}></input>
        </center>
    </div>
  )
}

export default Test
```

## Uncontrolled Components:-
  elements data can be controlled by the DOM itself.

### App.js file:-
```
import React from "react";
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontroled';

const App = () =>{
 
    return (
    <center>
      <Uncontrolled />
    </center>
  )
}


export default App;
```

### Uncontrolled file:-
```
import React from 'react'

function Example () {
    const inputRef = React.useRef('');
    const submitHandler = e =>{
        e.preventDefault();
        alert(inputRef.current.value)
    }

    return (
        <div>
          <form onSubmit={submitHandler}>
            <input type="text" ref={inputRef} />
            <input type="submit" value="submit" />
          </form>
        </div>
    )
}
export default Example
```

# React lazy loaders:-
### Defination:-
  lazy loading used to increse the loading speed of an application with dynamic importing concepts (or) code splitting.
### what is the dynamic importing or code splitting..?
  aantha kanty mundhu manaki bundling anty ento teliyaali.
### Bundling:-
  mana dagara more than one file undi vaatini single file gaa convert cheyadaaniki bundling use chestham
                            (or)
  Bundling is the process of following imported files and merging them into a single file: a "bundle" this bundle can then
  be included on a webpage to load an entire app at once.

### process;-
* firstly manam konni components pages ni build cheyaali
* next go to terminal type this command " npm run build ".
* deeni valla use em anty aanitini okadaanila(chunk files) convert chesi oka main ga istundhi.
* so manaki 3 pages kavaali 1. home.js 
                            2. Login.js
                            3. Register.js
* so e chunk files aai just kb or b loo untai vaati storage.
```
Home.js ----------->                      ---------->     main.js
                        |------------|        
                        |            |    ----------->    1.chunk.js
Login.js----------->    |            |
                        |            |   ------------->   2.chunk.js
                        |            |
Register.js-------->    |-------------  --------------->  3.chunk.js

```
### App.js file:-
```
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom/cjs/react-router-dom.min";
const Home1 = React.lazy(() =>import('./Components/Home1'));
const Login = React.lazy(() =>import('./Components/Login'));
const Register = React.lazy(() =>import('./Components/Register'));


const App = () =>{ 
    return (
    <BrowserRouter>
      <Routes>
        <Route path='./' element={<Home1 />}></Route>
        <Route path='./Login' element={<Login />}></Route>
        <Route path='./Register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
```

# Error Boundaries componnet:-
  Error boundary component will catch javascript errors anywhere in their child component tree and display a fallback UI.

### EX:-
```
<ErrorBoundary>
    <componentA />          -----------------> (child Component)
</ErrorBoundary>
```
### Imp Thing:-
```
  <ErrorBoundary> is not an react inbluit importing component. it's completly custom component.
```

### App.js file:-
```
import React from 'react';
import ComponentA1 from './Components/ComponentA1';
import Componentb1 from './Components/Componentb1';
import ErrorBoundary from './Components/ErrorBoundary';


const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ComponentA1 />
        <Componentb1 />
      </ErrorBoundary>
    </div>
  )
}

export default App
```

### ComponentA1 file:-
```
import React from 'react'

const ComponentA1 = () => {
  const [count,setCount] =React.useState(0);
  React.useEffect(()=>{
    if(count===5){
      throw new Error("App Crased from ComponentA")
    }
  },[count])
  return (
    <div>
      <center>
        <h1>ComponentA :{count}</h1>
        <button onClick={() =>setCount(count+1)}>ComponentA Increment</button>
      </center>
    </div>
  )
}

export default ComponentA1
```
### ComponentB1 file:-
```
import React from 'react'

const Componentb1 = () => {
    const [count,setCount] = React.useState(0);
  return (
    <div>
      <hr />
      <center>
        <h1> ComponentB : {count}</h1>
        <button onClick={() =>setCount(count+1)}>ComponentB Increment</button>
      </center>
    </div>
  )
}

export default Componentb1
```
### ErrorBoundary.js file:-
```
import React,{Component} from "react";
import ErrorPage from './ErrorPage';

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {error:null}
    }
    componentDidCatch(error){
        this.setState({
            error:error
        })
    }
    render(){
        if(this.state.error){
            return (
                <ErrorPage />
            )
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundary
```
### ErrorPage.js file:-
```
just empty page.
```

# React ReduxTool Kit (RTK):-
  build a project using RTK.
* Redux toolkit is lanched by redux team, to solve 3 major issues with redux.
* 1 configuring a redux store is too complicated.
* 2 it required lot of package to build a large scale application.
* 3 to reduce the complexity of boilerplate code.

## Redux -Flow:-
### 1.stote:-
```
const stote =createStore(
  reducer,
  composewithDevTools(applymiddleware(...thunk))
)
```

### 2.Reducers:-
```
export default function reducer(state=count,action){
  const {type,payload} =action;
  switch(type){
    case "Increment":
        return state+1;
    case "Decrement":
        return state-1;
  }
}
```

### 3.Actions:-
```
export const IncAction =(value) =>
  async dispatch =>{
    dispatch{
      type: "Increment",
      payload: value
    }
  }
```

### 4.using state value and dispatch Actions.
```
<button onClick={() =>IncAction(5)}>Increment</button>
<button onClick={DecAction}>Increment</button>
```
#### REDUX TOOLKIT LO  REDUCERS + ACTIONS E RENDU KALIPI CREATESLICE GAA UNTAI.

# Redux Toolkit -Flow:-
### 1. store:-
```
export const store =configureStore({
  reducer:{
    reducer:reducer
  }
})
```
### 2.CreateSlice:-
```
const count = createslice({
  name:"count",
  initialstate,
  reducers:{
    increment:(state)=>{
      state.count +=1
    },
    decrement:(state)=>{
      state.count -=1
    }
  }
})
```
### 3. use state values and dispatch
```
<button onClick={() =>dispatch(increment())}>Increase</button>
<button onClick={() =>dispatch(decrement())}>decrease</button>
```

## install packages before start the project:-
* npm install @reduxjs/toolkit react-redux
* npm install bootstrap.





       
        