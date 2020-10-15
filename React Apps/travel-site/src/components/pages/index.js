import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import TravelSection from '../TravelSection';
import InfoSection from "../InfoSection";
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from '../InfoSection/Data';

import Services from '../Services';
import Footer from '../Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    //update state
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <TravelSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    );
};

export default Home;
