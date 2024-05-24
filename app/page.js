import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>     
      <Link href="/">Home </Link>
      <Link href="/about">About</Link>
      <br></br>
    <Link href="week-2">
        week-2
      </Link>
  </nav>
  );
}
