import {
	Layout,
	Intro,
	BestExperiences,
	EasyAccess,
	CommentSection
} from './components'

const App = (): JSX.Element => {
	return (
		<Layout>
			<Intro />
			<BestExperiences />
			<EasyAccess />
			<CommentSection />
		</Layout>
	)
}

export default App
