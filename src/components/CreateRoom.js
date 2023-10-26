import React from 'react'
import Header from './Header'
import Footer from './Footer'


function CreateRoom() {
  return (
    <>
    <Header/>
    <div className='h-[65vh] bg-zinc-800  flex items-center justify-center '>
        <div className='h-96 bg-slate-800 w-[40vw] rounded-lg    '>
          
          <div className='h-14 bg-slate-500  rounded-t-md pt-2 '>
            <span className='font-bold text-white text-xl flex  justify-center '>Create Room</span>
          </div>
          <div className='flex justify-center text-center mt-10'>
            <div>
            <div className=' w-80 text-center '> 
          <h1 className='font-medium text-white mt-4 text-left mb-5 '>Room Id</h1>
          <input type="text " className='bg-gray-500 h-10 w-80 rounded-sm ' />

          </div>
         <br />
          <button className='bg-button text-white font-bold px-8 mt-5 rounded-sm py-2 hover:px-9 hover:rounded-md'>Create</button>


            </div>
         
          </div>
          
          </div>
        

    </div>
    <Footer/>
    </>
  )
}

export default CreateRoom