/*this should be the first page to asgin a regular user or a bank employee  */

import React from "react";
import axios from "axios";


const Login = () => {

        const [userLoginData, setUserLoginData] = useState(null);
        const [name, setName] = React.useState('');
        const [password, setPassWord] = React.useState(false)
        // const [newJob, setNewJob] = React.useState('');
        // const [updateId, setUpdateId] = React.useState(-1)

    useEffect(() => {
        const res = axios.get('https://6177fd1a9c328300175f5cde.mockapi.io/users/10/bank')
            .then((res) => {
                console.log(res.data)
                setUserLoginData(res.data)
            })

    }, [])
    const pwHandler = (e) => {
        setPassWord(e.target.value);
        console.log(e.target.value);
    }
    const nameHandler= (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
   const handleChange = (event) => {
        let pass = event.target.value;
        let reg = /^[A-Z]*$/;
        let test = reg.test(pass);
        if (test) {
           alert('pass');
           this.setState({value: pass});
        }else{
          alert('fail');
        }        
   }
    const checkLogin = async () => {

        // let data = {
        //     job: job,
        // }
        // const res = await axios.post('', data)
        // console.log("post :", res)
        // let newData = res.data
        // const hobbiesList = [...hobbies];
        // hobbiesList.push(newData)
        // setHobbies(hobbiesList)
        // setJob('');
        console.log("habiby ya hashem");
    }

    return (
        <div className='signInContainer'>
            <h4 className='headerText'>Welcome Back</h4>
            <div className='inputSection'>
                <input type='text' className='userName' required onChange={nameHandler}/>
                <label className='inputLabel'>User Name</label>
            </div>
            <div className='inputSection'>
                <input type='text' className='password' required onChange={pwHandler}/>
                <label className='inputLabel'>Password</label>
            </div>
            <div><input type="button" value= "log In"  onClick={() => {checkLogin}} /></div>
        </div>
    )


}

export default Login ;
