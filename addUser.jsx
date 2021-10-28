/* add anew customer */
import React from "react";

function AddUser({handlerCallback, userAddCallback,}) {
  return (
    <div className="addperson">
        <h1>Add New User:</h1><br />
        <span className="spanLabel">User :</span><input type={'text'}  data-key={"name"} name={"name"} onChange={handlerCallback} /><br />
        <span className="spanLabel">Age :</span> <input type={'text'}  data-key={"age"} name={"age"} onChange={handlerCallback} /><br />
        <span className="spanLabel">Country :</span><input type={'text'} data-key={"country"} name={"country"} onChange={handlerCallback} /><br /><br />
        <input className="inputPtn" type={'button'} value={'Add User'} onClick={userAddCallback} />
    </div>
  );
}

export default AddUser;