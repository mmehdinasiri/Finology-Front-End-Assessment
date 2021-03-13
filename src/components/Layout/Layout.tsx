import Header from './Header'
import Footer from './Footer'
interface ILayoutProps {
	children: React.ReactElement | React.ReactNode
	className?: string
}

const Layout = ({ children, className }: ILayoutProps): JSX.Element => {
	return (
		<div className={className}>
			<Header />
			<div className='main-content'>{children}</div>
			<Footer />
		</div>
	)
}
export default Layout
