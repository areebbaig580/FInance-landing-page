import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Database } from 'lucide-react'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const section = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: 'top 70%',
      },
    });

    tl.from('.heading-1', {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    tl.from('.heading-2', {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    tl.from('.description', {
      y: 5,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    })
    tl.from('.btn', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
    }, '<')
    tl.from('.box', {
      y: 20,
      opacity: 0,
      duration: 0.4,
    },'<')
    tl.from('.box-text', {
      y: 10,
      opacity: 0,
      duration: 0.4,
    },)
    tl.from('.box-elem', {
      y: 5,
      opacity: 0,
      duration: 0.4,
    },"<")


  }, { scope: section })

  return (
    <div className='min-h-[90vh] w-full px-[6vw] pt-[8vh]' ref={section}>
      <div className='mb-10'>
        <div className='text-6xl w-7/10 mb-5 font-semibold flex flex-col'>
          <div className='heading-1'>Enjoy Lower fess on</div>
          <div className='heading-2'>international money transfers.</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-6/10 text-lg text-[#3e3e3e]  flex flex-wrap'>
            <div className='description'>Vaulta makes sending money internationally simple and affordable. Enjoy lower fees, </div>
            <div className='description'>compettitive exchange rates, and a seemless user experience</div></div>
          <div className='h-fit w-fit px-4 py-2 bg-[#C0FF00] rounded-2xl btn'>Learn more</div>
        </div>
      </div>
      <div className='flex gap-2 '>
        <div className='h-[40vh] w-6/10 bg-[#efefef] rounded-2xl px-2 py-2 box'>
          <div className='h-full w-full bg-white rounded-2xl flex items-center'>
            <div className='flex flex-col px-9 py-2 justify-evenly h-full box-text'>
              <div className='px-1 py-1 bg-[#efefef] rounded-2xl h-fit w-fit'><div className='px-2 py-2 bg-white rounded-2xl h-fit w-fit'><Database /></div></div>
              <div >
                <div className='text-2xl mb-2'>Comparitive Tools</div>
                <div className='text-[#3e3e3e]'>Benchmark And contrast Key performance metrics to optimise operations, enhance efficiency , and drive strategic growth.</div>
              </div>
            </div>
            <img src="/chart.png" alt="" className='h-[35vh] box-elem' />
          </div>
        </div>
        <div className='h-[40vh] w-4/10 bg-[#efefef] rounded-2xl px-2 py-2 box'>
          <div className='h-full w-full bg-white rounded-2xl flex flex-col justify-evenly items-center'>
            <div className='h-fit w-fit px-2 py-2 bg-[#0000FF] text-white rounded-2xl box-elem'>Get started for free</div>
            <div className='px-9 box-text'>
              <div className='text-2xl mb-2'>Easy Tools</div>
              <div className='text-[#3e3e3e]'>Simple powerfull and efficient tools for everyone , anytime, anywhere.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section2
