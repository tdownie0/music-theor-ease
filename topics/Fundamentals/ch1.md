# How To Become A Programmer For Anybody: Fundamentals

## Chapter 1: Why Code?

Code is a medium of expression that can be understood by machines, and more importantly, people.
Programming is the implementation of this code with all of the theory, subjects, and concepts
related to our current understanding of computers. These definitions may not be absolute, but I
believe they show a clear separation of responsibilities for each. This means that code is a
language, just as much as any other out there. The nice thing is that the computer can tell you if
it understood or did not understand you (most of the time), and often extremely fast.

I want this to be a playful learning experience for anyone that should happen to have the chance to
read this book, and those who choose to read it in depth. In my opinion, learning to program and
read code is a great mental exercise for anybody, and one that can be rewarding when you least
expect it. This writing will be based around a personal project I created specifically with the
intent to explain the core concepts that stretch across all of programming. Javascript was a
convenient language for this as it allows for multiple paradigms to be explored. It is my hope that
this experience leaves you with an understanding of any code you will happen to lay eyes on,
regardless of the language at hand.

Now I do not want anyone to feel like I'm handing out empty promises, or going to overwhelm them with
copious and even rote drills that have been passed from one generation to the next. The most relatable
thing I can compare it to (perhaps coincidentally, and somewhat keeping in theme with the site you will
learn about in intimate detail) is music. This approach will be akin to teaching you an instrument,
but really giving you a strong focus on all the things that truly make music work. With this, you would
be able to communicate with anyone who played an instrument about music. Learning other instruments
would also be more related to learning techniques in playing, instead of learning all of the
fundamentals you already know.

Really, my hope is to make you more like a composer. A composer surely can play multiple instruments,
but focuses mainly on writing the music. They most likely do not have the same technical ability
or talent to operate some of the instruments as their musicians do. At the same time, they designed
what every individual member should be doing at every moment in the song. So they have a deep
appreciation for how things should work, and how to make them work together instead of against each
other.

Everyone starts somewhere. The fun of this approach is that it will let you focus on the bigger picture
instead of the memorizing things that you will be provided (which you may have otherwise mistakenly
spent countless hours studying). I wish you the best of luck. With this I hope to give you the
foundation I was always looking for in the decade of experience I have from being self taught,
studying content from the best schools, and going back to school to find the gaps.

Let's get started!

## The Basics

```c
const int example = 0;
```

Fancy right? There is probably more to this than one would realize at first glance, and honestly after
seeing it all the time you just skim by. What does this do? It sets a variable to the number 0, called
example. You are probably familiar with the `=` sign, and it works here in similar ways as it does in math.
A single `=` assigns a provided name a value. What are the extra things (`const`, `int` and the `;`
character)? Here, `const` tells the program that the variable will not change, so it is constant. The `int`
part is telling the computer to store the data it is being sent as a type of value the computer recognizes (in
this case, `int` stands for integer). Lastly, the `;` is important. It is very similar to the way a period
works in English. When the computer sees this, it knows that it read a complete piece of logic, and can
be ready for any following logic to be read in separately as well.

The code snippet you see above would be from the C language. It is one of the older languages in
programming, and really inspired all modern languages there after. It was a portable language at a time
when other languages were more bound to the exact make and model of the machine they ran on. This means that
they used to give different results on other machines, or crash while running. Factors such as this led to
the fact that you will see similarities in structure and declaring variables across languages (such as the
example above). C is also nice because it tells you more of the story of what the computer is actually doing
when you save information, but you will start to see this in the following examples. Here is how you would do it
in TypeScript and Javascript.

```ts
// Here is how you would define the same variable in TypeScript.
const example: number = 0;

// This would be Javascript
const example = 0;

// Using ";" is optional
const example = 0;
```

You will notice they also have `//` before some of the lines. Those designate a comment is being placed, and are
not seen by the computer when the code compiles and runs. So they are strictly for the humans using the code.
The characters indicating their presence may change from language to language, but you will often see some kind
of indentation and character along with a sentence about the code below or in the area. There are many factors
to consider when using comments effectively in a code base, but this shows an effective use.

You will see both of these languages are very similar to the C implementation, but some things have
changed. Javascript came decades after C, and Typescript came much later after Javascript was first
created. Typescript actually specifically makes Javascript more like C. It may be telling that an older
philosophy snuck its way back into a more modern language. These comparisons will tell you a little about
the history of programming, and how philosophies have adapted over time.

I'll start with the Typescript version, as the others are the same, just less cognitive load. So you see
the first word is still `const`. It actually does the same thing as staying constant too. Next, originally
`int` came after to declare the data type, but here `example` (the name of the variable) is used. You
can see the data type declaration was actually moved to the `: number` part. Also, our
word is now `number` instead of `int`. Just as `int` represented a type of number in C, this `number`
represents a number as well. In this case `number` is actually less strict, representing many kinds of
numbers. In C, `int` specifically references a number that is allowed an exact amount of bytes in the
computer's memory. The amount depends on the type of cpu (whether 32-bit or 64-bit). It is specified by
the language that it is not below 2 bytes (16-bits).

Do not feel like you have to memorize this! This information is easily looked up, and once you understand
the strategies behind them, you realize the theme is more important than being able to memorize them.
Really, the only reason this matters is that this illustrates how C and other languages may use data
types. If types are used, the programmer can specify how much memory they want to assign to data based on
its type. Here, if a programmer wanted a smaller or larger amount of memory for the number, they would
use another keyword.

## Bytes and Bits

Bytes and Bits are commonly used terms, and good to have a basic understanding of. Here is a byte:

0000 0000

The space is not needed, but it makes it easier to read. Each position of a 0 represents a bit and is a
power of 2. So the right most is 2^0, and the leftmost is 2^8. This leads to the range 0 through 255.
Here the zero is included as a value since 2^8 would equal 256 when computed. Powers of 2 explain why you
always see things related to computers like hard drives with amounts like 1TB, 512GB, 256MB, 128KB, 64B.
In all of those amounts the B is Bytes, the prefix is from the metric system. Here are the basics:

| Binary | Number |
| :----- | -----: |
| 0000   |      0 |
| 0001   |      1 |
| 0010   |      2 |
| 0011   |      3 |
| 0100   |      4 |
| 0101   |      5 |
| ...    |  cont. |

They really are nothing more than switches for on and off states. You can see that their values and
positions offer ways to generate as many numbers as we want, we can always add more zeros. As a reminder
the values start at the right. Bytes and bits also can get represented in hexadecimal, which is base
16 instead of base 2. To do this programmers decided to use another range rather than just 0 or 1, which
has two values, and used 16 instead. This is done by using the number 0 through 9, and then switching to letters,
typically written uppercase, A through F. Here are some examples:

| Hexadecimal | Number |
| :---------- | -----: |
| 0000        |      0 |
| 0001        |      1 |
| 0002        |      2 |
| 0003        |      3 |
| 000A        |     10 |
| 000B        |     11 |
| 0010        |     16 |

Again, please do not feel overwhelmed by this. The bigger picture is I want you to see that the sets of
0's in both cases are just being replaced with 1's or 1's as well as other numbers and letters. Both
systems work the exact same way. The hexadecimal is nice because you can write much bigger numbers using
less space on the screen. Computers do not think in hexadecimal, they always see the bits as only 0's
and 1's. This is just a shorthand for humans.

Now that all of that is laid out, you should be able to see that if I want the computer to remember an
astronomically sized number, it's going to need an unbelievable amount of 0's and 1's to represent the
value exactly. This is commonly pointed out in early computer science classes with decimal values. It
is not at first obvious this is the case though. You may be familiar with a number like 0.5, which
also could be written as a fraction, 1/2. The problem is 1/3. Technically, the 0.3 has an infinite amount
of 3's that come after. The computer cannot use infinite places for storing such data. So a minimum possible
value must be decided. This may be something like 0 with 16 decimal places after it. Decimal values are often
referred to as floats in multiple languages, and have to be fairly large memory wise to be precise. This explains
why you may run into questions from others about why something like this is given as output:

0.1 + 0.1 = .20000000000000000000004

This comes from a level of imprecision due to computers operating in truly only binary. Programmers are
clever and use tricks like implementing integers instead of floats (using 100 to represent 1.00), and manipulate
the values later safely. This is often done for financial data.

To be honest, this is quite a bit to remember, but exposes that even numbers have different types which
arise from the amount of memory we want to use with our data. Back to:

```ts
const example: number = 0;
```

In the TypeScript case, `number` actually takes on each of these cases, so you do no have to worry as much
about the details. This has been a common theme in many languages, limiting the burden at the moment for those
writing the code. Ultimately, we see the expression ends with `= 0;` which is the same as C. Now remember the
other two examples:

```js
const example = 0;

// Using ";" is optional
const example = 0;
```

These are both Javascript. Neither of them have the data type (`number`), and one left out the semi-colon
(`;`). You see here that languages became looser after C. There were really a couple of reasons
for this. First, computers started getting much more memory, so things were not as tight memory wise.
Before memory was often a huge concern with making a program work in a reasonable amount of time. Computers
became much faster, and this started to matter less and less. Next, it allowed for quicker development and less
of a learning curve. Being able to not worry about implementation details like telling the computer how
much memory it is allowed to have is a huge win for beginners. There is a great deal of pain that comes
from not dealing with memory properly, even for things that may seem simple, like allowing negative values.

There is much to appreciate about the people that went through the pain and effort to make all of this
work. Learning the specifics of these is something that can be learned overtime as you are making
programs as well. Technology is becoming more and more helpful at identifying and predicting what things
should be set to for us, and is learning how to present us with the information needed for the decisions
every day.

Lastly, the semicolon does not need to be included in the last example. In C and other languages leaving
the semicolon off at the end would cause an error in the program. The programs originally used the
semicolon to designate a stopping point of a line to scan for information. As technology got better, there
became ways to predict and implement areas that would need this automatically, without having to include
them explicitly. Things like this can really improve everybody's quality of life. It may be nice to have a
semicolon for clarity, but it is always painful having a program crash due to one missing.

Maybe some of you reading this think the expression above (also referred to as a variable assignment), is
not all that impressive. On some level, I agree with you. Assigning a variable with an equals sign is not
a large concept by itself. At the same time, it opens the door to what we can store in a variable, and
surprise, it's not just numbers. Now computers may always see things as numbers, but we have developed
several data types that let us store all kinds of data, and in multiple formats.

My emphasis in the beginning will be to focus on knowing what we store in a variable, what its shape
should resemble, and how the variables can sometimes be reassigned. In our example:

```ts
const example: number = 0;
```

The variable example actually cannot be reassigned a value, due to the const declaration. To be able to
reassign in TypeScript/JavaScript you must use the keyword `let`:

```ts
let example: number = 0;

example = 2;

// Returns 2
console.log(example);
```

We will go into this with much more detail later on, but I just want to point out that this effectively
changes the value that is stored in the `example` variable. The `console.log(example)` statement is actually
a command to print something to the screen. So here, `console.log()` prints something that is between its
parenthesis, or attempts to. In this case it prints the value of `example` to the development console in a
browser.

I feel this is worth pointing out because this may be something others are not used to, even coming from
mathematics. It is not typical to redefine variables or an initial set of conditions constantly when
evaluating a function or equation in mathematics. When programming, this happens constantly. Often,
key information will be stored in distinct variables so that their information can be accessed readily.
This could be the name of the current user, the current page being shown, or even your current cart or
order on sites such as Uber, Amazon, or any other shopping platform. These values change frequently,
but it is nice to have one spot where we can get all the information we need.

## Mathematical Operations

One of the early things I would like to get out of the way is to introduce you to common mathematical
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

All of these operators are common across most programming languages. Most likely you are familiar
with addition and subtraction. Multiplication and division are also probably familiar, but I would like
to go over their basic definitions. Multiplication is an arithmetic operation that combines groups of
numbers to find their total or product. It involves repeatedly adding one number (the multiplicand) to
itself a certain number of times (the multiplier). The result of multiplication is called the product.
In our case, the two was added to itself four times in order to receive the product from the operation.
Division is an arithmetic operation where a number (the dividend) is divided by another number (the
divisor) to find out how many times the divisor can be subtracted from the dividend without resulting in a
negative number. The result of division is called the quotient. So in this case eight is subtracted by
four twice before it reaches zero.

I wanted to make both of these definitions explicit, because that is exactly how the computer sees
these operations as well. The fact with computers is, they can add and subtract numbers ridiculously
fast. As of January 2022, the average CPU for a mid-range desktop can perform tens of billions of
operations a second. It is a bit daunting to think someone could reason with remembering the last
ten billion things they did, nevermind perform them in a second. There are even bitwise operators and
assembly related strategies to make these operations quicker in a binary format. This is a bit
more technical than I intend to get at the moment, and will not be all that common to see unless
you are specifically working at a very low level in the architecture programming wise.

The modulo operator, denoted by `%`, calculates the remainder of a division operation. For example, when
you divide one number by another, the modulo operator returns the remainder after the division. It can be
visualized as counting up to the divisor and then starting over from zero if the dividend is reached,
always subtracting one from the dividend until it fits within the divisor. So in our case,
(7/3 = 2 + (1/3)). We see seven is not perfectly divided by three, so there is a remainder. The
remainder is the only value the modulo is after, and it does not return a number like "1/3" because
the divisor is implied by the operation. This leaves `1` as the result.

This operation is useful for telling if numbers are odd or even, amongst other things such as cryptography. We
will be diving more into types in the next chapter, but there are some number types that only hold whole
numbers. This means that they will not interpret decimal values for you. Instead, the computer
would evaluate the operation like this (7/3 = 2). It will just throw away anything after the decimal place.
Deciding how rounding a number is handled is also an interesting topic, but this is also not as straight
forward as it may seem (typically rounding up when we see .5 in mathematics) when accounting for error in large
amounts of data.

## What You Need To Know Prior

Someone coming into this text should not feel there are any prerequisites they need to have met in order to
take away something from this reading experience. Having an understanding of math up to algebra would help
with being familiar with expression structures and numerical properties. At the same time, it is my hope
that there will be enough recurring patterns that much of this information just starts flowing like a
normal sentence. If you stick with this stuff long enough it reveals more about itself over time.

Also! Do not be intimidated by math! The subject itself is quite deep and has varying degrees of
complexity, but fundamentals really drive everything. You do not have to memorize anything to great
degrees, just get used to walking through how to get to the end result and slowly building strategies
along the way. For example, if we wanted to call our friend Bill, what would we need to know? We would need a
phone number associated with Bill. If we had that number, we could use it to get in touch with Bill’s phone. When
we use that number, it will be compared to which phone belongs to that number, and then the call will be sent
to that phone. There could also be much more data stored with this number, such as an address, first name, last
name, email, and zip code. This information would ideally only be visible to the company providing the service
for the phone call, and whoever this data belonged to.

If all of this makes sense, you are already further along than you probably think.

[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Fundamentals/ch2.md)
