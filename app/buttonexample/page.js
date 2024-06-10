import Link from 'next/link';
// we only use curly braces if we do not use a default function for export
// import {CounterExample , next function}  from './button';
import CounterExample from './button';
export default function Page(){
    return(
        <>
            <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
            <CounterExample/>
        </>
    );

}