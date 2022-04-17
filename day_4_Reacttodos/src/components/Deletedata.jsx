const Deletedata = (data) => {
    return (
        <ul className="todo-list">
            {data.data.map((e) => {
                return <li className="todo-item">{e.title}</li>
            })}
        </ul>
    )
}

export { Deletedata }