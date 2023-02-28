import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ParamHook() {
  return (
    <div>
      <h2>this is users page</h2>
      <h2>
        <Link to="/paramhook/1"> user 1</Link>
      </h2>
      <h2>
        <Link to="/paramhook/2"> user 2</Link>
      </h2>
      <h2>
        <Link to="/paramhook/3"> user 3</Link>
      </h2>
      <Outlet />
      {/* <Outlet /> is used to print that component on same page*/}
    </div>
  )
}

export default ParamHook;
