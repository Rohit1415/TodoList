import React, { useState } from "react";

function NewList() {
  
  const [obj, setobj] = useState({});
  const [ary, setary] = useState(
    JSON.parse(localStorage.getItem('data')) || []
  );
  const add = () => {
    ary.push(obj);
    setary([...ary]);
    localStorage.setItem('data' , JSON.stringify(ary))
  };
  
  const deletetask = (id) => {
    ary.splice(id , 1)
    setary([...ary])
    localStorage.setItem('data' , JSON.stringify(ary))
  }
  const deletealltask = () => {
    localStorage.clear()
    window.location.href = '/1'
  }
  const enterkey = (e) => {
    if(e.keyCode == 13){
        add()
    }
  }
  return (
    <>
    <h1 className="fs-1 text-center">TO DO LIST</h1>
      <div className="input-group">
        <input
          onChange={(e) => setobj(e.target.value)}
          type="text"
          className="form-control rounded-3 p-2 fs-3"
          placeholder="Enter Your Task Here"
          onKeyDown={enterkey}
        />
        <button onClick={add} className="input-group-text btn btn-success rounded fs-1">+</button>
      </div>
        <button onClick={deletealltask} className="mt-4 mb-4 btn btn-outline-danger">Delete All Task</button>
      <table>
        <tbody>
          {ary.map((x, i) => {
            return (
              <tr key={i}>
                <div className="me-5">
                    <td>{x}</td>
                </div>
                <td><button type="button" onClick={() => deletetask(i)} className="btn btn-danger">DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default NewList;
