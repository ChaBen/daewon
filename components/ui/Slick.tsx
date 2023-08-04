'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fragment } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

const banners = [
  {
    image: 'TLN_banner_1760x990-800x450.png',
    title:
      'Touhou Luna Nights - PLAYISM will Take Over Publishing from July 1 for More Streamlined Customer Support',
  },
  {
    image: 'thumbnail_800-2.png',
    title:
      'Touhou Luna Nights - PLAYISM will Take Over Publishing from July 1 for More Streamlined Customer Support',
  },
  {
    image: 'KeyArt_logo-800x450.png',
    title:
      'Cirno Joins the Fight in the High-Speed Touhou Danmaku Versus Fighter Valkyrie of Phantasm!',
  },
  {
    image: 'maxresdefault.jpg',
    title:
      'Moonlit Farewell presents the account of the greatest calamity to befall the village of Koho, five years after the events of Momodora III',
  },
]

function SampleNextArrow(props: any) {
  const { className, onClick } = props
  return (
    <Button className={className} onClick={onClick}>
      <ChevronRight color="white" />
    </Button>
  )
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <Button className={className} onClick={onClick}>
      <ChevronLeft color="white" />
    </Button>
  )
}

export default function Slick() {
  const settings = {
    // autoplay: true,
    // autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className="py-12">
      <Slider {...settings}>
        {banners.map((banner) => (
          <Fragment key={banner.title}>
            <div className="slick-inner-item">
              <div className="flex flex-col overflow-hidden rounded-lg">
                <div className="w-full shrink-0 overflow-hidden">
                  <img
                    src={banner.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div className="bg-white p-4">
                  <div className="line-clamp-2 text-center text-2xl">
                    {banner.title}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </Slider>
    </div>
  )
}
