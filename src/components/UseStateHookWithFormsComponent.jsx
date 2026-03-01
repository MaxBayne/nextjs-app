'use client';

//import styles
import '@/styles/UseStateHookWithFormsComponent.css'

//import react
import { useState } from 'react'

export default function UseStateHookWithFormsComponent()
{
    const [formInputs, setFormInputs] = useState({name: "", email: "", password: "", notes: "",isMale:false,role:""});

    return (

        <form onSubmit={(e) => 
        {
            e.preventDefault(); 
            console.log(formInputs);
        }}>
            <label>Name:</label> <input type='text' value={formInputs.name} onChange={(e) => setFormInputs({...formInputs,name: e.target.value})}/>
            <br/>
            <label>Email:</label> <input type='email' value={formInputs.email} onChange={(e) => setFormInputs({...formInputs,email: e.target.value})}/>
            <br/>
            <label>Password:</label> <input type='password' value={formInputs.password} onChange={(e) => setFormInputs({...formInputs,password: e.target.value})}/>
            <br/>
            <label>Role:</label> 
            <select value={formInputs.role} onChange={(e)=>setFormInputs({...formInputs,role: e.target.value})} >
                <option value=''>Select</option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
                <option value='guest'>Guest</option>
            </select>
            <br/>
            <label>Type:</label> 
            <input type='radio' value='teacher' checked={formInputs.type === 'teacher'} onChange={(e) => setFormInputs({...formInputs,type: e.target.value})}/> Teacher
            <input type='radio' value='student' checked={formInputs.type === 'student'} onChange={(e) => setFormInputs({...formInputs,type: e.target.value})}/> Student
            <input type='radio' value='other' checked={formInputs.type === 'other'} onChange={(e) => setFormInputs({...formInputs,type: e.target.value})}/> Other

            <br/>
            <label>Is Male:</label> <input type='checkbox' checked={formInputs.isMale} onChange={(e) => setFormInputs({...formInputs,isMale: e.target.checked})}/>
            <br/>
            
            <br/>
            <label>Notes:</label> <textarea value={formInputs.notes} onChange={(e) => setFormInputs({...formInputs,notes: e.target.value})}/>
            




            <br/>
            <button>Submit</button>
        </form>
    );

}