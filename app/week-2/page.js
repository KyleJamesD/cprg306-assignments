import StudentInfo from "./student-info";
import Link from 'next/link';


export default function Page() {
    return (
      <main>
        <Link href="/">Home </Link>
        <h1>Shopping List</h1>
        <StudentInfo  />
      </main>
    );
  }
  