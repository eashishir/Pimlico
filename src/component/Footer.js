import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'

const Footer = () => {
    return (
        <div>
            <div className='border-b border-[#CDD2D8]'>
                <div className='max-w-[1600px] mx-auto px-[20px] py-[24px] sm:px-[10px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='cursor-pointer whitespace-pre'>
                                <img src='/icons/ukFlag.svg' className='inline mr-[8px]' />
                                <span className='text-[14px]'>United Kingdom</span>
                                <BsChevronDown className='text-[18px] ml-2 inline' />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-[10px] sm:gap-[5px]'>
                                <div className='w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#1877F214]'>
                                    <BiLogoFacebook className='text-[#1877fb] text-[20px]' />
                                </div>
                                <div className='w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#34E0A41A]'>
                                    <img src='/icons/tripadvisor-dark.svg' />
                                </div>
                                <div className='w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#D600001A]'>
                                    <img src='/icons/yelp-org.svg' />
                                </div>
                                <div className='w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#FBBC051A]'>
                                    <img src='/icons/google.svg' />
                                </div>
                                <div className='w-[44px] h-[44px] sm:w-[24px] sm:h-[24px] grid place-items-center rounded-[5px] bg-[#FBBC051A]'>
                                    <img src='/icons/yell-icon.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-[1600px] mx-auto px-[20px] py-[26px] sm:px-[15px]'>
                    <div className='flex justify-between md:flex-col flex-wrap gap-x-[10px] gap-y-[32px] md:gap-y-0'>
                        
                        <div className='md:pb-[32px] md:border-b border-[#E6E8EC]'>
                            <div className='mb-[23px]'>
                                <img src='/image/dark-logo.svg' className='w-[165px] h-auto' />
                            </div>
                            <p className='max-w-[378px] mb-[23px] text-[#061C3D] font-open-sans'>Cusine’s  takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that some other Indian eateries you visit.</p>
                            <div className='flex text-[#42526B]'>
                                <p className='sm:text-[14px]'>Privacy Policy</p>
                                <span className='mx-3'>&#8226;</span>
                                <p className='sm:text-[14px]'>Terms & Conditions</p>
                                <span className='mx-3'>&#8226;</span>
                                <p className='sm:text-[14px]'>Sitemap</p>
                            </div>
                        </div>
                        <div className='md:py-[32px] md:border-b border-[#E6E8EC]'>
                            <h4 className='mb-[38px] font-[600]'>Quick Links</h4>
                            <div className='grid grid-cols-2 md:grid-cols-3'>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>About Us</div>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>Contact Us</div>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>Our Menu</div>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>Order Now</div>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>Book a table</div>
                                <div className='w-[122px] md:w-auto md:text-[14px] p-[8px]'>Offers</div>
                            </div>
                        </div>
                        <div className='w-[330px] md:w-full md:py-[32px] md:border-b border-[#E6E8EC]'>
                            <h4 className='font-[600]'>Download the app</h4>
                            <div className='font-[300] text-[#344054]'>Get 20% off your first order</div>
                            <div className='mt-[24px]'>
                                <div className='flex items-center justify-between md:justify-start sm:justify-between'>
                                    <img src='/image/QR.svg' className='w-[163px] sm:w-[136px] h-[163px] md:mr-[100px] sm:mr-0' />
                                    <div>
                                        <img src='/image/googleplay.svg' className='w-[123px] mb-[14px] max-w-min' />
                                        <img src='/image/appstore.svg'  className='w-[123px]'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:pt-[32px] self-center'>
                            <div className='mb-[16px] md:text-center'>
                                <img src='/icons/alert-circle.svg' className='mr-[8px] inline' />
                                <span className='text-[#136E2B] font-[600]'>Allergen info</span>
                            </div>
                            <div className='md:text-center'>
                                <img src='/image/Food-hygeine.svg' className='mr-[8px] w-[24px] h-[24px] inline' />
                                <span className='text-[#136E2B] font-[600]'>Allergen info</span>
                            </div>
                            <div className='mt-[24px] md:hidden'>
                                <img src='/image/img-hygeine.svg' className='min-w-[193px] h-full' />
                            </div>
                            <div className='mt-[24px] hidden md:block md:text-center'>
                                <img src='/image/image-hygeine-mob.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#E6E8EC] font-inter'>
                <div className='max-w-[1600px] mx-auto py-[22px] px-[20px] sm:px-[15px]'>
                    <div className='flex justify-between items-center lg:flex-col'>
                        <div className='flex'>
                            <div><img src='/icons/Visa.svg' className='w-[48px]' /></div>
                            <div className='ml-[17px]'><img src='/icons/Mastercard.svg' className='w-[48px]' /></div>
                            <div className='ml-[17px]'><img src='/icons/PayPal.svg' className='w-[48px]' /></div>
                            <div className='ml-[17px]'><img src='/icons/GooglePay.svg' className='w-[48px]' /></div>
                            <div className='ml-[17px]'><img src='/icons/ApplePay.svg' className='w-[48px]' /></div>
                            <div className='ml-[17px]'><img src='/icons/Amex.svg' className='w-[48px]' /></div>

                        </div>
                        <div className='text-[#061C3D] font-[300] lg:my-[10px]'>Copyright © 2023 Pimlico Tandoori</div>
                        <div>
                        Powered by
                        <img src='/image/gustoes.svg' className='inline ml-[12px]' />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Footer