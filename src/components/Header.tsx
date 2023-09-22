import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className='dark shadow m-10'>
      <div className="container">
        <div className="flex">
          <div className='inline-flex'>
            <Logo />
          </div>
          <div className='inline-flex flex-wrap text-right'>
            <h1 className='main-title text-center'>Natural Disaster</h1>
            <h4 className=''>Report about the disaster to inform other people in adwance</h4>
          </div>
        </div>
      </div>
    </header>
  )
}
