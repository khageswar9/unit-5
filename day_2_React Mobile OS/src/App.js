// import logo from './logo.svg';
import './App.css';

function App() {
  const operetingSystem = ["Android","Blackberry","Iphone","Windows Phone"];
  const Manufacture = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h2>Mobile Operating System </h2>
        <ul>
          {operetingSystem.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
        <h2>Mobile Manufacture </h2>
        <ul>
          {Manufacture.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
    </div>
  );
};
// component
function Oper(data){
  return <li>{data.oper}</li>
}



export default App;
