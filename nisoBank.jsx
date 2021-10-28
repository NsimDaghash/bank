/* The bank employee dashboard  */

import React, {useEffect , useState} from 'react';
import axios from 'axios';
import AddUser from './addUser';
import "./style.css";

/*Main function */
export const Users = () =>{
    /* setting variables and fetching database */
    const [userData,setUserData]= useState([]);
    const [name,setName] = useState(null);
    const [age,setAge] = useState(null);
    const [country,setCountry] = useState(null);
    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState("");
    const [newCountry,setNewCountry] = useState("");
    const [updateId, setUpdateId] = useState(-1)
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect( ()=>{
      const res= axios.get('https://6177fd1a9c328300175f5cde.mockapi.io/users')
            .then((res)=>{
                console.log(res.data)
                setUserData(res.data)
            })            
    },[])
    /* handle the input of the user */
    const nameHandler = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const countryHandler = (e) => {
        setCountry(e.target.value);
    }

    const userHandler = (e) => {
        if (e.target.getAttribute("data-key") === "name")
            setName(e.target.value);
            console.log(e.target.value);
        if (e.target.getAttribute("data-key") === "age")
            setAge(e.target.value);
            console.log(e.target.value);
        if (e.target.getAttribute("data-key") === "country")
          setCountry(e.target.value);
          console.log(e.target.value);
          
      };
    /* update the customer */
    const updateHandler = (id) => {
        console.log("cool")
        setIsUpdate(!isUpdate);
        let updareInfo = userData.find(value => {
            return value.id === id ? value: "error" 
        })
        console.log(updareInfo)
       //setUpdateId(value)
        setUpdateId(updareInfo.id);
         console.log(updareInfo.name);
         console.log(updareInfo.country);
         console.log(updareInfo.age);
         setNewName(updareInfo.name)
         setNewCountry(updareInfo.country)
         setNewAge(updareInfo.age)
    }

    const updateUserInfo = async () => {
        let response = await axios.put('https://6177fd1a9c328300175f5cde.mockapi.io/users/'+updateId,{
            name : newName,
            age: newAge,
            country:newCountry,
        })
        if(response.status === 200){
            const usersList = [...userData];     ///********** */
            console.log(usersList);
            let info = usersList.find(value => {
                return value.id === updateId
            })
            info.name = name;
            console.log(name);
            setName(name)
            info.age = age;
            setAge(age);
            info.country=country;
            setCountry(country);
            setUserData(usersList)
            
        }
        console.log("response :",response)
    }
    /************************* */
    /* add new user to the database */
    const addUserHandler = async () => {
        let request = {
            name: name,
            age: age,
            country : country,
        }
        const res = await axios.post('https://6177fd1a9c328300175f5cde.mockapi.io/users', request);
        console.log("post :", res)
        let newData = res.request
        const usersList = [...userData];
        // newData = usersList.filter((n) => {
        //     return n.id !== id
        // })
        usersList.push(newData)            
        setUserData(usersList)

    }

    /* delet a user from the database */
    const deleteHandler = async (id) => {
        console.log(id);
        const deleteRes = await axios.delete('https://6177fd1a9c328300175f5cde.mockapi.io/users/'+id)
        if (deleteRes.status === 200) {
            const usersList = [...userData];
            let resultOfNonDeleted = usersList.filter((n) => {
                return n.id !== id
            })
            console.log(resultOfNonDeleted);
            setUserData(resultOfNonDeleted)

        }
    }
    /* show the information on the browser */
    return <div id="mainDiv">
        <div id="header">welcome to NisoBank </div>
        <AddUser
        handlerCallback= {userHandler}
        userAddCallback={addUserHandler}
         />        
        <div id="container">            
            {
                userData ? userData.map((n) => {
                    return <div id="identityCard" >
                        <img id="image" src={n.avatar} />
                        <p id="name">name : {n.name}</p>
                        <p id="age"> age : {n.age}</p>
                        <p id="country"> country: {n.country}</p>
                        <div id="editDelete">
                            <input id="btn" type={'button'} value={'delete'} onClick={() => {deleteHandler(n.id)}} />
                            <input id="btn" type={'button'} value={'update'} onClick={updateHandler} />
                        </div>
                    </div>
                }) : "loading . . ."
                
            }
            {
                isUpdate ?
                    <AddUser />
                    // <div className="updateFrame">
                    //     Name :<input value={newName} data-key={"name"} type={'text'} onChange={nameHandler}/>
                    //     Age : <input value={newAge} data-key={"age"} type={'text'} onChange={ageHandler}/>
                    //     Country :<input value={newCountry} data-key={"country"} type={'text'} onChange={countryHandler}/>
                    //     <input type={'button'} value={'cancel'} onClick={updateHandler}/>
                    //     <input type={'button'} value={'updateNew'} onClick={updateUserInfo}/>
                    // </div>
                    : ""
            }
        </div>
    </div>

}
export default Users