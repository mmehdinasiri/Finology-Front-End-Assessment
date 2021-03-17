import { Dispatch, FC, SetStateAction } from 'react'
import { ReactComponent as Edit } from '../../icons/pencil.svg'
import { ReactComponent as Checked } from '../../icons/checked.svg'
import { ImageRatio } from '..'

interface IPeopleProps {
	people: IPeople
	selectMode: boolean
	deleteList: IPeople[]
	handelDeleteList: (people: IPeople) => void
	handelModal: Dispatch<SetStateAction<boolean>>
	handelPreviewModal: Dispatch<SetStateAction<boolean>>
	handelEditPerson: Dispatch<SetStateAction<IPeople | null>>
	handelPreviewPerson: Dispatch<SetStateAction<IPeople | null>>
}

const PeopleCard: FC<IPeopleProps> = ({
	people,
	selectMode,
	deleteList,
	handelDeleteList,
	handelModal,
	handelPreviewModal,
	handelEditPerson,
	handelPreviewPerson
}) => {
	const editMode = (e: MouseEvent) => {
		e.stopPropagation()
		handelEditPerson(people)
		handelModal(true)
	}
	const isSelected = () => {
		if (deleteList.find((item) => item.id === people.id)) {
			return 'is-selected'
		}
		return ''
	}
	const handelCardClick = () => {
		if (selectMode) {
			handelDeleteList(people)
		} else {
			handelPreviewPerson(people)
			handelPreviewModal(true)
		}
	}
	return (
		<div
			className={`people-card mb-4 text-center ${
				selectMode ? 'select-mode' : ''
			}`}
			onClick={handelCardClick}
		>
			<ImageRatio classList='is-top-border' ratio='people'>
				<img src={people.img} alt='people' className='is-top-border' />
			</ImageRatio>
			<h3 className='font-14 my-3 is-wight-600 is-text-gray'>{people.name}</h3>
			<h4 className='font-12 my-3'>{people.position}</h4>
			<button
				className={`btn edit-icon ${
					selectMode ? 'is-pointer-events-none' : ''
				}`}
				onClick={(e: any) => editMode(e)}
			>
				<Edit />
			</button>
			<button className={`btn checked-icon is-white ${isSelected()}`}>
				<Checked />
			</button>
		</div>
	)
}

export default PeopleCard
