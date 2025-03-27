 
import About from "./AboutUS/page";
import Hero from "./Hero/page";
import WhatWeOffer from "./WhatWeOffer/page";
import GetInTouch from "./GetInTouch/page";
import CTASection from "./ContactUS/page";
 
export default function Home() {
  return (
       

    <div className="flex flex-col items-center justify-center min-h-screen">
       <Hero />   
       <About />
       <WhatWeOffer />
       <GetInTouch />
       <CTASection />

       

    </div>
     
  );
}
