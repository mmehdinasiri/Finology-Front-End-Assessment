import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { ReactComponent as User } from '../../icons/user.svg'
import { useForm } from 'react-hook-form'
import { Input } from '../'
import Textarea from '../Inputs/Textarea'

interface PeopleFormProps {
	handleCloseModal: Dispatch<SetStateAction<boolean>>
}
const PeopleForm: FC<PeopleFormProps> = ({ handleCloseModal }) => {
	const [img, setImage] = useState<any>('')
	const {
		watch: watchPeople,
		register: registerPeople,
		handleSubmit: handleSubmitPeople,
		errors: errorsPeople
	} = useForm<IPeople>()

	const submitForm = ({ name, position, img, description }: IPeople) => {
		alert(JSON.stringify({ name, position, img, description }, null, 4))
	}
	useEffect(() => {
		if (watchPeople().img.length) {
			const reader = new FileReader()
			const file: any = watchPeople().img[0]
			reader.onloadend = () => {
				setImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}, [watchPeople().img])
	return (
		<div className='people-form'>
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
				<label
					htmlFor='photo-upload'
					className='custom-file-upload  d-block my-3'
				>
					<div className='people-form--img-wrap'>
						{img ? (
							<img src={img} className='people-form--img-wrap--img' />
						) : (
							<div className='people-form--img-wrap--svg'>
								<User />
							</div>
						)}
						<input
							id='photo-upload'
							type='file'
							name='img'
							className='d-none'
							ref={registerPeople({ required: true })}
						/>
					</div>
				</label>
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
					<button
						className='btn px-1 mr-2'
						type='button'
						onClick={() => handleCloseModal(false)}
					>
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
