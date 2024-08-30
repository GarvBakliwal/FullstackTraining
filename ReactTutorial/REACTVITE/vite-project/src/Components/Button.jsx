

function Button({text}){
    // console.log(props)
    console.log(text)

    return (
        <div>
            <button className = 'bg-blue-500 py-2 px-6 rounded-md m-2'>
            {/* {props.text} */}
            {text}
            </button>
        </div>
    )
}
export default Button;


// --------CONNECTION TREE------
// index.html > main.jsx > app.jsx > all components

// rfce = for normal function component
// rafce = for arrow function component

// props = JS object