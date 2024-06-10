import Link from 'next/link';
import {NewItem} from './new-item';

export default function Page(){
    return(
        <>
        <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
            <div className="flex items-center justify-center h-screen">
            <div className="mb-80">
            <NewItem/>
            </div>
            </div>
        </>
    );

}