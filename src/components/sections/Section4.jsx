import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BadgeCheck } from 'lucide-react';
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
    const section4 = useRef();


    const pricingCards = [
        {
            title: "Standard",
            price: 109,
            isPopular: false,
            description: "Our pricing adapts to your company's a transaction volume, and unique business needs.",
            features: [
                "Transparent Pricing",
                "Scalable Plans",
                "Instant Access",
                "Pay-as-You-Go",
                "Custom Solutions"
            ]
        },
        {
            title: "Plus",
            price: 309,
            isPopular: true,
            badgeText: "Best Deal",
            description: "Our pricing adapts to your company's financial scale, transaction volume, and unique business needs.",
            features: [
                "Exclusive Benefits",
                "Faster Processing",
                "Advanced Analytics",
                "Multi-Currency Support",
                "Enhanced Security"
            ]
        },
        {
            title: "Enterprise",
            price: 609,
            isPopular: false,
            description: "Our pricing adapts to your company's financial scale, transaction volume, and unique business needs.",
            features: [
                "Tailored Financial Solutions",
                "High-Volume Transactions",
                "Dedicated Financial Insights",
                "Multi-Account & Global Payments",
                "Grade Security & Compliance"
            ]
        }
    ];
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section4.current,
                start: "top 60%",

            }
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
        tl.from('.price-cards', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
        })
 ScrollTrigger.refresh();
    }, { scope: section4 })

    return (
        <div className='min-h-screen w-full px-[6vw] pt-[8vh] mb-2' ref={section4}>
            <div className='mb-10'>
                <div className='text-6xl w-9/10 mb-8 font-semibold flex flex-wrap'>
                    <div className='heading'>Custom crafted Plan for your bussiness,</div>
                    <div className='heading'>offering effortless flexibility and growth.</div>
                </div>
                <div className='w-8/10 text-lg text-[#3e3e3e] heading-2'>Choose from tailored plans that adapt to your business size, financial needs, and growth goals—ensuring seamless scalability, cost efficiency, and maximum value at every stage with flexible pricing, and advanced financial insights.</div>
            </div>

            <div className='flex gap-10  h-fit price-cards'>
                {pricingCards.map((p, index) => (

                    <div className='flex flex-col px-6 py-6 h-fit w-[24vw] bg-[#f3f4fa] rounded-2xl gap-4 cursor-pointer tansition duration-200 ease-in hover:translate-y-[-10px]' key={index}>
                        <div className='text-lg font-semibold'>{p.title}</div>
                        <div className='text-[#3e3e3e]'>{p.description}</div>
                        <div className='flex items-baseline'>
                            <div className='text-4xl font-bold'>${p.price}</div>
                            <div>/Month</div>
                        </div>
                        <div className='bg-[#C0FF00] rounded-2xl py-2 text-center'>Choose plan</div>
                        <div className='flex flex-col text-[#3e3e3e] gap-3'>
                            {p.features.map((p, index) => (
                                <div key={index} className='flex gap-1 items-center'><BadgeCheck size={20} className='fill-black text-white' />{p}</div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Section4
