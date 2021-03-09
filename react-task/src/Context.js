import React, { useEffect, useState } from 'react'
import { Navig } from './hoomepage/navig'
import { Container } from 'react-bootstrap'
import Axios from 'axios'

export const Tasksfun = () => {
  const [state, setstate] = useState([])

  Axios.get('http://jsonplaceholder.typicode.com/todos').then((data) => {
    setstate(data.data)
  })

  const [size, setsize] = useState(3)
  var items = state.slice(0, size)

  useEffect(() => {
    state.slice(0, size)
  }, [size, state])

  return (
    <>
      <Navig />
      <Container>
        <table class='table mt-5' id='myTable'>
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
                      document.getElementById('myTable').deleteRow(deleteItem)
                    }}
                  >
                    Delete
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
