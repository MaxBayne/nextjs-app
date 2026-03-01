'use client';

import '@/styles/InputTextFieldComponent.css'


export default function InputTextFieldComponent(props)
{
    const {name,className,value,OnValueChanged} = props;



    return (

        <input  type="text" 
                className={className!=null ? className :'inputField'} 
                name={name??name} 
                value={value}
                onChange={(e) => OnValueChanged(e.target.value)}
        />

    );

}