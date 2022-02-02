import axios from 'axios';
import { FameResponse, CompleteFame, TinyFame} from './Complete'




export function getAll () {
    return axios.get<FameResponse>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
    .then(response => response.data);
}

export function getTiny() {
    return getAll().then(data => data.tiny);
}