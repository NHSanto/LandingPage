import React from 'react'

function HeroContent() {
  return (
    <>
      <div className="lg:flex lg:flex-row md:flex md:flex-row lg:mt-5 lg:ml-20 lg:items-center lg:justify-between
       md:flex md:mt-5 md:ml-20 md:items-center md:justify-between flex flex-col mt-20 ml-2">
        <div className="flex-row items-center justify-between md:w-[50%] lg:w-[50%] w-full h-[50%] mr-5">
          <div className="block items-center justify-center">
            <h1 className="text-5xl lg:mb-16 md:mb-16 mb-2 font-outfit">Modern POS that makes running your business easier</h1>
            <img src="/images/icon.png" alt="icon" className="inline-block"/><div className="md:ml-2 lg:ml-2 ml-1 mb-1 inline-block">Manage cost savings & payments method</div><br/>
            <img src="/images/icon.png" alt="icon" className="inline-block"/><div className="md:ml-2 lg:ml-2 ml-1 mb-5 inline-block lg:mt-6">Analysis inventory and online sales report</div>
          </div>
          <form>
            <div className="relative lg:mt-14 md:mt-14 mt-1">
              <input type="search" id="search"
                     className="block p-4 pl-10 h-[3.3rem] lg:w-9/12 md:w-9/12 w-10/12 text-gray-200 rounded-lg focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 "
                     placeholder="Enter Your Mail" required/>
              <button type="submit"
                      className="text-white absolute md:right-[6.5rem] md:bottom-1.5 lg:right-[10rem] bottom-1.5 right-[5.5rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Free Trail
              </button>
            </div>
            <div className="lg:mt-4 md:mt-4 mt-2">
              <h1 className="opacity-[80%] inline-block">Already have an account?</h1>
              <a href="#" className="underline font-semibold">Log in now</a>
            </div>
          </form>
        </div>
        <div className="lg:flex lg:flex-row md:flex md:flex-row md:w-[50%] lg:w-[50%] overflow-x-hidden w-full lg:mt-10 md:mt-10 mt-4 lg:mr-8 md:mr-[5.5rem] items-center justify-center h-[50%]">
          <img src="/images/image.png" className="lg:h-[550px] lg:w-[450px] md:h-[550px] md:w-[450px] h-[400px] w-[350px]"/>
          <img src="/images/shape.png" className="absolute lg:h-[182px] lg:w-[217px] lg:right-10 lg:top-12 md:h-[182px] md:w-[217px] md:right-10 md:top-12 -z-1 h-[100px] top-3/4 right-2"/>
          <img src="/images/Summary Card.png" className="h-[180px] w-[270px] absolute lg:top-[410px] lg:left-[660px] md:top-[420px] md:left-[350px]"/>
          <img src="/images/Summary Card2.png" className="h-[180px] w-[250px] absolute lg:top-[240px] lg:left-[1101px] md:-right-[0px] md:top-[220px]"/>
        </div>

      </div>
    </>
  )
}

export default HeroContent

/*
<form className="md:block md:mt-5 lg:mt-10">
    <div className="md:inline lg:inline">
    <input type="text" className="lg:h-12 lg:w-9/12 md:h-12 md:w-9/12 rounded placeholder:px-6" placeholder="Enter Your Mail"  />
    </div>
<div className="md:inline lg:inline lg:right-[10%] md:relative">
  <button type="submit" className="bg-blue-600 hover:bg-blue-400 p-2 text-white rounded-md">Start Free Trail</button>
</div>
</form>*/
