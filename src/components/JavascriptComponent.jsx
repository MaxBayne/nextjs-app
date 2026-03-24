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
        <button 
          className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={AlertMessage} >Click Me</button>
    </div>
  );
}

function AlertMessage()
{
  alert("Hello World");
}