import axios from 'axios';
import useSWR from 'swr';

export const fetcher = url => axios.get(url).then(res => res.data);

export const useFetcher = url => {
  console.log('fetcher');
  const result = useSWR(url, fetcher);
  return result;
};
