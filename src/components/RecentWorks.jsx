import React, { useState } from 'react'
import CustomModal from './includes/CustomModal';
import RecentWorksLayout from './includes/RecentWorksLayout';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

export default function RecentWorks({ websites, graphics }) {

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
                        </div>
                    </AnimatedOnScroll>
                    <div className="row">
                        {
                            websites.map((work, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index} >
                                        <RecentWorksLayout handleShow={handleShow} index={index} work={work} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
