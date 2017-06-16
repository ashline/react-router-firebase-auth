import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({component: Component, authed, ...rest}) => {
  const { from } = rest.location.state || { from: { pathname: '/dashboard' } }

  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={from} />}
    />
  )
}
