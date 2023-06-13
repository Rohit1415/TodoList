import { useState } from "react";
import "./App.css";
import NewList from "./component/NewList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Route_file from "./component/Route_file";

function App() {
//   const [obj, setobj] = useState({})
    // const [data, setdata] = useState(JSON.parse(localStorage.getItem('dtata')) || [])
    // const add_data = () => {
    //     data.push(obj)
    //     setdata([...data])
    // }
    // const deletetask = (index) => {
    //     data.splice(index , 1)
    //     setdata([...data])
    // }
    // localStorage.setItem('dtata' , JSON.stringify(data))
  return (
<div className='container pt-5'>
        {/* <h1>Todo List</h1> */}
    {/* <div className='input-group w-100'>
        <input type="text" name='task' className='form-control' placeholder='enter your task'  onChange={(e) => setobj(e.target.value)} />
        <button className='input-group-text fs-1' onClick={add_data}>+</button>
    </div> */}
    {/* <table className='table w-100'>
        <tbody>
            {
                data.map((x , i) => {
                    console.log(x)
                    return(
                        <tr key={i} className='input-group w-100 mt-3'>
                            <td className='form-control'>{x}</td>
                            <button className='input-group-text text-white btn bg-danger' onClick={() => deletetask(i)}>DELETE</button>
                        </tr>
                    )
                })
            }
        </tbody>
    </table> */}
    {/* <NewList /> */}
   <Route_file /> 
    </div>
  );
}

export default App;
