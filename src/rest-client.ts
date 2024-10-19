import { context } from 'fetch-h2'
import { PredicateAddress, Solution } from './solutions';


const { fetch, disconnect, disconnectAll, onPush } = context({httpProtocol: "http2"});

//Could probably turn into a 1 onliner, but thats too much brain power
function makeUrlOptions(option_keys: any[], option_vals: any[]){
    let url = ""
    if(option_keys.length != option_vals.length){
        throw Error("URL options must be same length")
    }

    console.log(option_keys.length)

    if(option_keys.length > 0){
        url += "?"
        let i = 0;
        while(i < option_keys.length){
            let key = option_keys[i]
            let val = option_vals[i]
            url+=`${key}=${val}`
            i+=1
        }

    }
    return url
}

export class EssentialClient {
    baseUrl: String;

    constructor(baseURL: string) {
        // Initialize the URL object
        this.baseUrl = baseURL
    }

    async getContracts(contract_addr: String) {
        return await(await fetch(this.baseUrl+`/get-contract/${contract_addr}`)).json()
    }

    async listContracts(page: number=0, start: number = 0, end: number | null=null) {
        let keys = ["start", "page"]
        let vals = [start, page]
        if(end){
            keys.push("end")
            vals.push(end)
        }
        let req = await fetch(this.baseUrl+`/list-contracts`+makeUrlOptions(keys, vals))
        return await(req).json()
    }

    async getPredicate(address: PredicateAddress){
        let req = await fetch(this.baseUrl+`/get-predicate/`+address.contract+"/"+address.predicate)
        return await(req).json()
    }

    async submitSolution(solution: Solution){
        let req = await fetch(this.baseUrl+"/submit-solution",
            {
                method: "POST",
                body: solution.serialize(),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        let txt = await(req).text()
        console.log(txt)
        return await(req).json()
    }
}

