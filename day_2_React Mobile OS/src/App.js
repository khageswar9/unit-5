// import logo from './logo.svg';
import './App.css';

function App() {
  const Data = [
    {
      Title: "Mobile Operatiing System",
      List:["Android","Blackberry","Iphone","Windows Phone"],
    },
    {
      Title: "Mobile Manufacture",
      List:["Samsung","HTC","Micromax","Apple"],
    }
  ]
  return (
    <div className="App">
      {Data.map((e)=>{
        return <Shop Title={e.Title} List={e.List}  />
      })}
    </div>
  );
};
function Shop({Title,List}){
  return <>
  <h2>{Title}</h2>
  <ul>{List.map((e)=>{
    return <li>{e}</li>
  })}</ul>
  </>
}

export default App;
