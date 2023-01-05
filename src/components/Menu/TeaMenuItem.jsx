import React from 'react'


function TeaMenuItem({name, info, price}){
   return (
    <>
        <div className='sub-header'>{name}</div>
        <div className='info'>{info}</div>
        <div className='price'>£{price}</div>
    </>
   )
}
  
export default TeaMenuItem