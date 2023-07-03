import React from 'react';
import { MyComponent } from '../components/MyComponent';
import { fetchData } from '../utils/fetchData';

export default function Page({ data }) {
  // ...

  return (
    <main>
      <h1>Page</h1>
      <MyComponent data={data} />
      {/* ... */}
    </main>
  );
}

export default function Page() {
  return (
    <div>
      {/* ページの内容 */}
    </div>
  );
}

// 修正前
// export async function getServerSideProps() {
//   // サーバーコンポーネント内で使用されているコンポーネントのデータ取得などの処理
//   const data = await fetchData();
//   return {
//     props: {
//       data,
//     },
//   };
// }


