/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console


console.log(React);


const Button = () => {
  return (
    <button>
    Click me!
  </button>
)
}

ReactDOM.render(
<Button />,
  document.getElementById('root')
)
