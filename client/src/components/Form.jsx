import React from 'react'

const Form = (props) => {

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>{props.name}</label>
                <input onSubmit={props.submitFunction}type='text' placeholder={props.placeholder} value={props.text} onChange={props.textChange}/>
            </div>
        </form>
    )
}

Form.defaultProps = {
    placeholder: 'placeholder',
    name: 'temporary name'
}

export default Form
