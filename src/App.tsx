import {
	Layout,
	Intro,
	BestExperiences,
	EasyAccess,
	CommentSection,
	Customers
} from './components'

const App = (): JSX.Element => {
	return (
		<Layout>
			<Intro />
			<BestExperiences />
			<EasyAccess />
			<CommentSection />
			<Customers />
		</Layout>
	)
}

export default App
