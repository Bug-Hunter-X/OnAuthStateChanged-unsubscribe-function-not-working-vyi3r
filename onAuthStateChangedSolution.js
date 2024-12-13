const unsubscribe = onAuthStateChanged(auth, (user) => {
  // ... your code to handle user authentication ...
});

// Call unsubscribe when component unmounts (in React) or when the listener is no longer needed
//Example in a React component:

useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);

//Example in a regular javascript code

//When you don't need listener anymore call unsubscribe
setTimeout(() => {
  unsubscribe();
}, 5000); // Unsubscribe after 5 seconds for example 