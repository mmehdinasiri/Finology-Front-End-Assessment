import { FC } from 'react'
import { ReactComponent as HappyFace } from '../../icons/happy-face.svg'
import { ReactComponent as Garbage } from '../../icons/garbage.svg'
const PeopleList: FC = () => {
	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-6'>
					<div className='d-flex align-items-center mb-5'>
						<div className='p-2 is-bg-pink is-white rounded-circle mr-3 is-pink-shadow'>
							<HappyFace />
						</div>
						<h3 className='is-wight-800 is-primary m-0'>
							Our important people is listed here
						</h3>
					</div>
				</div>
				<div className='col-6 '>
					<button
						className='btn btn-add float-right px-3 font-18'
						type='button'
					>
						add
					</button>
					<button
						className='btn btn-edit float-right px-3 font-18'
						type='button'
					>
						edit
					</button>
					<div className='float-right'>
						<button className='btn  px-1 font-18' type='button'>
							cancel
						</button>
						<button
							className='btn btn-delete  p-2 font-18 rounded-circle'
							type='button'
						>
							<div style={{ width: '24px', height: '24px' }}>
								<Garbage />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PeopleList
