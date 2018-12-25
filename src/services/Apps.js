import axios from 'axios';
import TokenHelper from '../helpers/TokenHelper';

export default class Apps 
{

    static async create(data) 
    {
        var resp = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/gratis/apps`, 
            data, 
            {
                headers: {
                    authorization : TokenHelper.getToken()
                }
            }
        );
        return resp;
    }

    static async fetch()
    {
        var resp = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/gratis/apps?sort=-created_at`, 
            {
                headers: {
                    authorization : TokenHelper.getToken()
                }
            }
        );
        return resp.data.data;
    }

}