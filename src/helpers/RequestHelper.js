import axios from 'axios';
import TokenHelper from '../helpers/TokenHelper';

export default class RequestHelper
{

    static headers =
    {
        headers: {
            authorization : TokenHelper.getToken()
        }
    }

    static getUrl(url)
    {
        return `${process.env.REACT_APP_BACKEND_URL}${url}`;
    }

    static async post(url, data)
    {
        return await axios.post(
            this.getUrl(url), 
            data,
            this.headers
        );
    }

    static async get(url, data) 
    {
        return await axios.get(
            this.getUrl(url),
            this.headers
        );
    }

    static async delete(url)
    {
        return await axios.delete(
            this.getUrl(url),
            this.headers
        );
    }

}