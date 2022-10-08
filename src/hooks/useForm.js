import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [stateForm, setStateForm] = useState( initialState )

    const onInputChange = ( { target:{value, name} } ) => setStateForm( { ...stateForm, [name]:value } );

    const clearInput = () => setStateForm( initialState )

  return{
  
    ...stateForm,
    stateForm,
    onInputChange, 
    clearInput
  }
}
