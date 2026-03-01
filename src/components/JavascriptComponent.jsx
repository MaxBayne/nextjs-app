'use client';

import '@/styles/JavaScriptComponent.css'

export default function JavaScriptComponent()
{
    let profile=
    {
        name:"Mohammed Salah",
        age:40,
        job:"Software Engineer",
        skills:["HTML","CSS","JavaScript","React","Node.js"]
    };


  return (
    <div>
        <p> my name is {profile.name}</p>
        <button onClick={AlertMessage} >Click Me</button>
    </div>
  );
}

function AlertMessage()
{
  alert("Hello World");
}