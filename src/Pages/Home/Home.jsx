import React from 'react'
import useTodoStore from '../../Store/Store'
import Todo from '../../Components/Todo/Todo'
const Home = () => {
    const user = useTodoStore((state)=>state.user)
    console.log(user)
  return (
    <div>
      <h2>hopme </h2>
      <Todo/>
    </div>
  )
}

export default Home
