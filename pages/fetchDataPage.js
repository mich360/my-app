// fetchDataPage.js

import { fetchData } from '../utils/fetchData';

export async function getServerSideProps() {
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}
