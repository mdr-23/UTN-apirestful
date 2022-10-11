export function getAllMuestras(){
    return fetch("https://api.covidtracking.com//v1/us/daily.json").then((res)=>res.json())
}