"use client"

import React from 'react'
import Slider from "react-slick";
import Slide from '../Slide/Slide'

export default function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      

      const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN`S LETEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Acessories",
            mainTitle: "MODERN SUUNGLASSES",
            price: "$15"
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30"
        },
      ]

  return (
    <div className=''>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price} />
                ))}
            </Slider>
        </div>
    </div>
  )
}
