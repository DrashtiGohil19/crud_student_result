import React, { useEffect, useState } from 'react'

function Practice() {

    const values = useState({
        rollnu:"",
        name:"",
        sub1:"",
        sub2:"",
        sub3:"",
        sub4:"",
        sub5:"",
        total:"",
        per:""
    })

    const [data,setdata] = useState(values)
    const [mydata,setmydata] = useState([])

    const handleChange = (e) => {
        setdata({...data, [e.target.name]:e.target.value})
    }

    const btnhandler = () => {
        data.total = parseInt(data.sub1) + parseInt(data.sub2) + parseInt(data.sub3) + parseInt(data.sub4) + parseInt(data.sub5)
        data.per = data.total/5

        setmydata(mydata => [...mydata,data])
    }

    useEffect(()=>{
        console.log(mydata)
    },[mydata])


  return (
    <div className='App'>
      Roll nu : <input type="text" name='rollnu' value={data.rollnu} onChange={handleChange}/><br></br><br></br>
      name : <input type="text" name='name' value={data.name} onChange={handleChange}/><br></br><br></br>
      sub1 : <input type="text" name='sub1' value={data.sub1} onChange={handleChange}/><br></br><br></br>
      sub2 : <input type="text" name='sub2' value={data.sub2} onChange={handleChange}/><br></br><br></br>
      sub3 : <input type="text" name='sub3' value={data.sub3} onChange={handleChange}/><br></br><br></br>
      sub4 : <input type="text" name='sub4' value={data.sub4} onChange={handleChange}/><br></br><br></br>
      sub5 : <input type="text" name='sub5' value={data.sub5} onChange={handleChange}/><br></br><br></br>
 
      <input type='button' value={'Get result'} onClick={btnhandler}></input><br></br><br></br>

      <table border="2" style={{ margin:"auto",border:"1px solid" }}>
        <thead>
        <tr>
            <th>rno</th>
            <th>Name</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Sub4</th>
            <th>Sub5</th>
            <th>Total</th>
            <th>Per</th>
        </tr>
        </thead>
        <tbody>
        {
            mydata.map((item,k)=>{
                <tr key={k}>
                    <td>{item.rollnu}</td>
                    <td>{item.name}</td>
                    <td>{item.sub1}</td>
                    <td>{item.sub2}</td>
                    <td>{item.sub3}</td>
                    <td>{item.sub4}</td>
                    <td>{item.sub5}</td>
                    <td>{item.total}</td>
                    <td>{item.per}</td>
                </tr>
                
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Practice
