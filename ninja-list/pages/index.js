import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod,
          molestiae perferendis porro nemo mollitia quasi accusamus voluptatum
          consequuntur tempora, veritatis sit asperiores velit quas explicabo
          ea? Tempore, optio quae?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod,
          molestiae perferendis porro nemo mollitia quasi accusamus voluptatum
          consequuntur tempora, veritatis sit asperiores velit quas explicabo
          ea? Tempore, optio quae?
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
