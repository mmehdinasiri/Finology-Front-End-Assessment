import { FC } from 'react'

const Intro: FC = () => {
	return (
		<div className='intro py-3 pt-md-5 '>
			<div className='container'>
				<div className='position-relative is-base-z'>
					<h1 className='intro-title'>
						Make development
						<br />
						easy with us
					</h1>
					<p className='mb-2'>
						Doing development can never be easy, and it takes time and
						resources.
						<br />
						We at EasyWork has the solution.
					</p>
					<div className='intro-img'>
						<img src='images/banner/banner.png' alt='banner' />
					</div>
				</div>
				<img
					className='intro--left-decor'
					src='images/banner/left.svg'
					alt='left-banner'
				/>
				<img
					className='intro--right-decor'
					src='images/banner/right.svg'
					alt='right-banner'
				/>
			</div>
		</div>
	)
}

export default Intro
