import { Layout, Intro, BestExperiences, EasyAccess } from './components'

const App = (): JSX.Element => {
	return (
		<Layout>
			<Intro />
			<BestExperiences />
			<EasyAccess />
		</Layout>
	)
}

export default App
