const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;
const url = process.env.REACT_APP_API_URL;

const authHeader = 'Basic ' + btoa(`${username}:${password}`);

export const fetchData = async () => {
    try {
        const response = await fetch(`${url}`, {
            headers: {
                'Authorization': authHeader,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(username, password, url)
        return data;
    } catch (error) {
        console.error('Fetch data failed:', error);
        throw error;
    }
};
