// iife syntax () () first parenthesis is for funtion definition and second parenthesis is for calling the funtion

(function chai()  { // named iife
    console.log(`DB CONNECTED`);
}) (); // apply ; when writing more than one immediately invoke function expression

( () => { // unnamed iife
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
}) ('tirth')