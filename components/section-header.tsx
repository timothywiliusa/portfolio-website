import React from 'react';



export default function SectionHeading(
  
  {children} : {children: React.ReactNode}
  
  ){

  return ( 
    
    <div className='mb-7 grid justify-center items-center'>
      <div>
        <h2 className='inline ml-1 text-3xl font-medium capitalize'>{children}</h2>
      </div>
   

    </div>
  );
}
