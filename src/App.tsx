import {
	Layout,
	Intro,
	BestExperiences,
	EasyAccess,
	CommentSection,
	PeopleList,
	Customers,
	ContactUs
} from './components'
import PeopleProvider from './store/peopleProvider'

const App = (): JSX.Element => {
	return (
		<Layout>
			<Intro />
			<BestExperiences />
			<EasyAccess />
			<CommentSection />
			<PeopleProvider>
				<PeopleList />
			</PeopleProvider>
			<Customers />
			<ContactUs />
		</Layout>
	)
}

export default App
