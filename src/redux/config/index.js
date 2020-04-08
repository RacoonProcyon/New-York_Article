import {API_KEY} from './base';
export const API_ROOT = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=document_type:("article")&api-key='+API_KEY+"&q=";
export const API = (id)=>{
    return 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+API_KEY+'&fq=uri:("nyt://article/'+id+'")'
}
