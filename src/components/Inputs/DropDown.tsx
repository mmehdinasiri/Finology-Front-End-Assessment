interface IDropDownProps {
	option: Record<string, string>[]
	fieldName: string
	value?: string
	selectClass?: string
	classList?: string
	errors?: any
	register: any
	label?: string
	labelClass?: string
	placeholder?: string
}
const DropDown = ({
	value,
	fieldName,
	classList,
	selectClass,
	option,
	errors,
	register,
	label,
	labelClass,
	placeholder
}: IDropDownProps): JSX.Element => {
	return (
		<div className={`dropDown form-group ${classList}`}>
			{label && (
				<label
					htmlFor={fieldName}
					className={`d-block font-12  ${labelClass || ''}`}
				>
					{label}
				</label>
			)}
			<select
				ref={register}
				className={` form-control ${selectClass || ''}`}
				name={fieldName}
			>
				<option value=''>{placeholder}</option>

				{option.map((item, index) => {
					return (
						<option value={item.value} key={index}>
							{item.name}
						</option>
					)
				})}
			</select>
			{errors && (
				<>
					{errors[fieldName] && errors[fieldName]?.type === 'required' && (
						<p className='is-red position-absolute font-12'>
							Field is required
						</p>
					)}
				</>
			)}
		</div>
	)
}

export default DropDown
