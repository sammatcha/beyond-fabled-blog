
export default function Hero(){
     return(
    <div className=' bg-gray-900 h-screen w-screen relative'>
      <div className='container mx-auto flex justify-center items-center h-screen'>
      <h1 className='text-slate-100  font-extrabold text-6xl flex mx-auto justify-center items-center w-full h-full'>Coming Soon</h1>

      <div className='shadow-blue-500 bg-blue-500 shadow-2xl drop-shadow-2xl blur-xs opacity-50 absolute rounded-full w-[500px] h-[500px] '>
        <div className='relative w-full h-full rounded-full bg-blue-400 '>
        {/* <h1 className='text-white'> Welcome to my <span className='text-purple-600'>corner</span> of the world</h1> */}

        {/* <div className='gap-2 flex m-2'>
          <Link className='px-2 py-1 border rounded-md' href={"/"}>button</Link>
          <Link className='px-2 py-1 border rounded-md' href={"/"}>button</Link>
        </div> */}
          </div>
        </div>
        </div>
    </div>
  )
}