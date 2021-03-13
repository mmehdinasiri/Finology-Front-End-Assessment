import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import Slider from '../Slider/Slider'
import CommentBox from './CommentBox'
import { ReactComponent as Heart } from '../../icons/heart.svg'
export interface ICommentBox {
	name: string
	position: string
	comment: string
	img: string
}
const commentList = [
	{
		name: 'David Champion',
		position: 'CEO of iCloud',
		comment:
			'System is excellent. It has made my system user experience to become one of the easiest!',
		img: '/assets/people/david-campion.jpg'
	},
	{
		name: 'David Frank van Hord',
		position: 'CEO of Marks.co',
		comment:
			'I just wnated to share a quick nore and let you know tha you guys do a really good job.',
		img: '/assets/people/vincent-joignie.jpg'
	},
	{
		name: 'Lucase Bond',
		position: 'BOD of Skyscanner',
		comment:
			"Now it's almost like having a desiner right. I just choose the page, make change.",
		img: '/assets/people/jerome-boudot.jpg'
	},
	{
		name: 'gaetan houssin',
		position: 'CEO of noWhere',
		comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: '/assets/people/david-campion.jpg'
	}
]
const CommentSection: FC = () => {
	return (
		<div className='container py-5'>
			<div className='d-flex align-items-center mb-3'>
				<div className='p-2 is-bg-red is-white rounded-circle mr-3'>
					<Heart />
				</div>
				<h3 className='is-wight-800 is-primary m-0'>
					What other people say about
					<br /> our service
				</h3>
			</div>
			<Slider>
				{commentList.map((item: ICommentBox, index) => (
					<SwiperSlide key={index}>
						<CommentBox commentObj={item} />
					</SwiperSlide>
				))}
			</Slider>
		</div>
	)
}

export default CommentSection
