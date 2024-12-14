// Function to set item in localstorage

export const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("Error setting item in Local Storage", error);
    }
};

// Function to get item in localstorage

export const getLocalStorageItem = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.log("Error in get item from localstorage", error);
        return null;
    }
};

// Function to remove item in localstorage

export const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Error");
    }
};

// Function to clear item in localstorage

// export const clearLocalStorage = () => {
//     try {
//         localStorage.clear();
//     } catch (error) {
//         console.log("Error");
//     }
// };


export const initializeTemporaryData = () => {
    if (!localStorage.getItem('user')) {
        const temporaryData = [
            { username: 'admin', role: 'Admin', password: '8642' },
            { username: 'employee', role: 'Employee', password: '8454' }
        ];
        localStorage.setItem('user', JSON.stringify(temporaryData));
    }

    if (!localStorage.getItem('employee')) {
        const temporaryData = [

            {
                "id": 1,
                "name": "John Doe",
                "profession": "Software Engineer",
                "role": "Employee"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "profession": "Project Manager",
                "role": "Employee"
            },
            {
                "id": 3,
                "name": "Emily Johnson",
                "profession": "HR Specialist",
                "role": "Employee"
            },
            {
                "id": 4,
                "name": "Michael Brown",
                "profession": "Data Analyst",
                "role": "Employee"
            },
            {
                "id": 5,
                "name": "Sarah Davis",
                "profession": "UX Designer",
                "role": "Employee"
            }


        ];
        localStorage.setItem('user', JSON.stringify(temporaryData));
    }
};




