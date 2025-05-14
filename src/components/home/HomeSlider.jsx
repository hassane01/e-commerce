import React, { useState } from 'react';
import { slides } from '../../assets/DataSlides'; 
import ContrloersSlidr from './HomeComponents/ContrloersSlidr'
import ImageSlider from './HomeComponents/ImageSlider';
import TextSlider from './HomeComponents/TextSlider';

export default function HomeSlider() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const prev = () => setCurrent(i => (i - 1 + total) % total);
    const next = () => setCurrent(i => (i + 1) % total);

    return (
        <section className= "relative lg:mx-[50px] overflow-hidden flex flex-col" aria-label="Image Slider">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map(({ label, title, description, image }, idx) => (
                    
                    <div 
                        key={idx}
                        className="w-full flex-shrink-0" 
                    >
                        
                        <div
                            className="w-full lg:mr-[100px] flex flex-col md:flex-row justify-center items-center bg-[#F7F7F7] py-14 lg:px-10" 
                        >
                           <TextSlider {...{label , title , description}}/>

                           <ImageSlider {...{ image , title}}/>
                        </div>
                    </div>
                ))}
            </div>
                <ContrloersSlidr {...{current , total , prev , next}}/>
            
        </section>
    );
}