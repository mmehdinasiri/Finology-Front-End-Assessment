import {
	Layout,
	Intro,
	BestExperiences,
	EasyAccess,
	CommentSection,
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
			<Customers />
			<ContactUs />
		</Layout>
	)
}

export default App
