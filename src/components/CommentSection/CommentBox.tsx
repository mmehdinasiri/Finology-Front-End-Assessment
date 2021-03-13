import { FC } from 'react'
import { ICommentBox } from './CommentSection'
interface ICommentBoxProps {
	commentObj: ICommentBox
}

const CommentBox: FC<ICommentBoxProps> = ({ commentObj }) => {
	return (
		<div className='p-3 is-global-shadow rounded'>
			<div className='d-flex align-items-center mb-3 justify-content-space'>
				<img
					className='rounded-circle'
					src={commentObj.img}
					alt='user-img'
					style={{ width: '48px', height: '48px' }}
				/>
				<div className='ml-3'>
					<p className='is-text-color mb-1 font-weight-bold'>
						{commentObj.name}
					</p>
					<p className='is-text-gray font-12 mb-0'>{commentObj.position}</p>
				</div>
			</div>
			<p className='is-text-color' style={{ maxHeight: '48px' }}>
				"{commentObj.comment}"
			</p>
		</div>
	)
}

export default CommentBox
