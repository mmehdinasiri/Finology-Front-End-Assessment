import { FC } from 'react'

const Customers: FC = () => {
	return (
		<div className='container py-4'>
			<h3 className='is-wight-800 is-primary m-0 text-center'>
				We've workd with
			</h3>
			<ul className='d-flex justify-content-between p-0 flex-wrap'>
				<li>
					<img src='assets/partners/airbnb.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/apple.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/facebook.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/google.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/microsoft.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/nvidia.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/samsung.png' alt='customers-log' />
				</li>
				<li>
					<img src='assets/partners/tesla.png' alt='customers-log' />
				</li>
			</ul>
		</div>
	)
}

export default Customers
