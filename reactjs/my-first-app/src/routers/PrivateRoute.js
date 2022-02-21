import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ element, ...rest }) {

  let isLoggedIn = useSelector((state) => {
    return state.authData.auth && state.authData.auth.token !== ""
  })

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}
