import React from 'react';
import Navbar from '../components/Navbar';
import one from '../assets/one.png';
import Coin from '../assets/Coin.png';
import banking from '../assets/banking.png'
import Footer from '../components/Footer';
import calc from '../assets/calc.png'
import image from '../assets/image.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import sumid from '../assets/sumid.png'
import check from '../assets/check.png'
import arrow from '../assets/arrow.png'
import vector from '../assets/vector.png'
function MainPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-[650px] ml-12 mr-10 mt-14">
        {/* Flex container to align text and image in the same row */}
        <div className="flex  items-center">
          {/* Text section */}
          <div className="text-6xl font-semibold min-w-[600px]">
            <div className="flex -mt-20">
              <span>Redefining How You</span>
            </div>
            <div>
              <span className="text-6xl font-semibold text-[#152F46]">Invest</span>
              <div className='text-lg mt-5'>Real-time trading, insightful analytics, and unmatched support—your portfolio deserves it.</div>
              <div className=''>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="p-3 w-[430px] text-lg rounded-full border  "
              />
              <button className="w-[150px] ml-3 font-medium text-white text-lg py-3  rounded-full bg-[#152F46] hover:bg-[#18405d] transition-colors">SIGNUP NOW</button>
              </div>
              <div className='text-sm w-full mt-2'>
                <div>Already have an account? <span  className=' cursor-pointer text-[#2F7FFF] '>Login here</span></div> 
              </div>


            </div>
        
          </div>
          {/* Image section on the right side */}
          <img className=" h-80 ml-36" src={one} alt="Investing" />
        </div>
        <div className='flex text-2xl font-semibold '>
        <div className='min-w-[470px] h-auto'>
         <img src={Coin} alt="" />
         <div className='mt-7'>Transparent Pricing 
         </div>
         <div className=''>
          <span>With</span> <span className='text-[#064D51]'>No Hidden Charges</span>
         </div>
        </div>
        <div className=' min-w-[320px] h-full'>
          <div className=' flex items-center justify-center mt-[74px] max-w-[270px] h-72 rounded-lg border border-slate-500 shadow-2xl'>
          <div className=''>
              <img className='h-16 w-16 ' src={banking} alt="" />
              <div className=' flex items-center justify-center border rounded-full py-2 px-5 -ml-24'>Opening</div>
            </div>
          </div>
          <div className='flex items-center justify-center mt-[45px] max-w-[270px] h-72 rounded-lg bg-slate-700'>
            <div>
              <div>Opening</div>
            </div>
          </div>
        </div>
        <div className='min-w-[390px] bg-pink-700 h-96'>

        </div>
        </div>

      </div>
      <div className="flex items-center bg-[#DAEAEB] h-56 py-4 px-12 w-full">
  {/* Left Text Section */}
  <div className="flex-1 ml-5">
    <div className="text-2xl font-bold">
      Simplify your investments with our smart calculators!
    </div>
    <div className="flex gap-x-5 mt-3">
      <div className="py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
        SIP Calculator
      </div>
      <div className="py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
        Margin Calculator
      </div>
      <div className="py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
        Brokerage Calculators
      </div>
    </div>
    <div className="text-[#2F7FFF] mt-7">
      EXPLORE CALCULATORS
    </div>
  </div>

      {/*  Image Section */}
      <div className="flex-1">
        <img className="w-auto ml-48 h-52" src={calc} alt="Calculator" />
      </div>
    </div>
    <div className='h-96 w-full mt-9'>
  <div className='flex justify-center text-3xl font-bold'>
    Your Gateway of Smart Investing.
  </div>
  <div className='flex justify-center text-xl font-medium mb-10'>
    Highlighted features that simplify and enhance the investing experience.
  </div>
  <div className="grid grid-cols-3 ml-28 gap-y-10 justify-center mt-10 mx-auto max-w-[1300px]">
  {/* Card 1 */}
  <div className="relative  w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={image} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">Stocks</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
        Trade seamlessly and build your portfolio with confidence.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>
  
  {/* Card 2 */}
  <div className="relative w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={two} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">Mutual Funds</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
      Smart investments for every financial goal.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>


  {/* Card 3 */}
  <div className="relative w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={three} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">F$O</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
      Maximize profits with advanced trading options.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>
  
<div className="relative w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={four} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">Commodities</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
      Diversify with gold, silver, oil, and more.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>

<div className="relative w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={five} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">IPO</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
      Invest early in tomorrow’s market leaders.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>

<div className="relative w-64 h-72 group">
  {/* Decorative Background */}
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  
  {/* Main Card */}
  <div className="rounded-lg absolute top-0 left-0 w-72 h-[270px] bg-[#E6E6E6] transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    {/* Content Before Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-6 space-y-4 text-left">
      <img src={six} alt="Stocks" className="w-16 h-16 mb-2" />
      <h2 className="text-3xl font-bold text-black group-hover:text-white">US Stocks</h2>
      <p className="text-lg text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
      Own shares in the world’s top companies.
      </p>
    </div>
    
    {/* Content After Hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="px-4 py-1 -ml-36 -mb-24 text-sm bg-white text-[#1d644f] font-semibold rounded-full hover:bg-gray-200">
        Learn More
      </button>
    </div>
  </div>
</div>


</div>
<div className=' text-3xl min-h-80 mt-6 bg-[#DAEAEB] '>
  <div className='flex justify-center'>
    <div className='ml-20'>
      <div className='mt-3 mb-4   '>How-to Guides for <span className='text-[#064D51] font-bold'>Financial Success</span></div>
      <div className='text-[#5B5B5B] text-xl'>Learn at your own pace with beginner to expert resources.</div>
    </div>
  
  <img src={sumid} alt="" className='h-[115px] w-[120px] mt-2 ml-40 -mr-28' />
  </div>
{/* Cards Grid */}
<div className="flex justify-center gap-7 mt-10">
  <div className="relative group">
    {/* Background card - black border only */}
    <div className="border border-black bg-transparent h-40 w-72 rounded-lg 
                    group-hover:-rotate-3 group-hover:-translate-y-2 
                    transition-transform duration-300 ease-in-out">
    </div>

    {/* Foreground card - green gradient */}
    <div className="absolute top-0 left-0 w-72 h-40 rounded-lg 
                    bg-gradient-to-b from-teal-900 to-teal-600
                    group-hover:rotate-3 group-hover:-translate-y-4 
                    transition-transform duration-300 ease-in-out 
                    shadow-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          {/* "How to" text with arrow and play icon */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span>How to</span>
            <img src={arrow} alt="Arrow" className="w-6 h-4" />
            <img src={vector} alt="Play Icon" className="w-12 h-12 " />
          </div>
          {/* "Create a Budget" text below */}
          <div className="text-white mt-1 text-sm">Create a Budget</div>
        </div>

        {/* Centered check image container */}
        <div className="w-auto mt-8 h-12 rounded-lg flex justify-center items-center">
          <img 
            src={check} 
            alt="Checklist Icon" 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-6">
        <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
          Beginner
        </span>
      </div>
    </div>
  </div>
</div>



</div>

</div>
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
