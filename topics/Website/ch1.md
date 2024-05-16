# How To Become A Programmer For Anybody: Website

Now that you have the code base on your local machine, let's start going through some particular files
to start with. If you have not gone through the "Website_Setup" section, I would encourage you to do so,
especially if you are not familiar with these technologies at hand. You do not necessarily need to
follow along in your own code editor if you choose not to, as you can navigate to the files just fine
on the github repository. If you would like to experiment with the code and get first hand experience with
running the code, I would encourage you to make sure you have your own local version.

While going through these files I may point to particular branches for evaluating the layout of a file.
With git, we get a concept of "branches", which allow for modifications of the code you are working on
without affecting the main code base. This is typically done for developing features and correcting
issues for a site. The reason for this is that it allows the main code base to function as you would
expect while you or others work on updating portions of the main site. With this you do not have to
worry about breaking any current functionality that may be on your live site until you have tested the
particular branch and choose to include it in the main branch. This is typically done through "merging" the
branches, where the main branch of your site in a sense absorbs the branch you had been working on,
so all of your updates are then included on the main branch.

> **Note:** Git itself has several capabilities, and the subject alone can go quite in depth. For
> our purposes you should be able to follow along with the reading and have the portions that are
> relevant laid out so you can have a basic understanding of its uses for navigating between branches
> and creating your own commits. If you would like to dig further in to the topic I would encourage you
> to search for resources related to what you are curious about, and visit the site below as a resource
> to further your learning. The "About" and "Documentation" sections should be particularly helpful.
>
> [git](https://git-scm.com/)

After that brief explanation, I would like to point out that in our case I actually used the separate
branches to separate different levels of difficulty regarding each of the files. As an example, let's
look at the first file we will begin with on it's github page,
[Main Page](https://github.com/Duncan06/music-theor-ease/blob/main/app/page.tsx).

Before going further, I would like to explain why this page is actually named "page.tsx". This page serves
as the root of the "app" folder, and is actually the main page of our site, being the first one you land
on. The main page of a site you visit (or called a home page) is often referred to as the index page. With
Next.js, using "page.(js/tsx)" is the convention for naming a page that has a specific route. In this case, the
root page (main page) of a site has a route of `/`. This is standard for websites, and mimics a folder
structure where `/` would be the top level folder. If you have the site running locally (which you can do
by being in the directory of the source code you have downloaded on your machine through the `git clone`
command from earlier and running `npm run dev`), you can see that if you add a `/` after `localhost:3000`,
it will direct you to the same page as before, but removing the `/` automatically, as it is inferred.

> **Note:** Here, `localhost:3000` is setup by Next.js for us, and `3000` refers to the port that it is
> currently listening on. In a URL, the port for addresses always follow after the `:`. For some extra
> information if you are curious, `localhost` typically refers to the loopback address of your local
> machine, meaning it points back to it. In IPv4 this address is usually `127.0.0.1`, and in IPv6 it is
> `::1`. Modern browsers tend to prefer IPv6, so you could also access your local site like so if it is
> currently running, [http://[::1]:3000](http://[::1]:3000). This is purely for extra information, so do
> not feel the need to memorize this.

With Next.js, the folder structure actually dictates the routes of our website. So if you have the site
running locally, and click on one of the tabs above the title ("Circles", "Modes", "Quizzes"), you will
see that the URL adds the `/` and the corresponding tab name you selected. This tells Next.js that you
want the "page.tsx" located in the folder with the same name. In other routing systems you can name your
routes explicitly, but Next.js does this to simplify development, and to not require manually setting up the
routing infrastructure.

Now back to branches, if you visit the sites root page
[Main Page](https://github.com/Duncan06/music-theor-ease/blob/main/app/page.tsx) you will see the code
for that particular page. Near the top left below the tab selections, you will see a dropdown with the
word "main" inside (you can actually rename this, but it is named "main" by default). Next to it will be
the file path for getting to the page, being "music-theor-ease/app/page.tsx". If you click on the dropdown
you will see that a dropdown appears and is titled "Switch branches/tags". Within this, you will see
several branches listed, and we will be focusing on the ones with the prefix of "levels". If you go to the
"levels/down_1" branch, you will see that the code slightly changes. If you look slightly above the code
section, you can also see the name of the person who made the last commit along with their message,
in this case "Duncan06 Continue removing types.". Not all of the "levels" branches affect this particular
file, but you will see the ones that do will affect the commit message displayed. In most cases this
will indicate that the code has been updated as well, but in some there may have just been inconsistencies
that were corrected later.

On this particular page, we will see the branches that have different code from one another are "main",
"levels/down_1", "levels/down_3", and "levels/down_4". The "main" branch and "levels/down_1" are not all that
different, the only difference is that the Typescript type has been removed, being `React.FC`. This stands
for React.FunctionComponent, and is a type defined for React. If you were to actually open this file in your
text editor, you would see a definition will pop up when you hover over the `.FC` portion. This will also
show you quite a bit more information, but do not be worried about understanding all of that at the moment.
Since this is a Typescript file, numerous portions of the page will actually provide definitions and
descriptions when you hover over them. Even without you defining types, Typescript will still try to
infer types for you, and display as much information as it reasonably can. This is one of the biggest strengths
of Typescript, as you can essentially ignore it until you are ready for the extra information.

The information it provides is laid out to be as readable as possible for the programmer hovering over these
parts of the page, but their layout will become much more intuitive in time. These can actually become very
helpful so you do not have to leave your web browser to look up the definitions of things, and can allow you to
see some documentation of custom types defined in the project. You will not be able to experience this from the
web page for the code, but this can highlight the advantages of having a code editor with some GUI
functionality.
