import React from 'react'

const List = () => {
    const arr = ['💀', '🗿', '🫂']
    const userData = [
        {
            id : 1,
            name:'john',
            age:23
        },
        {
            id : 2,
            name:'alex',
            age:25
        }
    ]
    return (
        <div>
            <ul>
            {
                arr.map((el)=>(
                    <li key={el}>{el}</li>
                ))
            }
            </ul>
            <ul>
            {
                userData.map((el)=>(
                    <div key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.age}</p>
                    </div>
                ))
            }
            </ul>
        </div>
    )
}

export default List

// key you have to always use key when you are 
