import React from "react";


interface IinputLoginProps {
  label: string;
  value: string;
  type?: string;

  onPressEnter?: () => void;
  onChange: (newValue: string) => void;
}
export const InputLogin = React.forwardRef<HTMLInputElement, IinputLoginProps>((props, ref) => {

  return (
    <label>
      <span>{props.label}</span>
      <input ref={ref} value={props.value} type={props.type} onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter() : undefined} />
    </label>
  )

})