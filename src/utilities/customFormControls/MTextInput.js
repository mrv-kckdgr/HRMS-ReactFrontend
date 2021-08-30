import React from 'react'
import { useField } from 'formik'
import { FormField, Label, Form} from 'semantic-ui-react'

export default function MTextInput({...props}){
    //console.log(props)

    const [field, meta] = useField(props)

    //console.log(field)
    //console.log(meta)
    return (
        
            <FormField error={meta.touched && !!meta.error}>
                <Form.Input {...field} {...props}/>
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ): null}
            </FormField>
        
    )
}