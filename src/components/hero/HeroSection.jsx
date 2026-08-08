import React from 'react'
import { Star } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='flex'>
            <div className='h-[90vh] w-[50vw] flex flex-col pl-[6vw] pt-[8vh] gap-[5vh]'>
                <div className='h-fit w-fit px-2 py-1 rounded-2xl flex items-center gap-1 font-semibold shadow-md shadow-[#c3c3c3] hero-1'>
                    4.8  <Star size={20} className='fill-yellow-300 text-yellow-300' /> 3k+ reviews on
                    <img src="/logo/apple.png" alt="" className='h-7' />
                    <img src="/logo/google-play.jpg" alt="" className='h-7' />
                </div>
                <div className='text-7xl font-semibold hero-2'>Modern <span className='font-[300] italic'>payments</span> for market</div>
                <div className='w-7/10 text-[#3b3b3b] hero-3'>Seamless, secure and scalable payments solutions designed for modern Bussiness to transact effortlessly across global markets with confidence.</div>
                <div className='flex gap-2 cursor-pointer hero-4'>
                    <div className='h-fit w-fit px-4 py-2 bg-[#C0FF00] rounded-2xl'>Secure now</div>
                    <div className='h-fit w-fit px-4 py-2 border border-[#888888] rounded-2xl'>Learn more</div>
                </div>
                <div className='w-6/10 text-[#3b3b3b] hero-5'>Empowering <span className='text-[#0000FF]'>3k+</span> bussinesses worldwide with secure, innovative Financial solutions-trusted</div>
                <div className='flex items-center gap-10 hero-6'>
                    <img src="/logo/Visa.png" alt="" className='h-10 mix-blend-multiply' />
                    <img src="/logo/ebay.png" alt="" className='h-10 mix-blend-multiply' />
                    <img src="/logo/mastercard.png" alt="" className='h-10 mix-blend-multiply' />
                    <img src="/logo/PayPal.svg.webp" alt="" className='h-10 mix-blend-multiply' />
                </div>
            </div>
            <div className='h-[90vh] w-[50vw] flex items-center justify-center hero-img'>
                <img src="/hero.webp" alt="" className='h-[70vh]' />
            </div>
        </div>
    )
}

export default HeroSection
