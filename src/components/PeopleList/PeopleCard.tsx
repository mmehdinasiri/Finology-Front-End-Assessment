import { Dispatch, FC, SetStateAction } from 'react'
import { ReactComponent as Edit } from '../../icons/pencil.svg'
import { ReactComponent as Checked } from '../../icons/checked.svg'
import { ImageRatio } from '../'

interface IPeopleProps {
	people: IPeople
	selectMode: boolean
	handelSelectMode: Dispatch<SetStateAction<boolean>>
	selectList: IPeople[]
	handelSelectList: (people: IPeople) => void
	handelEditPerson: Dispatch<SetStateAction<IPeople | null>>
	handelModal: Dispatch<SetStateAction<boolean>>
}

const PeopleCard: FC<IPeopleProps> = ({
	people,
	selectMode,
	handelSelectMode,
	selectList,
	handelSelectList,
	handelEditPerson,
	handelModal
}) => {
	const editMode = (e: MouseEvent) => {
		e.stopPropagation()
		handelEditPerson(people)
		handelModal(true)
	}
	const isSelected = () => {
		if (selectList.find((item) => item.id === people.id)) {
			return 'is-selected'
		}
		return ''
	}
	const handelCardClick = () => {
		if (!selectMode) {
			handelSelectMode(true)
			handelSelectList(people)
		} else {
			handelSelectList(people)
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
				<img src={people.img} alt='people' classList='is-top-border' />
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
