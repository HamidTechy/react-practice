import React from "react";
function PropsCard(props){
    
    return(
        <>{
            <div class="card" style={{width: "18rem"}}>
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.disc}</p>
            <a href=".." class="btn btn-primary">Add to card</a>
          </div>
        </div>
            }
            </>
    )
}

export default PropsCard;

// import './App.css';
// import Card from './components/Card';

// const App = () => {
//   return (
//   <>
//     <Card imgsrc="./photos/pic1.jpg"
//     title="Blue kurta"
//     disc="Some quick example text"/>
//     <Card imgsrc="./photos/pic2.jpg"
//     title="Brown jacquard kurta"
//     disc="Sasdfsdfsadfsaf dasdf sd"/>
//     </>
//   );
// }

// export default App;