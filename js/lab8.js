
//Self Pattern: Inside objects, always create a “self” variable and assign
//“this” to it. Use “Self” anywhere else

// JavaScript functions (versus methods) always use ‘window’ as ‘this’,
// even inner functions in methods
// Practical uses of closures
// •
// A closure lets you associate some data (the environment) with a function
// •
// parallel to properties and methods in OOP.
// •
// Consequently, use a closure anywhere you might use an object with a single method.
// •
// objects have properties to capture state info
// •
// JavaScript closures capture state info by saving references to free variables
// •
// Situations like this are common on the web.
// •
// an event handler is a single function executed in response to an event.
// •
// e.g., DOM and timer event handlers
// •
// •.. in 30 seconds print out whatever is in the currentQuestion variable
// •
// E.g., factory function that sets state information in reusable code (next slide)
// •
// closures for encapsulation and namespace protection (module pattern)
// •
// Event handlers must be functions without parameters
// •
// If you need to pass parameter information with an event handler
// •
// callback with no parameters but include free variables from the lexical environment.
// •
// JavaScript engine will create closure over bound variables when assign callback to event handler.

//Using <q> allows us to apply CSS styles to quotations

/* <p>
Safe divers always remember to check their
<
abbr title Self Contained Underwater Breathing
Apparatus SCUBA abbr > g ea r
</p> */
/*
    Both for..of and for..in statements iterate over arrays;
    for..in returns keys and works on objects as well as arrays

    for..of returns values of arrays but does not work with object
    properties
*/