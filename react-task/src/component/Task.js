import React, { useEffect, useState } from 'react'
import Navig from './homepage/Navig'
import { Container } from 'react-bootstrap'
import Axios from 'axios'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Task = () => {
  const [state, setstate] = useState([])

  Axios.get('http://jsonplaceholder.typicode.com/todos').then((data) => {
    setstate(data.data)
  })

  const [size, setsize] = useState(10)
  let items = state.slice(0, size)

  useEffect(() => {
    state.slice(0, size)
  }, [size, state])

  return (
    <>
      <Navig />
      <Container>
        <table class='table mt-5' id='Table'>
          <tbody>
            {items.map((data) => {
              return (
                <tr id='roww'>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{JSON.stringify(data.completed)}</td>
                  <button
                    className='btn btn-outline-danger btn-sm mt-2'
                    onClick={() => {
                      var deleteItem = items
                        .map((element) => {
                          return element.id
                        })
                        .indexOf(data.id)
                      items.splice(deleteItem, 1)
                      document.getElementById('Table').deleteRow(deleteItem)
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Container>
      <button
        className='btn btn-primary ml-5 mb-3 pl-3 pr-3'
        onClick={() => {
          setsize(size + 1)
        }}
      >
        Add Task
      </button>
    </>
  )
}
export default Task
