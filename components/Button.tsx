"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";


const Button = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: ButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} disabled={false} type={btnType || 'button'} onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right arrow" fill className="object-contain" />
          </div>
        )}
    </button>
  )
}

export default Button