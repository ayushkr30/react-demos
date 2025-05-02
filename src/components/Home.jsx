import useFetch from "./useFetch";

import React from 'react'

const Home = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    {data && data.map((item)=> {
      return (
        <ul key={item.id}>
            <li>{item.title}</li>
        </ul>
      )
    })}
    </>
  )
}

export default Home