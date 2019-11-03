import React, { useState } from 'react'
import CustomModal from './includes/CustomModal';
import RecentWorksLayout from './includes/RecentWorksLayout';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

export default function RecentWorks({ websites, graphics }) {

    const websiteSettings = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const graphicsSettings = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const [show, setShow] = useState(false);
    const [item, setItem] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setItem(websites[index])
        setShow(true)
    }

    return (
        <div id="recent-works">
            <CustomModal size="lg" item={item} show={show} handleClose={handleClose} />
            <div className="row p-sm-5 pt-5 pb-5">
                <div className="col-12">
                    <AnimatedOnScroll animationIn="fadeInLeft">
                        <div className="text-center">
                            <h1>Recent Works</h1>
                            <h4>Websites</h4>
                        </div>
                    </AnimatedOnScroll>
                    <div className="row">
                        <div className="col-12">
                            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
                                <Carousel
                                    showDots
                                    swipeable
                                    responsive={websiteSettings}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="all .5s ease"
                                    containerClass="carousel-container"
                                    dotListClass="custom-dot-list-style dot-list"
                                    itemClass="carousel-item-padding-40-px p-2 my-auto"
                                >
                                    {
                                        websites.map((work, index) => {
                                            return (
                                                <RecentWorksLayout key={index} handleShow={handleShow} index={index} work={work} />
                                            )
                                        })
                                    }
                                </Carousel>
                            </AnimatedOnScroll>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <AnimatedOnScroll animationIn="fadeInRight">
                            <h4>Graphics</h4>
                        </AnimatedOnScroll>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
                                <Carousel
                                    showDots
                                    swipeable
                                    responsive={graphicsSettings}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="all .5s ease"
                                    containerClass="carousel-container"
                                    dotListClass="custom-dot-list-style dot-list"
                                    itemClass="carousel-item-padding-40-px p-2 my-auto"
                                >
                                    {
                                        graphics.map((image, index) => {
                                            return (
                                                <div key={index}>
                                                    <a href={image} target="_blank" rel="noopener noreferrer">
                                                        <img src={image} alt="graphics" className="img-fluid img-thumbnail" />
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </AnimatedOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
