import { FC, useState } from 'react'
import PeopleCard from './PeopleCard'
import { ReactComponent as HappyFace } from '../../icons/happy-face.svg'
import { ReactComponent as Garbage } from '../../icons/garbage.svg'
import { v4 as uuidv4 } from 'uuid'

export interface IPeople {
	name: string
	position: string
	img: string
	id: string
}
const UserList = [
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/darlene-chabrat.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/david-campion.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/gaetan-houssin.jpg',
		id: uuidv4()
	},
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/jerome-boudot.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/jerome-mahuet.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/manuela-faveri.jpg',
		id: uuidv4()
	},
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/nicolas-lebarreau.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/romane-regad.jpg',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/gaetan-houssin.jpg',
		id: uuidv4()
	}
]
const PeopleList: FC = () => {
	const [selectMode, setSelectMode] = useState<boolean>(false)
	const [peopleList, setPeopleList] = useState<IPeople[]>(UserList)
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
		const newPeopleList: IPeople[] = peopleList.filter((person: IPeople) => {
			return !selectList.find((removedPerson: IPeople) => {
				return removedPerson.id === person.id
			})
		})
		setPeopleList(newPeopleList)
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
					{!selectMode || !peopleList.length ? (
						<>
							<button
								className='btn btn-add float-right px-3 font-18 '
								type='button'
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
						{peopleList.map((item: IPeople) => (
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
		</div>
	)
}

export default PeopleList