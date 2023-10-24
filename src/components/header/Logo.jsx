import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillDiscFill} from "react-icons/bs";

const Logo = () => {
    return (
        <h1 className="header__logo">
            <Link to="/">

                <em><BsFillDiscFill /></em>
                <span>Music<br /> youtube</span>
            </Link>
        </h1>
    )
}

export default Logo