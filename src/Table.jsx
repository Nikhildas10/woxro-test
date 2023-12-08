import React, { useState } from 'react'

export const Table = () => {
  //state
  const [input,setInput]=useState({
    director:"",
    movie:""
  })
  const[result,setResult]=useState([{
   director:"",
    movie:""
  },
])
  const [hidden, setHidden] = useState(true);

//input
const getInput=(e)=>{
  const{name,value}=e.target
   setInput({ ...input, [name]: value} )
}
  const handleAdd=(e)=>{
    e.preventDefault()
   setResult([...result,input])
// setResult({ ...result, [e.target[0].name]: movie });
  }
  const handleRemove=()=>{
   setHidden(false) 
  }
  // const handleRemove=()=>{
  //   setResult([...result,])
  // }

  console.log(result);
  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          name="director"
          placeholder="director name"
          onChange={(e) => getInput(e)}
        />
        <input
          placeholder="movie name"
          name="movie"
          onChange={(e) => getInput(e)}
          type="text"
        />
        <button type="submit">add</button>
      </form>

      <table style={{ marginTop: "2rem", border: "1px solid" }}>
        <th>director</th>
        <th>movie</th>
        <th></th>
        {hidden&&
          
          result.map((i,id) => (
            
            <tr>
              <td>{i.director}</td>
              <td>{i.movie}</td>
              <td>
                <button onClick={()=>handleRemove(id)}>remove</button>
              </td>
            </tr>
          ))}
      
      </table>
    </div>
  );
}
