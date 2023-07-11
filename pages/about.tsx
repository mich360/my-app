import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyComponent from '../components/MyComponent';
import { fetchData } from '../utils/fetchData';

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className={styles.container}> */}
        <h1>About Page</h1>
        <p>This is the about page content.</p>
        <p></p>

        <Link href="/">Home</Link>

        {/* <MyComponent /> */}
      {/* </div> */}
    </main>
  );
};

export default AboutPage;

