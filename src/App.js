import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import imgAvatar1 from "./img/katie-zaferes.png"
import imgAvatar2 from "./img/img2.png"
import imgAvatar3 from "./img/img3.png"
const data = [
  {
    rate : 5 ,
    rateNumber : 30 ,
     location :"USA" ,
     money : 100  , 
     status : "Online" , 
     imgAvatar : imgAvatar1 ,
  } , 
  {
    rate : 5 ,
    rateNumber : 30 ,
     location :"USA" ,
     money : 100 ,
     status : "Online",
     imgAvatar : imgAvatar2
  } ,
  {
    rate : 5 ,
    rateNumber : 30 ,
     location :"USA" ,
     money : 100 ,
     status : "Sold out" , 
     imgAvatar : imgAvatar3
  } 

]
function App() {
  return (
    <div className="App">
      <div className='container'>
      <Navbar />
      <Hero />
      <div className='card__container'>
     {
        data.map(element =>{
          return <Card 
          {...element}
          />
        })
      }
      
      </div>
      
   
      </div>
      
    </div>
  );
}

export default App;
