'use client';

//Import React Library
import * as React from 'react';

//Import Contexts (Shared Data)
import { ToastContext } from '@/contexts/ToastContext.js';

export function useToastHook()
{
     //const {showToast} = React.useContext(ToastContext);

     return React.useContext(ToastContext);

}