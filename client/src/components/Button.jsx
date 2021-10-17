import './Button.css'

const Button = (props) => {
    return (
        <button style={{ backgroundColor: props.color }}className='btn'>{props.button}</button>
    )
}

Button.defaultProps={
    button: 'Button name',
    color: 'black'
}

export default Button
