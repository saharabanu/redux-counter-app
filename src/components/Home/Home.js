import React from 'react'
import Counter from '../Counter/Counter'
import Counter1 from '../Counter1'
import DynamicHooksCounter from '../DynamicHooksCounter'
import HooksCounter from '../HooksCounter'

const Home = () => {
  return (
    <>
       <div className='container mx-auto'>
      {/* <Counter/> */}
      <Counter1/>
      <HooksCounter/>
      <DynamicHooksCounter/>

       </div> 
    </>
  )
}

export default Home