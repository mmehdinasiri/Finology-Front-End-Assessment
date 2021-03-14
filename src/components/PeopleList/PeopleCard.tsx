import { Dispatch, FC, SetStateAction } from 'react'
import { ReactComponent as Edit } from '../../icons/pencil.svg'
import { ReactComponent as Checked } from '../../icons/checked.svg'
import { IPeople } from './PeopleList'

interface IPeopleProps {
	people: IPeople
	selectMode: boolean
	handelSelectMode: Dispatch<SetStateAction<boolean>>
	selectList: IPeople[]
	handelSelectList: (e: MouseEvent, people: IPeople) => void
}

const PeopleCard: FC<IPeopleProps> = ({
	people,
	selectMode,
	handelSelectMode,
	selectList,
	handelSelectList
}) => {
	const editMode = () => {
		console.log(people.id)
	}
	const isSelected = () => {
		if (selectList.find((item) => item.id === people.id)) {
			return 'is-selected'
		}
		return ''
	}
	return (
		<div
			className={`people-card mb-4 text-center ${
				selectMode ? 'select-mode' : ''
			}`}
			onClick={() => handelSelectMode(!selectMode)}
		>
			<img src={people.img} alt='people' />
			<h3 className='font-14 my-3 is-wight-600 is-text-gray'>{people.name}</h3>
			<h4 className='font-12 my-3'>{people.position}</h4>
			<button className='btn edit-icon p-3' onClick={editMode}>
				<Edit />
			</button>
			<button
				className={`btn checked-icon p-3 ${isSelected()}`}
				onClick={(e) => handelSelectList(e, people)}
			>
				<Checked />
			</button>
		</div>
	)
}

export default PeopleCard
