// pages/page.tsx

import React from 'react';
import { MyComponent } from '../components/MyComponent';
import { getServerSideProps } from './fetchDataPage';

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

export { getServerSideProps };


// // pages/page.tsx

// import React from 'react';
// import { MyComponent } from '../components/MyComponent';

// export default function Page({ data }) {
//   // ...

//   return (
//     <main>
//       <h1>Page</h1>
//       <MyComponent data={data} />
//       {/* ... */}
//     </main>
//   );
// }
