import Header from './Header'
interface ILayoutProps {
	children: React.ReactElement | React.ReactNode
	className?: string
}

const Layout = ({ children, className }: ILayoutProps): JSX.Element => {
	return (
		<div className={className}>
			<Header />
			<div className='container py-3 landing'>{children}</div>
		</div>
	)
}
export default Layout
