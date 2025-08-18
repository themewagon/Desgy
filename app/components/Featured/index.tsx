"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Marketing – 3x faster campaign cycles, +15% conversions.',
        imgSrc: '/images/featured/feat1.jpg',
    },
    {
        heading: 'Sales – 30% less time wasted on cold leads, +10% higher close rates.',
        imgSrc: '/images/featured/feat2.jpg',
    },
    {
        heading: 'Operations – 25% reduction in cycle time with automated reporting.',
        imgSrc: '/images/featured/feat1.jpg',
    },
    {
        heading: 'These outcomes are achieved in weeks, not years.',
        imgSrc: '/images/featured/feat2.jpg',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="featured-section" className="bg-primary py-20 relative overflow-hidden">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center pb-16">
                        <h2 className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 font-data">PROOF IN PRACTICE</h2>
                        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-headline">Business impact, not hype</h3>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">These outcomes are achieved in weeks, not years.</p>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 pb-8 my-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300'>
                                    <div className="p-8">
                                        <div className="bg-primary-lighter w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                            <span className='text-primary text-2xl font-bold'>📈</span>
                                        </div>
                                        <h4 className='text-xl font-bold text-darkpurple mb-4 leading-tight'>{items.heading}</h4>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
