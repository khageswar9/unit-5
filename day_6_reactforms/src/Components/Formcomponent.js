import {useState} from "react" ;  
export const Form =()=>{
    const [formdata , setFormdata] = useState({
          UserName : "",
          Age : "",
          Dipartment : "",
          Addresh : "",
          Salary : "",
          maritalstate : "",
    })
   
  const handleChange = (e)=>{ 
        const {name} = e.target ;
    setFormdata({...formdata,
          [name] : e.target.value,
    });
  }

   return(
    <form onSubmit={async (e)=>{
         e.preventDefault()  
         await fetch("http://localhost:8080/formdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })
            .then((res) => res.json())
            console.log(formdata);
    }}>
      <input onChange = {handleChange} name = "UserName" type = "text" placeholder="Enter Name"/>
      <input onChange = {handleChange} name = "Age"  type = "number" placeholder="Enter Age"/>
      <input onChange = {handleChange} name = "Dipartment" type = "text" placeholder="Enter Dipartment"/>
      <input onChange = {handleChange} name = "Addresh" type = "text" placeholder="Enter Addresh"/>
      <input onChange = {handleChange} name = "Salary" type = "Number" placeholder="Enter Salary"/>
      <input onChange = {handleChange} name = "maritalstate" type = "text" placeholder="Enter maritalstate"/>
      <input  type = "submit" value="submit"/>
 </form>
   )
 
}