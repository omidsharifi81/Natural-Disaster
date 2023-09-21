import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Disaster } from '../type/disaster.type'
import { dataDisaster } from '../data'

export const AddDisaster = () => {

  const [disasterList, setDisasterList] = useState(dataDisaster)
  const [disaster, setDisaster] = useState('')

  const form = useForm<Disaster>({
    defaultValues: {
      name: '',
      // lati: '',
      // password: '',
      // confirmPassword: '',
      // dob: undefined,
      // role: 'user',
      // family_code: '',
    },
  })


  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  // const { field } = useController({ name: 'role', control })


  // function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   e.preventDefault()

  //   if(item !== "") {
  //     setDisasterList([...disaster, item])
  //   }

  //   setDisaster('')
  // }


    const onSubmitHandle = (data: Disaster) => {
      const address = data.street1 && '+' && data.street2 

      axios.get(`https://geocode.maps.co/search?q=${address}`)
        .then(response => {
          console.log(response.data)
          console.log(response.data[0].lat, response.data[0].lon)
        })
        .catch(errors => {
          console.log(errors)
        })

      disasterList.push(data)
      console.log(data)
    } 

  return (
    <div className="">
      {/* <h1>Disaster Update</h1> */}
      <div className="">Enter new item</div>
      <form className="" onSubmit={handleSubmit(onSubmitHandle)}>
        <div>
          <label htmlFor="name">Disaster name</label>
          <input
            className="border-gray-500"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>

        <div>
          <label htmlFor="street1">First Street</label>
          <input
            className=""
            type="text"
            id="street1"
            {...register('street1')}
          />s
        </div>
        <div>
          <label htmlFor="street2">Second Street</label>
          <input
            className=""
            type="text"
            id="street2"
            {...register('street2')}
          />
        </div>

        <div className="input-group-append">
          <button className="btn btn-outline-primary"
            id="click-button"
            type="submit"
          // onClick={(e) => handleClick(e)} 
          >Add Disaster
          </button>
        </div>
      </form>

      <div className="">Desasters</div>
      <ul className="">
        {disasterList.map((disaster, index) => {
          return (
            <div key={index}>
              <li className="" >
                {disaster.name}
              </li>
              <li>
                {/* {disaster.category} */}
              </li>
              <li>
                {disaster.street1}
              </li>
              <li>
                {disaster.street2}

              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}



