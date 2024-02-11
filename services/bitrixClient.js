import axios from 'axios'

const bitrixClient = axios.create({
    baseURL: 'hhttps://ibuild.bitrix24.com.br/rest/1044/j8n8r16b84wm4br1/crm.lead.add.json',
    timeout: 5000,
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export const createLead = (lead) => {
    return bitrixClient({
        url: '',
        method: 'post',
        params: lead,
    })
        .then(res => {
            // console.log('bitrix res: ', res)
            return res
        })
}