'use client';

import '@/styles/InputPhoneFieldComponent.css'


export default function InputPhoneFieldComponent(props)
{
    const {name,className,value,OnValueChanged} = props;



    return (

        <input  type="phone" 
                className={className!=null ? className :'inputField'} 
                name={name??name} 
                value={value}
                onChange={(e) => OnValueChanged(e.target.value)}
        />

    );

}