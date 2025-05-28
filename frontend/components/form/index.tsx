import React, { type FunctionComponent, FormEvent, useState } from 'react'

type FormComponentProps = {
  submitHandler: (e: FormEvent, enableForm: () => void) => void
}

const Form: FunctionComponent<FormComponentProps> = ({ submitHandler }) => {
  const [formDisabled, setFormDisabled] = useState(false)

  const formSubmitHandler = (e: FormEvent) => {
    if (!formDisabled) {
      setFormDisabled(true)

      submitHandler(e, () => setFormDisabled(false))
    }
  }

  return (
    <form id="find-restaurant-form" onSubmit={formSubmitHandler}>
      <textarea id="find-input" name="input" disabled={formDisabled} />
      <button id="find-button" type="submit" disabled={formDisabled} >Find Restaurants</button>
    </form>
  )
}

export default Form
