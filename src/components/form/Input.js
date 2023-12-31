import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <Input
            type={props.type}
            className={props.className}
            id={props.id}
            ref={ref}
            name={props.name}
            placeholder = {props.placeholder}
            onChange = {props.onChange}
            autoComplete = {props.autoComplete}
            value={props.value}
            ></Input>
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})


export default Input;