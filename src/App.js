import NavBar from "./components/NavBar"
import Card from "./components/Card"

import './App.css';
import Data from "./data"

function App() {
  const info = Data.map(function(items){
      return(
        <Card 
        id= {items.key}
        title = {items.title}
        location = {items.location}
        desc = {items.description}
        start = {items.startDate}
        end = {items.endDate}
        image ={items.imageUrl}
        />
      )
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <section>{info}</section>
        
      </header>
    </div>
  );
}

export default App;
