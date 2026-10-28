import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>The only thing we are serious about is serving u best meals.</p>
                    </div>
                    <p className="mid">
                        At The Olive Table, we believe great food brings people
                        together. Our menu features fresh ingredients, carefully
                        crafted recipes, and flavors that make every meal special.
                        Whether you're joining us for a casual lunch, a family
                        dinner, or a celebration with friends, we're here to make
                        every visit memorable.
                    </p>
                    <Link to={"/"}>
                        Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="./about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About
