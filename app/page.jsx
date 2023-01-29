import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
export default function Home() {
  const arr=[
    {
      image:'\conversation.5acf03c4.svg', text:'Our AI will arrage for 1:1 conversation with match'
    },
    {
      image:'/tell.9ad906c2.svg', text:'Tell us your background goals and what you are excited about'
    },
    {
      image:'\connection.5e02f461.svg', text:'Each week we will see if you would like to meet with a new connection'
    }
  ]
  return (
    <div className=' grid  lg:grid-cols-2 md:grid-cols-2'>
      <div className='pr-5 lg:py-20 md:py-20  py-7 lg:pr-20 md:pr-20 sm:pr-20'>
        <p className='text-4xl sm:text-5xl lg:text-7xl md:text-7xl lg:font-bold lg:p-2 md:p-2 p-1'>Your network is waiting for you.</p>
        <p className='lg:mr-20 md:mr-20 p-1 text-sm lg:text-lg md:text-lg mr-10'>We facilitate casual conversations that lead to not-so-casual professional impact. Powered by AI.</p>
      <div className='h-40 bg-white flex flex-col p-5  mt-4 lg:mr-7 '>
        <button className='border-2 border-black flex lg:space-x-2 md:space-x-0 items-center h-10 p-5 rounded-md drop-shadow-md text'>
          <FcGoogle className='lg:w-10 h-5 lg:mr-2 md:mr-5'/>Sign up with google
        </button>
        <p className='text-center'>OR</p>
      <div className='flex flex-end items-center '>
        <input className='w-full h-10 text-xl rounded-none rounded-l-md border-black border-2' placeholder='Enter your email'/>
        <button className='w-40  h-10 bg-indigo-500 rounded-r-md'>get startted</button>
      </div>
     </div>
      <div className='flex'>
        <p>Already have an account?</p>
        <h6 className='text underline'>Login here</h6>
      </div>
      </div>
    <div className='flex flex-col lg:py-10 md:py-10 items-center lg:my-0 md:my-0  '>
      <p className='text-sm'>HOW ITS WORKS</p>
      <p className='text-3xl font-bold pt-3 mr-10'>It's simple, really</p>
      <img src='\stroke.01d02cb2.svg' alt='line'  className='w-[95px]  h-5 ml-40 mx-7'/>
      <div className='relative w-80 h-40 ' id='slide'>
      {
        arr.map((item,index)=>
        <div key={index} className='flex lg:flex-col md:flex-col justify-space mt-5 '>
          <img src={item.image} width={100} height={100} className='lg:w-[200px] lg:h-[150px] md:w-[200px] md:h-[150px]' />
          <p className='text-center w-60 lg:text-lg md:text-lg  lg:mt-10 md:mt-10 lg:px-0 md:px-0 px-7'>{item.text}</p>
        </div>
        )
      }
        
      </div>
    </div>
    </div>
  )
}
