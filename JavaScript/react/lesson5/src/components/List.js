function List({listItems, RenderItem}) {
    return ( 
        <ul>
            {listItems.map((item,index)=>(
                <li key={index}>{RenderItem(item,index)}</li>
            ))}
        </ul>
     );
}

export default List;