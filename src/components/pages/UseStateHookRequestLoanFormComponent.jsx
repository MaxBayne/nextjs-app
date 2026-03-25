'use client';

//import styles
import '@/styles/UseStateHookRequestLoanFormComponent.css'

//import react
import { useState } from 'react';

//import custom components
import ModalComponent from '@/components/custom/ModalComponent.jsx';
import InputTextFieldComponent from '@/components/custom/InputTextFieldComponent.jsx';
import InputPhoneFieldComponent from '@/components/custom/InputPhoneFieldComponent.jsx';


export default function UseStateHookRequestLoanFormComponent()
{
    const [modalState, setModalState] = useState(
        {
            isModelVisible: false,
            isModelSuccess: true,
            message: "",
        });

    const [formInputs, setFormInputs] = useState(
        {
            name: "",
            phone: "", 
            age: "", 
            isEmployee:false,
            salaryRange:""
        });

    //Form Functions ------------------------------------------------
    function isValidForm()
    {
        if(formInputs.name===""||formInputs.phone===""||formInputs.age==="")
        {
            return false;
        }
        else
        {
            return true;
        }

    }

    //Modal Functions -----------------------------------------------
    function showModelSuccess(successMessage)
    {
        //Change the State isModelVisible = true
        setModalState({...modalState,isModelVisible:true,isModelSuccess:true,message:successMessage});

    }

    function showModelError(errorMessage)
    {
        //Change the State isModelVisible = true
        setModalState({...modalState,isModelVisible:true,isModelSuccess:false,message:errorMessage});

    }

    function hideModel()
    {
        //Change the State isModelVisible = false
       setModalState({...modalState,isModelVisible:false});

    }



    return(
        <div className='divFormWrapper'>

            <form className="frmRequestLoan"  onSubmit={(e) => 
            {
                e.preventDefault(); 

                if(formInputs.age<18)
                {
                    showModelError("Age Must be Greater than 18");
                    return;
                }


                showModelSuccess("Form Submitted Successfully");
                
            }}>

                <h3>Requesting a Loan</h3>
                <hr/>
                
                <label className='label'>Name:</label>
                <InputTextFieldComponent name="txtName" value={formInputs.name} OnValueChanged={(value)=> setFormInputs({...formInputs,name: value})} />
                

                <label className='label'>Phone:</label>
                <InputPhoneFieldComponent name="txtPhone" value={formInputs.phone} OnValueChanged={(value)=> setFormInputs({...formInputs,phone: value})} />


                <label className='label'>Age:</label>
                <input type="text" className='inputField'  name="age" value={formInputs.age} onChange={(e) => setFormInputs({...formInputs,age: e.target.value})}/>

                <label className='label'>Are you an employee?</label>
                <input type="checkbox" className='inputField'  name="isEmployee" value={formInputs.isEmployee} onChange={(e) => setFormInputs({...formInputs,isEmployee: e.target.checked})}/>

                <label className='label'>Salary Range:</label>
                <select name="salaryRange" className='inputField'  value={formInputs.salaryRange} onChange={(e) => setFormInputs({...formInputs,salaryRange: e.target.value})}>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000$</option>
                </select>
                


                <div>
                    <button type='submit' className='btnSubmit' disabled={!isValidForm()}>Submit</button>
                    <button type='reset' className='btnReset'>Reset</button>
                </div>
                

            </form>

            <ModalComponent header="" isVisible={modalState.isModelVisible} onCloseCallback={hideModel}>

               {
                modalState.isModelSuccess 
                ? (<h3 className='modalSuccess'>{modalState.message}</h3>) 
                : (<h3 className='modalError'>{modalState.message}</h3>)
               }

            </ModalComponent>

        </div>
    );

}