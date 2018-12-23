import axios from 'axios';
import TokenHelper from '../helpers/TokenHelper';

export default class Apps 
{

    static async create(data) 
    {
        var data = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/gratis/apps`, 
            data, 
            {
                headers: {
                    authorization : TokenHelper.getToken()
                }
            }
        );
        return data;
    }

    static async fetch()
    {
        var data = await axios.
        get(
            `${process.env.REACT_APP_BACKEND_URL}/gratis/apps`
        );
        return data;
    }

}