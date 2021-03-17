import { FC } from 'react'
import { ImageRatio } from '..'

interface IPeopleCardHor {
	people: IPeople | null
}

const PeopleCardHor: FC<IPeopleCardHor> = ({ people }) => {
	return (
		<div className='people-card is-hor'>
			<div className='row no-gutters'>
				<div className='col-4'>
					<ImageRatio classList='is-left-border' ratio='people'>
						<img src={people?.img} alt='people' className='is-left-border' />
					</ImageRatio>
				</div>
				<div className='col-8 p-3'>
					<h3 className='font-18 my-3 is-wight-600 is-text-color'>
						{people?.name}
					</h3>
					<h4 className='font-12 my-3 is-text-gray'>{people?.position}</h4>
					<p className='font-12 my-3 is-text-gray'>{people?.description}</p>
				</div>
			</div>
		</div>
	)
}

export default PeopleCardHor
