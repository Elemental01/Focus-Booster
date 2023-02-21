import './App.css';
import React,{useEffect} from 'react';
import Header from './Header';
import Counter from './Counter';

function App() {
  useEffect(()=>{
    changeBackground();
  },[]);
  function changeBackground(){
    const backgroundImages=[
      "/images/bg-images/bg1.jpg",
      "/images/bg-images/bg2.jpg",
      "/images/bg-images/bg3.jpg",
      "/images/bg-images/bg4.jpg",
      "/images/bg-images/bg5.jpg",
      "/images/bg-images/bg6.jpg",
      "/images/bg-images/bg7.jpg",
      "/images/bg-images/bg8.jpg",
      "/images/bg-images/bg9.jpg",
      "/images/bg-images/bg10.jpg",
      "/images/bg-images/bg11.jpg",
      "/images/bg-images/bg12.jpg",
      "/images/bg-images/bg13.jpg"
    ];
    //Select a random background image
  const randomIndex = Math.floor(Math.random()*backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  //Set a random background image
  document.body.style.backgroundImage = `url(${randomImage})`;
  }
  return (
    <div className="App">
      <Header></Header>
   
           <Counter></Counter>
                                 
   
    </div>
  );
}

export default App;