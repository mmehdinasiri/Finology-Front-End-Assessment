interface ITextarea {
	placeholder?: string
	inputClass?: string
	classList?: string
	fieldName: string
	errors?: any
	register: any
	iconClass?: string
	label?: string
	labelClass?: string
	rows?: number
}
const Textarea = ({
	placeholder,
	inputClass,
	classList,
	fieldName,
	errors,
	register,
	iconClass,
	label,
	labelClass,
	rows
}: ITextarea): JSX.Element => {
	return (
		<div className={`form-group ${classList}`}>
			{label && (
				<label
					htmlFor={fieldName}
					className={`d-block font-12  ${labelClass || ''}`}
				>
					{label}
				</label>
			)}
			<textarea
				ref={register}
				id={fieldName}
				name={fieldName}
				className={`form-control ${inputClass || ''}`}
				placeholder={placeholder}
				rows={rows}
			></textarea>
			{iconClass && <i className={iconClass} />}
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

export default Textarea
