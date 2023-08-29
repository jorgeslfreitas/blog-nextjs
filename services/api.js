import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xtytdcwytfkosuzgbrtr.supabase.co/rest/v1',
    headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_URL,
        authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
})
