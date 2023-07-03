import React from 'react';
import { MyComponent } from '../components/MyComponent';
import { fetchData } from '../utils/fetchData';

export default function Home({ data }) {
  // ...

  return (
    <main>
      <h1>Home Page</h1>
      <MyComponent data={data} />
      {/* ... */}
    </main>
  );
}

export async function getServerSideProps() {
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}
