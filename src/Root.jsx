import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <div>
            <div>
        <Link to="pageA">PageA</Link>
        </div>
        <div>
        <Link to="pageB">PageB</Link>
        </div>
                <Outlet />
            </div>
        </>
    )
}

export default Root