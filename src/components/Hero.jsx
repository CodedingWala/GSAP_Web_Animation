import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

function Hero() {
    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars,words" })
        const ParagraphSplit = new SplitText(".subtitle", { type: "lines" })

        heroSplit.chars.forEach((elem) => elem.classList.add(".text-gradient"))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06
        })

        gsap.from(ParagraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger:0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        }).to(".left-leaf",{y:-200},0)
        .to(".right-leaf",{y:200},0)
    })
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>Mojito</h1>
                <img src="/images/slider-left-leaf.png" alt="left leafe" className='left-leaf' />
                <img src="images/slider-right-leaf.png" alt="right leafe" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>cool. crisp. classic</p>
                            <p className='subtitle'>sip the sprit <br /> summer</p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.</p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
