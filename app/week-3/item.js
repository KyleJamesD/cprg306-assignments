
export default function Item(props){
    return(
        <>
        <div className="p-3 bg-gray-900 w-80 m-2 ">
        <li  className="font-bold text-2xl text-blue-600">{props.name}</li>
        {/*Buy and in are just text*/}
        <li className="">Buy {props.quantity} in {props.category}</li>
        </div>


        </>
    );
}