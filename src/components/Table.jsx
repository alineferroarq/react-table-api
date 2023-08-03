import React from 'react'
import App from '../App'

export default function Table(props) {
    // ☻◘      console.log('colunas-table', props.colunas)

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {props.colunas.map((coluna, index) => <th key={index} className="col">{coluna}</th>)}

                    </tr>
                </thead>

                <tbody>
                    {props.data.map(user =>
                    <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.website}</td>
                        <td>{`${user.address.street}, ${user.address.suite}, {user.address.zipcode}`}</td>
                   </tr>
                   )}
                </tbody>
            </table>
        </div>
    )

}

