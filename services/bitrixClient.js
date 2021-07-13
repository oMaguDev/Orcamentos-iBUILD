import axios from 'axios'

const bitrixClient = axios.create({
    baseURL: 'https://ibuild.bitrix24.com/crm/configs/import/lead.php',
    // timeout: 5000,
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-type': 'application/json',
    //     'Accept': 'application/json'
    // }
})

export const createLead = (lead) => {
    return bitrixClient.post('/', lead)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}