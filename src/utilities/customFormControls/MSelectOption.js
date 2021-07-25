import React from 'react'
import { useField } from 'formik'
import { FormField, Label, Select} from 'semantic-ui-react'

export default function MSelectOption({...props}){
    //console.log(props)

    const [field, meta] = useField(props)

    console.log(field)
    console.log(meta)
    return (
        
            <FormField error={meta.touched && !!meta.error}>
                <Select/>                
                {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
                ): null}
            </FormField>
        
    )
}