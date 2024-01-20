/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form.js'
import Card from './components/Card.js'

function App() {
  const [data, setData] = useState([])
  const [isCreate, setisCreate] = useState(false)
  const [isUpdate, setisUpdate] = useState(false)
  const [isDelete, setisDelete] = useState(false)

  const converImageToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  useEffect(() => {
    // get api
    const url = `http://localhost:2401/api/v1/comics`

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const create = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const author = e.target.author.value
    const type = e.target.type.value
    const language = e.target.language.value
    const country = e.target.country.value
    const price = e.target.price.value

    const file = e.target.photo.files[0]
    const photo = file ? await converImageToBase64(file) : null

    const bodyData = {}
    if (name) bodyData.name = name
    if (author) bodyData.author = author
    if (type) bodyData.type = type
    if (language) bodyData.language = language
    if (country) bodyData.country = country
    if (price) bodyData.price = price
    if (photo) bodyData.photo = photo
    const url = `http://localhost:2401/api/v1/comics`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: '*',
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
      .then(() => confirm('Created successfully'))
      .catch((err) => console.log(err))
  }

  const update = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const author = e.target.author.value
    const type = e.target.type.value
    const language = e.target.language.value
    const country = e.target.country.value
    const price = e.target.price.value

    const file = e.target.photo.files[0]
    const photo = file ? await converImageToBase64(file) : null

    const url = `http://localhost:2401/api/v1/comics/-1/${name}`
    const bodyData = {}
    if (name) bodyData.name = name
    if (author) bodyData.author = author
    if (type) bodyData.type = type
    if (language) bodyData.language = language
    if (country) bodyData.country = country
    if (price) bodyData.price = price
    if (photo) bodyData.photo = photo

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
      .then(() => confirm('Updated successfully'))
      .catch((err) => console.log(err))
    // .finally(() => window.location.reload())
  }
  const deleteComic = () => {
    const name = document.getElementById('name').value

    const url = `http://localhost:2401/api/v1/comics/-1/${name}`
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
      .then(() => confirm('Deleted successfully'))
      .catch((err) => console.log(err))
  }

  const createForm = () => {
    setisCreate((isCreate) => !isCreate)
  }

  const updateForm = () => {
    setisUpdate((isUpdate) => !isUpdate)
  }

  const deleteFrom = () => {
    setisDelete((isDelete) => !isDelete)
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <h1>Poki-mics</h1>
        <div className="form-btns">
          <button onClick={createForm}>Create</button>
          <button onClick={updateForm}>Update</button>
          <button onClick={deleteFrom}>Delete</button>
        </div>
      </header>
      <div className="forms">
        <div className="all-forms">
          <div className="form-div">
            {isCreate ? (
              <React.Fragment>
                <Form caption="Create" handleSubmit={create} />
                {/* <button onClick={create}>Submit</button> */}
              </React.Fragment>
            ) : null}
          </div>
          <div className="form-div">
            {isUpdate ? (
              <React.Fragment>
                <Form caption="Update" handleSubmit={update} />
                {/* <button onClick={update}>Submit</button> */}
              </React.Fragment>
            ) : null}
          </div>
          <div className="form-div">
            {isDelete ? (
              <React.Fragment>
                <table>
                  <caption>Delete</caption>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="name">Name</label>
                      </td>
                      <td>
                        <input type="text" name="name" id="name" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={deleteComic}>Submit</button>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </div>
      <div className="cards">
        {data &&
          data.map((item) => (
            <Card
              key={item.name}
              photo={item.photo ? item.photo : '/img/default.jpeg'}
              name={item.name}
              language={item.language}
              price={item.price}
              type={item.type}
            />
          ))}
      </div>
    </>
  )
}

export default App
