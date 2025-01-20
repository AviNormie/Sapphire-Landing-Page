import React from 'react';
import Navbar from '../components/Navbar';
import one from '../assets/one.png';
import Coin from '../assets/Coin.png';
import banking from '../assets/banking.png'
import Footer from '../components/Footer';
import calc from '../assets/calc.png'
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
  <div className="grid grid-cols-3 gap-x-10 gap-y-10 w-full justify-center mt-10 ml-16 m-12">
  {/* Card 1 */}
  <div className="relative w-64 h-72 group">
    <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
    <div className="rounded-lg absolute top-0 left-0 w-72 h-64 bg-[#E6E6E6] transition-transform duration-300 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
      <span className="text-xl">Card 1 Text</span>
    </div>
  </div>
  
  {/* Card 2 */}
  <div className="relative w-64 h-72 group">
  <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
  <div className="rounded-lg absolute top-0 left-0 w-72 h-64 bg-[#E6E6E6] transition-transform duration-300 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]">
    <span className="transition-opacity duration-100 ease-in-out group-hover:opacity-0">hiiii</span>
  </div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
    <span className="text-xl">Card 2 Text</span>
  </div>
</div>

  
  {/* Card 3 */}
  <div className="relative w-64 h-72 group">
    <div className="rounded-lg absolute bottom-0 left-0 w-72 h-32 bg-yellow-400 transition-transform duration-300 ease-in-out group-hover:-rotate-6"></div>
    <div className="rounded-lg absolute top-0 left-0 w-72 h-64 bg-[#E6E6E6] transition-transform duration-300 ease-in-out group-hover:-translate-y-5 group-hover:bg-[#1d644f]"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
      <span className="text-xl">Card 3 Text</span>
    </div>
  </div>
  
  {/* Repeat for other cards */}
  {/* Add similar structure for cards 4, 5, 6 */}
</div>


</div>


      <Footer />
    </>
  );
}

export default MainPage;
