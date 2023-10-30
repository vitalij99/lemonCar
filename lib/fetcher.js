import useSWR from 'swr';

export const fetcher = url =>
  fetch(url, { cache: 'no-store' }).then(res => res.data);

export const useFetcher = url => {
  const result = useSWR(url, fetcher);
  return result;
};
