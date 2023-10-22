import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '056d2389bb0c4bd88c14ef4d96cb1c1b'
    }
})