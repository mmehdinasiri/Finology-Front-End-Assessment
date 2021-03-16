import { FC, useEffect, useState } from 'react'
import PeopleCard from './PeopleCard'
import { Modal } from '../'
import { ReactComponent as HappyFace } from '../../icons/happy-face.svg'
import { ReactComponent as Garbage } from '../../icons/garbage.svg'
import PeopleForm from '../Forms/PeopleForm'
import { usePeoplesState, usePeopleActions } from '../../store/peopleProvider'

const PeopleList: FC = () => {
	const peoples = usePeoplesState()
	const { removePeoples } = usePeopleActions()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [selectMode, setSelectMode] = useState<boolean>(false)
	const [selectList, setSelectList] = useState<IPeople[]>([])
	const handelSelectList = (people: IPeople) => {
		if (selectList.find((item) => item.id === people.id)) {
			setSelectList([...selectList.filter((item) => item.id !== people.id)])
		} else {
			setSelectList([
				...selectList,
				{
					...people
				}
			])
		}
	}
	const removePeople = () => {
		removePeoples(selectList)
	}
	const cancelSelectMode = () => {
		setSelectList([])
		setSelectMode(false)
	}

	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-6'>
					<div className='d-flex align-items-center mb-5'>
						<div className='p-2 is-bg-pink is-white rounded-circle mr-3 is-pink-shadow'>
							<HappyFace />
						</div>
						<h3 className='is-wight-800 is-primary m-0'>
							Our important people is listed here
						</h3>
					</div>
				</div>
				<div className='col-6 '>
					{!selectMode || !peoples.length ? (
						<>
							<button
								className='btn btn-add float-right px-3 font-18 '
								type='button'
								onClick={() => setIsModalOpen(true)}
							>
								add
							</button>
							<button
								className='btn btn-edit float-right px-3 font-18 mr-2'
								type='button'
							>
								edit
							</button>
						</>
					) : (
						<div className='float-right'>
							<button
								className='btn  px-1 font-18 mr-2'
								type='button'
								onClick={cancelSelectMode}
							>
								cancel
							</button>
							<button
								className='btn btn-delete  p-2 font-18 rounded-circle'
								type='button'
								onClick={removePeople}
							>
								<Garbage />
							</button>
						</div>
					)}
				</div>
				<div className='col-12'>
					<div className='text-center'>
						{peoples.map((item: IPeople) => (
							<PeopleCard
								people={item}
								key={item.id}
								selectMode={selectMode}
								handelSelectMode={setSelectMode}
								selectList={selectList}
								handelSelectList={handelSelectList}
							/>
						))}
					</div>
				</div>
			</div>
			<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<PeopleForm handleCloseModal={setIsModalOpen} />
			</Modal>
		</div>
	)
}

export default PeopleList
