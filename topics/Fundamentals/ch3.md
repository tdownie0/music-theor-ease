## Chapter 3: Functions

Now we will get into elaborating on functions. Functions are almost the life
and blood of programming. Without functions, the programs we have today may very well
be impossible to get working, or would take far more work than could be reasonably expected.
I think the most relatable comparison to a function is a cooking
recipe. A recipe tells someone the exact steps and ingredients they need in order to
get the result they are looking for. In essence, that is all a function is. There just
tends to be many considerations we can factor in depending on what we are
trying to accomplish.

With functions, really the main focus should be giving it a single responsibility
for a task. The more focused the task is, the easier it becomes to remember
which task is responsible for which action. A quick example would be a game like a slot machine that has
three different rows and columns, each corresponding to a certain amount of points based on their contents. One
could write a program in such a way that they always have each row's individual contents
wrapped up in the main logic of the program. Another way somebody could write this would be by
making a function for each row, and then have the program call those
functions based on which ones it needed at the moment. These could be calls to functions
named `getScoreRowOne()`, `getScoreRowTwo()`, and `getScoreRowThree()`. Later we will also be introduced
to objects which can have their own functions that belong to them. If in this case they were all row objects,
we could have variables assigned to the objects named `rowOne`, `rowTwo`, and `rowThree`. With this, each one
could call their own getScore function as such, `rowOne.getScore()`. This would be one way to help us from
duplicating logic. This could also handle different combinations of rows, such as putting them together
diagonally, or vertically (columns), instead of just horizontally as implied by row. This example may be able
to be left as a plain array in this case, but it may be cleaner to make explicit functions or objects
for different combinations.

Now anything we would have setup for each specific row would be completely independent of the
others. If we were looking for whichever one had the highest score, or wanted to leave one out, we could also
have a function that compared scores for us based on the ones we wanted to evaluate. Based on these results,
we could have another function that would be responsible for turning a row's lights on, or having a sound
effect play. This becomes much easier to manage when a program does several things.

I wanted to briefly give an abstract overview of what will be going on overall, but we will start
laying out some real functions and demonstrating examples of them in use. Different paradigms use functions in
different ways, so we will touch on the layouts that can be achieved by making certain structural decisions. We
will go ahead and start with these first examples:

```ts
// ---- Function Declaration Area ----
function sayHello(): void {
  return console.log("Hello");
}

function sayHelloWorld(): void {
  sayHello();
  return console.log("World");
}

function giveFour(): number {
  return 4;
}
// ---- End of Function Declaration Area ----

// Code that is actually executed at runtime
sayHello(); // Prints "Hello" to the console
sayHelloWorld(); // Prints "Hello" and "World" on separate lines to the console
let myNumber: number = giveFour(); // 4
```

Here we have `sayHello()` and `sayHelloWorld()`. Both of their return types are void, which means
they do not pass back a physical value, instead printing to the console. The last function `giveFour()`
does return a value, and in this case it would assign `4` to `myNumber`. I threw somewhat of a curve
ball right from the start, and it can be seen in `sayHelloWorld()`. The most interesting
part about this function, is that it actually calls another function, and then runs another line itself.

There are comments with "Function Declaration Area" around the functions to help illustrate that
the section that is contained within works differently than the code below it, marked as executing at
runtime. Specifically, what the executed portion refers to is the actual code that will be called and executed
during the course of the program's runtime. If the functions were not called in this portion, they would still
be read and stored in memory at runtime, but their body's would not be executed during this phase.

When the program runs and it sees a function call like sayHello(), it
looks up if it has a reference to such a function, and if it does, it will run that code associated
with that function. This helps enormously. We can really put as much code as we want
into the functions, and then call them on a single line. This makes understanding a large code base
manageable. The function calls could be for anything. Functions named `startRobot()`, `generateDungeonBoss()`,
`findAllSchrodingersCats()`, or `simulateLivingOrganism()` are all examples. There is no telling how
large or small any of these functions could be, but we could hopefully tell something about their
purpose just from their names.

If a programmer consistently uses names that are as descriptive as possible, their code can almost read like a story.
Giving yourself as many advantages as one can, especially for reading code again in the future, will pay
itself back many times over for actively maintaining code. One of the realities with coding, and really with
writing in general, is that we will read far more than we could ever possibly write.
In general, glancing over and reading something quickly is something we do almost mindlessly. Writing
generally takes much more time due to physical limitations, and the process of juggling ideas.

## Passing Parameters

Functions can accomplish quite a bit. One great thing they can do is accept arguments. Arguments
are actual values passed into a function. A function can define a set of parameters that it expects as
input when it is called, and these will be considered the arguments provided when implemented.

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(2, 3));
```

Here is an example. We see in the function definition that it actually has `a` and `b` between its
parenthesis. This indicates that they are parameters necessary to run the function, as the
function's output generally depends on them. In most cases, using `a` and `b` as names is a terrible practice
as they are not descriptive, but we can almost get away with it here thanks to TypeScript specifying
that they are numbers. Short names like this or "x, y, z" and such could be common if they were
involved in a program or library that uses many mathematical equations. It may be common notation
in those circumstances as well, so these could be good use cases. Most times though, descriptive names
are preferred. In this case, using `number1` or `first` may seem redundant and may not be of much help.
In general, it is better to try and avoid names with numbers like `number1`, due to the numbers possibly
being confused as letters. In some cases the `1` may resemble the letter "l" very closely.

So here, with 2 and 3 passed into `addnumbers()`, the function will end up looking like this when it runs:

```ts
function addNumbers(2, 3): number {
    return 2 + 3
}
```

At least in memory this is what it would resemble while running. So just like in algebra, we
replace the placeholder values with the values we currently need to use. It should be noted that
the order of the arguments passed to the function will determine which parameter they will represent
inside of the function. In programming, these arguments can be many different types, including all of the
primitive types, and even functions. When functions are passed to functions as parameters, they are
referred to as callbacks. This could be thought of as leaving a phone number for a function to call and use
when it is time. It really is that straight forward, and allows for some great flexibility. We could
think of doing something like passing a set of plans:

```js
function plansForExpensiveRobot() {
  // ... Logic for making robot
}

function plansForCostEfficientRobot() {
  // ... Logic for making robot
}

function createRobot(robotInformation, plansForRobot) {
  // ... Creation Logic
  plansForRobot();
  // Ends with return logic
}

// Main Program
robotInformation = {
  // Properties gathered about the robot
};

// Call to make expensive robot
const expensiveRobot = createRobot(robotInformation, plansForExpensiveRobot);

// Call to make cost efficient robot
const costEfficientRobot = createRobot(
  robotInformation,
  plansForCostEfficientRobot
);
```

Understanding this concept can really open up some doors for us. We get to reuse our `createRobot()` function
with as many different kinds of plans that we can come up with, so long as those plans all follow the
same implementation pattern. This would constitute interacting with `createRobot()` in almost the same ways. The
word "almost" is used here, anticipating for situations where we would like to add additional options, but would
still need to allow for our original design to work the way it was intended. To accomplish this, we could call
some arguments conditionally, or implement empty returns for some plans where others would do extra work.
At times it feels okay to stretch out the responsibility of a function to accommodate for more use
cases, but it starts getting tricky when the functions have to share a large amount of unrelated logic with
all of the others in order to keep working. An early sign of this can be having large parameters for
functions, usually three or more. We can pass objects as parameters, which in a way stretches the amount
rule, being something like `robotInformation` in the code above. So with this, conceptually we would
see it as one related entity. The real trouble starts to come from trying to track too many moving parts,
especially when the parts seem independent of each other.

Here, the `robotInformation` object may be used in `createRobot` before or after the `plansForRobot()` function.
Our `robotInformation` object may contain things such as a name, size, color, and such. Besides generic properties
like these, things like a model number, number of attachable parts, spare parts, power consumption, alternate
settings, and other various attributes might be included. These additions may start to be more related to a
particular type of robot being constructed though. Properties such as these may be strange to pass through if
one type did not expect to use or require this information, or worse, cause our construction to fail. This
would be due to a property being left out but still attempted to be accessed during the build process for use.

If we were expecting the objects to hold more complex data like this, it may be more suitable
to pass the `robotInformation` directly to the `plansForRobot()` function as a parameter. With this, we could
specify the specific type of `robotInformation` object being passed as an argument also (or if we were using
TypeScript we could rely on defining the specific types expected for the particular function). Using this approach,
we would have the option to display a warning or error message if something was unexpectedly passed through.
Default parameters could also be added to the logic in order to ensure that the program does not crash unexpectedly.

Overall, the main goal of all of this is to abstract information from the main flow of our program
so that we can visualize it from a higher level. There could easily be thousands of functions in a
code base, and having it broken up into units helps to isolate parts from one another. This makes the
logic much easier to reason with, and helps simplify tracking things down if they go wrong. It is not very
helpful if something goes wrong and you have to search the entire program anytime you need to fix something.

## Classes

Classes are yet another mental construct we use to organize logic. Using classes is related to a paradigm
called Object Oriented Programming (OOP). Above when we demonstrated the callback, this was related
more towards functional programming design wise. Classes can be passed functions as parameters as well, though
typically this is done through passing different types of objects that adhere to a particular interface, a
process referred to as dependency injection. To describe an interface briefly, they are focused on defining
the contents and variable types of an object or class. They are very similar to what we have seen already with
TypeScript, but go one step further in abstraction. Instead of defining the type directly with the variable being
assigned, they define the type separately to be referenced. Here is a quick example:

```ts
interface Cat {
  name: string;
  age: number;
  breed: string;
}

let sirMuffins: Cat = {
  name: "Sir Muffins",
  age: 10,
  breed: "Tabby",
};

function speak(cat: Cat) {
  return cat.name + " says meow!";
}
```

This gives us a quick glance at an interface (TypeScript also allows a type alias, which is very similar but has
a few differences in how they can be manipulated). Interfaces are very common across OOP languages, and share
a portion of the underlying philosophy of classes, specifically regarding having a defined structure. As we see
in this example, one of the interface's prime advantages is that we do not have to write out the entirety of
the type definition for variables and parameters we expect to use repeatedly. This is especially useful if they
have long definitions, allowing us to not repeat identical definitions, instead defining them in a unit
of logic and then passing the definition for reference. The interface also serves the purpose of being a contract,
as it is often referred, so that anything that uses or expects to use something of a particular interface can
operate as anticipated (this is related to allowing the various robot types in our other example).

Interfaces can use many different keywords with their definitions in order to be more specific, especially for
classes, even defining methods and their parameters for a class (we will see methods in the next example), but
in general their goal is outlined in our provided example. Now, let us go into more detail with classes. Classes
encapsulate a different approach for structure and passing around functions that they anticipate to be used
with their logic.

```ts
// Create Cat Class
class Cat {
  constructor(
    public name: string,
    protected age: number,
    private breed: string
  ) {}

  secretInfo(): string {
    return this.getBreed();
  }

  protected getAge(): number {
    return this.age;
  }

  private getBreed(): string {
    return this.breed;
  }
}

// Create Kitten Class
class Kitten extends Cat {
  getKittenAge(): string {
    return `${this.getAge()} months`;
  }
}

const testCat = new Cat("Purradox", 7, "Calico");
console.log(testCat.name); // 'Purradox'
console.log(testCat.age); // Error
console.log(testCat.breed); // Error

const testKitten = new Kitten("Whiskers", 3, "Tabby");
console.log(testKitten.getKittenAge()); // '3 months'
console.log(testKitten.getBreed()); // Error

console.log(testCat.getBreed()); // 'Error'
console.log(testCat.secretInfo()); // 'Calico'
console.log(testKitten.secretInfo()); // 'Tabby'
```

This really is a loaded example, but it demonstrates a good amount of features that come with using
classes. With classes, their variables are referred to as "properties", and their functions are
called "methods". This aligns more with the train of thought around classes. From a general stand
point, classes resemble the layout of common taxonomies from biology (vertebrate, invertebrate,
mammal, and such). Classes can inherit from other classes, and this is often referred to as a "parent" and
"child" relationship. The parent is structured to allow for the child to exist based off its own
properties and possibly methods. In our case, the `Kitten` class has its own name, age, and breed properties as
well, their setup is just borrowed from the parent. This was done through the `extends` keyword, seen above with
`extends Cat`. It can also be observed that we do not need the function keyword to declare functions (methods)
inside of a class.

We are also introduced to the new keywords `public`, `protected`, and `private`. These are referred to as
access modifiers and relate to the philosophy of classes as well. We will touch on these in the following
paragraphs. At the top of the declaration we have `class Cat{}`. This names the class being created. Inside
of it is the first method that is optional, which is `constructor`. The constructor declares the parameters the
class needs in order to create itself, as well as the logic to be run upon its creation. We see here that the
`{}` for `constructor` is empty, so only the variables will be declared with no additional logic.

We see that each parameter has a key word associated with it, being that variable's access modifier. First is
`public`, which indicates that the property can be accessed wherever an instance of the class exists, or in any
of its child classes. We see this with `testCat.name`. Using the `new` keyword and then specifying which class
you would like to create is referred to as creating an instance of that class. This is its own individual copy
of the class.

> **Note:**
> There is another keyword `static` which allows for a variable to exist across all of the classes that
> are associated with it. This is useful for things such as having a counter (something that tracks a
> number amount) which adds one to itself every time a new instance of the class is created. This allows
> every existing instance the ability to share and access the value at any point in the program. Other
> properties that are not defined as `static` will be unique to the class instance being created. In our
> Cat example, the name, age, and breed properties are completely independent from any other instance,
> having their own values directly tied to only them.

---

> **Additional Note:**
> The following section specifying when errors will be thrown actually depends on the compiler options set for
> Typescript in the tsconfig.json file. By default, Typescript will compile the code to Javascript regardless
> if it detects errors or other issues. This can be changed to not compile based on varying degrees of criteria.
> In other languages implementing these access modifiers, the code may not run or compile at all when used
> incorrectly.

It can be observed that the two other properties actually return errors to us. This is due to both `protected` and
`private` having an increased set of conditions in order to be accessed. With `protected`, the property
can only be directly accessed from within the class itself, or in a child class. Here we see in the
`Kitten` class that it extends the `Cat` class. This means that Kitten inherits its
definition and behavior from `Cat`. It is free to add additional properties and methods that it would like to use,
but it will follow the parent's base template by default with Typescript. Other languages may
require us to use a method to call the parent's constructor in its own constructor, which must be done if it
requires arguments. We also have access to `public` and `protected` methods from the parent within child
classes. In the `Kitten` class we see a method `getKittenAge()` that accesses its `age` property through
`this.age()`. This is done by calling `this.getAge()`, which accesses the method passed down from the parent.

Since `protected` was used as an access modifier, both the property and method can be accessed. If instead this
were `private`, this would not be the case, and we would get an error denying us access. We see here that the
instance of `Kitten` (`testKitten`), calls the Cat class's `getAge()` successfully from within its method
`getKittenAge()`. Our instance calls the `getKittenAge()` method, which allows us to access the protected
property. We could not access the property otherwise from this instance without a method referring to it. This
does not have to be a method from the parent, but instead could have just been a method in the Kitten class that
used the statement `return this.age`, just like the `getAge()` method in the Cat class. It can also be noted
that `getSecretInfo()` does not have a access modifier key word next to it. Due to this, the program will
default to using `public`.

Finally we get to `private`. As I assume you may expect, `private` adds more restricted behavior to our code.
Private properties and methods can only be accessed from within the class they originated in. We see this in the
call above, `testKitten.getBreed()`, which yields an error. This is due to the function being marked private.
This prevents instances from calling the method, as well as child classes themselves. The next line below calls
the same method, but this time on the original class it was defined on, `testCat.getBreed()`. It also receives
an error due to not being able to call the method on an instance. Last we see the call to
`testCat.secretInfo()`, which is successful. This is due to the method defaulting to `public` in the `Cat`
class. Since we can access public methods on a class, and a method within a class can access any information
contained within that class, the method is allowed to access the information. The private property belongs
directly to the Cat class, so a method on that same class can access anything that is private for that class.
This also works for the `Kitten` class, as the method it uses is a public method that lives inside of `Cat`.

## The Functional Way

Making it to this point, you have covered some serious ground. Typically the concept of loops would
have been brought up and explained at this point, but I felt functions and classes deserved the
special attention first. Usually classes are covered much later when giving a programming overview.
To me, classes can almost be seen as objects with methods. Really at the heart of functional
programming languages like JavaScript, they went with this idea of giving objects properties
whose values are actually functions. With the functions, you do not have to give a name after `function()`,
so they would technically be called anonymous functions. You can see in the example below
that the keys for the functions almost serve as their names (though different) despite this. Quite
a bit of the behavior of classes can be mimicked this way as well. The functional part is that
you could call a function to help set up the object, and return the object as the result.

```js
function createPerson(name: string) {
  let _name: string = name; // Private variable

  return {
    _name, // Now _name is a public property
    // Public method
    getName: function () {
      return _name;
    },
    // Public method
    setName: function (newName: string) {
      _name = newName;
    },
    scopedVariable: function () {
      // Local variable within the scopedVariable method's scope
      let within = 0;
      return "Inside scopedVariable";
    },
    tryToAccessScopedVariable: function () {
      return within;
    },
  };
}

const person = createPerson("John");
console.log(person.getName()); // John
console.log(person._name); // John, accessible despite private convention
person.setName("Alice"); // Alice
console.log(person.getName()); // Alice

console.log(person.scopedVariable()); // Inside scopedVariable
console.log(person.tryToAccessScopedVariable()); // Uncaught ReferenceError: within is not defined
```

Here is a simple demonstration of a function that acts like a class. The idea of inheritance gets very
tricky to implement early on with this design architecture. From my personal view point,
functional programming feels more adaptable for smaller tasks. Object oriented programming is nice
for laying out systems that you know will have similarities to pass between your data as with
a parent and child setup.

I think this example illustrates something interesting. You can see `createPerson()` has a private variable
named `_name`. The underscore is a convention, indicating to other developers that it is intended to be
private. This convention can be seen in other programming languages as well, but it is not enforced directly
from the name of a variable. To properly enforce this we would need access modifiers like we had with classes.
The location of the variable is important here. We see the setName key of the object has
a function that has a parameter of `newName`. In it are the contents `_name = newName;`, which takes
the argument provided for `newName`, and assigns it to `_name`. Even though `_name` is declared outside
of the object, the object can assign a value directly to it due to the object being in the function's
scope. We can see the variable does not remain truly private due to it being passed as a property to the object
that we are returning. Typically you would not want to do this in this circumstance, instead leaving the
functions to be the only way to retrieve the private variable if desired. If we did not pass the variable
as a property to the object, `_name` would be reasonably named by convention. This also demonstrates that
functional programming may have less influence on accessibility restrictions according to its paradigm.
If these methods existed on a similarly structured class, the variable would still be modifiable as well. The
difference would be in being able to truly put the access modifiers on the functions and variables, like
`protected` or `private`. This would indeed make accessing the variable directly from outside of the class or
child relationships restricted.

Another factor is the placement of the variable, which can determine where it can be used within
the function. In our case, you can see the third function within the object being held in the `scopedVariable`
key. Currently, the placement of the variable `within` makes it inaccessible for reference with calls to the
function or other functions at the same scope level. This is due to it belonging to the `scopedVariable` scope.
No where outside of this can assign or mutate the variable with another value. The function would have to provide
us with a function within it in order to access the variable. Otherwise, we could pass it as an argument
as we did with newName, and keep track of it in the original function that supplied the object.

The logic contained in a function like this is commonly referred to as a closure. Closures can be seen
as the current functions that have their values being interacted with, but are currently no longer
executing. Here, the `_name` variable can still be manipulated even though the function is not currently
executing. This can be seen as the state of the closure, changing whenever the value of `_name` should
change. I want to specify that a function may still be running while another piece of logic manipulates
its values, but it may be in a suspended state or going through iterations of logic.

## Benefits of Both

This was a pretty high level overview of some abstract concepts like object oriented programming,
and functional programming. You are free to use whichever style suits your needs. Being able to
expose you to the core structure of both seems like it will really pay off in the future. Becoming
a master in either discipline is something to truly admire, but you do not have to be a master to use
either of them. Having the understanding of how to approach problems with this somewhat
subtle design decision will help you look at problems differently. Knowing how to approach
something from multiple perspectives really helps with anticipating future needs, finding
limitations, and really being able to justify the purpose and intent of the code you write or work on.

This last point could be emphasized with a strategy from security, and that is the principle of least
responsibility. According to this philosophy, you should not give anything in your system access
to something that it does not have a need for, or should not be able to access. With classes
it is recommended to make everything private by default, and only move down to protected and
public when necessary.

Following this practice may not seem to make a big difference in our specific case. Upon examining a
scenario that has tens or even hundreds of classes, you could begin seeing how limiting the extent
to which certain classes could talk to each other may be beneficial. This could be as simple as having
a similarly named or identically named variable, but knowing it is specific to the class you are looking at.
We could go over more high level general recommendations for both methodologies, but really it is more
important to start observing how these ideas are constructed and used throughout programming. A common
pattern is that programmers try to decompose logic (or chunk logic) into individual silos. This helps us reason
with what actions are actually occurring, and what we need to be aware of.

## Breaking Down the Bigger Tasks

A fair example of this is gathering input from a user, such as their email. This code is
broken into multiple separate processes that can sometimes pass off to each other like a baton
for runners in a marathon. First there is the presentation, which is the front end, showing the
field to enter the email. When it is submitted, the middleware will kick in before the information
is passed along to the backend (which is responsible for saving data and sending out calls to other
related parts of that system). This includes checking that the email looks like an email (referred to as
validation) and checking that for wherever this field was accessed from, the current user
(or possibly guest) had permission to be on that page, and perform this specific action. This last part
is called authorization.

So we already have three steps, front end, validation, and authorization. Each of these steps can be
handled by their own functions. Validation is interesting because you can check different things on the
front end before going to middleware that lives closer to the backend, but can do more secure checks on the
data passed through. This leads to some of the logic being interwoven, but you will see there are many
strategies to split up logic across files, or have nicely structured functions/methods, leading to
understandable code.

We may lightly touch on the backend a bit, which includes using databases and caching to save data. The goal of
the backend is to be able to setup data for retrieval and updating, or firing off tasks behind the
scenes, such as sending welcome emails, writing logs for errors, or changing the state of an
overall program. There is quite a bit of automation that comes with programming, so you can have
some intricate backend tasks accomplished on a time schedule you specify. The possibilities are
really endless, but these tasks could prune the databases if there was stale data detected, periodically
check if there are unauthorized users in the system, or fire off a warning if a certain threshold
is met in a specified time window. All networking is considered as part of the backend as well.

After mentioning all of that, I assume you can start to imagine all of these individual tasks will
take their own functions and setups to be handled properly as well. Software developers will additionally often
test all of these functions, making sure that their outputs are the desired results. The nice thing
about having tests for your code is that it is easier to improve later on without having to worry about if
you may have broken some of its functionality. Tests can help you catch bugs any time you make
changes to your code base, and can serve as documentation for the code as well. It is sometimes
easier to figure out how to implement a complicated process from a test that had to recreate the
same setup in order to facilitate that process.

The reason I bring up tests is that they actually influence a big part of your design decisions
when implementing something in your code. Structuring your code into smaller units of logic helps
you test specific elements of your logic, instead of having to wait for the final result to check
something. Coming up with quality tests is a valuable skill, and takes some refinement to get a
decent grasp on. Recreating the proper state to test things can be a difficult task to tackle, often
involving creating multiple entities to test something specifically.

Let's say you were going to check a post feature on a website. Ideally you would be able to create a new
user in that test, give them the appropriate credentials to access the post functionality, whether that is
by roles or groups on a site, generate all the appropriate parts of a post (this may include a title, a
text body, and possibly an image), and see that it was all saved correctly. Nowadays there are
frameworks and tools that assist you in creating these test users and test features on your site.
You can also handle how these tests behave, whether the data they generate persists to be used for
comparisons against tests done on other machines or at another time, or data only lasts for the
lifetime of the test. Ideally your setup will have your tests saving to a test database instead of
your actual database so that data is not created or destroyed unintentionally.

## Wrapping Up

You can see there is quite a bit to do for even seemingly straightforward tasks. The really
nice thing about functions is that if you design your code in an intelligent manner, you
can actually re-use quite a bit of your logic so you do not have to repeat yourself in areas
that are slightly different from each other. This encourages you to make functions and code that
focuses on specific subtasks, and allows for them to slightly adapt and create boundaries.
With these intentions, your functions will naturally develop to consider what is allowed and
what is not, giving them more use for rejecting input that should not go through. The more
useful a function becomes, the more people will tend to use it. Always be careful not to give
one function or class too many responsibilities, as logic that should be unrelated could cause
issues in the code that happens to be paired with it.

[![Previous](https://img.shields.io/badge/Previous-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch2.md)
&nbsp;
[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch4.md)
