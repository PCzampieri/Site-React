import React from 'react'
import { Link } from 'react-router-dom'

const  Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center'>
                <h1>Primeiro Site React</h1>
                <p>CZ</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>Logo</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INÍCIO</Link></li>
                            <li><Link to='/servicos'>SERVIÇOS</Link></li>
                            <li><Link to='/portifolio'>PORTFOLIO</Link></li>
                            <li><Link to='/precos'>PREÇOS</Link></li>
                            <li><Link to='/contato'>FALE CONOSCO</Link></li>
                            <li><Link to='/admin'>Intranet</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho