import { Component } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="navbar-container" >
            <p>Atlantis</p>
            <div className='opcoes'>
                <Link to={"/"}>HOME</Link>
                <Link to={"/usuario"}>USUÁRIOS</Link>
            </div>
        </header>
    )
}