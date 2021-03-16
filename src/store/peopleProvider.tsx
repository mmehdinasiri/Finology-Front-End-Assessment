import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react'
import { v4 as uuidv4 } from 'uuid'
const UserList = [
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/darlene-chabrat.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/david-campion.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/gaetan-houssin.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/jerome-boudot.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/jerome-mahuet.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/manuela-faveri.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Frank Ltranam',
		position: 'CEO',
		img: '/assets/people/nicolas-lebarreau.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/romane-regad.jpg',
		description: '',
		id: uuidv4()
	},
	{
		name: 'Bob Shefley',
		position: 'UI/UX Designer',
		img: '/assets/people/gaetan-houssin.jpg',
		description: '',
		id: uuidv4()
	}
]
interface ICalenderProvider {
	type?: string
	children: React.ReactElement | React.ReactElement[]
}
const PeoplesContext = createContext([] as IPeople[])
const PeoplesContextSetState = createContext(
	(Function as unknown) as Dispatch<SetStateAction<IPeople[]>>
)

const PeopleProvider = ({ children }: ICalenderProvider) => {
	const [calender, setCalender] = useState<IPeople[]>(UserList)
	return (
		<PeoplesContext.Provider value={calender}>
			<PeoplesContextSetState.Provider value={setCalender}>
				{children}
			</PeoplesContextSetState.Provider>
		</PeoplesContext.Provider>
	)
}

const usePeoplesState = () => {
	return useContext(PeoplesContext)
}
const useSetPeoplesState = () => {
	return useContext(PeoplesContextSetState)
}

const usePeopleActions = () => {
	const peopleList = usePeoplesState()
	const setPeopleAction = useSetPeoplesState()

	const addPeople = (newPerson: IPeople) => {
		setPeopleAction((oldState: IPeople[]) => [...oldState, newPerson])
	}
	const editPeople = (editPerson: IPeople) => {
		const personIndex = peopleList
			.map(function (e) {
				return e.id
			})
			.indexOf(editPerson.id)
		if (personIndex !== -1) {
			peopleList[personIndex] = editPerson
			setPeopleAction(peopleList)
		}
	}

	const removePeoples = (removedPersons: IPeople[]) => {
		const newPeopleList: IPeople[] = peopleList.filter((person: IPeople) => {
			return !removedPersons.find((removedPersons: IPeople) => {
				return removedPersons.id === person.id
			})
		})
		setPeopleAction(newPeopleList)
	}
	return { addPeople, editPeople, removePeoples }
}

export { usePeopleActions, usePeoplesState, useSetPeoplesState }
export default PeopleProvider
