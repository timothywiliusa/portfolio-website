import React from 'react';



export default function SectionHeading(
  
  {children, number} : {children: React.ReactNode, number: string}
  
  ){

  return ( 
    
    <div className='mb-7 grid justify-center items-center'>
      <div>
        {/* <p className='text-xl text-md fira-code-regular text-[#ff5555] inline'>{number}</p> */}
        <h2 className='inline ml-1 text-3xl font-medium capitalize'>{children}</h2>
      </div>
   

    </div>
  );
}
