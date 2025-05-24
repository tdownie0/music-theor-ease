# How To Become A Programmer For Anybody: Website Technologies and Setup

## Chapter 1: The Rundown

Welcome to the portion of this reading that will set ourselves up for dissecting a modern website
built with JavaScript (implementing TypeScript in advanced versions). Through this,
the reader will be given a chance to see what really makes some modern web functionality work
behind the scenes, and see the considerations that can be taken into account
when building a system for such a purpose. We will use Next.js and React in
this program as well. Next.js handles the server and routing of web pages, and
React is a javascript library that handles the frontend presentation, animations, and interactions with the
visual representation of the site. There are actually several frontend libraries like React
in the programming community today. Many of them interact with HTML (HyperText Markup
Language, which is used to present things on a web page) to add logic. React was made by Facebook,
and is used very commonly by the web development community today.

We will have brief introductions into HTML and CSS (Cascading Style Sheets) so that the logic related
to positioning things on a web page is not too distracting, otherwise they would possibly detract from our
understanding of the logic manipulating elements and values on a page. After this introduction, we will go
through the steps of installing Visual Studio Code (VS Code) for our IDE (Integrated Development Environment), and we will go over extensions that will be helpful in the process. Following this, we will touch on git for a
bit so that we can pull the source code, navigate within branches, and learn its general use. Once we have
reached this point, those following along will then have an understanding of the basics of web page
presentation, have an appropriate learning setup, and have the entirety of this codebase on their own machine.

With all of that in place, the reader will actually be able to run the code themselves and see a local
version of the website we will be studying and learning from. Upon getting to this point, every part of
of the site can be explored freely. This reading will be structured in a manner to hopefully present each
portion of the site in a logical order that gradually builds in difficulty, but shares commonalities with
things we will have already went over. To preface, the final product of this site is in
TypeScript. It is not the most complicated TypeScript it could be, but having the type logic
on top of the Javascript logic may be a bit overwhelming at first. In smaller sections the opposite
may be true, but the longer sections will have many moving parts to keep track of.

Once the code is on an individual's computer, they are free to play with it as they would like as well.
Parts can be commented out, names changed, and things can even be moved around to see if they will lead to
errors or changes in behavior. This is often helpful if someone is trying to make sense of a portion of code,
but thinks that they are missing something in the logic. Inserting a `console.log()` statement and seeing
what a value is at a certain time can also be helpful. Using git, we will be able to undo any changes that may have been made, so no one will have to be concerned about breaking anything.

## Music Theor-ease

Our example site is named Music Theor-ease. If the reader happens to be familiar with music, they may recognize
some of the terminology, but there is no concern if this is not the case. Initially, one of the original
thoughts with this reading was to explain arrays by comparing them to music scales and modes as examples.
We will be exposed to these as we look through the site. While exploring this site we will see examples of
animations, UI/UX (User Interface/Experience) practices, retrieving data, passing data between components,
design patterns, testing, and much more. The structure was designed with the intention of revealing how
many of these sites with large amounts of data and sections are able to be mass produced and maintained.

While touching on portions of the site we will go over all the design decisions that were made along the way,
and discuss when trade offs were made. Being able to create a site with an unlimited amount of time
allows for one to spend vast amounts of time on features they would like to add to their site. In
most professional settings, we most likely will not have unlimited time. This leads to optimizing our
time effectively and balancing what is a realistic expectation, versus unrealistic. When we start to
notice that something is becoming painful or taking much longer than anticipated, sometimes there is
another choice that can give us a working solution much more quickly and simply. This is not meant
to imply that the "easy route" should be chosen, but more so that we can get stuck in situations where we
become blind to other acceptable alternatives. This can be the case for many situations, but often
it can be that we envisioned something a very particular way, and are only willing to stop once this has been
achieved. Having the conviction to follow things through and finish them is a very admirable trait, but
we should also be able to realize when a situation like this is stopping us from finishing everything else.

This is actually one of the beauties of programming. We do our best to make sure something is great
and as perfect as it can be before we deliver it and present it to users (hopefully), but inevitably
things can go wrong. With code, we have the ability to update things and improve them over time.
This leaves room for us to create working solutions so that users can enjoy the benefits of the
software that we provide. So long as the software we create can be used, it may be able to generate
income so that we can spend more time on improving parts of the system we originally wanted to later on.
Now, something could always be made just as a hobby, but being able to know when to implement practical
parts of a solution instead of never having a finished product is a good habit to learn.

[![Next](https://img.shields.io/badge/Next-blue?style=for-the-badge)](https://github.com/tdownie0/music-theor-ease/blob/main/topics/Website_Setup/ch2.md)