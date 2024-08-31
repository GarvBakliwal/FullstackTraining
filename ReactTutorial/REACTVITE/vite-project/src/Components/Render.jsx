import React, { useState } from 'react'
import { useEffect } from 'react'
const Render = () => {

    const [countryData, setCountryData] = useState([]);
    const[countryName,setCountryName]=useState('')
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            setCountryData(data);
        })
        // console.log('this will run only one time initially when component mount');
    }, []);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
      },[countryName]);
    /* useEffect(()=>{
        console.log('this will run everytime');
    });
    const [count,setCount] = useState(0); */
    /* useEffect(()=>{
        console.log('this will run only when count change');
    },[count]); */
    /* const[username,setUsername] = useState('');
    useEffect(()=>{
        console.log('this will run only when input change');
    },[username]); */

    return (
        <div>
            <h1>Render Component</h1>
            {/* <button onClick={()=>(setCount(count+1))} className='border-solid border-2 border-black'>Increase</button>
        <h1>
            {count}
        </h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} /> */}
            <select onChange={(e)=>{setCountryName(e.target.value)}} className='border-solid border-2 border-black rounded-lg px-2' >
                <option>Select Country Name</option>
                {countryData.map((data) => (
                    <option value={data.name.common} key={data.name.common}>
                        {data.name.common}
                    </option>
                ))}
            </select>
            <p>You Selected : {countryName}</p>
            {/* <p>Capital : </p> */}
        </div>
    )
}

export default Render