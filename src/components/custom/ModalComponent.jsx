'use client';

import '@/styles/ModalComponent.css'


export default function ModalComponent(props) 
{
    const {header,children,isVisible,onCloseCallback} = props;

    function handleCloseModel()
    {
        //call back the function that sent from parent after closing the model
        onCloseCallback();
    }

    if(isVisible)
    {
        return (

            <div className="modal" onDoubleClick={handleCloseModel}>
                
                {header != null && header !=="" ? <div className="modal-header">{header}</div>:null}
                
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModel}>&times;</span>
                    {children}
                </div>

            </div>

        );

    }
    else
    {
        return null;
    }
    
}