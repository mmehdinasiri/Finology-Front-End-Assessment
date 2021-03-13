import { FC } from 'react'
import ContactUsForm from './ContactUsForm'

const ContactUs: FC = () => {
	return (
		<div className='container py-4'>
			<h3 className='is-wight-800 is-primary m-0 text-center'>Contact Us</h3>
			<div className='row no-gutters '>
				<div className='col-12 col-md-6'>
					<ContactUsForm />
				</div>
				<div className='col-12 col-md-6'>map</div>
			</div>
		</div>
	)
}

export default ContactUs
