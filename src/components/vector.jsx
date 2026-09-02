import React from 'react'

export default function Vector({img, number, text}) {
  return (
    <div className="group relative bg-white rounded-3xl border-2 border-[#A3D7F3] p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px] w-full max-w-sm mx-auto">
      <div className="mb-6 sm:mb-8 flex items-center justify-center">
        <img src={img} alt="1" />
        <p className="text-4xl font-bold absolute text-white">{number}</p>
      </div>

      <h3 className="text-[#2C5E7A] font-semibold text-2xl sm:text-3xl leading-snug tracking-tight max-w-[260px]">
        {text}
      </h3>
    </div>
  )
}
