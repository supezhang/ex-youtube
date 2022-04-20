import axios from 'axios'

export function request(config){
  const req = axios.create({
    baseURL:'https://dummyapi.io/data/v1/',
    timeout:2000,
    headers:{
      'app-id':'625fbac08d29c73d12fddb18'
    }
  })
  console.log('*****',config);
  return req(config)
}
