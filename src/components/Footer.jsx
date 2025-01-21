import React from 'react';
import support from '../assets/support.png'
import logowhite from '../assets/logowhite.png'
function Footer() {
  return (
    <>
      <div className="h-36  flex items-center gap-x-44 bg-gradient-to-b from-white to-[#83C5BE]">
        <img className='h-28 w-28 ml-20' src={support} alt="" />
        <div className='hidden lg:block'>
            <div>Get Support Anytime, Anywhere</div>
            <div>We’re just a call, email, or message away to help you with your trading journey.</div>
            <div className='' > Have any queries? <span className='text-[#2F7FFF]'> Contact Support </span></div>
        </div>
        <button className='py-3 px-8 bg-[#152F46] text-white font-semibold rounded-full'>Lets Connect</button>
      </div>
      <div className="h-[858px] bg-[#064D51]">
        <div className="grid grid-cols-5 gap-8  text-white px-12 py-8">
          <div>
            <div className="font-bold text-lg ">
              <div className='flex '>
              <img src={logowhite} alt="" className='h-16 w-16 -m-2 -mt-5' />
              Sapphire
              </div>
            </div>
            <p>Plot No. 33, Kotwal Nagar,</p>
            <p>Khamla, Nagpur (MH)</p>
            <p>Pincode: 440025</p>
            <p>info@sapphirebroking.com</p>
            <p>www.sapphirebroking.com</p>
          </div>

          <div>
            <div className="font-bold text-lg mb-4">Company</div>
            <p>About us</p>
            <p>Company Info</p>
            <p>Pricing</p>
            <p>Refferal Programme</p>
            <p>Become a Partner</p>
            <p>Careers</p>
          </div>

          <div>
            <div className="font-bold text-lg mb-4">Support</div>
            <p>Contact us</p>
            <p>Support Portal</p>
            <p>Blogs</p>
            <p>Charges & Pricing</p>
            <p>Downloads</p>
            <p>Videos</p>
            <p>How to raise</p>
            <p>a complaint?</p>
          </div>


          <div>
            <div className="font-bold text-lg mb-4">Account</div>
            <p>Open an Account</p>
            <p>Bank Details</p>
            <p>Account Closure</p>
            <p>COllatoral Haircut</p>
            <p>Risk Disclosure</p>
          </div>

          <div>
            <div className="font-bold text-lg mb-4">Follow us:</div>
            <p>werw</p>
          </div>
        </div>
        <div class='ml-9 mr-9  text-white'>
            <p className='mb-3'><strong>[Legal Name](Trading as Sapphire Broking)</strong>: Registered Office: [Registered Address]. CIN: [CIN]. SEBI Registration No.: [SEBI Registration No.] – Member of NSE, BSE, MCX, and NCDEX. Depository Participant: CDSL Registration No.: [DP Registration No.]. Compliance Officer: [Name of Compliance Officer], Tel: [Phone Number], Email: <a href="mailto:compliance@sapphirebroking.com">compliance@sapphirebroking.com</a>.</p>
            
            <p className='mb-3'><strong>Grievance Redressal:</strong> For complaints related to broking services, email us at <a href="mailto:support@sapphirebroking.com">support@sapphirebroking.com</a>. For depository-related issues, email <a href="mailto:dp@sapphirebroking.com">dp@sapphirebroking.com</a>. To escalate unresolved issues, contact our Grievance Redressal Officer: <strong>[Name]</strong>, Mobile: <strong>[Mobile Number]</strong>. Alternatively, file complaints on the SEBI SCORES portal by registering with mandatory details like Name, PAN, Address, Mobile Number, and Email ID.</p>
            
            <p className='mb-3'><strong>Cybersecurity Issues:</strong> Report cybersecurity concerns to <a href="mailto:support@sapphirebroking.com">support@sapphirebroking.com</a> or call us at <strong>[Cybersecurity Contact Number]</strong>.</p>
            
            <p className='mb-3'><strong>Regulatory Compliance:</strong> Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Brokerage will not exceed the SEBI-prescribed limit.</p>
            
            <p className='mb-3'><strong>Communication Policy:</strong> By sharing your contact details, you consent to receive communication from us via Call/SMS/Email for a period of 12 months, even if registered under DND. We use your information for legitimate business purposes only and do not sell or rent your contact details to third parties.</p>
            
            <p className='mb-1'><strong>Attention Investors:</strong></p>
            <p>1. Always update your mobile number and email ID with your broker and depository participant to receive OTPs and alerts directly from the depository.</p>
            <p>2. Check your securities/mutual funds/bonds in the monthly Consolidated Account Statement issued by CDSL.</p>
            <p>3. Prevent unauthorized transactions in your trading and demat accounts by safeguarding your credentials and being vigilant against unsolicited tips or schemes.</p>
            <p>4. For IPO applications, use ASBA for payment, eliminating the need for cheques.</p>
            
            <p className='mt-2'><strong>ODR Portal:</strong> Resolve disputes efficiently using SEBI’s Online Dispute Resolution Portal: <a href="https://smartodr.in/login">https://smartodr.in/login</a>.</p>
        </div>

        <div className='flex text-[#959090] justify-center gap-x-7 mt-10'>
            <div>NSE</div>
            <div>|</div>
            <div>BSE</div>
            <div>|</div>
            <div>MCX</div> 
            <div>|</div>
            <div>NCDEX </div>   
        </div>
      </div>
      <div className='flex items-center justify-center text-white h-12 bg-[#152F46]'>
      Copyright © 2025 Sapphire , All rights reserved.
      </div>
    </>
  );
}

export default Footer;
