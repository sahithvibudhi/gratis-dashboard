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

    static async delete(_id)
    {
        await RequestHelper.delete(`/gratis/apps?_id=${_id}`);
    }

    static async update(_id, data)
    {
        await RequestHelper.update(`/gratis/apps?_id=${_id}`, data);
    }

}