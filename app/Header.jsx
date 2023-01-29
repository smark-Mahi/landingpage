import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex justify-between'>
      <div>
      <img alt='e' src='\logo2.4c4b75fd.svg' className='w-20 md:w-40 lg:w-60' />
    </div>
    <button className='border-indigo-500 border-2 h-9 px-5 rounded-md text items-center'>Log in</button>
    </div>
  )
}

export default Header