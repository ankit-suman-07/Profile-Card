import { useState, useEffect } from 'react';

export const useGetData = (page) => {
    // We moved the fetching logic into a custom hook
    // This line defines a custom hook named useGetData. 
    // The hook is exported so it can be imported and used in 
    // other components.Custom hooks allow you to extract component 
    // logic into reusable functions.
    
    const [detail, setData] = useState([]); // Change the initial state to null
    // const page = 1;
    const [delCards, setDelCards] = useState([]); // [1, 2, 1]
    const [unchecked, setUnchecked] = useState(); // [1]

    const deleteCards = (delCards) => {
        const newArr = []
        for (let i = 0; i < detail.length; i++) {
            if (!detail[i] in delCards) {
                // newArr
            }
            setData(detail.filter(delCards[i]));
        }
        console.log("Del Cards: ", detail)
    }
    console.log("Page :", page)


    // This line declares an asynchronous function named fetchData. 
    // Asynchronous functions allow you to work with promises more 
    // comfortably, enabling the use of await to pause the function 
    // execution until a promise is resolved.
    const fetchData = async () => {
        console.log("2nd Page :", page)
        const RESULT = 2;
        try {
            // Within a try block (which is used to handle exceptions), the function 
            // makes a network request to the provided URL using the fetch API.
            // await is used to wait for the promise returned by fetch to resolve.
            // The response variable will contain the response from the API.
            const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${RESULT}&seed=abc`);
            
            // This line waits for the response.json() promise to resolve, 
            // which converts the JSON content of the response body into a 
            // JavaScript object.The data variable stores this object.
            const data = await response.json(); // Parse the response JSON
            setData([...detail, ...data.results]); // Set the parsed data into state
            console.log("api Data: ", data.results)
            console.log("New Data: ", detail)
        } catch (err) {
            console.log(err.message);
            // The catch block captures any errors that occur during the fetch 
            // operation or data parsing.If an error occurs, it logs the error 
            // message to the console.
        }
    };

    // useEffect is used here to perform the side effect of fetching data. 
    // The empty dependency array[] means this effect runs only once after 
    // the initial rendering, similar to componentDidMount in class components.
    useEffect(() => {
        fetchData(page);
    }, [page, delCards]);

    // Return only the final Data result
    return { detail, setDelCards, deleteCards };
};
