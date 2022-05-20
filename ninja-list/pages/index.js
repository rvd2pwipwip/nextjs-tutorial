import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod,
        molestiae perferendis porro nemo mollitia quasi accusamus voluptatum
        consequuntur tempora, veritatis sit asperiores velit quas explicabo ea?
        Tempore, optio quae?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod,
        molestiae perferendis porro nemo mollitia quasi accusamus voluptatum
        consequuntur tempora, veritatis sit asperiores velit quas explicabo ea?
        Tempore, optio quae?
      </p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
