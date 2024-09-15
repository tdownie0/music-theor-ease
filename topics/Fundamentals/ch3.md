## Chapter 3: Functions

Now we will get into elaborating on functions. Functions are almost the life
and blood of programming. Without functions, the programs we have today may very well
be impossible to get working, or would take far more work than could be reasonably expected.
I think the most relatable comparison to a function is a cooking
recipe. A recipe tells you the exact steps and ingredients you need in order to
get the result you are looking for. In essence that is all it is. There just
tends to be many considerations we can factor in depending on what we are
trying to accomplish.

With functions, really the main focus should be giving it a single responsibility
for a task. The more focused the task is, the easier it becomes to remember
which task is responsible for which action. A quick example would be a game that had
three different slots, each corresponding to a certain amount of points based on its contents. You
could write a program in such a way that you always had each slot's individual contents
wrapped up in the main logic of the program. The other way you could
do it is make a function for each slot, and then have the program call those
functions based on which ones you needed at the moment. These could be calls to functions
named `getScoreSlotOne()`, `getScoreSlotTwo()`, and `getScoreSlotThree()`. Later we will also be introduced
to objects, which can have their own functions that belong to them. If in this case they were all slot objects,
we could have variables assigned to the objects named `slotOne`, `slotTwo`, and `slotThree`. With this each one
could call their own getScore function as such, `slotOne.getScore()`. This would be one way to help us from
duplicating logic.

Now anything you have setup for each specific slot would be completely independent of the
others. If you were looking for whichever one had the highest score, or wanted to leave one out, you could also
have a function that compared scores for you based on the ones you wanted to evaluate. Based on these results,
you could have another function that would be responsible for turning a slot's lights on, or having a sound
effect play. This becomes much easier to manage when you have a program that does several things.

I wanted to briefly give an abstract overview of what will be going on overall, but we will start
laying out some real functions and demonstrating examples of them in use. Different paradigms use functions in
different ways, so we will touch on the layouts you can achieve by making certain structural decisions. We will
go ahead and start with these first examples:

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

Here we have `sayHello()` and `sayHelloWolrd()`. You see both of their return types are void, which means
they do not pass back a physical value, instead printing to the console. The last function `giveFour()`
does return a value, and in this case it would assign 4 to myNumber. I threw somewhat of a curve
ball at you right from the start, and you may have noticed it in `sayHelloWorld()`. The most interesting
part about this function, is that it actually calls another function, and then runs another line itself.

I put the comments with "Function Declaration Area" around the functions to help illustrate that
the section that is contained within works differently than the code below it, marked as executing at
runtime. Specifically, what the executed portion refers to is the actual code that will be called and executed
during the course of the program's runtime. If the functions were not called in this portion, they would still be read and stored in memory, but their body's would not be executed during this phase.

When the program runs and it sees a function call like sayHello(), it
looks up if it has a reference to such a function, and if it does, it will run that code associated
with that function. This helps enormously. You can really put as much code as you want
in the functions, and then call them on a single line. This makes understanding a large code base
manageable. The function calls could be anything, `startRobot()`, `generateDungeonBoss()`,
`findAllSchrodingersCats()`, and `simulateLivingOrganism()` are examples. There is no telling how
large or small any of these functions could be, but I feel I could tell you something about their
purpose just from their names.

If you consistently use names that are as descriptive as possible, your code can almost read like a story.
Giving yourself as many advantages as you can for reading code again in the future will pay yourself back
many times over for actively maintained code. One of the realities with coding, and really with writing in
general, is that we will read far more than we could ever possibly write.
In general, glancing over and reading something quickly is something we do almost mindlessly. Writing
generally takes much more time due to physical limitations, and the process of juggling ideas.

## Passing Parameters

Functions can accomplish quite a bit. One great thing they can do is accept arguments. Arguments
are actual values passed into a function. A function can define a parameter that it expects as
input when the function is called, and this is considered the argument provided.

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(2, 3));
```

Here is an example. You see in the function definition it actually has `a` and `b` between its
parenthesis. This indicates that they are parameters necessary to run the function, as the
function's output depends on them. In most cases, `a` and `b` as names is terrible as they
are not descriptive, but we can almost get away with it here thanks to TypeScript specifying
that they are numbers. Short names like this or "x, y, z" and such could be common if it were
involved in a program or library that uses many mathematical equations. It may be common notation
in those circumstances as well, so these could be good use cases. Most times though, you want to
use descriptive names. In this case using `number1` or `first` may seem redundant or not help much.
In general, I would try to avoid names with numbers like `number1`, due to the numbers possibly
being confused as letters. In some cases the `1` may resemble the letter "l" very closely.

So here, with 2 and 3 passed into `addnumbers()`, the function will look like this when it runs:

```ts
function addNumbers(2, 3): number {
    return 2 + 3
}
```

At least in memory that is what it will resemble while it is running. So just like in algebra, we
replace the placeholder values with the values we currently need to use. It should be noted that
the order of the arguments passed to the function will determine which parameter they will represent
inside of the function. In programming, these arguments can be many different types, including all of the
primitive types, and even functions. When functions are passed to functions as parameters, they are
referred to as callbacks. You could think of it as leaving a phone number for a function to call and use
when it is time. It really is that straight forward, and allows for some great flexibility. You could
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

If you can follow that logic, that really is a huge leap. We get to reuse our `createRobot()` function
with as many different kinds of plans we could come up with, so long as the plans all follow the
same sets of basic rules, and interact with `createRobot()` almost the same way. That last part is
hard to phrase because this leads you into conditions where you would like additional things, but
also need to allow for the original things to work the way they were, or gain something from a new
addition. This feels okay at times to stretch out the responsibility of a function to accommodate for more use
cases, but it starts getting tricky when the functions have to share a large amount of unrelated logic to
all the other use cases in order to keep working. A sign of this can be having large parameters for
functions, usually three or more. You can pass objects as parameters which sort of stretches the amount
rule, but it would be something like `robotInformation` in the code above, so conceptually we would
see it as one related entity. The trouble comes from trying to track too many moving parts that can
seem independent of each other.

Here, the `robotInformation` object may be used in createRobot before or after the `plansForRobot()` function.
It may be things as simple as the name, size, color, and such. The waters would start to become
muddied if you were to include things like model number, number of attachable parts, spare parts, power
consumption, alternate settings, and other things such as this, as they may be more related to the type of robot
that we were constructing. Properties such as these may be strange to pass through if one type did not expect to
use this information, or worse, cause our construction to fail if a property were left out but was still
attempted to be accessed. If the objects were expected to hold more complex data like this, it may be better
to pass the `robotInformation` directly to the `plansForRobot()` function as a parameter, and specify the
specific type of `robotInformation` object to be passed as an argument. If this approach were taken, a warning
or error could be displayed early, indicating the wrong type was passed through, or default parameters could be
added based on a check included in the logic to ensure that the program does not crash unexpectedly.

Overall, the main goal of all of this is to abstract information from the main flow of our program
so that we can visualize it from a higher level. There could easily be thousands of functions in a
code base, and having it broken up into units helps to isolate things from each other. This makes
things easier to reason with, as well as track down when things start to go wrong. It is not much
help if something goes wrong and you have to search the entire program every time that you need
to fix something.

## Classes

Classes are another mental construct we use to organize logic. Using classes is related to a paradigm
called Object Oriented Programming (OOP). Above when we demonstrated the callback, this was leaning
more towards functional programming design wise. Classes could be passed functions as well, though typically
this is done through passing different types of objects that adhere to a particular interface, a process referred
to as dependency injection. We will touch on this later, but classes have a different approach to passing around
functions that they anticipate to be used in their logic.

```ts
// Create Cat Class
class Cat {
  constructor(
    public name: string,
    protected age: number,
    private breed: string
  ) {}

  private getBreed() {
    this.breed;
  }

  secretInfo() {
    return this.getBreed();
  }
}

// Create Kitten Class
class Kitten extends Cat {
  getAge() {
    return `${this.age} months`;
  }
}

const testCat = new Cat("Purradox", 7, "Calico");
console.log(testCat.name); // 'Purradox'
console.log(testCat.age); // Error
console.log(testCat.breed); // Error

const testKitten = new Kitten("Whiskers", 3, "Tabby");
console.log(testKitten.getAge()); // '3 months'
console.log(testKitten.getBreed()); // Error

console.log(testCat.getBreed()); // 'Error'
console.log(testCat.secretInfo()); // 'Calico'
```

This really is a loaded example, but I think it shows a majority of features that come with using
classes. With classes, their variables are referred to as "properties", and their functions are
called "methods". This aligns more with the train of thought around classes. From a general stand
point, classes resemble the layout of common taxonomies from biology (vertebrate, invertebrate,
mammal, and such). Classes can inherit from other classes, and this is often referred to a "parent" and
"child" relationship. The parent is structured to allow for the child to exist based off its own
properties. In our case, the `Kitten` class has a name, age, and breed property as well, their setup is just
borrowed from the parent. It can also be observed that we do not need the function keyword to declare
functions (methods) inside of class.

You may have also noticed the new keywords `public`, `protected`, and `private`. These properties
come with the philosophy of classes as well. At the top of the declaration we have `class Cat{}`. This
names the class we wish to create. Inside of it is the first method that is optional, which is
`constructor`. The constructor declares the parameters the class needs in order to create itself, as
well as the logic to be run upon its creation. We see here that the `{}` for `constructor` is empty,
so only the variables will be declared with no additional logic.

We see each parameter has a key word associated with it which actually dictates that variable's access
modifier. First is `public`, which indicates that the property can be accessed wherever an instance of the
class exists, or in any of its child classes. We see this with `testCat.name`. Using the new keyword
and then specifying which class you would like to create is referred to as creating an instance of that
class. This is its own individual copy of the class.

> **Note:**
> There is another keyword `static` which allows for a variable to exist across all of the classes that
> are associated with it. This is useful for things such as having a counter (something that tracks a
> number amount) which adds one to itself everytime a new instance of the class is created. This allows
> every existing instance the ability to share and access the value at any point in the program. Other
> properties that are not defined as `static` will be unique to the class instance being created. In our
> Cat example, the name, age, and breed properties are completely independent from any other instance,
> having their own values directly tied to only them.

You see the other two properties actually return errors to us. This is due to both `protected` and
`private` having an increased set of conditions in order to be accessed. With `protected`, the property
can only be directly accessed from within the class itself, or in a child class. Here we see in the
`Kitten` class that it extends the `Cat` class with `extends Cat`. This means that Kitten inherits its
definition and behavior from `Cat`. It is free to add additional things it would like specifically at its
creation, but it will follow the parent's base template by default with Typescript. Other languages may
require you to call a method to call the parent's constructor, which must be done if it requires
arguments. You also have access to `public` and `protected` methods from within child classes. In the
`Kitten` class we see a method `getAge()` that accesses `this.age` from the `Cat` class, which is
`protected`. Since it is this access modifier, we can access the property directly in this case. If this
were `private`, this would not be the case, and we would get an error denying us access. We see the the
instance of `Kitten` (`testKitten`), calls the `getAge()` successfully. The method allows access to the
property. We could not access it otherwise from this instance. You will notice that `getAge()` does not
have a access modifier key word next to it. Due to this, the program will default to using `public`.

Finally we get to `private`. As I assume you may expect, `private` is the first two levels of access
restriction, and adds another layer. Private properties can only be accessed from within the class
they originated in. We see in the call above, `testKitten.getBreed()`, which yields an error. This
is due to the function being marked private. This prevents instances from calling the method, as well
as child classes themselves. The next line below calls the same method, but this time on the original
class it was defined on, `testCat.getBreed()`. It also receives an error due to not being able to call
the method on an instance. Last we see the call to `testCat.secretInfo()`, which is successful. This
is due to the method defaulting to `public` in the `Cat` class. Since we can access public methods
on a class, and a method within a class can access any information contained within that class,
the method is allowed to access the information. The private property belongs directly to the
Cat class, so a method on that same class can access anything that is private for that class.

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
function createPerson(name) {
  let _name = name; // Private variable

  return {
    getName: function () {
      // Public method
      return _name;
    },
    setName: function (newName) {
      // Public method
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
console.log(person.getName()); // Accessing private variable
person.setName("Alice"); // Modifying private variable
console.log(person.getName()); // Accessing modified private variable

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
private. The location of the variable is important though. We see the setName key of the object has
a function that has a parameter of `newName`. In it are the contents `_name = newName;`, which takes
the argument provided for newName, and assigns it to `_name`. Even though `_name` declared outside
of the object, the object can assign a value directly to it due to the object being in the function's
scope. This makes the variable not truly private, but if these functions did not exist `_name` would be
reasonably named for convention. This also demonstrates that functional programming may have less
influence on accessibility restrictions according to its paradigm. If these methods existed on a
similarly structured class, the variable would still be modifiable as well. The difference would be
being able to truly put the access modifiers on the functions, like `protected` or `private`. This
would indeed make modifying the variable outside of the class or child relationships restricted.

Another factor is the placement of the variable can determine where it can be used within
the function. In our case, you can see the third function in the object held in the `scopedVariable` key.
Currently, the placement of the variable within makes it inaccessible to calling functions or other
functions at the same scope level. This is due to it belonging to the `scopedVariable` scope. No where
outside of this can assign or mutate the variable with another value. The function would have to provide us with a function within it in order to access the variable. Otherwise, we could pass it as an argument
as we did with newName, and keep track of it in the original function that supplied the object.

The logic contained in a function like this is commonly referred to as a closure. Closures can be seen
as the current functions that have their values being interacted with, but are currently no longer
executing. Here, the `_name` variable can still be manipulated even though the function is not currently
executing. This can be seen as the state of the closure, changing whenever the value of `_name` should
change. I want to specify that a function may still be running why another piece of logic manipulates
its values, but it may be in a suspended state or going through iterations of logic.

## Benefits of Both

This was a pretty high level overview of some abstract concepts like object oriented programming,
and functional programming. You are free to use whichever style suits your needs. Being able to
expose you to the core structure of both seems like it will really pay off in the future. Becoming
a master in either discipline is something to truly admire. You do not have to be a master to use
either of them though. Having the understanding of how to approach problems with this somewhat
subtle design decision will help you look at problems differently. Knowing how to approach
something from multiple perspectives really helps with anticipating future needs, finding
limitations, and really being able to justify the purpose and intent of the code.

This last point could be emphasized with a strategy from security, and that is the principle of least
responsibility. According to this philosophy, you should not give anything in your system access
to something that it does not have a need for, or should not be able to access. With classes,
it is recommended to make everything private by default, and only move down to protected and
public when necessary.

Following this practice may not seem to make a big difference in this case. Coming up with a
scenario that has tens or even hundreds of classes, you could begin seeing how limiting how
much certain classes can talk to each other may be beneficial. This could be as simple as having
a similarly named or same name variable, but knowing it is specific to the class you are looking at.
We can go over some high level overall general recommendations for both methodologies, but
really just start to see how ideas are constructed in programming. A common pattern is that we
try to decompose logic (or chunk logic) into individual silos. This helps us reason with
what actions are actually occurring, and what we need to be aware of.

## Breaking Down the Bigger Tasks

A fair example of this is gathering input from a user, such as their email. This code is
broken into multiple separate processes that can sometimes pass off to each other like a baton
for runners in a marathon. First there is the presentation, which is the front end, showing the
field to enter the email. When it is submitted the middleware will kick in before the information
is submitted to the backend (which is responsible for saving data and sending out calls to other
related parts of that system). This includes checking that the email looks like an email, called
validation, and checking wherever this field was accessed from, that the current user
(or possibly guest) had permission to be on that page, and perform that action. That last part
is called authorization.

So we already have three steps, front end, validation, and authorization. Each of these steps can be
handled by their own functions. Validation is interesting because you can check different things on the
front end before going to the backend where the middleware lives, but also do more secure checks on the
actual backend. This leads to some of the logic being interwoven, but you will see there are many
strategies to split logic across files, or have nicely structured functions/methods, leading to
understandable code.

We may lightly touch on the backend a bit, using databases and caching to save data. The goal of
the backend is to be able to setup data for retrieval and updating, or firing off tasks behind the
scenes, such as sending welcome emails, writing logs for errors, or changing the state of an
overall program. There is quite a bit of automation that comes with programming, so you can have
some intricate backend tasks accomplished on a time schedule you specify. The possibilities are
really endless, but they could prune the databases if there was stale data detected, periodically
check if there are unauthorized users in the system, or fire off a warning if a certain threshold
is met in a specified time window. All networking is considered as part of the backend as well.

After mentioning all of that, I assume you can start imagine all of these individual tasks will
take their own functions and setups to handle properly as well. Software developers often test
all of these functions as well, making sure that their output is the desired result. The nice thing
about having tests for your code is that it is easier to improve on it later without worrying that
you may have broken some of its functionality. Tests can help you catch bugs any time you make
changes to your code base, and can serve as documentation for the code as well. It is sometimes
easier to figure out how to implement a complicated process from a test that had to recreate the
same setup to accomplish the same goal.

The reason I bring up tests is that they actually influence a big part of your design decisions
when implementing something in your code. Structuring your code into smaller units of logic helps
you test specific elements of your logic, instead of having to wait for the final result to check
something. Coming up with quality tests is a valuable skill, and takes some refinement to get a
decent grasp on. Recreating the proper state to test things can be a difficult task to tackle at
first, involving creating multiple entities to test something.

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
can actually re-use quite a bit of your logic, so you do not have to repeat yourself in areas
that are slightly different from each other. This encourages you to make functions and code that
focuses on specific subtasks, and allows for them to slightly adapt and create boundaries.
With these intentions, your functions will naturally develop to consider what is allowed and
what is not, giving them more use for rejecting input that should not go through. The more
useful a function becomes, the more people will tend to use it. Always be careful not to give
one function or class too many responsibilities, as logic that should be unrelated could cause
issues in the code that happens to be paired with it.
