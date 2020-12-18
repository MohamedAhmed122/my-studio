import React from 'react'

import { useField } from "formik";
import { FormControl, TextField } from '@material-ui/core';
const FormText = ({ label, ...props }) =>{

    const [field, meta] = useField(props);
    return(
        <FormControl style={{width: '100%'}}  error={meta.touched && !!meta.error}>
            <TextField 
                className='input'  
                variant='outlined' 
                label={label} 
                {...field} 
                {...props}
                error={meta.error && meta.touched}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {meta.error && meta.touched ? (
                <label className='label' >
                {meta.error}
                </label>
            ) : undefined}
        </FormControl>
    )
}
export default FormText;
