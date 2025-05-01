import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { RiShareLine } from "react-icons/ri";

const LandingFeatures = () => {
  return (
    <div className='text-center p-10 max-w-7xl mx-auto'>
      <h2 className='text-5xl font-bold mb-4 max-sm:text-3xl'>People use <span className='text-blue-500'>SecureShare</span> for</h2>
      <p className='text-xl font-bold text-gray-600 max-sm:text-lg'>Send your files and photos <span className='text-blue-500 uppercase'>SECURELY</span> with SecureShare <span className='text-blue-500 uppercase'>ANYTIME</span> and <span className='text-blue-500 uppercase'>ANYWHERE</span> in the world.</p>
      <ul className='grid grid-cols-3 gap-12 items-center justify-center py-10 max-lg:grid-cols-1 max-lg:gap-8'>
        <li className='flex items-center flex-col gap-y-3'>
          <MdOutlineSecurity className='text-7xl text-blue-500' />
          <h2 className='text-4xl font-bold'>High Security</h2>
          <p>SecureShare ensures your data is protected with end-to-end encryption, safeguarding your files and photos from unauthorized access. Whether you're sharing sensitive documents or personal memories, you can trust SecureShare to keep your information secure.</p>
        </li>
        <li className='flex items-center flex-col gap-y-3'>
          <IoIosSpeedometer className='text-7xl text-blue-500' />
          <h2 className='text-4xl font-bold'>Speed Transfer</h2>
          <p>With SecureShare, experience lightning-fast file transfers regardless of file size. Our advanced technology ensures quick and efficient sharing, so you can send and receive files without delays, no matter where you are in the world.</p>
        </li>
        <li className='flex items-center flex-col gap-y-3'>
          <RiShareLine className='text-7xl text-blue-500' />
          <h2 className='text-4xl font-bold'>Easy Share</h2>
          <p>SecureShare makes file sharing simple and intuitive. With just a few clicks, you can securely send files and photos to anyone, anywhere. Our user-friendly interface ensures a seamless experience, making it easy for everyone to share files with confidence.</p>
        </li>
      </ul>
    </div>
  );
};

export default LandingFeatures;