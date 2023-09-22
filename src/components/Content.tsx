import { AddDisaster } from './AddDisaster'
import Map from './Map'
import '../App.css'
import '../index.css'

export const Content = () => {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-1">
                        <AddDisaster />
                    </div>

                    <div className="col-span-1">
                        <Map />
                    </div>

                </div>
            </div>
        </>
    )
}
