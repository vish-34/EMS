import React from 'react'

const EmployeeCard = () => {
    return (
        <div>
            <div className='bg-red-800 w-[15em] h-[9em] p-5 rounded-2xl'>
                <p><strong>Name:</strong> <span id="employee-name">John Doe</span></p>
                <p><strong>ID:</strong> <span id="employee-id">12345</span></p>
                <p><strong>Profession:</strong> <span id="employee-profession">Developer</span></p>
                <p><strong>Score:</strong> <span id="employee-score">85</span></p>
            </div>

        </div>
    )
}

export default EmployeeCard