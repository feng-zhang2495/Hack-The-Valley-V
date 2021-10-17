import './Button.css'

const Button = (props) => {
    return (
        <button style={{ backgroundColor: props.color }}className='btn'>{props.button}</button>
    )
}

Button.defaultProps={
    button: 'Default',
    color: 'black'
}

export default Button
