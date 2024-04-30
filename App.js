/* 
  <div id="parent">
     <div id="child">
     <h1>I am h1 tag</h1>
     </div>
  </div>
*/
// create this structure in react

const parent = React.createElement("div",{id:"parent"},
               React.createElement("div",{id:"child"},
               React.createElement("h1",{},"Hey, this is h1 tag :")
       )
 )

console.log(parent)
///////////////////////////////////////////////////////////////////////////
/* 
  <div id="parent">
     <div id="child">
     <h1>I am h1 tag</h1>
     <h1>I am h1 2nd  tag</h1>
     </div>
  </div>
*/
// create this structure in react which has sibling 

const parent2 = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I'm an h1 tag"),
                React.createElement("h2",{},"I'm an h1 2nd tag")])
 )
/////////////////////////////////////////////////////////////////////////////////
/* 
  <div id="parent">
     <div id="child">
     <h1>I am h1 tag</h1>
     <h1>I am h1 2nd  tag</h1>
     </div>
     <div id="child2">
     <h1>I am h1 tag child2</h1>
     <h1>I am h1 2nd  tag child2</h1>
     </div>
  </div>
*/
// create this structure in react which has sibling 

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h1 2nd tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag of child2"),
    React.createElement("h2", {}, "I'm an h1 2nd tag child2"),
  ]),
]);

//this is why jsx exist jsx will just make our life is easy but this is the core of react how we create element using core react

////////////////////////////////////////////////////////////////////////////////


const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "HEllo world for react!...");
const root = ReactDOM.createRoot(document.getElementById("root"));//return an object
root.render(heading);//take the object convert to h1 tag and put there

root.render(parent)
root.render(parent2)
root.render(parent3)
