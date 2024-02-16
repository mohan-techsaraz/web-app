import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [data,setData] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res=>res.json()))
    .then(data=>setData(data))
    
    
    .catch(err=>console.log(err))
    
  },[])


  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div className="App">
    {data.products?.map((v,i)=>(
      <div class="card" style={{width:'400px'}}>
      <img class="card-img-top" src={v.thumbnail} alt="Card image"/>
      <div class="card-body">
        <h4 class="card-title">{v.title}</h4>
        <p class="card-text">{v.price}</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
      </div>
    )
      
    )
    }
  
    
    </div>
  );
}

export default App;
