import React from "react";
import ReactDOM from "react-dom/client";

// React Elements

 const heading = React.createElement("h1",{id:"heading"},"Namaste React😀");
 //React.createElement() is not html element it just a js object

 console.log(heading);

 /////////////////////////
 //JSX(transpiled before it reaches the JS) -Parcel-Bebel 
 
 //HTML Like Syntax

 //JSX =>Babel transpiles it to  React.createElement => ReactElement-JS Object => HTMLElement(render)
 
 //creating react element in jsx

 const jsxHeading = (<h1 className="heading">Namaste React using JSX🚀</h1>)
 console.log(jsxHeading)

 //React Functional Component with return keyword  
const HeadingComponent = ()=>{
    return <h1>Namaste React Functional Component</h1>
};

//you can also attempt to not the write the return keyword in fat arrow functions with multiline also

//React Functional Component without return keyword
const HeadingComponent1 = ()=> <h1 className="heading1">Namaste react without return</h1>

//////////////////////////////////
//Passing the functional component inside another functional component
//component composition
//component using anonymous function return is necessary
const Title=function(){
    return(
        <h1 className="heading">Hey this functional component using normal function</h1>
    )
}
// const Title=()=>(
//     <h1 className="title">Functional Component inside other </h1>
// )
const  number=10000
const PassingFunctional = () => (
  <div id="container">
    <h1 className="passing">Passing</h1>
    <Title />
    {/* // {number} */}
    {/* {100+200} */}
    {jsxHeading}
    <h2>{console.log(2223n)}</h2>
    <h1 className="component">Component</h1>
  </div>
);
//React Element inside a react element
const elem =<span>Passing element is another element</span>
const title3 = (
    <div id="container">
    <h1 className="title3">receiving element</h1>
    {elem}
    <h2>Received</h2>
    </div>
);

//Passing a react element to a functional component
const elem1=<span>passing element to component</span>
const HeadingComponent2 = ()=>(
    <div id="container">
        <h1>receiving element</h1>
        {elem1}
        <h1>Received element</h1>
    </div>
)

/////////////////////////////////////////////
// calling the react functional component inside another react functional component

const Title3 = () =>(
    <h1 className="head" tabIndex="5">
        Namaste React using component
    </h1>
);

const HeadingComponent3 = () =>(
    <div id="container">
        {/* is automaticaaly transipiled to html */}
        {/* three way of writing functional component inside another functional component */}
        {Title3()}
        <Title3/>
        <Title3></Title3>

    </div>
)
    

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);
 root.render(jsxHeading)
 root.render(<HeadingComponent1/>);
 root.render(<PassingFunctional/>);
 root.render(title3)
 root.render(<HeadingComponent2/>)
 root.render(<HeadingComponent3/>)
