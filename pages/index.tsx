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




// import React from 'react';
// // import { MyComponent } from '../MyComponent'; // パスを修正
// import { MyComponent } from '../components/MyComponent';
// import { fetchData } from '../utils/fetchData';


// export default function Home({ data }) {
//   // ...

//   return (
//     <main>
//       <h1>Home Page</h1>
//       <MyComponent data={data} />
//       {/* ... */}
//     </main>
//   );
// }

// export async function getServerSideProps() {
//   // サーバーコンポーネント内で使用されているコンポーネントのデータ取得などの処理
//   const data = await fetchData();

//   return {
//     props: {
//       data,
//     },
//   };
// }


// // import React from 'react';
// // import { MyComponent } from '../MyComponent';
// // import { fetchData } from '../utils';

// // export default function Home({ data }) {
// //   return (
// //     <main>
// //       <h1>Home Page</h1>
// //       <MyComponent data={data} />
// //       {/* ... */}
// //     </main>
// //   );
// // }

// // export async function getServerSideProps() {
// //   const data = await fetchData();

// //   return {
// //     props: {
// //       data,
// //     },
// //   };
// // }
