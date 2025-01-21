import clsx from 'clsx';
import React, { FC } from 'react'
import styles from './styles.module.css'

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonAttributes {
    status?: "default" | "active" | "disabled" | "hover";
    className?:string,
    text: string
  }


  const Button: FC<ButtonProps> = ({status,className,text, ...rest}) => {
    return (
      <button 
        className={clsx(
          styles.button,
          className,
          styles[`button--${status}`],
        )} 
        disabled={status === "disabled"}
        {...rest}> 

      {text}
      </button>
    )
  }
  
  export default Button