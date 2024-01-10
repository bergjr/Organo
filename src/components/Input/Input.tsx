import "./Input.css";
import React from 'react'


interface InputProps {
    valor: string
    required?: boolean
    className?: string
    inputType?: string
    placeholder?: string
    label: string
    onChange: (value: string) => void
}

const Input = (props: InputProps) => {
  return (
    <div className="field-container">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => props.onChange(evento.target.value)}
        required={props.required}
        className={props.className}
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
