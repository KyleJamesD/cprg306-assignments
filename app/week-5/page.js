import ItemList from "./item-list";
import Link from 'next/link';
export default function Page(){
    return(
        <main>
         <nav className="flex">   
        <p className=" pt-3 pl-3 text-3xl font-bold">Shopping List</p>       
        <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
        </nav>
        <ItemList />

        </main>
    );

}