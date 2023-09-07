import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const Sidebar = ({ isCollpsed, setIsCollpsed }) => {
    return (
        <>
            <div className={`overflow-hidden block p-[15px] ${isCollpsed ? 'left-0' : '-left-[300px]'} top-0 bg-[#11202d] w-[300px] z-[2040] h-full transition-[0.5s] left-0 fixed shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]`}>
                <div className='absolute right-2'>
                    <MdClose className='text-[28px] text-white' onClick={() => { setIsCollpsed(false) }} />
                </div>
                <div className='overflow-auto'>
                    <div className='mb-[36px]'>
                        <div className='flex items-center gap-[8px]'>
                            <img src='/icons/map-pin-small.svg' className='w-[20px] h-[20px]' />
                            <span className='text-white text-[14px]'>38 Moreton Street, SW1V 2PB </span>
                        </div>
                        <div className='flex items-center mt-2 gap-[8px] ml-[32px] lg:ml-0'>
                            <img src='/icons/phone-call.svg' className='w-[20px] h-[20px]' />
                            <span className='text-white text-[14px]'>0207 834 3375</span>
                        </div>
                    </div>
                    <div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Offers</Link>
                        </div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Menu</Link>
                        </div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-[#D60000] text-white text-[20px]">Gallery</Link>
                        </div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Reviews</Link>
                        </div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">About</Link>
                        </div>
                        <div className='p-[8px] mb-[5px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Contact</Link>
                        </div>
                    </div>
                    <div className='mt-[36px]'>
                        <div className='flex 2lg:flex-col'>
                            <button className='bg-[#344054] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]'>Book a Table</button>
                            <button className='bg-[#D60000] ml-[12px] 2lg:ml-0 2lg:mt-[12px] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]'>Order Now</button>
                        </div>
                    </div>
                    <div className='mt-[24px]'>
                        <div className='flex flex-col'>
                            <div className='text-center'>
                                <img src='/image/Food-hygeine.svg' className='w-[34px] inline h-[34px] cursor-pointer' />
                                <div className='inline-flex items-center'>
                                    <div className='ml-[20px] cursor-pointer'>
                                        <img src='/icons/ukFlag.svg' className='inline' />
                                        <BsChevronDown className='text-white text-[18px] ml-2 inline' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-[24px]'>
                                <img src='/icons/fb.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                <img src='/icons/tripadvisor.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                <img src='/icons/yelp.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                <img src='/icons/Google-alt.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                <img src='/icons/yell-icon.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed ${isCollpsed ? 'block' : 'hidden'} opacity-40 bg-black z-[2039] inset-0`} onClick={() => { setIsCollpsed(false) }}>
            </div>
        </>
    )
}

export default Sidebar