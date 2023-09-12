import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectTo }) => {
    const { currentUser } = useSelector(state => state.user)

    if (currentUser === null) {
        return <Navigate to={redirectTo} state={{ redirectedFromVerify: true }} />

    } if (currentUser.verified === false) {
        return (
            alert("su usuario debe ser registrado y verificado con el código enviado a su email para realizar la compra"),
            <Navigate to={redirectTo} state={{ redirectedFromVerify: false }} />
        )
    } if (currentUser.verified === true) {

        return children
    }
}

