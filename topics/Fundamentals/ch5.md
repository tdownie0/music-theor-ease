## Functional Methods

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
the line below "countDownNumbers.forEach((time) => console.log(time))" comes next. This statement
calls a .forEach() method on the array we just defined, countDownNumbers. Javascript is constructed
in a way that certain types have pre-existing functions and behaviors, such as arrays and objects.
This method will go through each element of the array one by one, left from right. It actually
does the same thing as the for loop you see in the second example, it just handles the incrementing,
and in this case the indexing as well. In our second example we were just taking the value of 5
directly, and subtracting from that. In the .forEach(), we are actually going through the array
with the index internally (countDownNumbers[0], countDownNumbers[1], countDownNumbers[2]...). The
index to access the elements is automatically incremented as mentioned. This is passed to us
through a variable name that we define, in this case it was "time". So the "time" variable
represents each element of the array, being countDownNumbers[] with whichever increment it is
currently at in the loop for the index.

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

With objects, we must first call the "Object" constructor function to delegate how we will
manipulate the object at hand. Common calls to "Object" to extract values would be "Object.keys()",
"Object.values()", and "Object.entries()". The keys and values functions retrieve their respective
items, and the entries function retrieves both at the same time. Once we use one of these methods,
we may operate on them just like we would any other loop.

In this example you could see that we only need to have prior knowledge of the pay key exisiting.
We do not need to know the key of the object rerpresenting the job position, or the key of the
positions job category. The method .values() handles extracting the values of both for us. This
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
to create an JobCategory class that housed a job type, then have that class hold another class which would
represent the Job class. Inside of this we could make methods to access the property for the pay.
On top of these classes, we would need a Jobs class to hold all the jobs within their categories,
much like the jobs object in the example above.

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
"pay" or "location" ended up changing, as long as their methods were updated internally, you would
still be able to access your intended value through their respective methods, getJobPay() and
getJobLocation(). This allows us to abstract the actual implementation from the end user. Reasons
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
considering this abstraction topic we were just discussing. Currently, both classes Jobs and
JobsCategory access a property of the Job class directly. Neither of these classes should have to
rely on the internal implementation of the Job class, such as its properties keys. If this were to
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

Luckily for us there are more functional methods to choose from than just forEach().

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

// Example involving math
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(double); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]
```

Here is an example of the .map() method. It takes anything looped over and returns an array for assignment
to the desired variable. In this case it took all the values in the teams object, and populated an
array with a new object for each value. Looking at the second example involving math, you can see
that the "double" variable has every value in the "numbers" array multiplied by 2. We see that the
original "numbers" array remains unchanged. This is due to .map() sending the data to wherever it is
intended to be assigned upon performing the operation. The function does not directly manipulate
the values contained in "numbers". The values are not manipulated in a .forEach() method either,
they actually do not return for assignment like .map() either.
