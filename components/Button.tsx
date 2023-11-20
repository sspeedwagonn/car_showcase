"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";


const Button = ({ title, containerStyles, handleClick, btnType }: ButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} disabled={false} type={btnType || 'button'} onClick={handleClick}>
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default Button