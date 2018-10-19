import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Selecione a opção
                </a>                
                <Link to="/admin/portifolio" className="list-group-item list-group-item-action">Portifólio</Link>
             
            </div>
        </div>
    )
}

export default AdminMenu