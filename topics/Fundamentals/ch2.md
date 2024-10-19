## Chapter 2: Types of Data

We will go over the general types of data structures used in all programming
languages. Some languages have quite a number of data types, each a little bit
different than the other memory storage wise (as with our example of integer
compared to number in chapter one). Knowing the categories of data is much more
important than memorizing each specific type, and thankfully, Typescript really
only uses the general types at its core. You can create more (and we will go
into that), but the language does not split hairs when it comes to memory size.
This helps develop faster, and as previously mentioned, helps remove complexity
that comes with knowing what data size would be best in a situation.

Of course knowing about various data types can be useful, but it is often the case that computers
nowadays are powerful enough that the wasted memory really is not a concern. Once someone
gets into the deeper corners of programming, being aware of specific types will certainly be
useful. It is almost guaranteed that most will be exposed to these data types during their
coding journey without needing to put a huge deal of focus into them. So it is always possible
to study these topics deeper when the time comes.

With that considered, it is my belief that these two data structures we are about explore are major cornerstones
in the foundation of what makes programming work as it does today. How they work themselves is quite involved, but
someone does not need to know how to make a car in order to drive one. We will cheat and explore something that
looks simple at first glance, but in actuality is already more complicated than it seems.

```ts
const name: string = "Boba";
```

This data type is called a string. We can see the variable is a constant by the `const` keyword.
The name of the variable is `name`. The type comes where `: string` is, just like with where `: number` was
in our other example. And last, it is given the value of `Boba` through the `=` assignment operator. So with this
variable assignment, our `name` variable is equal to `Boba`. The quotations here actually denote a
a region where information will be provided. It is perhaps convenient that we already are accustom to
the quotations being associated with words, but often a common annoyance is trying to use `""` inside
of another set of quotations. This is handled by wrapping the quotations in single quotes (`''`) or
vice versa if desired. The first `"` denotes the start of the information provided, and the closing
`"`, marks the end. They are used in a similar way that we use parentheses in writing to contain a unit
of information, but parentheses are used in many ways in programming, so do not use parenthesis (i.e. `()`)
instead here.

In this example, the information provided to the `""` region are the letters "B", "o", "b", "a". The
computer actually stores them individually as well. Anything you see with `""`, or `''`, or ` `` ` are
strings. The last ones (` `` `, backticks, which are on the tilde key), are actually special in Javascript/
Typescript, but we will talk about that later. So when upon seeing any of these, it is good to think of
them as starting and closing regions. When enclosed within these, numbers are also instead considered strings
instead of numbers. So `"3"` is not the same as `3`. They can still be compared, but more on that later.

How does the computer store the letters "B", "o", "b", and "a" individually to make up the entire string?
The string is actually stored in something called an array. Specifically in this case the array is:

```ts
["B", "o", "b", "a"];
```

Here we see they are wrapped in another region with a starting position, and an ending position. This time
with square brackets (`[]`). This lets the computer know that these letters belong together. A subtle caveat
is that strings actually contain another value, typically inferred by the computer, in their array to tell the
computer where the string ends. In C it would look like this:

```c
['B', 'o', 'b', 'a', '\0']
```

The `\0` is actually called the null character in C. It uses this to know when to stop for many
calculations and functions. Another interesting thing to point out with this, is that the letters are
written with single quotes in C. For example the `'B'`. In this case `'B'` is actually called a `char`
(short for character), since it is a single letter. Strings are made up of an array of chars.

In many modern languages it would be rare to encounter a string represented as an array in this manner.
Even in C they have the shorthand:

```c
char name[] = "Boba";
```

It is evident the word `string` is not used as a type here, instead using the type `char` and putting
the `[]` next to the variable name to indicate it is a `char` array. This is referred to as a string in
this case, the abstraction for the type just came later. This is pointed out to demonstrate that
the computer is the only one who sees the string as the array. Knowing this will help with understanding
how the computer is able to figure out things like how many letters belong to a word, and give us a deeper
look into how memory really works.

We do not need to go into this much further, but it may be confusing to some as to why the computer has trouble
counting:

```ts
["B", "o", "b", "a"];
```

There are obviously four elements. Why is it hard for it to tell? The real answer is that the variable that
contains the array is actually pointing to a section of memory on the computer, which starts at a memory address.
The computer has to have a starting point and ending point for that information. Computers do not see the
starting `[` and the closing `]` as we do. It may have something analogous to these brackets for a program, but
in between them is all of the data available to the program itself. So to break up the memory, it needs
characters like the null operator (`\0`) to distinguish sections, or memory regions.

As a disclaimer, there are many things in place today to prevent a program from being allowed
outside of its designated bounds memory wise. In the past, and still if done incorrectly (or purposely)
with lower level languages like C, these variables that held memory addresses caused many problems.
These memory addresses can be referred to with what are known as pointers. They literally hold the value of the
address where the data we want lives. It is similar to knowing the address of someone's home. This would
often be seen as below in C:

```c
// The "*" indicates the variable is a pointer
char *name = "Boba";
```

Why is having an address so bad? Inherently it is not, and it is actually needed by design. The
wrinkle starts to appear when programmers have trouble using the addresses properly, or forgetting
to release the memory that it claimed during runtime. All memory used has to be asked for, and
then at the end, given back. At least in theory, this is how it is intended. Using addresses incorrectly
can lead to overwriting information that is stored in other memory regions on a computer, or if
someone intended to, read information or execute programs for malicious means.

## Arrays and Objects

Making it through the above section is no small feat. Honestly, that was much more information
than I had intended to explain at first, but also felt that it would truly be worth the time to gain
more understanding. It took me years to grasp all of that accurately, so even understanding a portion of it
puts someone closer to my understanding in the matter of minutes. Really, a vast majority of the complicated
things in programs are made of arrays. Often arrays with combinations of other arrays.

Let us remark on something about position values. With our last string `"Boba"`, each letter has a
position value. These values are referred to as "indexes". Here is a table demonstrating:

| Index | Character |
| :---: | :-------: |
|   0   |     B     |
|   1   |     o     |
|   2   |     b     |
|   3   |     a     |

So it can be seen that the first number used is actually 0. This is something that takes some getting
used to, but it is interesting. Computer Science went ahead and used 0 as the first single digit instead of 1.
As to why this is may be more of a discussion between Mathematicians and Computer Scientists. Here it represents
the offset from the starting address of the array.

We can implement this information like so:

```ts
const name: string = "Boba";
console.log(name[0]); // 'B'
console.log(name[1]); // 'o'
console.log(name[2]); // 'b'
console.log(name[3]); // 'a'
```

In this code snippet we can see our variable `name` is set to `"Boba"`. We then use the variable
with an index of the array element that we would wish to access. Here, `console.log()` would print out the
corresponding letters of the name. Hopefully that makes sense! With that mapped out, let us examine
what putting an array inside of an array would look like.

```ts
const ticTacToe: string[][] = [
  ["O", "", "X"],
  ["X", "O", ""],
  ["", "X", "O"],
];
```

That may not have been as scary as some anticipated. Using the game of Tic-Tac-Toe seems like a very
practical example. Here, we declared a constant with the variable name `ticTacToe`. The casing of
the name of the variable is something called camel case (also spelled camelCase), and is a common convention in
TypeScript/Javascript. The standard is to lead with a lowercase letter, and then capitalize the next
letter anywhere there is typically a space or a separator before hand. We can see the type is
`string[][]`. That would be an array of string arrays. We need this due to having multiple rows.
This also gives us columns, just like with matrices in math. They are actually indexed in the same order too,
which is row then column. Here is how we would access the winning combination of `"O"`.

```ts
const ticTacToe: string[][] = [
  ["O", "", "X"],
  ["X", "O", ""],
  ["", "X", "O"],
];

console.log(ticTacToe[0][0]); // 'O'
console.log(ticTacToe[1][1]); // 'O'
console.log(ticTacToe[2][2]); // 'O'
```

Those would be all of the `"O"` characters from the top left to the bottom right.
An interesting thing about computers is that we can separate the front end
display that a user sees, from the actual logic that operates on something. In this case with our
Tic-Tac-Toe game, we could abstract the characters to numbers. They would then represent on and off
states for each value. With this we could then later ask for this information, and update the front
end to display whatever symbols or letters we wanted in those corresponding positions.

```ts
const ticTacToe: number[][] = [
  [1, 0, 2],
  [2, 1, 0],
  [0, 2, 1],
];
```

Here we see all the characters were replaced with numbers. Now somewhere else can decide what goes with
the 1's, 2's, and 0's. In our case, the 1's were `"O"`, the 2's were `"X"`, and the 0's were `""`.

Having this structure allows for many things, especially once we know how to manipulate it. There are
several functions built into languages just for the purpose of working with arrays and their common use
cases. Knowing this, constructing something like a word search would be easy to store in data.
You would just make an array of arrays of the letters you were using.

Constructing a maze could also be done like so:

```ts
const maze: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
];
```

With this, we could have the 1's represent the correct path. We could also add additional numbers
to represent things like trees, rocks, water, lava, or several other things if we were making a game.
Quite a bit can be done with just a little.

As can be seen, just having this simple layout has given us a chance to represent somewhat complicated
ideas almost effortlessly. Ones and zeros may be the easiest to start with (Usually depicting "On" and
"Off" states). These two examples were two dimensional arrays. Also as a side note, we can see that
each of these arrays have their own line so that it is much easier to read. Programmers often try to make code
more appealing to the eye, and easier to sift through. It really helps with maintaining code in the long
run. The formatting below would make the same information much harder to decipher:

```ts
// Do not layout data like this
const maze: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],[0, 0, 0, 0, 1, 1, 1, 0],[0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0],
];
```

We will go into sensible styling as well as tools to help automate this process later, so do
not fret about getting things exact. It is often quicker to let tools like auto formatters adjust this
for us, and they tend to drastically improve consistency. Still, it is good to have the thought
of trying to make data somewhat presentable when working with it as a consideration. In this case,
our data appears to lose some of its visual meaning with the different shape.

Arrays are undoubtedly amazing by themselves. There are many things that came along due to them, and the
big one we will be discussing is the Associative Array. Making an Associative Array can be done in two
major ways, by using hash tables or search trees. There are multiple variations of each, but the end
product is very useful.

```ts
const person1: Record<string, number | string> = {
  id: 443,
  name: "Steve",
  occupation: "Warrior",
};
```

This is an example of an associative array, or in Typescript/Javascript(TS/JS), an object. It has other
names such as maps, dictionaries, or key-value stores. We see here that TypeScript uses the word Record
to indicate the object type, and specifies that it contains a `string` in its first position, and
either a `number` or a `string` in the other. In the expression `number|string` the `|` stands for the
logical OR condition. This works probably as most would expect, representing that we can use one type or the
other. In TypeScript they refer to this as a union, but is not essential to know this at the moment.

Now that the type is out of the way, let us look at what we can do with our variable `person1`.

```ts
const person1: Record<string, number | string> = {
  id: 443,
  name: "Steve",
  occupation: "Warrior",
};

console.log(person1["id"]); // 443
console.log(person1["name"]); // 'Steve'
console.log(person1["occupation"]); // 'Warrior'
```

That is pretty cool. We no longer have to remember everything as number indexes. With this, we can now
store information under keys that are strings. Really looking at the layout this provides, it just
feels like we can have an intuitive sense of how to give objects properties. In TS/JS another
interesting way to get the same data would be like this:

```ts
console.log(person1.id); // 443
console.log(person1.name); // 'Steve'
console.log(person1.occupation); // 'Warrior'
```

Upon exposure to more languages, it will become clear that some languages access data in different
ways, and even in multiple ways. The dot operator above can be useful because it takes less to type, and makes
accessing deeper objects easier as well, for example:

```ts
const person1: Record<
  string,
  number | string | Record<string, number | string>
> = {
  id: 443,
  name: "Steve",
  occupation: "Warrior",
  magicSword: {
    color: "Blue",
    power: 97,
  },
};

console.log(person1.magicSword.color); // 'Blue'
console.log(person1.magicSword.power); // 97
```

Here we had to add another data type, which is the same as our original, `Record<string, number | string>`.
It is named `magicSword`, and inside of it contains two keys, `color` and `power`. We can see the
`magicSword` object is accessed by first accessing the `person1` object, and then itself accessed for
the values of its keys `color` and `power`. This access pattern would have also been correct:

```ts
console.log(person1["magicSword"]["color"]); // 'Blue'
console.log(person1["magicSword"]["power"]); // 97
```

Accessing the values through their keys in this manner just involves a bit more typing. It could also
be necessary to use this access method depending on how the key is used, its format (it has spaces
or `-`), if it uses leading numbers, or if it is a symbol type in Javascript. Do not worry about the specifics,
just know that using dot notation, such as `person1.magicSword.color`, may not always work. If it does not,
the other access method with array syntax may be required.

By the way syntax is a very common term thrown around. Here is a quick definition from Google AI for programming
in specific:

Syntax is the set of rules that define the structure of a programming language, including the structure of
words, punctuation, and symbols.

## Nested Objects and Hashing

Understanding how computers see and operate on arrays and objects is a large subject. Pointers also lead
to things such as linked lists, which we will not touch on here at great length. Conceptually, they and other
data structures allow us to reference smaller units of data to make a larger whole, just like with arrays and
objects. Nested objects and arrays are often points of struggle for people starting programming.
What is important, is to see how this is another way of breaking up data to make it increasingly
more specific, using different nesting levels. Nesting refers to the concept of how in our example the
`magicSword` object was inside of the `person1` object. It belongs to the `person1` object, but at the same
time, it has more than one thing that belongs specifically to itself.

One thing may have been puzzling up until now. If we went through all that trouble of explaining
what strings were, why was it so easy for the associative array (a.k.a. object in TS/JS) to use
them? In the case of our object, a hash map is actually being used to generate the values (keys) of
where to store the values in the object variable. This means that it takes a key like `"id"` and runs
a function (defined operation) on the characters `"i"` and `"d"`, and then is returned a number at
the end. This can get as complicated or simple as we want. Usually the more cryptography involved,
the more mathematically intensive this becomes. Luckily this is taken care of for us, so we do not
have to worry about the specifics.

> **Note:** If the reader is interested, there are quite a few considerations that come into play when creating
> an appropriate hashing algorithm. It could be something as simple as counting how many letters are in a
> string. In our case, this would result in the number two being generated. As a result our person1 object
> would resemble an array that looks like this access wise internally:
>
> `person1[2]`;
>
> What we knew as `"id"` is now the number 2. The trick is that the hashing algorithm can almost be
> anything. This example points out something interesting. One may think, what
> happens if we have another string key that is two characters long? In this case the value would
> access the same index as our other key. This is referred to as a collision. Both inputs yielded the same
> output. Behind the scenes many modern languages will do things like putting an array for the key's value,
> and then index the additional entries, keeping track somewhere else. A hashing algorithm with a
> minimal collision space is often considered more secure. This usually requires much more complex math.

## Primitive Types

Now that we have made it through what may be considered the more difficult data types, let us go over
the more straightforward ones. Here are the primitive data types in TypeScript:

| Primitive Types |
| :-------------- |
| number          |
| string          |
| boolean         |
| null            |
| undefined       |
| symbol          |

We have already seen the `number` and the `string` types. The ones we will be discussing here are the
`boolean`, `null`, and `undefined`. A boolean type can be one of two values, `true` or `false`.
The null type represents a value that is deliberately empty. Undefined as a type represents a state
where a variable is created, but it is not assigned a value. A function also returns `undefined` if another
value is not returned. We will touch on functions in the next chapter.

```ts
// Boolean
let first: boolean = true;

// Null
let second: null = null;

// Undefined
let third: undefined;
```

Above are basic examples. In these examples we see the use of `let` instead of `const` due to the typical
nature of the types. A boolean variable commonly switches between `true` and `false` often, possibly
representing something as simple as "on" and "off" states like light switches.

For the `second` variable, we can see it is directly assigned to `null`. This could be used to clear an
object reference. So we could have done this for our person1 object from before if we declared it with `let`
instead of `const`, and changed its value to `null` with
the intention to free its memory at some point. Languages do this through a process called garbage
collection, and the decisions it makes can get quite involved and occur at predetermined times according to the
language. In this case with TypeScript, it does not make much sense to only assign the value type
to `null`. It can never have another value at this point. You will see this commonly paired with another
type.

Originally this was handled manually by assigning pointers certain amounts of memory, and then
remembering to free the memory. Many modern languages handle this automatically behind the scenes now.
It is easy for the computer to determine the size of an exact data type in a languages like C, but
pointers had to be given the ability to grow and shrink in memory dynamically. This is due to their values
being an unknown length by nature. An easy example is someone's name. We could make a string to hold
someone's name, but any name is valid. Not all names are the same length though, so something like this
would have to be able to adjust. This can also be seen in cases that involve adding and removing
things from memory. For pointers it was quite common to start their values with null, indicating that they
do not currently point to a valid space in memory.

Last we have undefined. Looking at the `third` variable, we see it actually is missing an
assignment operator (`=`). Programming languages allow us to define variables without giving them a
value immediately. This is due to the nature of variables having the potential to be changed
frequently. If something in TS/JS is declared but does not have a value assigned to it, then it
will return undefined if accessed to be read before it is assigned another value. One will also encounter
undefined if they try to access an object key that does not exist on the current object. Undefined is a practical
type. C actually does not explicitly have a type for this, but the variables would still be said to be undefined.
This variable would also most likely not occur, due to not having much need for a value that can
only be undefined. So it is commonly in a union with another type as well.

And there we have it. These types are important to know about, but the most common will likely be
`number`, `string`, and `boolean`. The last on the list is `symbol`, but this type is not as
common across programming languages. The other types are all included with other languages. In
general symbols ensure that a value will be unique.

```ts
const mySymbol: symbol = Symbol("key");
```

Here, `mySymbol` could be used as a key in an object and it would be guaranteed to be unique.
Symbols can also be used in other capacities, but feel free to look into them another time.
This type is not even remotely as common as the other types.

## Object Types

Now that you made it through the difficult types, these last ones you mostly already know.

| Object Types |
| :----------- |
| object       |
| array        |
| function     |

We already went over objects and arrays:

```ts
// Array
let groceryList: string[] = ["carrots", "cheese", "cheesecake", "bread"];

// Object
const myCar: Record<string, number | string> = {
  licensePlate: "5X7-D13",
  make: "Toyota",
  year: 2019,
  color: "Blue",
};
```

Functions are at the bottom of the list, and we will be covering those in quite some detail. There
will be chapters dedicated to functions and different frameworks for conceptualizing how to use them
together in order to build larger ideas. Ultimately, functions allow us to define units of logic to
let us use them in our programs. Structuring functions correctly can help you express complex ideas almost
effortlessly, and possibly reuse logic so you have less code.

## Special Types

This will be the last group of types we will go over.

| Special Types |
| :------------ |
| any           |
| void          |
| never         |

Let's go in order. Our first type `any` is actually pretty simple, it represents anything. This is the
loosest type in TypeScript. JavaScript does not use types by itself, instead having TypeScript add types
to it. So `any` is there to help transfer over code to types, but not force a type a be declared at the
moment. This is typically looked down upon to use often, especially if you know a type beforehand. It
is fine to use this while you are learning though. In my opinion, just having exposure to the idea of
types is going to put you way further ahead in the long run. Typescript also predicts types for you
while you are using it, so it can actually help you learn types.

Next is `void`. This type is actually in C as well. This type is related to functions, so we will see
this again when we go into those. Mainly it involves the idea that nothing is generated to be given
back to something that called a function to run. It is common that you use a function to get an answer
or output of some kind, but some do things behind the scenes. This could be updating values, only going
off for certain conditions, or providing output for logging or debugging purposes. The kind that do not
provide an answer directly back are of type `void`.

Finally we have `never`. This is an interesting type, but you likely will only see this in advanced
use cases. It is not as general across languages like the other types. In practice it can be used
to define behavior as never being able to occur, and this can be checked as a set of rules to check
against when implemented correctly.

## Extra Types

These are types that have to do more with how types relate to each other. So in other words,
these are logical relation types. They do not have specific keywords, but do have associated
behavior.

| Extra Types  |
| :----------- |
| Union        |
| Intersection |
| Tuple        |

```ts
// Union
number | string;

// Intersection
type1 & type2;

// Tuple
let myTuple: [number, string, boolean] = [1, "yes", true];
```

We have actually already seen the Union type. This allows for a type to be one or the other. The
Intersection type allows you to merge the two properties of types together. We will see later that
you can make your own types in Typescript in order to extend its capabilities. Here we had
`type1 & type2`, but we could have also had something like `Robot & Employee`. This would theoretically be a
type representing something that had all the properties needed in order to belong to both types at the
same time. In these cases the `&` represents a logical AND, meaning both conditions must be met.
Last is the Tuple. This actually resembles something we already saw with the Record
type with objects. Instead of just being a regular array of certain types, this array actually
has a specific order in which the value types must be placed to satisfy the criteria.

Typescript is capable of much more with its types, but my aim is really just to familiarize you with
the general logic you will see across every language you work with. The good news is that I showed you
all of this just to expose you to the nature of these variables, but you will not have to use any of this
unwillingly. Like stated before, JavaScript does not use types, and everything in this book can be
done just fine in JavaScript. One of my aims is to show you over time how introducing types to your
code may actually seem harder at first, but in the long run may help you organize better. That will
be up to you to decide though!

[![Previous](https://img.shields.io/badge/Previous-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch1.md)
&nbsp;
[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch3.md)
