## Chapter 6: Dealing with Scope

Scope has been brought up a couple of times as a concept over the past couple of chapters. This
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
far as we can interact with them. We see the curly brackets ("{}") typically separate scopes, but
the main body that runs the JS program could be thought of being wrapped in this as well, containing
its scope's boundaries. We also see in his example that the order of the functions is switched from
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

As you can see, both functions are able to print the correct values through console.log() whether
there was a parameter passed or not. At the end we also see that the main body of the program
cannot access variables within functions that it contains. Javascript is actually a different
from many other languages with regards to being able to define a variables scope type along with
assigning it. Most programming languages behave much like "const" and "let" do, as used in most
of our examples. They can referred to as block scoped (within the "{}"). Javascript has another
scope type as well, "var".

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

Here we see the uniqueness of "var". It is accessible from outside of code blocks related to
conditional statements such as "if", as well as loops. When used inside of a funciton, "var" is
accessible to that specific function. No nested functions will have access to this "var", nor will
other functions have access to their's. If we were to try to console.log(test1) after the
exampleScopeDifference(), it would also return a "ReferenceError: test1 is not defined". In this
example we also see that "var" is reassignable just like "let".

Other related behavior would be that if the "var" variable is declared at the top level of a
program, which is referred to as a global variable, it is actually added to the global object
that JS uses while executing. The other types "const" and "let" would also become global
variables in this case, but they would not be added to the global object as with "var". This
can lead to naming conflicts and namespace pollution with "var" usage.

Scope is a common consideration across all programming languages. It stands out in JS with closures,
states within functions that are were called in the run time of the program. These were touched on
in chapter three, but remember tha the variables within the called functions have a so called
lifetime over the course of the program. Everything is created from scratch initially as the computer
starts reading a program, and then that memory is let go of when the program's run time is over. That
is true in this circumstances as well.

## The Scope of This Learning Experience

To me, that was the last essential piece of information that is needed to really take off running
with all of this. Building things with all of this new found knowledge tends to be intimidating,
but breaking things down to their essential parts really helps with making progress. That is why,
there is actually a website to go along with this learning. This was made with the intent of guiding
your learning through practical applications, and giving you an experience of seeing some of your efforts
more visually. Another added benefit is that most readers will have had experience with a web browser,
and visiting websites online, so you may already have one installed.

There also will be more related readings regarding some more topics related to programming, algorithms, and
resources to find more information on particular topics. Initially, there will also be some setup
to begin going through so that you can install a code editor, and all of the extensions that are needed
to help you a more professional setting (convenient as well). Several considerations come in to play
when setting up one's development environment, but being exposed to your options will play just as
big a part being able to use it. Just like most programs, the more you dig into it, the more it can
do for you. In this case especially, that means saving large amounts of time by setting yourself up
to help yourself.

Programming is a very broad topic, and almost all areas of study are affected by this. You could
specialize in Data Science, Networking, Security, Web Development, Devops, Graphics, Games,
Robotics, and Embeded Systems just to name a few. All of these topics each serve as an umbrella for
vast amounts of subdomains in each domain respectively. If you have a solid grip on the fundamentals
of programming and start recognizing these patterns, jumping to things like shell scripting can
start to make more sense.

> **Note:**
> Granted, you may be new to the concept of things like flags in a command line such as,
> 'git commit -m "Hi!"'. Here the flag is "-m" indicating a message is going to be added. The logical
> structure of the command is more apt to make sense to us though. Here the program is "git", and the
> git command (function) would be "commit". Here the function "commit" is being told it will have
> a message parameter being passed, which is the argument "Hi!". This is used instead of parenthesis,
> and using argument postioning to indicate which parameter the argument represents.

My hope here is not to select one of these disciplines for you, but to give you the tools to be
effective at any. The basics are still the basics across all of them. Programming is similar to other
disciplines, including music. At the beginning stages of music you end up memorizing how to play
songs, not truly understanding the underpinnings of the construction of each of the notes in the
songs. This is a necessary part of the process, and as you get better you start analyzing the song
in depth for multiple parts of its construction. One of the things I want to highlight is that
some people can get stuck in this phase though. This relies heavily on memorization, routine, and
using only what is familiar. Using such a process works fine, and some people do this their entire
careers. The thing is, at least in my opinion, these people are working much harder memorizing
things constantly to keep up, instead of understanding the inner workings of things. The same can
be said for programming. Taking the extra time to get closer to understanding something can end up saving
you incredible amounts of time in the future. Really, some of your career options may start to become
limited if you do not understand the process of automating your tasks in order to get more things
done on a daily basis.

The theme of this message is really to see this as a constant learning experience. There will be many
things that you learn that may not appear all that related at first, but you will envitably recognize
a pattern somewhere due to these. Honestly, a surprising amount of coding can be improved by taking
the time to write things in a thoughtful manner. Making sure readability is a primary concern will
help everyone in the long run. If done properly, it could even serve as documentation on how things
can be implemented, serving as learning material and being easily maintainable. 

It is now your choice to jump into walking through the creation of a modern website, or going over
related reading material. I would encourage possibly starting with the beginning of the website section
to get a general feel and see what will be covered. This would make more sense than jumping 
into the advanced reading sections, unless you are already familiar with many of these topics. 
