import React from 'react';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../Components/StyledComponents';
gsap.registerPlugin(ScrollTrigger);

export const Intro = () => {
    return (
        <Section>  
            <h1 className="InitialHeading">
                Wat gebeurt er met luchtvervuiling wanneer een virus Europeanen dwingt om thuis te blijven?{' '}
            </h1>
        </Section>
      
    )
}

export default Intro;