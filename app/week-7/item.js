

//when passin props, we can use a blanked name like props and then all our variable would have props in front so name would be props.name and category would be props.category etc etc 

export default function Item({name,quantity,category,onSelect}){
    return(
        <>
        <div className="p-3 bg-gray-900 w-80 m-2 " onClick={() => onSelect(name)}>
        <p  className="font-bold text-2xl text-blue-600">{name}</p>
        {/*Buy and in are just text*/}
        <p className="">Buy {quantity} in {category}</p>
        </div>


        </>
    );
}