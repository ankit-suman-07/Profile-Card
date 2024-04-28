import { useState, useEffect } from 'react';

export const useGetData = () => {
    // We moved the fetching logic into a custom hook
    const [details, setData] = useState(null); // Change the initial state to null

    const fetchData = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
            const data = await response.json(); // Parse the response JSON
            setData(data.results[0]); // Set the parsed data into state
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Return only the final Data result
    return { details };
};
