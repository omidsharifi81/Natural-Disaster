import { FooterLogo } from './FooterLogo'

export const Footer = () => {
    return (
        <header className='dark shadow m-10'>
            <div className="container">
                <div className="text-center">
                    <FooterLogo />

                </div>
                <div className="container">
                    <div className='block text-center'>
                        <p>
                            copyright @Cantec-Disaster. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
