# How To Become A Programmer For Anybody: Website

Now that the code base is downloaded locally, let us start by exploring certain files to begin with.
If the reader has not gone through the "Website_Setup" section of this reading, it is encouraged to do so,
especially if these technologies at hand are unfamiliar. Following along in a code editor is not necessarily
needed, as the files can be navigated through just fine on the GitHub repository. Though, for anyone wishing to
experiment with the code and get first hand experience with running it locally, it is recommended to download
the code on their machine.

While going through these files, particular branches will be pointed to for evaluating and comparing versions of
a file. With git, we get a concept of "branches", which allow for modifications of the code we are working on
without affecting the main code base. These are typically used for developing features and correcting
issues within a site or codebase. The reason for this is that it allows the main code base to function as we
would expect while others, or ourselves, work on updating portions of the main site. With branches, we do not
have to worry about breaking any current functionality that may be on our live site until we have tested the
particular branch, and then choose to include it in the main branch. This is typically done through "merging" the
branches, where the main branch of a codebase, in a sense, absorbs the branch we had been working on
so that all of our updates are then included on the main branch.

> **Note:** Git itself has several capabilities, and the subject alone can go quite in depth. Those following
> along with the reading will have the technology gradually laid out in portions as they are relevant, providing
> a basic understanding of its uses. Some examples include navigating between branches and creating commits.
> If anyone would like to dig further into the topic, it is encouraged that they search for resources related
> to what they are curious about. The following site is a great resource to further any learning about the
> technology. The "About" and "Documentation" sections may be particularly helpful.
>
> [git](https://git-scm.com/)

After that brief explanation, it needs to be pointed out that the branches of this site were actually used
to separate different levels of difficulty and refactoring regarding each of the files. As an example, let us
take a look at the first file we will begin with on its GitHub page,
[Main Page](https://github.com/tdownie0/music-theor-ease/blob/main/app/page.tsx).

Before going further, we need to explain why this page is actually named "page.tsx". This page serves
as the root of the "app" folder, and is the main page of our site (being the first one users land
on). The main page of any site we visit (also called a home page) is often referred to as the index page. With
Next.js, using "page.(js/tsx)" is the convention for naming a page that has a specific route. In this case, the
root page (index page) of our site has a route of `/`. This is standard for websites, and mimics a directory
structure where `/` would be the top level directory. If we have the site running locally (which we can do
by being in the directory of the source code we downloaded earlier with `git clone`, and then running
`npm run dev`), we can see that if we add a `/` after `localhost:3000`, it will direct us to the same page as
before, but removing the `/` automatically, as it is inferred.

> **Note:** Here, `localhost:3000` is setup by Next.js for us, and `3000` refers to the port that it is
> currently listening on. In a URL, the port for addresses always follows after the `:`. Some extra
> information for those curious, `localhost` typically refers to the loopback address of our local
> machine, meaning that it points back to itself. In IPv4 this address is usually `127.0.0.1`, and in IPv6 it is
> `::1`. Modern browsers also allow IPv6, so we could also access our local site like so if it is
> currently running, [http://[::1]:3000](http://[::1]:3000). This is purely for extra information, so do
> not feel the need to memorize this.

With Next.js, the folder structure actually dictates the routes of our website. So if we have the site
running locally, and then click on one of the tabs above the title ("Circles", "Modes", "Quizzes"), we will
see that the URL adds the `/` as well as the corresponding tab name that was selected. This tells Next.js that we
want the "page.tsx" file located in the directory of the same name. In other routing systems, names of routes
can be set explicitly, but Next.js does this to simplify development. Without this, it would be required that
we have a separate file defining our routing infrastructure. Next.js providing this functionality is an example
of a concept, usually from frameworks, referred to as convention over configuration. Other frameworks may prefer
the opposite, configuration over convention, which allows us to have more control over the structure of a project
we are working on. Using conventions can sometimes speed up development, as we do not need to build out as much
of the initial setup manually.

Now back to branches. If we visit our site's index page on GitHub,
[Main Page](https://github.com/tdownie0/music-theor-ease/blob/main/app/page.tsx), we will see the code
for this particular page. Near the top left below the tab selections, there is a dropdown selection with the
word `main` inside (we can actually rename this, but it is named "main" by default). Next to it will be
the file path for getting to the page, being "music-theor-ease/app/page.tsx". If we click on the dropdown,
options will appear within a modal titled "Switch branches/tags". Within this, there are several branches listed,
and we will be focusing on the ones with the prefix of "levels".

If we go to the "levels/down_1" branch, we will see that the code slightly changes. Looking slightly above the
code section, we can also see the name of the person who made the last commit along with their message,
in this case "tdownie0 Continue removing types.". Not all of the "levels" branches affect this particular
file, but the ones that do will affect the commit message displayed. In most cases this will indicate that the
code has been updated as well, but in some there may have just been inconsistencies that were corrected later on.

On this particular page, we will see the branches that have different code from one another are "main",
"levels/down_1", "levels/down_3", and "levels/down_4". The "main" branch and "levels/down_1" are not all that
different, the only difference is that the Typescript type has been removed, being `React.FC`. This stands
for React.FunctionComponent, and is a type defined for React. If you were to actually open this file in your
code editor, you would see a definition will pop up when you hover over the `.FC` portion. This will also
show you quite a bit more information, but do not be worried about understanding all of that at the moment.
Since this is a Typescript file, numerous portions of the page will actually provide definitions and
descriptions when you hover over them. Even without you defining types, Typescript will still try to
infer types for you, and display as much information as it reasonably can. This is one of the biggest strengths
of Typescript, as you can essentially ignore it until you are ready for the extra information.

The information it provides is laid out to be as readable as possible for the programmer hovering over these
parts of the page, and their layout will become much more intuitive in time. These can actually become very
helpful so you do not have to leave your code editor to look up the definitions of things, and can allow you to
see some documentation of custom types defined in the project. You will not be able to experience this from the
web page for the code, but this can highlight the advantages of having a code editor with some GUI
functionality.
