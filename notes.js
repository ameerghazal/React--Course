/*


Section 3:

What is react?
- Components are the building blocks of use interfaces. 
- Declarative syntax called JSX, which is an abstraction away from the DOM.
- JSX: syntax that combines Js, HTML, CSS, etc. 
- React reacts to state changes by rerendering the UI. It is techincally just a library. 


Pure React
- React can be rendered in other applications.
- <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
- React is based on components. 
- State is nesceassry to update the app on the screen.
- React.dev is the documentation for react methods. This is similar to mdn for javascript. 
- Use vite for modern real world apps. Create-react-app is good for smaller apps. 
- React tells developers to use next.js or remix when using react.


Setting Up a Project with Create-React-App
- npx create-react-app@5 pizza-menu, this will download all the packages needed using the local create-react-app. 
- Most development will happen in the src folder.


Section 4 JavaScript Review
- Sort circuting:
  - When the first value is false, the second is not even looked at for &&. 
  - For ezample console.log(true & "some string")
  - The same logic is for || short circuits if the first onis true.
  - These also work for the falsy values.
  - Nullish collesant operator: similar to the OR, but it takes account for the falsey values.
- Optional chaining is the typical: book.reverviews?.llll, which takes account for any null or undefined values. 
- Multiple array methods
- Promises:
  - Async Promises: fetch(url)
  - http request, dowlaod it, then wait till the data is fethced. 
  - However, this is too slow and js will move to the next line of code.
  - This means we need to wait, which is were promises are good for.
  - Therefore, on the promise, we can chain the then() method with a call back function to return the promise.
  Ex: fetch().then((res) => res.json()).then((data) => console.log(data));
  - We can see that it waited.

- Async await:
  - async function ... () {
    await fetch()
  }
  - By trapping something in an async function and use the await keyword, js will basically stop the function and make it wait unti it has recivied its data.
  - Ex: async function getTodos() {
    const res = await fetch(...);
    const data = await res.json();
    console.log(...)
  }
  - Javascript always moves onto the next line. If we trap something to wait it happens in the scope of the function but will still run everything else outside of the function.


*/
