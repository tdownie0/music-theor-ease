## Chapter 5: Functional Methods

Since we are using a language like Javascript, we actually get some nice utility from our
functions that deal with arrays and objects. The way we can interact with them almost seems
more intuitive with real world examples. Normally, when we look at things we do not index their
position and then retrieve the value. We typically grab what we are looking at, then decide what
to do with it. Through functional methods, we will be able to make this interaction similar
to handing your something directly.

```ts
const countDownNumbers: number[] = [5, 4, 3, 2, 1];

countDownNumbers.forEach((time) => console.log(time));
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

You may remember this same output from the last chapter. Here it is as a reminder:

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

The structure of both of these is quite different, the first defining all the numbers, and the second
going through a loop to generate them. In the first example, since all the countDownNumbers are
defined, they still need to be looped over in order to be printed to the console. We see
the line below `countDownNumbers.forEach((time) => console.log(time))` comes next. This statement
calls a `.forEach()` method on the array we just defined, countDownNumbers. Javascript is
constructed in a way that certain types have pre-existing functions and behaviors, such as arrays
and objects. This method will go through each element of the array one by one, left from right. It
actually does the same thing as the for loop you see in the second example, it just handles the incrementing,
and in this case the indexing as well. In our second example we were just taking the value of 5
directly, and subtracting from that. In the .forEach(), we are actually going through the array
with the index internally (`countDownNumbers[0]`, `countDownNumbers[1]`,
`countDownNumbers[2]`, ...). The index to access the elements is automatically incremented as
mentioned. This is passed to us through a variable name that we define, in this case it was
`time`. So the `time` variable represents each element of the array, being `countDownNumbers[]`
with whichever increment it is currently at in the loop for the index.

This behavior is especially nice with objects as well. You may not know an object's keys
beforehand, but functional methods let you interact with the keys and values, passing them
one by one just like with the array example above.

```js
const jobs = {
  tech: {
    webDev: { pay: 10000, location: "Remote" },
    security: { pay: 15000, location: "Hybrid" },
    dataSci: { pay: 20000, location: "On-Site" },
  },
  health: {
    docotor: { pay: 30000, location: "On-Site" },
    nurse: { pay: 10000, location: "Hybrid" },
    xrayTech: { pay: 15000, location: "Hybrid" },
  },
  food: {
    chef: { pay: 20000, location: "On-Site" },
    catering: { pay: 20000, location: "Travel" },
  },
};

Object.values(jobs).forEach((category) => {
  Object.values(category).forEach((position) => console.log(position.pay));
});

/* Prints out this:
 * 10000
 * 15000
 * 20000
 * 30000
 * 10000
 * 15000
 * 20000
 * 20000
 */
```

With objects, we must first call the `Object` constructor function to delegate how we will
manipulate the object at hand. Common calls to `Object` to extract values would be `Object.keys()`,
`Object.values()`, and `Object.entries()`. The keys and values functions retrieve their respective
items, and the entries function retrieves both at the same time. Once we use one of these methods,
we may operate on them just like we would any other loop.

In this example you could see that we only need to have prior knowledge of the pay key existing.
We do not need to know the key of the object representing the job position, or the key of the
positions job category. The method `.values()` handles extracting the values of both for us. This
allows for a great deal of flexibility when setting up data. These objects within objects can be
as large as they are needed to be, and giving the data implicit meaning is much quicker in these
circumstances. More modern languages have ways to loop over objects with for loops, and this would
be an alternative in Javascript:

```js
const jobs = {
  tech: {
    webDev: { pay: 10000, location: "Remote" },
    security: { pay: 15000, location: "Hybrid" },
    dataSci: { pay: 20000, location: "On-Site" },
  },
  health: {
    docotor: { pay: 30000, location: "On-Site" },
    nurse: { pay: 10000, location: "Hybrid" },
    xrayTech: { pay: 15000, location: "Hybrid" },
  },
  food: {
    chef: { pay: 20000, location: "On-Site" },
    catering: { pay: 20000, location: "Travel" },
  },
};

for (const key in jobs) {
  let jobCategory = jobs[key];
  for (const key in jobCategory) {
    console.log(jobCategory[key].pay);
  }
}

/* Prints out this:
 * 10000
 * 15000
 * 20000
 * 30000
 * 10000
 * 15000
 * 20000
 * 20000
 */
```

Here we see that in order to access the object value, we must first use the for loop to extract
the keys of the object. After, assign a variable to store the value of the object key by directly
accessing it with the extracted key.

If we were to do such a thing with purely OOP (Object Oriented Programming), we would have
to create a `JobCategory` class that housed a job type, then have that class hold another class
which would represent the `Job` class. Inside of this we could make methods to access the property
for the pay. On top of these classes, we would need a `Jobs` class to hold all the jobs within their
categories, much like the `jobs` object in the example above.

```js
class Job {
  constructor(pay, location) {
    this.pay = pay;
    this.location = location;
  }
}

class JobCategory {
  constructor() {
    this.jobs = {};
  }

  addJob(jobTitle, pay, location) {
    this.jobs[jobTitle] = new Job(pay, location);
  }

  getJobPay(jobTitle) {
    if (this.jobs[jobTitle]) {
      return this.jobs[jobTitle].pay;
    } else {
      return null;
    }
  }

  getJobLocation(jobTitle) {
    if (this.jobs[jobTitle]) {
      return this.jobs[jobTitle].location;
    } else {
      return null;
    }
  }
}

class Jobs {
  constructor() {
    this.categories = {};
  }

  addCategory(categoryName) {
    this.categories[categoryName] = new JobCategory();
  }

  addJobToCategory(categoryName, jobTitle, pay, location) {
    if (this.categories[categoryName]) {
      this.categories[categoryName].addJob(jobTitle, pay, location);
    } else {
      console.error(`Category '${categoryName}' does not exist.`);
    }
  }

  getJobPay(categoryName, jobTitle) {
    if (this.categories[categoryName]) {
      return this.categories[categoryName].getJobPay(jobTitle);
    } else {
      console.error(`Category '${categoryName}' does not exist.`);
      return null;
    }
  }

  getJobLocation(categoryName, jobTitle) {
    if (this.categories[categoryName]) {
      return this.categories[categoryName].getJobLocation(jobTitle);
    } else {
      console.error(`Category '${categoryName}' does not exist.`);
      return null;
    }
  }

  printAllJobPays() {
    for (const categoryName in this.categories) {
      const category = this.categories[categoryName];
      for (const jobTitle in category.jobs) {
        const job = category.jobs[jobTitle];
        console.log(job.pay);
      }
    }
  }
}

const jobs = new Jobs();

jobs.addCategory("tech");
jobs.addCategory("health");
jobs.addCategory("food");

jobs.addJobToCategory("tech", "webDev", 10000, "Remote");
jobs.addJobToCategory("health", "doctor", 30000, "On-Site");
jobs.addJobToCategory("food", "chef", 20000, "On-Site");

jobs.printAllJobPays();
/* Prints out this:
 * 10000
 * 30000
 * 20000
 */
```

Even briefly looking at this, you can see it is much longer. This may indeed be overkill for our
situation, but it is interesting to point out what differences this makes. Now we have error
checking when we are directly defining or accessing values. The structure of the object also
seems to assure that the object will not change its structure as readily. Even if keys like
`pay` or `location` ended up changing, as long as their methods were updated internally, you would
still be able to access your intended value through their respective methods, `getJobPay()` and
`getJobLocation()`. This allows us to abstract the actual implementation from the end user. Reasons
for this could include simplifying the interface for the user (not forcing them to know part of the
internal workings in order to user it), and security (users in most circumstances do not need to know
the implementation details). The concept of having a function that provides you the output
you desire, but you do not have any information about its internal workings, is referred to as a
"Black Box". It is a box that you do not have the access or the means to see inside of, but are free
to use. This is a key role of abstraction, and really an essential part in making code usable and
readable. We could use a function that performs a ridiculously complicated math equation, or
generates a response from an AI, and we just need to know what functions to call and what arguments
to pass.

There is actually something that can be improved in the class example that was provided above,
considering this abstraction topic we were just discussing. Currently, both classes `Jobs` and
`JobsCategory` access a property of the `Job` class directly. Neither of these classes should have to
rely on the internal implementation of the `Job` class, such as its properties keys. If this were to
change, we would have to change its usage everywhere it was implemented. Instead we could do this:

```js
class Job {
  constructor(pay, location) {
    this.pay = pay;
    this.location = location;
  }

  // Create getter
  getPay() {
    return this.pay;
  }

  // Create getter
  getLocation() {
    return this.location;
  }
}

class JobCategory {
  constructor() {
    this.jobs = {};
  }

  addJob(jobTitle, pay, location) {
    this.jobs[jobTitle] = new Job(pay, location);
  }

  getJobPay(jobTitle) {
    if (this.jobs[jobTitle]) {
      // Use getter instead of direct access
      return this.jobs[jobTitle].getPay();
    } else {
      return null;
    }
  }

  getJobLocation(jobTitle) {
    if (this.jobs[jobTitle]) {
      // Use getter instead of direct access
      return this.jobs[jobTitle].getLocation();
    } else {
      return null;
    }
  }
}

class Jobs {
  // --

  // ---- Existing code above containing constructor and methods ----

  // --

  printAllJobPays() {
    for (const categoryName in this.categories) {
      const category = this.categories[categoryName];
      for (const jobTitle in category.jobs) {
        const job = category.jobs[jobTitle];
        // Use getter instead of direct access
        console.log(job.getPay());
      }
    }
  }
}

const jobs = new Jobs();

jobs.addCategory("tech");
jobs.addCategory("health");
jobs.addCategory("food");

jobs.addJobToCategory("tech", "webDev", 10000, "Remote");
jobs.addJobToCategory("health", "doctor", 30000, "On-Site");
jobs.addJobToCategory("food", "chef", 20000, "On-Site");

jobs.printAllJobPays();
/* Prints out this:
 * 10000
 * 30000
 * 20000
 */
```

Design like this can lead to better encapsulation of data overall. It separates concerns, and has
the classes focus on what is their intended purpose. This does lead to more verbose code, but you
will not have to update code that gets outdated due to changes in a child class that really should
not concern other classes. It almost seems self defeating to split up your code and get this modularity,
but then be bound to updating implementation details of several classes for one change in a child class.

## More than forEach

Luckily for us there are more functional methods to choose from than just `forEach()`.

```js
// Example with creating a new object
const teams = {
  tigers: { name: "Tigers", players: 25, score: 900 },
  bears: { name: "Bears", players: 24, score: 500 },
  lions: { name: "Lions", players: 30, score: 700 },
};

const selectionItems = Object.values(teams).map((team) => {
  return { optionName: team.name, score: team.score };
});
console.log(selectionItems);
// [
//   {optionName: "Tigers", score: 900},
//   {optionName: "Bears", score: 500},
//   {optionName: "Lions", score: 700},
// ]

// Example with multiplication
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(double); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]
```

Here is an example of the `.map()` method. It takes anything that can be looped over and returns an array
for assignment to the desired variable. In this case it took all the values in the teams object, and
populated an array with a new object for each value. Looking at the second example involving
multiplication, you can see that the `double` variable has every value in the `numbers` array multiplied
by 2. We see that the original `numbers` array remains unchanged. This is due to `.map()` sending the data
to wherever it is intended to be assigned upon performing the operation. The function does not directly
manipulate the values contained in `numbers`. The values are not manipulated in a `.forEach()` method either,
but they actually are not returned for assignment like with `.map()`. To actually change the values
the array would have to be assigned a value to the indexes it wished to assign.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => (numbers[index] = number * 2));
console.log(numbers); // [2, 4, 6, 8, 10]
```

This demonstrates that either functional method could reassign the values by directly assigning the
indexes of the array. Another interesting point in this example is that we passed a `number` variable
for the value, and an `index` variable for the index. Many of these methods automatically keep track
of the indexes for you, and we will see another example shortly. Something else you might have seen
is that it looks like we mutated the value of an array that is declared a constant. This will be
explained in detail when we get to shallow copies.

```js
// Filter
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.filter((number) => number > 3);
console.log(greaterThanThree); // [4, 5]

// Reduce
const addAllNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(addAllNumbers); // 15

// Start with 10 as base for accumulator
const addAllNumbersStartingAtTen = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log(addAllNumbersStartingAtTen); // 25

// Find
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const personWithAge35 = people.find((person) => person.age >= 35);

console.log(personWithAge35); // { name: 'Charlie', age: 35 }

// Using multiple (.find() and .map())
const teams = {
  tigers: { name: "Tigers", players: 25, score: 900 },
  bears: { name: "Bears", players: 24, score: 500 },
  lions: { name: "Lions", players: 30, score: 700 },
};

const teamWithHighestScore = Object.values(teams).find((team, index, array) => {
  return team.score === Math.max(...array.map((team) => team.score));
});

console.log(teamWithHighestScore); // { name: "Tigers", players: 25, score: 900 }
```

Here we see two other common functional methods, `.filter()` and `.reduce()`. With `.filter()`, each value
is compared against the logic condition provided, and only returns the values that evaluate to true.
In the case of reduce, it takes two values which can be named anything but are referred to as the
accumulator and the currentValue often. In this case we name the variables the same as well. In the
function we see that both values are added together, and a 0 value is provided after the comma behind
`currentValue`. This initializes the `accumulator` to a base value. In our first example we see that
the values are looped over and we receive 15 as a final value. We see in the following example
that a value of 10 is passed as a base beforehand, and we receive a value of 25. In both cases the
accumulator is returned.

Next we are introduced to `.find()`. In the first example we see that a list (or array) of people
objects are provided, and we look for someone who is greater or equal to 35. As a result, we
find the object with the name `"Charlie"` as a match. We see the difference from `.filter()` here is that
the object containing the name `"David"` also meets the criteria, but only the 'Charlie' object is returned.
Unlike `.filter()`, `.find()` will only return the first result it finds.

The second example with `.find()` is a bit more complicated. Here we use `.find()`, and in the comparison
we access the `Math` object that comes with Javascript (built-in object), and access the max function, which
returns the largest value from its passed parameters. We also see that our `.find()` method passes more
than one parameter (just like all the others covered can optionally). These include the value `team`, the
index `index`, and the array `array` which is the array itself that `.find()` was called against. With the
array, we are able to perform a rather recent addition to the JS ecosystem, the spread operator (`...`).
This actually expands the array from the object provided. So in this case `Math.max()` will actually look
like this with the values, `Math.max(900, 500, 700)`. Using the spread operator is also useful for spreading
itself in new arrays or objects to copy values. These copies only return shallow versions of their actual
values, copying nested objects and arrays by reference. The term "shallow" will be explained in more
detail shortly. With a copy of the original array, we then iterate over the original again, but this time
with `.map()` to supply `Math.max()` with an array to spread for the score values, so that then `.find()` can
compare itself against the highest value found within the teams object.

## Reference in Memory and Shallow Copies

As alluded to before, we will now discuss how the spread operator (`...`) provides us a shallow
copy of an object or an array.

```js
const original = [1, 2, { a: 3 }];
const shallowCopy = [...original];

shallowCopy[2].a = 5;
console.log(original[2].a); // 5, the value has mutated
```

Here, as the last comment points out, the value of the `original` array actually mutated, even though
we performed an assignment on the `shallowCopy` that had used the spread operator inside a new
array. This behavior is due to how arrays and objects work as we discussed in chapter two. In
particular, it is due to them being passed by reference. This means that the address of the
value is shared, instead of a copy of the value. This leads to any manipulation in shallow copies
to mutate the original. So this would happen here as well, but notice the other two values are
not affected.

```js
const original = [1, 2, [0, 1]];
const shallowCopy = [...original];

shallowCopy[2][0] = 5;
console.log(original[2][0]); // 5, the value has mutated

// Now we will see the other values are copies instead of referrences
shallowCopy[0] = 10;
shallowCopy[1] = 20;
console.log(original[0]); // 1, Same
console.log(original[1]); // 2, Same
console.log(shallowCopy[0]); // 10, This updated correctly
console.log(shallowCopy[1]); // 20, This updated correctly
```

This is a very useful peace of information to hold onto, and reflects that Javascript is following the
rules with regards to how memory references are passed around. I had found that I was aware of this
behavior from C, but had not truly appreciated that this was occurring with the spread operator as well.
If you forget about something like this, it may not immediately obvious that you are mutating your
original data. This most likely is not what you would be intending if you were unaware of this.
These comparisons really illustrate this.

```js
const original = [1, 2];
const copyOfOriginal = original;

original[0] = 10; // We are changing a value inside of the array held in const original
console.log(original === copyOfOriginal); // true
console.log(copyOfOriginal); // [10, 2]

original = 2; // Uncaught TypeError: Assignment to constant variable.
```

You may have been particularly keen and thought of this, but it seems this is a very common
misconception. We see the assignment of `const` to the variable `original`, which is the array
`[1, 2]`. This variable does correctly behave as a `const`, as seen in the last line of the code
snippet, not allowing itself to change its original value. We see that the array itself has its
values manipulated though. Understanding the the value of the array is actually its memory
address is the key in this puzzle. Since the original memory address is not changing, the value
is indeed constant. Since we manipulate something in a memory address, all references reflect
what is currently stored in this address.

What we may have intended with all of this is to get an actual copy of what is stored at the memory
address we refer to. This can be much more complicated than initially given credit. This is due to several
things, including the nesting levels of the values themselves, and for objects, being able to store things
such as functions for values.

A common approach seen for deep copies would be this:

```js
const jsonString = { name: "John", age: 30 };
const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj)); // JSON string: '{"name": "John", "age": 30}'
};

const test = deepCopy(jsonString);
console.log(deepCopy(jsonString)); // {name: 'John', age: 30}
```

This will work well for simple objects without functions or non-serializable values like `undefined`, but
it doesn't work for objects containing functions or circular references. Using the JSON object we
first turn the object into a JSON format using `.stringify()`. Afterwards, we `.parse()` this result
to turn the JSON string back into a Javascript object. More accurate functions can be looked up
through a Google search, or asking an LLM (Large Language Model) like ChatGPT. These sources are
useful for weighing your options in circumstances like this, and giving you popular solutions. You
are also free to use libraries like lodash to handle this task. We will go into libraries in later
chapters.

## Parting Thoughts

Great work getting to the end of this chapter. We went into rather dense material at the end. The
flexibility we get with being able to pass functions to operate on arrays and objects gives us the
ability to extract a good amount of information from such structures rather simply. We must remain
aware that situations involving nesting could deal with shallow copies, which use memory
references to pass arrays and objects instead of copying them. Feel free to look over parts of this
chapter again in your free time. These structures and function concepts are really the building
blocks of all data manipulation. This is especially true for Javascript with the functional methods.

As always, it is up to you to decide if you would like to work with a more class oriented approach
(OOP) or functional programming approach. Typically it is encouraged to use whichever paradigm is
associated with the language. For Javascript, it is typically seen firstly as a functional programming
language. It has the ability to use classes like Object Oriented Programming (OOP), but the innerworkings
of the class implementation are actually done through Javascript prototypes. These prototypes are an
internal property of objects used for inheritance, facilitating the functional programming philosophy.

Staying with the a language's common design approaches typically makes it easier for others to assist
in working on the code. Others may come to expect a certain structure of that language, making it
easier to work on with a certain implementations approach from another due to the language naturally
being centered around one or the other. In time, this also becomes useful in being able to distinguish
one language from another more readily, recognizing the familiarity of structure. Usually, if you are
working on a code base it is best to keep things as consistent as possible. Being adaptable will allow
you to suit these needs, as well as give you a good context for weighing the pros and cons of each
implementation strategy.
