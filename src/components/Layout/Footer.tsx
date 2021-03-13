import React, { FC } from 'react'

const Footer: FC = () => {
	return (
		<div className='footer py-4 is-bg-primary'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-4 d-flex align-items-center'>
						<a className='navbar-brand' href='/'>
							<img src='images/header/logo.png' alt='logo' />
						</a>
						<h3 className='is-white'>Easy Work</h3>
					</div>
					<div className='col-12 col-md-4 col-lg-3 '>
						<h5 className='mb-1 font-weight-bold is-white'>Address</h5>
						<p>
							52-1,Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur,
							Wilayah Persekutuan Kuala Lumpur
						</p>
					</div>
					<div className='col-12 col-sm-4 offset-lg-1'>
						<h5 className='mb-1 font-weight-bold is-white'>Contact</h5>
						<p>03-7451 5283</p>
						<h5 className='mb-1 font-weight-bold mb-1'>Fax</h5>
						<p>03-7451 5283</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
