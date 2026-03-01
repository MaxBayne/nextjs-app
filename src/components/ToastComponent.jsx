'use client';

//import react library
import * as React from 'react';

//import Material UI Components
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ToastComponent(props)
{
    const {
        toastPositionVertical = "bottom",
        toastPositionHorizontal = "left",
        toastIsOpen = false,
        toastMessage = "Hello From Toast",
        toastType = "success",
        toastDuration = 6000,
        onCloseToastCallback
    } = props;

    return (
        <Snackbar
            open={toastIsOpen}
            autoHideDuration={toastDuration}
            onClose={onCloseToastCallback}
            anchorOrigin={{ vertical: toastPositionVertical, horizontal: toastPositionHorizontal }}>

            <Alert
                onClose={onCloseToastCallback}
                severity={toastType}
                variant="filled"
                sx={{ width: '100%' }} >
                {toastMessage}
            </Alert>

        </Snackbar>
    );
}