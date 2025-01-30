import React, { forwardRef } from 'react'

export const Input = forwardRef(({textArea , label , ...props},ref) => {
  
    const styleClasses = 'w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
  return (
    <p className='flex flex-col gap-1 my-4'>
    <label  className='text-sm uppercase font-bold text-stone-500'>{label}</label>
     {textArea ?  <textarea className={styleClasses} {...props} ref={ref} /> : <input className={styleClasses} type="text" {...props} ref={ref} />}
</p>
  )
});
