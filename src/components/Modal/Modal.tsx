import React from 'react'
import ReactDom from 'react-dom'

interface IModal {
	open: boolean
	children: React.ReactElement | React.ReactElement[]
	onClose: () => void
}
const modalRoot = document.getElementById('modal-root') as HTMLElement

const Modal = ({ open, children, onClose }: IModal): JSX.Element | null => {
	if (!open) return null

	return ReactDom.createPortal(
		<>
			<div className='modal-overlay' onClick={onClose} />
			<div className='modal-wrapper'>
				<button className='modal-close-btn' onClick={onClose}>
					<svg
						width='1em'
						height='1em'
						viewBox='0 0 16 16'
						className='bi bi-x'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
						/>
					</svg>
				</button>
				{children}
			</div>
		</>,
		modalRoot
	)
}
export default Modal
