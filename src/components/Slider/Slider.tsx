import React from 'react'

// https://swiperjs.com/react/
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper } from 'swiper/react'

export interface ISlider {
	children: JSX.Element[] | JSX.Element
	params: Swiper
	paginationClassName: string
}

SwiperCore.use([Navigation, Pagination, Scrollbar])

const initParams = {
	centeredSlides: true,
	loop: true,
	slidesPerView: 2.5,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
}
const Slider = ({ children, params }: ISlider): JSX.Element => {
	const totalParam = { ...initParams, ...params }
	return (
		<div className='position-relative'>
			<Swiper {...totalParam}>{children}</Swiper>
			<div className='swiper-pagination' />
		</div>
	)
}

export default Slider
