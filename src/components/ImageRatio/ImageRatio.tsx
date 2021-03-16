import { FC } from 'react'

interface IImageRatioProps {
	children: React.ReactElement
	ratio: string
	classList?: string
}
const ImageRatio: FC<IImageRatioProps> = ({ ratio, classList, children }) => {
	return (
		<div className={`ratio-box ratio-box-${ratio} ${classList}`}>
			<div className='ratio-box-content'>{children}</div>
		</div>
	)
}

export default ImageRatio
