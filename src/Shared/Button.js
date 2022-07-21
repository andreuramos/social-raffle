import "./Button.css";

function Button(props)
{
    return (
        <a
            className="start-button"
        >
            {props.text}
        </a>
    )
}

export default Button
