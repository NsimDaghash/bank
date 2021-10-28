/* The customer info page  - here i want to show the data by numbers and by chart */

import React, {useEffect , useState} from 'react';
import axios from 'axios';


export const SingleUser = () =>{
  // useEffect( ()=>{
  //   const respon = axios.get(`https://6178f28aaa7f34001740461c.mockapi.io/users/1/bank`);
  //   let arrCash = [...respon.data];
  //   console.log(arrCash);

    useEffect( ()=>{
      const res= axios.get('https://6178f28aaa7f34001740461c.mockapi.io/users/1/bank')
            .then((res)=>{
                console.log(res.data)
                //setUserData(res.data)
            })            
    },[])

  //   const res= axios.get(' https://6177fd1a9c328300175f5cde.mockapi.io/users/1/bank')
  //         .then((res)=>{
  //             console.log(res.data)
  //             setUserData(res.data)
  //         })            
  // },[])
  
  return <div> zipi </div>
}


//