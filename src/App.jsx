import React, { useEffect, useRef, useState } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

  const [showCanvas, setShowCanvas] = useState(false)

  const headingRef = useRef();
  const growingSpan = useRef();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();



  })

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX
          })

          gsap.to("body", {
            color: "#000",
            duration: 1.2,
            ease: "power2.inOut",
            backgroundColor: "#fd2c2a"
          })


          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {

              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: 'all'
              })

            }
          })
        }
        else {
          gsap.to("body", {
            color: "#fff",
            duration: 1.2,
            ease: "power2.inOut",
            backgroundColor: "#000"
          })
        }

        return !prevShowCanvas
      })

    }

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick)

    return () => headingElement.removeEventListener("click", handleClick)
  })

  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      <span ref={growingSpan} className='growing blocks fixed top-[-20px] left-[-20px] w-5 h-5 rounded-full'></span>
      <div className='w-full min-h-screen  relative font-[gilroy]'>
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))
        }
        <div className='w-full h-screen relative z-[1]'>

          <nav className='w-full flex justify-between items-center px-8 pt-3 pb-8 z-50'>
            <div className='text-xl font-medium'>Thirtysixstudio</div>
            <ul className='flex gap-10'>
              {
                links.map(link => (
                  <li className=''>{link}</li>
                ))
              }
            </ul>
          </nav>

          <div className='textcontainer w-full pl-[20%]'>
            <div className="text w-[35%] ">
              <h3 className='text-4xl'>At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h3>

              <p className='mt-10 '>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>

              <p className='mt-10'>Scroll</p>
            </div>
          </div>

          <div className='w-full  pl-10 mt-[10rem]'>
            <h1
              ref={headingRef}
              className='text-[12rem] tracking-tight leading-none '>Thirtysixstudio</h1>
          </div>


        </div>
      </div>

      <div className='w-full relative h-screen mt-52 px-10'>
        {showCanvas &&
          data[1].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))
        }
        <h1 className='text-7xl'>about the brand</h1>
        <p className='text-3xl font-light w-[80%] mt-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea iusto dolorem quasi dolore, illum labore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, soluta?Lorem ipsum dolor sit amet.</p>



      </div>
    </>
  )
}

export default App