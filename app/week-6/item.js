export default function Item(props){
    return(
        <>
        <div className="p-3 bg-gray-900 w-80 m-2 ">
        <p  className="font-bold text-2xl text-blue-600">{props.name}</p>
        {/*Buy and in are just text*/}
        <p className="">Buy {props.quantity} in {props.category}</p>
        </div>


        </>
    );
}