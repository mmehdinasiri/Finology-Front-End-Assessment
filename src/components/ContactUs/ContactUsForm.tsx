import { Input, Textarea, DropDown } from '../'
import { useForm } from 'react-hook-form'
import { FC } from 'react'
type IContactForm = {
	firstName: string
	lastName: string
	email: string
	message: string
}
const subjectOption = [
	{ name: 'option1', value: 'option1' },
	{ name: 'option2', value: 'option2' }
]
const subjectOption1 = ['option1', 'option2']
const ContactUsForm: FC = () => {
	const {
		register: registerUser,
		handleSubmit: handleSubmitUser,
		errors: errorsUser
	} = useForm<IContactForm>()

	const submitForm = ({
		firstName,
		lastName,
		email,
		message
	}: IContactForm) => {
		console.log(firstName, lastName, email, message)
	}
	return (
		<form
			noValidate
			onSubmit={handleSubmitUser(submitForm)}
			className='login-page--form px-2'
		>
			<div className='form-group mobile-input mt-3'>
				<Input
					register={registerUser({ required: true })}
					errors={errorsUser}
					labelClass='is-primary font-18 is-wight-600'
					fieldName='name'
					type='text'
					label='Name'
					placeholder='Enter your name'
				/>
				<Input
					register={registerUser({
						required: true,
						pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
					})}
					errors={errorsUser}
					labelClass='is-primary font-18 is-wight-600'
					fieldName='email'
					type='text'
					label='Email'
					placeholder='Enter your email'
				/>
				<DropDown
					register={registerUser({ required: true })}
					errors={errorsUser}
					labelClass='is-primary font-18 is-wight-600'
					fieldName='Subject'
					label='Subject'
					option={subjectOption}
					placeholder='Please select your subject'
				/>
				<Textarea
					register={registerUser({ required: true })}
					labelClass='is-primary font-18 is-wight-600'
					errors={errorsUser}
					fieldName='message'
					label='Message'
					rows={6}
					placeholder='Write your message here'
				/>
			</div>
			<button
				className='btn btn-primary float-right px-5 font-18'
				type='submit'
			>
				sent
			</button>
		</form>
	)
}

export default ContactUsForm
