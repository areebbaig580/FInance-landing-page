import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Database } from 'lucide-react'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const section3 = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section3.current,
                start: 'top 60%',
            },
        });

        tl.from('.heading', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
        })
        tl.from('.heading-2', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
        })
        tl.from('.box', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
        })

    }, { scope: section3 })
    return (
        <div className='min-h-[90vh] w-full px-[6vw] pt-[8vh]' ref={section3}>
            <div className='mb-20'>
                <div className='text-6xl w-9/10 mb-8 font-semibold flex flex-wrap'>
                    <div className='heading'>Where innovation meets global finance</div>
                    <div className='heading'>powering seemless payments.</div>
                </div>
                <div className='w-6/10 text-lg text-[#3e3e3e] flex flex-wrap'>
                    <div className='heading-2'>Transform your bussiness with our elegant, seemless payment solutions- crafted to elevate your</div>
                    <div className='heading-2'>transactions and connect you to the world effortlessly.</div>
                </div>
            </div>

            <div className='flex gap-2 h-fit '>
                <div className='flex flex-col gap-8 box'>
                    <div className='px-2 py-2 bg-[#efefef] rounded-2xl h-fit w-fit'><img src="/icons/qr.png" alt="" className='h-10' /></div>
                    <div>
                        <div className='text-2xl mb-2'>Precision.</div>
                        <div className='text-[#3e3e3e] w-7/10' >Latest Stock prices of major companies and performance charts.</div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 box'>
                    <div className='px-2 py-2 bg-[#efefef] rounded-2xl h-fit w-fit'><img src="/icons/money.webp" alt="" className='h-10' /></div>
                    <div>
                        <div className='text-2xl mb-2'>Financial Ratios.</div>
                        <div className='text-[#3e3e3e] w-7/10' >Financial health analysis for companies, including liquidity and solvency ratios.</div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 box'>
                    <div className='px-2 py-2 bg-[#efefef] rounded-2xl h-fit w-fit'><img src="/icons/bar.jpg" alt="" className='h-10' /></div>
                    <div>
                        <div className='text-2xl mb-2'>Economic indicators.</div>
                        <div className='text-[#3e3e3e] w-7/10' >Up to date information on national and global Economic performance.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section3
