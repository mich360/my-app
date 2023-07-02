import React from 'react';
import { MyComponent } from '../components'; // サーバーコンポーネントの例
import { fetchData } from '../utils'; // データを取得するためのユーティリティ関数

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
  // サーバーコンポーネント内で使用されているコンポーネントのデータ取得などの処理
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}
