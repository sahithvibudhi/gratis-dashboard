import RequestHelper from "../helpers/RequestHelper";

export default class Apps 
{

    static async create(data)
    {
        return await RequestHelper.post('/gratis/apps', data);
    }

    static async fetch()
    {
        let resp = await RequestHelper.get('/gratis/apps?sort=-created_at');
        return resp.data.data;
    }

}