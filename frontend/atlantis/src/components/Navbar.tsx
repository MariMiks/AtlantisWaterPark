import { Component } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="navbar-container" >
            <p>ATLANTIS</p>
            <div className='opcoes'>
                <Link to={"/"}>Home</Link>
                <Link to={"/usuario"}>Usuários</Link>
            </div>
        </header>
    )
}