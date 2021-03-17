import ReactDom from 'react-dom'
import { ReactComponent as Cancel } from '../../icons/cancel.svg'

interface IModal {
	open: boolean
	children: React.ReactElement | React.ReactElement[]
	onClose: () => void
	classList?: string
}
const modalRoot = document.getElementById('modal-root') as HTMLElement

const Modal = ({
	open,
	children,
	onClose,
	classList
}: IModal): JSX.Element | null => {
	if (!open) return null

	return ReactDom.createPortal(
		<>
			<div className='modal-overlay' onClick={onClose} />
			<div className={`modal-wrapper ${classList}`}>
				<button className='modal-close-btn is-primary' onClick={onClose}>
					<Cancel />
				</button>
				{children}
			</div>
		</>,
		modalRoot
	)
}
export default Modal
