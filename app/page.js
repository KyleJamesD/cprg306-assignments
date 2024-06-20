import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>     
      <Link href="/">Home </Link>
      
      <br></br>
      <Link href="/about">About</Link>

      <br></br>
    <Link href="week-2">
        week-2
      </Link>

      <br></br>
      <Link href="week-3">
        week-3
      </Link>

      <br></br>
      <Link href="week-4">
        week-4
      </Link>

      <br></br>
      <Link href="week-5">
        week-5
      </Link>

      <br></br>
      <Link href="week-6">
        week-6
      </Link>

      <br></br>
      <Link href="buttonexample">
        Button Example
      </Link>

      
  </nav>
  );
}
