import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b824ac850emsha92a1c3170a8d67p198031jsn2cde3a27e655'
        }
    })

    return data;
}