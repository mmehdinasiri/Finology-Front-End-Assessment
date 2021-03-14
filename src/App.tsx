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

const App = (): JSX.Element => {
	return (
		<Layout>
			<Intro />
			<BestExperiences />
			<EasyAccess />
			<CommentSection />
			<PeopleList />
			<Customers />
			<ContactUs />
		</Layout>
	)
}

export default App
