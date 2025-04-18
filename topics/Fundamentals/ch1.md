# How To Become A Programmer For Anybody: Fundamentals

## Chapter 1: Why Code?

Code is a medium of expression that can be understood by machines, and more importantly, humans.
Programming is the implementation of this code along with all of the theory, subjects, and concepts
related to our current understanding of computers. These definitions may not be absolute, but I
believe they show a clear separation of responsibilities for each. This means that code is a
language, just as much as any other out there. The nice thing about computers is that they can tell someone if
they could or could not be understood (most of the time), and often extremely fast.

I want this to be a playful learning experience for anyone that should happen to
read this book, and for those who choose to read it in depth. In my opinion, learning to program and
read code is a great mental exercise for anybody, and one that can be greatly rewarding when least
expected. This resource will be based around a personal project that was created specifically with the
intent of explaining the core concepts that stretch across all of programming. Javascript was a
convenient language for this as it allows for multiple paradigms to be explored. It is my hope that
this experience leaves the reader with an understanding of any code they happen to lay eyes on,
regardless of the language at hand.

Now I do not want anyone to feel like I'm handing out empty promises, or going to overwhelm them with
copious and even rote drills that have been passed from one generation to the next. The most relatable
thing I can compare this process to (perhaps coincidentally, and somewhat keeping in theme with the site as we will
learn about in intimate detail) is learning music. This approach will be akin to teaching somebody an instrument,
but really giving them a strong focus on all the things that truly make music work. With this, they would
be able to communicate with anyone who played an instrument about music. Learning other instruments
would also be more related to learning techniques in playing, rather than learning all of the
fundamentals they would already know.

Really, my hope is to make the reader more like a composer. A composer surely can play multiple instruments,
but focuses mainly on writing the music. They most likely do not have the same technical ability
or talent to operate some of the instruments as their musicians do. At the same time, they designed
what every individual member should be doing at every moment in the song. So they have a deep
appreciation for how things should work, and how to make them work together instead of against each
other.

Everyone starts somewhere. The fun of this approach is that it will focus on the bigger picture
instead of memorizing things that will be provided (which someone may have otherwise mistakenly
spent countless hours studying). I wish everyone the best of luck. With this I hope to provide the
foundation I was always looking for in the decade of experience I have from being self taught,
studying content from the best schools, and going back to school to fill in the gaps.

Let's get started!

## The Basics

```c
const int example = 0;
```

Fancy right? There is probably more to this than one would realize at first glance, and honestly after
seeing it all the time, most will just skim by. What does this do? It sets a variable to the number 0, called
example. We are probably familiar with the `=` sign, and it works here in similar ways as it does in math.
A single `=` assigns the provided name a value. What are the extra things (`const`, `int` and the `;`
character)? Here, `const` tells the program that the variable will not change, so it is constant. The `int`
part is telling the computer to store the data it is being sent as a type of value the computer recognizes (in
this case, `int` stands for integer). Lastly, the `;` is important. It is very similar to the way a period
works in English. When the computer sees this, it knows that it read a complete piece of logic, and can
be ready for any following logic to be read in separately as well.

The code snippet we see above is from the C programming language. It is one of the older languages in
programming, and really inspired all modern languages there after. It was a portable language at a time
when other languages were more bound to the exact make and model of the machine they ran on. This means that
the code used to give different results on other machines, or crash while running. Factors such as this led to
the fact that similarities in structure and declaring variables can be seen across languages (such as the
example above). C is also nice because it tells us more of the story of what the computer is actually doing
when we save information, but we will start to see this in the following examples. Here is how the
same thing is done in TypeScript and Javascript.

```ts
// Here is how we would define the same variable in TypeScript.
const example: number = 0;

// This would be Javascript
const example = 0;

// Using ";" is optional
const example = 0
```

Notice the `//` before some of the lines. These designate a comment is being placed, and are
not seen by the computer when the code compiles and runs. So they are strictly for the humans using the code.
The characters indicating their presence may change from language to language, but can often be seen with
some kind of indentation and character along with a sentence about the code below or in the area. There
are many factors to consider when using comments effectively in a code base, but this demonstrates an
effective use for the current context.

Both of these languages are very similar to the C implementation, but some things have
changed. Javascript came decades after C, and Typescript came much later after Javascript was first
created. Typescript actually specifically makes Javascript more like C by using types. It may be telling that
an older philosophy snuck its way back into a more modern language. These comparisons can tell us a little about
the history of programming, and how philosophies have adapted over time.

Let us start with the Typescript version, as the others are the same, just less cognitive load. So we see
the first word is still `const`. It actually does the same thing as staying constant too. Next, originally
`int` came after to declare the data type, but here `example` (the name of the variable) is used. We
can see the data type declaration was actually moved to the `: number` part. Also, our
word is now `number` instead of `int`. Just as `int` represented a type of number in C, this `number`
represents a number as well. In this case `number` is actually less strict, representing many kinds of
numbers. In C, `int` specifically references a number that is allowed an exact amount of bytes in the
computer's memory. The amount depends on the type of CPU being used by a system (whether it is 32-bit or
64-bit). It is specified by the C language that `int` cannot be below 2 bytes (16-bits).

Do not feel like any of this has to be memorized! This information is easily looked up, and once
the reasoning behind these things is understood, finding the theme is more important than being able to memorize
them. Really, the only reason this matters is that this illustrates how C and other languages may use data
types. If types are used, the programmer can specify how much memory they want to assign to data based on
its type. Here, if a programmer wanted a smaller or larger amount of memory for the number, they would
use another keyword.

## Bytes and Bits

Bytes and Bits are commonly used terms, and are good to have a basic understanding of. Here is a byte:

0000 0000

The space is not needed, but it makes it easier to read. Each position of a 0 represents a bit and is assigned a
power of 2. So the right most is 2^0, and the leftmost is 2^7. This leads to the range 0 through 255.
Here the zero is included as a value and there are 256 possible values from this. Since 2^8 would equal 256 when
computed, this would require an additional bit to represent as a value. Powers of 2 explain why we
always see things related to computers, such as hard drives and other hardware, with amounts like 1TB,
512GB, 256MB, 128KB, or 64B. In all of those amounts the B represents Bytes, and the prefix (the leading letter)
is from the metric system. Here are the basics:

| Binary | Number |
| :----- | -----: |
| 0000   |      0 |
| 0001   |      1 |
| 0010   |      2 |
| 0011   |      3 |
| 0100   |      4 |
| 0101   |      5 |
| ...    |  cont. |

Bits really are nothing more than switches for on and off states. We can see that their values and
positions offer ways to generate as many numbers as we may want, add more zeros gives us more possibilities. As
a reminder, the values start at the right. Bytes and bits also can also be represented in hexadecimal, which is
base 16 instead of base 2. To do this programmers decided to use another range rather than just 0 or 1, which
has two values, and used 16 instead. This is done by using the numbers 0 through 9, and then switching to letters,
typically written in uppercase, A through F. Here are some examples:

| Hexadecimal | Number |
| :---------- | -----: |
| 0000        |      0 |
| 0001        |      1 |
| 0002        |      2 |
| 0003        |      3 |
| 000A        |     10 |
| 000B        |     11 |
| 0010        |     16 |

Again, please do not feel overwhelmed by this. The bigger picture is that we understand that the sets of
0's are just being replaced with 1's, or 1's as well as other numbers and letters. Both
systems work the exact same way. Hexadecimal is nice because we can write much bigger numbers using
less space on the screen. Computers do not think in hexadecimal, they always see the bits as only 0's
and 1's. This is just a convenient shorthand for humans.

Now that all of that is laid out, it should be evident to see that if we want the computer to remember an
astronomically large number, it's going to need an unbelievable amount of 0's and 1's to represent the
value exactly. This is commonly pointed out in early computer science classes with decimal values. It
is not at first obvious that this is the case though. A number like 0.5 may be familiar, which
also could be written as a fraction, 1/2. The problem is 1/3. Technically, the 0.3 has an infinite amount
of 3's that come after. The computer cannot use infinite places for storing such data. So a minimum possible
value must be decided. This may be something like 0 with 16 decimal places after it. Decimal values are often
referred to as floats in multiple languages, and have to be fairly large memory wise in order to be precise.
This explains why it is common to find questions from others about why something like the following is given as
an output:

0.1 + 0.1 = .20000000000000000000004

This comes from a level of imprecision due to computers operating in truly only binary. Programmers are
clever and use tricks like implementing integers instead of floats (using 100 to represent 1.00), and later
manipulating the values safely. This is often done for financial data.

To be honest, this is quite a bit to remember, but exposes us to the idea that even numbers have different types
which arise from the amount of memory we want to use with our data. Back to:

```ts
const example: number = 0;
```

With TypeScript, `number` actually takes on each of these cases (and others), so that the details do not have to
be worried about as much. This has been a common theme in many languages, limiting the burden for those
writing the code. Ultimately, we see the expression ends with `= 0;` which is the same as in C. Now remember the
other two examples:

```js
const example = 0;

// Using ";" is optional
const example = 0
```

These are both Javascript. Neither of them have the data type (`number`), and one left out the semi-colon
(`;`). We see here that languages became looser after C. There were really a couple of reasons
for this. First, computers started getting much more memory, so things were not as tight memory wise.
Before memory was often a huge concern with making a program work in a reasonable amount of time. As computers
became much faster, this started to matter less and less. Next, it allowed for quicker development and less
of a learning curve. Being able to not worry about implementation details like telling the computer how
much memory it is allowed to use was a huge win for beginners. There was a great deal of pain that came
from not dealing with memory properly, even for things that may seem simple, like allowing negative values.

There is much to appreciate about the people that went through the pain and effort to make all of this
work. Learning the specifics of these topics is something that can be learned overtime while making
programs as well. Technology is becoming more and more helpful at identifying and predicting what things
should be set to for us automatically, and is constantly learning how to present us with the information
needed for these decisions every day.

Lastly, the semicolon does not need to be included in the last example. In C and other languages, leaving
the semicolon off at the end would cause an error in the program. These programs originally used the
semicolon to designate a stopping point of a line for scanning information. As technology got better, there
became ways to predict and implement areas that would need this automatically, without having to include
them explicitly. Things like this can really improve everybody's quality of life. It may be nice to have a
semicolon for clarity, but it is always painful having a program crash due to one missing.

Maybe some of those reading this will not think the expression above (also referred to as a variable assignment),
is all that impressive. On some level, they are right. Assigning a variable with an equals sign is not
a large concept by itself. At the same time, it opens the doors to what we can store in a variable, and
surprise, it's not just numbers. Now computers may always see things as numbers, but we have developed
several data types that let us store all kinds of data, and in multiple formats.

My emphasis in the beginning will be to focus on knowing what we store in a variable, what its shape
should resemble, and how the variables can sometimes be reassigned. In our example:

```ts
const example: number = 0;
```

The variable `example` actually cannot be reassigned a value, due to the `const` declaration. To be able to
reassign a variable in TypeScript/JavaScript we must use the keyword `let`:

```ts
let example: number = 0;

example = 2;

// Returns 2
console.log(example);
```

We will go into this with much more detail later on, but this code sample highlights that the `example`
variable effectively changes its value that is stored. The `console.log(example)` statement is actually
a command to print something to the screen. So here, `console.log()` prints something that is between its
parenthesis, or attempts to. In this case it prints the value of `example` to the development console in a
browser, which is `2`.

This was pointed out due to possibly being something others are not used to, even despite familiarity
with mathematics. It is not typical to redefine variables or an initial set of conditions many times when
evaluating a function or equation in mathematics. When programming, this happens quite frequently. Often,
key information will be stored in distinct variables so that the variable's information can be accessed readily.
This could be the name of the current user, the current page being shown, or even someone's current cart or
order on sites such as Uber, Amazon, or any other shopping platform. These values change and update with great
frequency, but it is nice to have one spot where we can get all the information we need.

## Mathematical Operations

One of the early things we should get out of the way is introducing common mathematical
manipulations in programming.

| Mathematical Operators |     Names      |
| :--------------------: | :------------: |
|           +            |    Addition    |
|           -            |  Subtraction   |
|           \*           | Multiplication |
|           /            |    Division    |
|           %            |     Modulo     |

Next we will see some instances of these operators being implemented:

```js
const addition = 2 + 2;
const subtraction = 3 - 2;
const multiplication = 2 * 4;
const division = 8 / 4;
const modulo = 7 % 3;

console.log(addition); // 4
console.log(subtraction); // 1
console.log(multiplication); // 8
console.log(division); // 2
console.log(modulo); // 1
```

All of these operators are common across most programming languages. Most likely all of us are familiar
with addition and subtraction. Multiplication and division are also probably familiar, but we should
go over their basic definitions. Multiplication is an arithmetic operation that combines groups of
numbers to find their total or product. It involves repeatedly adding one number (the multiplicand) to
itself a certain number of times (the multiplier). The result of multiplication is called the product.
In our case, the number two was added to itself four times in order to receive the product from the operation.
Division is an arithmetic operation where a number (the dividend) is divided by another number (the
divisor) to find out how many times the divisor can be subtracted from the dividend without resulting in a
negative number. The result of division is called the quotient. So in this case the number eight is subtracted
by four twice before it reaches zero.

Both of these definitions were made explicit to draw parallels to the process that the computer sees
these operations as. The fact with computers is, they can add and subtract numbers ridiculously
fast. As of January 2022, the average CPU for a mid-range desktop can perform tens of billions of
operations a second. It is a bit daunting to think someone could reason with remembering the last
ten billion things they did, never mind perform them in a second. There are even bitwise operators and
assembly related strategies to make these operations quicker in a binary format. This is a bit
more technical than we will be getting into at the moment, and these operations are not all that common to see
unless someone is specifically working at a very low level in the architecture programming wise.

The modulo operator, denoted by `%`, calculates the remainder of a division operation. For example, when
we divide one number by another, the modulo operator returns the remainder after the division. It can be
visualized as counting up to the divisor and then starting over from zero if the dividend is reached,
always subtracting one from the dividend until it fits within the divisor. So for example,
(7/3 = 2 + (1/3)). We see seven is not perfectly divisible by three, so there is a remainder. The
remainder is the only value the modulo is after, and it does not return a number like "1/3" because
the divisor is implied by the operation. This leaves `1` as the result.

This operation is useful for telling if numbers are odd or even, amongst other things such as cryptography. We
will be diving more into types in the next chapter, but there are some number types that can only hold whole
numbers. This means that they will not interpret decimal values for us. Instead, the computer
would evaluate the operation like this (7/3 = 2). It will just throw away anything after the decimal place.
Deciding how rounding a number is handled is also an interesting topic, but this is also not as straight
forward as it may seem (typically .5 or greater is rounded up in mathematics) when accounting for
error in large amounts of data.

## What You Need To Know Prior

Someone coming into this text should not feel there are any prerequisites they need to have met in order to
take away something from this reading experience. Having an understanding of math up to algebra would help
with being familiar with expression structures and numerical properties. At the same time, it is my hope
that there will be enough recurring patterns that much of this information just starts flowing like a
normal sentence. Sticking with this stuff long enough causes it to reveal more about itself over time.

Also! Do not be intimidated by math! The subject itself is quite deep and has varying degrees of
complexity, but fundamentals really drive everything. Memorization will not be needed to any great
degree. More important will be becoming used to walking through how to get to an end result and slowly building
strategies along the way. For example, if we wanted to call our friend Bill, what would we need to know? We would
need a phone number associated with Bill. If we had that number, we could use it to get in touch with Bill's
phone. When we use that number, it will be compared to which phone belongs to that number, and then the call
will be sent to that phone. There could also be other data stored with this number, such as an address,
first name, last name, email, and zip code. This information would ideally only be visible to the company
providing the service for the phone call, and whoever this data belonged to.

If all of this makes sense, you may already be further along than you think.

[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch2.md)
