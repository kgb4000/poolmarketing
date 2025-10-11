'use client'

import { useState } from 'react'
import BlueprintModal from '@/components/BlueprintModal'

export default function Button({
  onClick,
  buttonText,
  bgColor,
  textColor,
  border,
  textSize,
  hover,
  align,
}) {
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <div className={align}>
        <button
          type="button"
          onClick={handleClick}
          className={`${bgColor} ${textColor} ${border} ${textSize} ${hover} py-6 lg:py-10 px-8 lg:px-10 lg:mt-10 rounded-2xl font-bold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-xl`}
        >
          {buttonText}
        </button>
        {!onClick && <BlueprintModal open={open} setOpen={setOpen} />}
      </div>
    </>
  )
}
