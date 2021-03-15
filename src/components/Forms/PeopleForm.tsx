import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IPeople } from '../PeopleList/PeopleList'
import { Input } from '../'
import Textarea from '../Inputs/Textarea'

const PeopleForm: FC = () => {
	const {
		register: registerPeople,
		handleSubmit: handleSubmitPeople,
		errors: errorsPeople
	} = useForm<IPeople>()

	const submitForm = ({ name, position, img, description }: IPeople) => {
		alert(JSON.stringify({ name, position, img, description }, null, 4))
	}
	return (
		<div>
			<p
				className='is-primary'
				style={{ position: 'absolute', top: '8xp', left: '16px' }}
			>
				Add people
			</p>
			<form
				noValidate
				onSubmit={handleSubmitPeople(submitForm)}
				className='pt-5'
			>
				<Input
					register={registerPeople({ required: true })}
					errors={errorsPeople}
					labelClass='is-primary is-wight-600'
					fieldName='name'
					type='text'
					label='Name'
					placeholder='Enter your name'
					inputClass='font-14'
				/>
				<Input
					register={registerPeople({ required: true })}
					errors={errorsPeople}
					labelClass='is-primary is-wight-600'
					fieldName='position'
					type='text'
					label='Position'
					placeholder='Enter your position'
					inputClass='font-14'
				/>
				<Textarea
					register={registerPeople}
					errors={errorsPeople}
					labelClass='is-primary is-wight-600'
					fieldName='description'
					label='Description'
					placeholder='Enter your description'
					inputClass='font-14'
				/>

				<div className='text-right'>
					<button className='btn px-1 mr-2' type='button'>
						cancel
					</button>
					<button className='btn btn-primary px-3' type='submit'>
						send
					</button>
				</div>
			</form>
		</div>
	)
}

export default PeopleForm
