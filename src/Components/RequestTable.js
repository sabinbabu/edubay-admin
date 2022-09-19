import React from 'react';

const RequestTable = () => {
    var data = [
        {
            id: 1,
            person_name: "Ronim Karki",
            institution_name: "Australian Institute",
            address: "123 Kent Street, NSW"
        },
        {
            id: 2,
            person_name: "John Karki",
            institution_name: "Sydney Institute",
            address: "12 King Street, NSW"
        }
    ]

    return (
        <div>
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>Person Name</th>
                    <th>Institution Name</th>
                    <th>Address</th>
                    <th>Options</th>
                </tr>
                {data.map(record => (
                    <tr>
                        <td>{record.id}</td>
                        <td>{record.person_name}</td>
                        <td>{record.institution_name}</td>
                        <td>{record.address}</td>
                        <td>
                            <button className='btn_accept'>Accept</button>
                            <button className='btn_reject'>Reject</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default RequestTable;
