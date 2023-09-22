import { render } from "react-dom";
import Map from "./components/Map";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AddDisaster } from './components/AddDisaster'


const App = () => {
  return (
    <>
      <Header />
      <div className="container">

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-2">
            <AddDisaster />
          </div>

          <div className="col-span-10">
            <Map
              center={{ lat: 43.6532, lng: -79.3832 }}
              zoom={3}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZulZuS9VscELy0D0-5KmxQ8r2UR0-smk"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `420px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>

        </div>
      </div>
      <Footer />


    </>

  );
};

render(<App />, document.getElementById("root"));
