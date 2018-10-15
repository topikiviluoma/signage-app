import React from 'react'

const Playlist = ({ list, handleDelete }) => {

    return (
        <table>
            <tbody>
                {list === null ?
                    <tr><td>No content</td></tr> :
                    list.map(item =>
                        <tr key={item.url}>
                            <td>{item.url}</td>
                            <td><button onClick={() => handleDelete(item)}>Delete</button></td>
                        </tr>
                    )}
            </tbody>
        </table>
    )
}

export default Playlist