import axios from 'axios';


export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers:{
            Authorization:'Client-ID e4PRsGZq0ohiHcVGtIZPfqVtsDaC_UMw8T0oNWRVWRE',
         }


});


