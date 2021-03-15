import { v4 as uuidv4 } from 'uuid'
interface IInput {
	placeholder?: string
	inputClass?: string
	classList?: string
	fieldName: string
	type?: string
	pattern?: string
	errors?: any
	register: any
	label?: string
	labelClass?: string
}
const Input = ({
	placeholder,
	inputClass,
	classList,
	fieldName,
	type = 'text',
	pattern,
	errors,
	register,
	label,
	labelClass
}: IInput): JSX.Element => {
	const inpurId = uuidv4()
	return (
		<div className={`form-group ${classList}`}>
			{label && (
				<label
					htmlFor={inpurId}
					className={`d-block font-12  ${labelClass || ''}`}
				>
					{label}
				</label>
			)}
			<input
				ref={register}
				type={type}
				id={inpurId}
				name={fieldName}
				className={`form-control ${inputClass || ''}`}
				placeholder={placeholder}
				pattern={pattern}
			/>
			{errors && (
				<>
					{errors[fieldName] && errors[fieldName]?.type === 'required' && (
						<p className='is-red position-absolute font-12'>
							Field is required
						</p>
					)}
					{errors[fieldName] && errors[fieldName]?.type === 'pattern' && (
						<p className='is-red position-absolute font-12'>
							Fill input correctly
						</p>
					)}
				</>
			)}
		</div>
	)
}

export default Input
