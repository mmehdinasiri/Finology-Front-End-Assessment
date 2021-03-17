import { FC, useState } from 'react'
import { PeopleCard, PeopleCardHor, Modal } from '../'
import { ReactComponent as HappyFace } from '../../icons/happy-face.svg'
import { ReactComponent as Garbage } from '../../icons/garbage.svg'
import PeopleForm from '../Forms/PeopleForm'
import { usePeoplesState, usePeopleActions } from '../../store/peopleProvider'

const PeopleList: FC = () => {
	const peoples = usePeoplesState()
	const { removePeoples } = usePeopleActions()
	const [selectMode, setSelectMode] = useState<boolean>(false)

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false)

	const [selectForEdit, setSelectForEdit] = useState<IPeople | null>(null)
	const [selectForPreview, setSelectForPreview] = useState<IPeople | null>(null)

	const [deleteList, setDeleteList] = useState<IPeople[]>([])
	const handelDeleteList = (people: IPeople) => {
		if (deleteList.find((item) => item.id === people.id)) {
			setDeleteList([...deleteList.filter((item) => item.id !== people.id)])
		} else {
			setDeleteList([
				...deleteList,
				{
					...people
				}
			])
		}
	}
	const removePeople = () => {
		removePeoples(deleteList)
		setSelectMode(false)
	}
	const cancelSelectMode = () => {
		setDeleteList([])
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
								onClick={() => {
									setSelectForEdit(null)
									setIsModalOpen(true)
								}}
							>
								add
							</button>
							<button
								className='btn btn-edit float-right px-3 font-18 mr-2'
								type='button'
								onClick={() => {
									setSelectMode(true)
								}}
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
								deleteList={deleteList}
								handelDeleteList={handelDeleteList}
								handelModal={setIsModalOpen}
								handelPreviewModal={setIsPreviewModalOpen}
								handelEditPerson={setSelectForEdit}
								handelPreviewPerson={setSelectForPreview}
							/>
						))}
					</div>
				</div>
			</div>
			<Modal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				classList='p-3'
			>
				<PeopleForm
					handleCloseModal={setIsModalOpen}
					editedPerson={selectForEdit}
				/>
			</Modal>
			<Modal
				open={isPreviewModalOpen}
				onClose={() => setIsPreviewModalOpen(false)}
				classList='is-preview-modal '
			>
				<PeopleCardHor people={selectForPreview} />
			</Modal>
		</div>
	)
}

export default PeopleList
