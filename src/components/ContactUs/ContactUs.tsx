import { FC } from 'react'
import { ContactUsForm, Maps } from '../'

const ContactUs: FC = () => {
	return (
		<div className='container py-5'>
			<h3 className='is-wight-800 is-primary m-0 text-center mb-5'>
				Contact Us
			</h3>
			<div className='row no-gutters '>
				<div className='col-12 col-lg-6'>
					<div className='is-global-shadow rounded p-5'>
						<ContactUsForm />
					</div>
				</div>
				<div className='col-12 col-lg-6 py-5 fix-wrapper'>
					<Maps />
				</div>
			</div>
		</div>
	)
}

export default ContactUs
