import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

function Art() {
    const mobile = useMediaQuery({maxWidth:767})
    const start=mobile? "top 20%" : "top top"
    useGSAP(()=>{
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger: "#art",
                start:start,
                end:"bottom center",
                scrub:1.6,
                pin:true
            }
        })
        timeline.to(".will-fade",{
            opacity:0,
            stagger:0.6,
            ease:"power1.inOut"
        })
        timeline.to(".masked-img",{
            scale:1.3,
            maskPosition:"center",
            maskSize:"400%",
            duration:1,
            ease:"power1.inOut"
        })
        timeline.to("#masked-content",{
            opacity:1,
            duration:1,
            ease:"power1.inOut"
        })
    })
  return (
   <div id="art">
	 <div className="container mx-auto h-full pt-20">
		<h2 className="will-fade">The ART</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
		 
		 <div className="cocktail-img">
			<img
				src="/images/under-img.jpg"
				alt="cocktail"
				className="abs-center masked-img size-full object-contain"
			/>
		 </div>
		 
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade">Sip-Worthy Perfection</h2>
		 <div id="masked-content">
			<h3>Made with Craft, Poured with Passion</h3>
			<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
		 </div>
		</div>
	 </div>
	</div>
  )
}

export default Art
