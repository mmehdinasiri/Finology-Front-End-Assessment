import React from 'react'

// https://swiperjs.com/react/
// import Swiper core and required components
import SwiperCore, { Pagination, Scrollbar } from 'swiper'
import { Swiper } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

export interface ISlider {
	children: JSX.Element[] | JSX.Element
	params?: Swiper
}

SwiperCore.use([Pagination, Scrollbar])

const initParams = {
	// centeredSlides: true,
	loop: true,
	slidesPerView: 2.6,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2.6
		}
	}
}
const Slider = ({ children, params }: ISlider): JSX.Element => {
	const totalParam = { ...initParams, ...params }
	return (
		<div className='position-relative'>
			<Swiper {...totalParam} className='p-1'>
				{children}{' '}
			</Swiper>
			<div className='swiper-pagination' />
		</div>
	)
}

export default Slider
