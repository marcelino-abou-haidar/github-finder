import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFound = () => {
	return (
		<div className='her'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-8xl font-bold mb-8'>
						Oops!
						<p className='text-5xl mb-8'>404 - Page not found</p>
						<Link className='btn btn-primary btn-lg' to='/'>
							<FaHome className='mr-2' />
							Back to Home
						</Link>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default NotFound
