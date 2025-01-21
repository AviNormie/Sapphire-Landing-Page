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
// import arrow2 from '../assets/arrow2.png'
import vector from '../assets/vector.png'
import smallArrow from '../assets/smallArrow.png'
import Frame1  from '../assets/Frame1.png'
import frame2  from '../assets/frame2.png'
import frame3  from '../assets/frame3.png'
import frame4  from '../assets/frame4.png'
// import frame5  from '../assets/frame5.png'
import { useState } from 'react';
import { Plus } from 'lucide-react';
function MainPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const modules = [
    {
      title: "Stock Market Basics",
      description: "Get insights into the fundamentals of the stock market and how to start",
      progress: "Progress Required: 1.5/3 modules completed",
      image: Frame1
    },
    {
      title: "Understanding Cryptocurrency",
      description: "Description text here goes under title crypto",
      progress: "Progress Required: 1.5/3 modules completed",
      image: frame2
    }
  ];

  const blogs = [
    {
      title: "How to Create a Personal Budget That Works",
      description: "Step by step guide to build a budget that helps you manage your finances better",
      author: "Emily Smith",
      date: "Jan 5, 2025",
      image: frame3
    },
    {
      title: "Stock Market 101: A Beginner's Guide to Investing",
      description: "Learn the basics of stock market, its key terms and how to get started",
      author: "John Doe",
      date: "Jan 10, 2025",
      image: frame4
    }
  ];

  const faqs = [
    {
      question: "How do I open a trading and Demat account with your firm?",
      answer: "Are you Testing me?"
    },
    {
      question: "What services do you offer?",
      answer: "We provide stock broking, mutual fund distribution, portfolio management, insurance solutions, and expert financial advisory."
    },
    {
      question: "Are my investments safe with your firm?",
      answer: "Are you Testing me?"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
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
         <div className='text-lg mt-2'>Place trades at just ₹20 per order</div>
         <button className='text-[#152F46] text-lg mt-4 px-5 py-2 border border-[#152F46] rounded-full hover:text-white hover:bg-[#152F46] transition duration-300'>View Pricing</button>
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
      <div className="cursor-pointer hover:text-white hover:bg-[#152F46] transition duration-300 py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
        SIP Calculator
      </div>
      <div className="cursor-pointer hover:text-white hover:bg-[#152F46] transition duration-300 py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
        Margin Calculator
      </div>
      <div className="cursor-pointer  hover:text-white hover:bg-[#152F46] transition duration-300 py-3 px-7 border font-semibold bg-white border-slate-800 rounded-full">
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
<div className=' text-3xl h-auto py-3 mt-6 bg-[#DAEAEB] '>
  <div className='flex justify-center'>
    <div className='ml-20'>
      <div className='mt-3 mb-4   '>How-to Guides for <span className='text-[#064D51] font-bold'>Financial Success</span></div>
      <div className='text-[#5B5B5B] text-xl'>Learn at your own pace with beginner to expert resources.</div>
    </div>
  
  <img src={sumid} alt="" className='h-[115px] w-[120px] mt-2 ml-40 -mr-28' />
  </div>
{/* Cards Grid */}
<div className="flex justify-center gap-36  mt-10 mb-4">
  {/* Card 1 */}
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
          <div className="flex items-center mt-3 gap-2 text-white font-bold text-lg">
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
        <span className="bg-[#152F46] text-white text-sm px-6 py-1 rounded-full">
          Beginner
        </span>
      </div>
    </div>
  </div>

  {/* Card 2 */}
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
          <div className="flex items-center mt-3 gap-2 text-white font-bold text-lg">
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
        <span className="bg-[#152F46] text-white text-sm px-6 py-1 rounded-full">
          Beginner
        </span>
      </div>
    </div>
  </div>

  {/* Card 3 */}
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
          <div className="flex items-center mt-3 gap-2 text-white font-bold text-lg">
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
        <span className="bg-[#152F46] text-white text-sm px-6 py-1 rounded-full">
          Beginner
        </span>
      </div>
    </div>
  </div>
</div>
<span className='text-2xl font-semibold ml-16 '>
Want to explore more insights?
</span>
<div className='text-xl ml-16 text-[#858585]'>Watch our complete video library for market trends, financial tips, and product tutorials.</div>
<div className='flex text-[#2F7FFF] font-medium text-xl ml-16 '>Explore More Videos <img src={smallArrow} alt="arrow" className='cursor-pointer h-4 w-3 ml-3 mt-2' /> </div> 


</div>
<div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Latest Modules */}
        <div>
  <h2 className="text-3xl font-bold text-[#064D51] mb-4">Latest Modules</h2>
  <div className="space-x-4 flex">
    {modules.map((module, index) => (
      <div
        key={index}
        className="border hover:scale-105  transition duration-300  rounded-md h-[300px] md:h-[350px] w-1/2 p-4 shadow-sm flex flex-col justify-between"
      >
        <div>
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-32 object-cover mt-4 rounded-lg mb-5"
          />
          <h3 className="font-semibold">{module.title}</h3>
          <p className="hidden md:block text-sm mt-5 text-gray-600 mb-2">
            {module.description}
          </p>
          <p className="hidden md:block text-xs text-gray-500">{module.progress}</p>
        </div>
        <div className="flex text-sm text-blue-600  self-end">Continue Learning <span className=' ml-1 font-semibold'>></span>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Latest Blogs */}
        <div>
  <h2 className="text-3xl font-bold text-[#064D51] mb-4">Latest Blogs</h2>
  <div className="space-y-4">
    {blogs.map((blog, index) => (
      <div
        key={index}
        className="border hover:scale-105 transition duration-300 rounded-md p-4 shadow-sm flex flex-col md:flex-row items-center md:items-start w-full"
      >
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{blog.description}</p>
          <p className="text-xs text-gray-500 mb-3">
            Author: {blog.author} | Published: {blog.date}
          </p>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-48 h-32 object-cover rounded-lg md:ml-4"
        />
      </div>
    ))}
  </div>
</div>
      </div>

      {/* FAQs Section */}
      <div className="mt-12">
        <h2 className="text-4xl min-w-full font-bold text-teal-900 mb-6 text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Your Guide to Understanding Our Most Discussed Services
        </p>
        
        <div className="text-xl max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-left font-medium">{faq.question}</span>
                <Plus 
                  className={`transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-45' : ''
                  }`}
                  size={20}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  openFAQ === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button className="cursor-pointer  hover:text-white hover:bg-[#152F46] transition duration-300 text-[#152F46] font-medium border border-[#152F46] px-5 py-2 rounded-full">View More</button>
        </div>
      </div>
    </div>
    <div>
      <Footer />
</div>
</div>

    </>
  );
}

export default MainPage;
