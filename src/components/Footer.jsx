import React from 'react';
import support from '../assets/support.png'
function Footer() {
  return (
    <>
      <div className="h-36 mt-96 flex items-center gap-x-44 bg-gradient-to-b from-white to-[#83C5BE]">
        <img className='h-28 w-28 ml-20' src={support} alt="" />
        <div className='hidden lg:block'>
            <div>Get Support Anytime, Anywhere</div>
            <div>We’re just a call, email, or message away to help you with your trading journey.</div>
            <div>Have any queries? Contact Support</div>
        </div>
        <button className='py-3 px-8 bg-[#152F46] text-white font-semibold rounded-full'>Lets Connect</button>
      </div>
      <div className="h-[900px] bg-[#064D51]">
        <div className="grid grid-cols-5 gap-8 text-white px-12 py-8">
          <div>
            <div className="font-bold text-lg mb-4">Legal Name</div>
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
        <div className=' ml-9 mr-9 text-white '>
            <p>[Legal Name](Trading as Sapphire Broking): Registered Office: [Registered Address]. CIN: [CIN]. SEBI Registration No.: [SEBI Registration No.] – Member of NSE, BSE, MCX, and NCDEX. Depository Participant: CDSL Registration No.: [DP Registration No.]. Compliance Officer: [Name of Compliance Officer], Tel: [Phone Number], Email: compliance@sapphirebroking.com.</p>
            <p>Grievance Redressal: For complaints related to broking services, email us at support@sapphirebroking.com. For depository-related issues, email dp@sapphirebroking.com. To escalate unresolved issues, contact our Grievance Redressal Officer: [Name], Mobile: [Mobile Number]. Alternatively, file complaints on the SEBI SCORES portal by registering with mandatory details like Name, PAN, Address, Mobile Number, and Email ID.</p>
            <p>
            Cybersecurity Issues: Report cybersecurity concerns to support@sapphirebroking.com or call us at [Cybersecurity Contact Number].</p>
            <p>Regulatory Compliance: Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Brokerage will not exceed the SEBI-prescribed limit.</p>
            <p>Communication Policy: By sharing your contact details, you consent to receive communication from us via Call/SMS/Email for a period of 12 months, even if registered under DND. We use your information for legitimate business purposes only and do not sell or rent your contact details to third parties.</p>
            <p>Attention Investors:</p>
            <p></p>
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
