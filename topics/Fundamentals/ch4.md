## Chapter 4: Loops And Conditions

Now the time has come to discuss loops. Overall, the idea of loops is much easier than the
material that we just tackled. The reasoning for introducing them at this point is that they tend to add
quite a bit of complication to the logic of programs, especially when they are interacting
with conditional statements, as we will see. An approachable way to begin explaining the essence
of both would be that they are temporal constructs. They either dictate how many
times something should occur (loops), or influence if/when a piece of code should execute (conditions).
Conditions could also be seen as rules for states, which decide what action we will take, removing the
perception of a temporal element. It could be said that a state is always dependent on changes
in a system moment by moment, so the point in time is implied.

Since loops were mentioned first, let us start there. A loop is a specific construct in programming
that allows for the execution of a portion of code multiple times. Each time a section of code
is operated on once inside the loop, it is said to have been iterated over. This process occurs as many times as
the code specifies. To end a loop, usually a condition is met so that the loop knows that it is
done iterating over its section of code. We will look at our first condition along with a loop, being the
`if` condition. An `if` condition would be something like stopping at three if I said count to three.

```ts
let counter: number = 0;

// While counter is less than 3
while (counter < 3) {
  counter++;
  console.log(counter);
}

// Note: counter++ is shorthand for
// counter = counter + 1
// or
// counter += 1

/* Would look like this to the computer
 *
 * (This code is just an example, but it would actually have the same output as the
 * code above. It would just go through its loop once instead of three times.)
 */

// Defines condition to run until met
while (counter < 3) {
  counter++; // 1 gets added, so counter = 1;
  console.log(counter); // 1

  // Computer checks if counter is < 3, since it is at the end of the loop (in example above)
  // counter < 3 is true, so it goes through the loop again
  counter++; // 1 gets added, so counter = 2;
  console.log(counter); // 2

  // Computer checks if counter is < 3, since it is at the end of the loop
  // counter < 3 is true, so it goes through the loop again
  counter++; // 1 gets added, so counter = 3;
  console.log(counter); // 3

  // Computer checks if counter is < 3, since it is at the end of the loop
  // counter < 3 is false, so it does not go through the loop again
}
```

> **Note**: Some may have noticed the usage of `/*` along with the `//` for comments now. We
> can see the slight difference is that when using the star or asterisk (`*`), it can be
> by itself multiple times. The entire comment portion will end with a closing `*/`.

This will be the first loop we examine. Right at the beginning it has `while (counter < 3)`,
and this states the condition that the loop checks until it is met, then stopping its execution. Hopefully
the `counter < 3` part is familiar, but incase it is not, it is checking whether the current
value of counter is less than the number three. Many have likely seen the equivalence
operators such as this or greater than in mathematics, and we will list all of them later in this section. They
work the same in that subject as they do here, but are usually seen as returning a `true` or `false`
condition ("boolean" type) each time they are evaluated. This loop would also work if
it was initially set to `true`, and then set to `false` upon reaching the value of 3.

Within the body of the loop, which is encapsulated by the `{}`, we first have the operation of
`counter++`. As stated in the comments above, this is actually a shorthand for the operation of
`counter = counter + 1`, which takes the counter variable, adds one to it, and assigns that value to
the counter value. Another shorthand is the `counter += 1`. This also does the same exact operation
as `counter = counter + 1`. This behavior is exhibited in several programming languages. The same
typically goes for subtraction, multiplication, division, and modulo operations. Once
the value is incremented by one, the value is then printed to the screen giving us `1`.

Like outlined in the comments above, once the program hits the end of the loop, it will check
the initial condition, and see if it is met. This repeats until the condition is finally met. Following this,
the other numbers will be printed until `(counter < 3)` no longer holds true. One must
be careful when defining this condition, due to the possibility of being able to make the program stay in an
infinite loop if the condition is never met. An easy way for this to occur is to forget to increment
the counter variable in this case, and then it would forever have the value of 0. Due to this, the
loop would run until the program was forcibly terminated by the user.

It is fairly common to see a loop compared against some kind of number threshold in order to
figure out how long it should execute. These tasks tend to involve doing operations equal to the
length of the object (or objects) passed, the length of a string, or until a number or state is met.
They could also just as easily search for something specific, and once it is found set a "flag"
to change the value from `true` to `false` (or vice versa).

Another structure of loop that is very common is the for loop:

```ts
for (let countdown: number = 5; countdown > 0; countdown--) {
  console.log(countdown);
}

console.log("Blast Off!");

/* The output will be the same as below:
 * 5
 * 4
 * 3
 * 2
 * 1
 * Blast Off!
 */
```

You can see in this example we actually count down (`countdown--`), using 0 as the condition for when we
will terminate our loop. This structure may feel very different since the parenthesis are actually
accepting three separate conditions instead of one. First you define a variable to use in the for loop,
then you define the condition to run until, and last you define something that happens at the end
of each iteration of the loop (usually manipulating the variable you created). Here would be the same
result instead as a while loop:

```ts
let countdown: number = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

console.log("Blast Off!");
```

With it laid out like this, you can see that this approach is a bit more verbose. This takes six
lines to write instead of four. Now, that's not a huge loss, but extra lines of code like this can add
up overtime. This could also be a style preference, but we will see later that `for` can actually
behave in more ways than just this. Still, I would say this is the classic structure of `for` loops, so
you will see this across many languages. Other structures for the `for` loop will be dependent
on the language you have at hand.

## Comparisons and Equivalence Operators

So hopefully this has cemented your understanding of the purpose of loops. Being able to iterate over a chunk
of logic is a very common need in programming. You have also seen that these structures are heavily
reliant on equivalence operators, so let's lay out some of those.

| Equivalence Operators |           Names            |
| :-------------------: | :------------------------: |
|           >           |        Greater Than        |
|          >=           |   Greater Than or Equals   |
|           <           |         Less Than          |
|          <=           |    Less Than or Equals     |
|           !           |            Not             |
|          ==           | Loose Equivalence (TS/JS)  |
|          ===          | Strict Equivalence (TS/JS) |
|          !=           |  Loose Not Equals (TS/JS)  |
|          !==          | Strict Not Equals (TS/JS)  |

I want to mention that the `===` and `!==` are only used in some languages, and specifically for us,
in TypeScript/Javascript. Originally in C, `==` was the equivalence operator to check if one value
was equal to another, since the assignment `=` is already in use. The introduction of the triple
equals came from the fact that some languages allow you to compare other types to each other that may in a
way be related. An example would be the string `"5"` and the number `5`. With the `==` you would get a `true`
value when comparing the two. If you did this with the `===`, instead you would receive `false`, since they
are not the same type. This is the difference between "loose" and "strict" equivalence.

For "loose" equivalence, the comparison is done through a process known as coercion. This process
involves attempting to convert one or both of the values to a different type and seeing if
they share the same value in that case. Languages that use looser type equivalences will tend to
have this feature. This can cause unexpected errors if only a certain type is expected, but it can
also make situations like the number example above easier to handle. It would not be ideal for a
program to fail due to having a string representation of an age versus a number, unless you intended
for it to.

Other than these conditions, the other operators that are left may be familiar from mathematics. As
previously stated, these comparisons are seen as "boolean" values by the computer when evaluating.

```js
// Greater Than
console.log(5 > 4); // true
console.log(5 > 5); // false

// Greater Than or Equals
console.log(5 >= 4); // true
console.log(5 >= 5); // true

// Less Than
console.log(5 < 4); // false

// Less Than or Equals
console.log(5 <= 4); // false
console.log(4 <= 4); // true

// Not
console.log(!true); // false
console.log(!(4 <= 4)); // false

// Loose Equals
console.log(4 == "4"); // true

// Strict Equals
console.log(4 === "4"); // false

// Loose Not Equals
console.log(4 != "4"); // false

// Strict Not Equals
console.log(4 !== "4"); // true
```

These are some examples of using the comparisons. I point out the slight difference provided by the
"loose" and "strict" equivalence case. If the same number is provided as a number type and a string, true will be
returned for "loose" equivalence. In the case where "strict" is used, the same number comparison as a number
type and a string type will return false for the condition evaluation.

## Logical Chaining

| Logical Chaining Operators |    Names    |
| :------------------------: | :---------: |
|             &&             | Logical AND |
|            \|\|            | Logical OR  |

One additional thing to all these equivalence operators is that there are two other operators
that allow logical chaining. These would be `&&` (AND), as well as `||` (OR). You can see example
uses below:

```ts
// And
console.log(true && false); // false

// Or
console.log(true || false); // true

console.log(true && false && (true || false)); // false
console.log((true && false) || true || false); // true
```

Above are demonstrations of how this chaining occurs. Any condition with an equivalence operator
could be used in place of either `true` or `false`. These can take some getting use to if you are
not familiar, but using parenthesis is very important with these. Like in mathematics, anything
in parenthesis is evaluated as a unit by itself, before being exposed to outside information. The
`&&` operator looks for the first instance of false and then returns false, otherwise it will return
true. On the other hand, the `||` operator will return the first instance of `true`, or otherwise
will return `false`.

These can get rather tricky to evaluate manually as more conditions come into play. They should
be read from left to right, and broken up as best as you can. Now that we have already learned
about functions, it is often useful to put a longer logical chaining inside of its own function,
making it easier to read.

```js
function checkStatuses() {
  // ... some code
}

function isDataClean() {
  // ... more code
}

function isOldEnough(age, region) {
  return (region === "NA" && age >= 18) || (region === "Other" && age >= 16);
}

function passToSubmit(age, region) {
  return checkStatuses() && isDataClean() && isOldEnough(age, region);
}

let userAge = 18;
let userRegion = "NA";

if (passToSubmit(userAge, userRegion)) {
  console.log("Success!");
} else {
  console.log("Something went wrong.");
}
```

In this structure you see that we can decompose our logic into separate functions, and then pass it
into a single area packaged together. This helps us define each piece of logic through the function
names, and break down complicated expressions into simpler ones. You may have also noticed that I
used the keywords `if` and `else`, which check conditions. These influence the execution flow of a
program, which we will be getting into next.

## Execution Flow

There are a few keywords that languages use to dictate which lines of code will be executed, and they
all include evaluating against conditions. Below is a table of those keywords.

| Execution Flow |
| :------------- |
| if             |
| else if        |
| else           |
| switch         |

We saw the usage of `if` and `else` in the example above. The way they work may be how you
already suspect. When the `if` has its conditions met in the parenthesis next to it, that section
of the code (the area within the `{}` after the `()`) will be entered and executed. Otherwise, the `else`
portion of the code will be entered and executed. Only one of these condition's code sections (also
referred to as code blocks) will be entered when used in a sequence together. In addition to both of
these there is also a third possibility, the `else if` condition. This is an in between state between the `if`
and the `else`, allowing for more opportunities to catch conditional `if` statements.

```ts
if (color === "red") {
  console.log("stop");
} else if (color === "blue") {
  console.log("speed");
} else if (color === "brown") {
  console.log("dodge");
} else if (color === "purple") {
  console.log("power up");
} else {
  console.log("Sorry, please select a color.");
}
```

In the example you see that we can extend the amount of conditions we would like to check against
to whatever amount we need. It has become more mainstream to use early returns if you are within
a function while using `if` checks. Using this strategy is referred to as guard clauses. Here
would be an implementation:

```js
function checkColor(color) {
  if (color === "red") {
    return console.log("stop");
  }
  if (color === "blue") {
    return console.log("speed");
  }
  if (color === "brown") {
    return console.log("dodge");
  }
  if (color === "purple") {
    return console.log("power up");
  }
  console.log("Sorry, please select a color.");
}
```

This approach may be useful when you have multiple `else if` portions of your code. They are equivalent,
but the `else if` seems to take more to process mentally than the return. With the `else if` you
could have other `if` conditions inside, which would make tracking the other conditions dependent
on the `else if` more difficult. Returns are nice in the sense that we know the function is done,
and we do not have to look at any further logic when looking into a specific condition. Here we did not
need a final `return` statement due to the fact that `console.log()` prints to the screen regardless of a
return statement. If a `return` is not specified in a regular JS function, then the implicit return will be `undefined`. Another approach we could take would be the `switch` statement.

```js
let color = "orange";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "blue":
    console.log("speed");
    break;
  case "brown":
    console.log("dodge");
    break;
  case "purple":
    console.log("power up");
    break;
  default:
    console.log("Sorry, please select a color.");
}
```

After seeing this I'm sure you can see a similarity in the structure. It does introduce another
keyword used across languages, `break`, which exits the current scope that the program is running in. We
will go over scope in more detail shortly. For now, know that the scope relates to the memory that
is able to be accessed within a section of code (enclosed in `{}`). This `break` key word can also
be used to leave a loop prematurely, without meeting its base condition.

Now that you have seen all of these, we can observe another interesting use of an object
for situations similar to this.

```js
let colorAnswers = {
  red: "stop",
  blue: "speed",
  brown: "dodge",
  purple: "power up",
};

let color = "purple";

if (colorAnswers[color]) {
  console.log(colorAnswers[color]);
} else {
  console.log("Sorry, please select a color.");
}
```

Laying out the logic this way, we see that an object could also be used to retrieve different states
if needed. The input could be used to check if it exists in the object (here the `if` condition), then have a
default message in the `else`. This setup is good to keep in mind when weighing out your options. In
the past this choice may have been seen as wasteful, as it cost much more memory to build an object
than to check against execution flow conditions. With that said, due to how code is currently compiled and
optimized, some of these factors do not have to be as much of a concern. That and computers today will typically
have more than enough memory needed on modern systems.

The "Ternary Operator" is another style of condition check that has been around for
quite some time, so you will see it often. Here is an example:

```ts
const lightColor: string = "green";

// Ternary Operator
// Will print 'Proceed'. The first console.log is the "if" and the other the "else"
lightColor === "green" ? console.log("Proceed") : console.log("No Entry");
```

As mentioned in the comment above, `"Proceed"` will be printed here. At the beginning of the ternary
operator is the condition to check, `lightColor === "green"`. If it is true, the code directly after
the question mark (`?`) is executed. If not, the code after the colon (`:`) is executed. This offers
a convenient shorthand at times, but be careful not let the code become unreadable. It is
often harder to read code where programmers put ternary operators in ternary operators.

```ts
const lightColor: string = "green";
const doorPosition: number = 2;

// 'Yes'
lightColor === "green"
  ? doorPosition === 1
    ? console.log("No")
    : console.log("Yes")
  : console.log("No Entry");
```

Here, the code formatter placed this in a structure that is more readable, leaving the indentation
to indicate to us the current level the comparison is at. I believe we may still agree
that this code is much harder to reason with as compared to the one nested condition. Using indentation
to group sections of code together has been something that has gradually worked its way into best
practice. Older languages were not affected by indentation levels as much, using semicolons to
designate the end of lines. While this is easy for the computer, you could end up declaring several
things on a single line, taking much more time to read for a human. Languages like Python actually
made indentation a necessary part of its language, making code that is directly next to other code
and at the same indentation level considered to be in the same code block (typically between `{}`,
but it does not have to be with Python).

## Scope

Scope has been brought up a couple of times as a concept in the previous chapter. This
is a concept that is related to all programming languages, determining the data that a program
can see and use.

```js
function scopeOne() {
  const test = 1;
  return test;
}

function scopeTwo() {
  const test = 2;
  return test;
}

// The "test" variable does not exist in this scope, so using console.log()
// to return its value would return an error.

console.log(scopeTwo()); // 2
console.log(scopeOne()); // 1

const test = 3;
console.log(test); // 3
```

Here is a specific case. We see that the test variable is defined in three different locations, all
as a const. The difference is that each has their own scope, so none of the variables are aware of
each other, or can access the others. Their respective functions return their values, but that is as
far as we can interact with them. We see the curly brackets (`{}`) typically separate scopes, but
the main body that runs the JS program could be thought of being wrapped in this as well, containing
its own scope's boundaries. We also see in his example that the order of the functions is switched from
their creation, to prove that the time they were created is not influencing this, and the variable is
not being reassigned.

We have also seen that functions allow us to pass parameters, effectively passing values from one
scope to the other. Usually higher up variables in a nesting structure are accessible by the lower
nested variables so long as they have already been defined in the program's logical flow.

```js
const slime = { health: 27, attack: 10, defense: 5 };

function passParameter(param) {
  const attack = param.attack;
  console.log(attack);
}

function noParameter() {
  const defense = slime.defense;
  console.log(defense);

  const mainCannotReach = 0;
}

passParameter(slime); // 10
noParameter(); // 5
console.log(mainCannotReach); // Uncaught ReferenceError: mainCannotReach is not defined
```

As you can see, both functions are able to print the correct values through `console.log()` whether
there was a parameter passed or not. At the end we also see that the main body of the program
cannot access variables within functions that it contains. Javascript is actually a bit different
from many other languages with regards to being able to define a variable's scope type along with
assigning it. Most programming languages behave much like `const` and `let` do, as used in most
of our examples. They can be referred to as block scoped (within the `{}`). Javascript has another
scope type as well, `var`.

```js
function exampleScopeDifference() {
  if (true) {
    var test1 = "var variable"; // test1 is declared with var within the block
    const test2 = "const variable"; // test2 is declared with const within the block
  }

  // Attempting to access x outside of its block scope
  console.log(test1); // Output: "var variable" (var has function scope)
  test1 = 2; // "var" is reassignable
  console.log(test1); // 2

  // Attempting to access test2 outside of its block scope
  console.log(test2); // ReferenceError: test2 is not defined (const is block-scoped)
}

exampleScopeDifference();

// Attempting to access test1 outside of its function scope
console.log(test1); // ReferenceError: test1 is not defined (var is function-scoped)
```

Here we see the uniqueness of `var`. It is accessible from outside of code blocks related to
conditional statements such as `if`, as well as loops. When used inside of a function, `var` is
accessible to that specific function, and other scopes within that function. If we were to try to
`console.log(test1)` after the `exampleScopeDifference()`, it would also return
`ReferenceError: test1 is not defined`. In this example we also see that `var` is reassignable just like `let`.

Other related behavior would be that if the `var` variable is declared at the top level of a
program, which is referred to as a global variable, it is actually added to the global object
that JS uses while executing. The other types `const` and `let` would also become global
variables in this case, but they would not be added to the global object as with `var`. This
can lead to naming conflicts and namespace pollution with `var` usage.

Scope is a common consideration across all programming languages. It stands out in JS with closures
(states within functions that were called in the runtime of the program). These were touched on
in chapter three, but remember that the variables within the called functions have a so called
"lifetime" over the course of the program. Everything is created from scratch initially as the computer
starts reading a program, and then that memory is let go of when the program's runtime is over. That
is true in these circumstances as well.

## Conclusion

Being introduced to loops and conditions has now completed your formation of the basic
underpinnings of programming. With this information, we will now be able to look at smaller
programs and make sense of what is going on. Having several conditions within a piece of code
can make analyzing it take much longer, and possibly increase the difficulty of the code. If
there ever seems to be too many conditions flying around, decomposing logic into functions is
always a helpful approach. Also, analyzing what information is truly necessary to determine something
in the code can be a good opportunity for refactoring.

The next chapter will explore more interesting ways we can leverage looping behaviors. Javascript and
some other languages have functions that can be used on arrays and objects in order to manipulate
each individual value, or perform something over the entirety of the data. Now that we know how loops
and conditions work, these functions will make much more sense.

[![Previous](https://img.shields.io/badge/Previous-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch3.md)
&nbsp;
[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch5.md)
