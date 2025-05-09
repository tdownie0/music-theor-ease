## Chapter 3: Setting Up a Development Environment

We are almost ready to start coding and interacting with the site that we will be learning with. The
initial setup may take several steps based on the operating system that the reader is currently using
(Windows, Mac, or Linux), but this chapter will hopefully provide enough resources to accomplish
this task successfully. Individuals using Mac or Linux may have an easier time setting everything
up initially. This project was actually developed on Windows through the Windows Subsystem for Linux (WSL,
specifically WSL 2 in this case), so anyone using Windows should be able to follow along as well.

Mac OS behaves very similarly to Linux, but is actually closer to UNIX (the first operating system to be
created). Linux was based on UNIX, but is open-source, where UNIX actually requires a license to use. Due to
this, Mac and Linux can provide a similar experience from their terminals (Both use Bash as their default
shell). On the other hand, Windows has a unique shell apart from the others, Command Prompt, which has its own
syntax.

> **Note**: The terminal is a program that allows us access to command-line interfaces (CLIs), and
> the shell interprets and executes commands provided to the terminal.

Since Windows behaves differently in its terminal, tools like PowerShell have come along to help
developers use some of the commands from operating systems such as Linux and Mac (PowerShell also provides
several more capabilities than Windows' default Command Prompt, but a more unified syntax is helpful).
WSL came out after PowerShell was created, and allows us to use a Linux kernel that runs directly
on Windows. This is extremely helpful, as it allows for a similar local development experience across all
the operating systems.

Virtual machines (VMs) were also commonly used for this task in the past, allowing access to
Linux or Mac OS environments for development. Windows had tended to be much more difficult to set up for
local development on its own. Some of the key differences between a VM and using WSL is that WSL is
more tightly integrated with Windows, acting as a lighter weight VM (in the WSL 2 case) and having direct
access the to Windows file system. When using a VM we have to divide up portions of the computer's
resources to be allocated to each machine (the main machine and the virtual machine). Such resources include
RAM, disk space, CPU cores, and all the additional overhead of having a separate machine run within another
machine. Much of this is handled for us already with WSL.

While setting up our environment, we will be exposed to some basic commands related to Linux and navigating
directory structures from within the command line. With that said, there is no need to be overly focused on
learning all of this material at the moment. The main focus of this chapter is to install the packages we need
and get our local development environment up and running.

> **Windows Users**: Here is a link to Microsoft's documentation. In most cases, it is probably better to
> link their resources instead of providing manual steps here as their processes may change in the future
> due to updates. These resources will be maintained by Microsoft, so they will be updated alongside any
> occurrences such as this.
>
> [How to install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

## Installing Visual Studio Code

Our next step will be installing our rich text editor, which will be Visual Studio Code. There are several
options when it comes to rich text editors and IDEs (Integrated Development Environment), and the reader
will likely have exposure to multiple if they decide to continue learning about programming. Using tools such
as these can really make a world of difference with our coding experience. There was a time when these
tools did not exist, and some may come across curriculums that do not reach for these programs  
right away. It is certainly possible to code without them, and it may be quicker to start coding without them.
Though ultimately, missing out on many of the modern features these tools provide would likely deprive the user
of experiencing what most have come to expect for a professional programming environment. An analogy for this
would be akin to someone deciding to write a paper in Notepad instead of Microsoft Word or Google Docs. By doing
so, this individual would be missing out on many features that have come to be staples in text editing
software, such as changing the font styles, font size, spell checking, and much more.

Visual Studio Code (VS Code) is free, feature rich, allows for plugins, and has many customizability
options. A link can be found here, [VS Code](https://code.visualstudio.com/docs/introvideos/basics),
and comes with a helpful video to explain the layout and some of the features included with the editor. It is
not necessary to create any files along with the video, but it may be helpful for a general overview.
Once this is up and running, we will go through the process of downloading the code for our project, as well as
installing the plugins that will be used alongside it. Recently a very helpful plugin has become wildly popular,
being GitHub Copilot. This plugin allows for AI auto-completion and code suggestions while we are writing our
code in the editor through ChatGPT and other LLMs (Large Language Models). Currently, this tool allows for a
certain amount of free interactions per month with a github account (which is free), and also provides
subscription plans for those who would like to use it more heavily.

When this portion of the reading was first written, this plugin did not have a free option. Due to this, it was
not anticipated to be used by a large number of readers. Currently, this tool space is one of the largest
changes to modern development. Readers are encouraged to explore its capabilities as we explore plugins further,
but it is not absolutely essential for the moment. It is very convenient to have everything directly in our
editor, but LLMs can still be leveraged without this setup.

As an alternative, we can always copy and paste our code into LLMs through their respective websites for AI
assistance, such as [ChatGPT](https://chat.openai.com/) (or a number of other LLMs, some common ones would
include [Claude](https://claude.ai/) and [Gemini](https://gemini.google.com/)). The main difference with this
method is that the suggestions will not be directly in our IDE. In addition, the model will also not be able to
scan our local files for additional context and make suggestions for automatic revisions or file creation (these
aspects are some of the latest developments in the AI tool space).

With all of this in mind, using one of these sites along with our editor requires us to have a web browser open
while we are coding (which is common in web development), jumping back and forth between the
two windows. Ultimately, this is useful anyway, as we may be seeking longer explanations about
our code (though this is available with Copilot as well now), or other code that we come across while
researching implementation details. Accessing these tools in this manner allows for a more conversational
layout format, possibly provides access to more of the latest models, enables additional free usage of the
models, and can enable access to additional features.

## Retrieving the Source Code

In order to get the source code on our machines, we will be using a program called git. This is an
industry standard and is described as a distributed version control system. It allows us to track the history of
our code, create multiple versions, and enables us to collaborate with other programmers on the same
source code. We will be covering some of the features of git in more depth later on, but for now we will
be using it specifically to get the source code that we will be working with on our local machines.
Windows users will be running these commands in the WSL terminal. Mac OS and Linux
users will be using their respective native terminals. Once the terminal is open, we will run
a few basic commands so that we can create a directory and organize where we will be storing our code.

With our terminal open, we will run the command `mkdir tutorial` (the reader may replace "tutorial" with any
name that they wish for their directory, which is referred to as a folder in a Windows graphical interface).
Here `mkdir` stands for "make directory", and will create a new directory for us to store the source code
that we will be working on. This step is not absolutely necessary, but helps with staying organized, especially
when there are multiple directories and files. Next, we will use `cd tutorial` (only if "tutorial" was
used as the directory name, otherwise replace it with whichever directory name was chosen). The `cd` command
stands for "change directory", and navigates our current location in the terminal to the directory that was
specified. Once inside this directory, we will now clone our code repository (the central location for our
source code). The original source of this reading is actually inside the code repository that will be cloned,
so it is likely that the reader is already in the right place. This cloning process will be
the same for any source code that we should wish to interact with on github.

Here is a link to the main page of the repository: <https://github.com/tdownie0/music-theor-ease>. Once
this page is navigated to, we will see the typical layout for a github page. There are several tabs here
including the repository name, metrics, and many other things. What we are specifically looking for is the
green button that contains "<> Code", and has a downwards arrow next to it. Once this is clicked, a window
should appear and we will see a tab labeled HTTPS that is currently selected with the web URL
<https://github.com/tdownie0/music-theor-ease.git> in the text field. We can copy this link with the
copy icon directly next to it, which displays "Copy url to clipboard" when hovered upon. Once this is done, we
can now navigate back to our terminal and type `git clone https://github.com/tdownie0/music-theor-ease.git`
into it. Following this, we should see that the repository starts downloading inside of our
current directory. Afterwards, there should be a directory named "music-theor-ease" with the source code
from the repository inside. At this point we have successfully downloaded the source code to our
local machine.

Once this point is reached, using `cd music-theor-ease` will navigate us inside the directory. As a side
note, pressing the tab key after entering `cd m` will cause the terminal to attempt auto-completion. This
auto-completion is based on the directories and files currently stored in a directory. If there are not
any other files or directories starting with "m" in the current directory, our terminal should correctly fill in
the remaining letters for us. This can greatly speed up as anyone's navigation through the command line
interface (CLI). Once inside the directory, we can now run `npm run dev` and either "ctrl + click" the
part that appears with <http://localhost:3000>, or manually type this address into our web browser to explore the
site that we will be studying in detail. This command runs a local development server so that we can experience
using the web browser with the sites that we are working on. The site will only be available to us locally as
long as the local server is running.

## Installing Plugins

Lets walk through installing some plugins for our development. From inside of the
"music-theor-ease" directory, we can type `code .` now that we have VS Code installed.
This command opens the text editor through the `code` command, and here the `.` represents the
current directory. We can actually navigate to the directory above our current location with
`cd ..` as a command. Both of these dot shorthands are extremely common to see throughout
programming, often being used for referencing "paths" to files. The term "path"
describes the location of a file relative to the location of another file or directory within a system.

There are dozens of helpful plugins available to us which satisfy a variety of programming related needs.
A short list of tasks that they may assist with are intellisense, debugging, formatting, and much more.
In VS Code the leftmost side of the screen has a "primary sidebar" which has a series of icons along
the top. At the time of this writing, there are a series of icons at the top right of VS Code's display that
enable us to toggle different sidebars, layouts, and access "manage" (which is the cogwheel icon). If
there is any difficulty locating or accessing any of the features within VS Code, adjusting and looking
through "Keyboard Shortcuts" within "manage" may be very helpful.

Within the primary sidebar, each icon along the top will open a different view when clicked on. The one we are
currently looking for is the "Extensions" option. Currently, this icon appears as four tiles with the top
right tile separate from the others, otherwise creating a square. If there is any uncertainty about which icon
this is, hovering over each of them should display the name of the icon, so in this case it should say
"Extensions". When this is clicked upon, we will see a search bar at the top where we can type in the names of
the extensions we would wish to download.

> **Windows Users:** An additional plugin that will be needed is the WSL plugin, enabling
> access to WSL files within VS Code. The correct plugin should be created by Microsoft
> and has over 26 million downloads. Once this is done VS Code may need to be restarted, but there will
> be a separate area for plugins to be installed specifically for WSL. Currently there is a
> section for "LOCAL - INSTALLED" and another for "WSL: UBUNTU - INSTALLED". While working on code
> with WSL, many plugins will need to be installed in the WSL section. This may require opening VS Code
> from within the WSL terminal by navigating to the folder we would like to open and typing `code .`
> as a command. The section may not appear until this is done, so there is no need for concern if that
> is the case.

Below is a list of the more essential plugins that will assist us with our project, as well as our day to
day programming experiences.

| Plugin Name                       | Publisher     | Purpose                                                                                         |
| :-------------------------------- | :------------ | :---------------------------------------------------------------------------------------------- |
| IntelliCode                       | Microsoft     | Auto-Complete and documentation references                                                      |
| IntelliCode API Usage Examples    | Microsoft     | Displays relevant API (Application Programming Interface) usage examples                        |
| Javascript and Typescript Nightly | Microsoft     | Provides the latest versions of Typescript for intellisense (may be optional)                   |
| Jest                              | Orta          | Allows us to run Jest in VS Code                                                                |
| Prettier - Code formatter         | Prettier      | Formats our code for us                                                                         |
| Tailwind CSS IntelliSense         | Tailwind Labs | Intellisense for Tailwind CSS                                                                   |
| Material Icon Theme               | Philipp Kief  | Material Design Icons for VS Code (Styles sidebar icons)                                        |
| Gruvbox Theme                     | jdinhlife     | Color theme for our editor (Gruvbox Dark Hard is an option, but any theme will be helpful).     |
| GitHub Copilot                    | GitHub        | AI auto-completions, as well as other capabilities. A GitHub account may be needed to use this. |

There are several more extensions that can be download as well, but these should be enough to get us up and
running. As a note, another way of navigating to "Keyboard Shortcuts" is by selecting the "File" tab at the top
left of VS Code window, then selecting "Preferences". Once here we can type something like
"Prettier" into the top search bar and we will see the keybinding(s) associated with it. The default should be
`Shift + Alt + F`, but this is free to be changed to whatever is the most comfortable. Often a case for
switching key bindings would be if it interferes with another existing binding. There will be many opportunities
for us to use this "Prettier" key binding as we work on our files. Googling examples of these extensions
and following along with videos demonstrating their usages may also prove useful. In addition, having firsthand
exposure to their capabilities will help with cementing our understanding of their uses.

## Up and Running

After making it to this point, we should now have the proper setup and environment to finally start
checking out our code! If there was, or currently still is any trouble along the way, Google can be very helpful
with this process. Asking for the assistance of an LLM is also an option. Since there are various machine setups,
operating systems, and other random variables for each individual, there may be a few extra steps in addition
to the ones that were already noted in this process.

Ultimately, pushing through issues and following instructions to properly setup things are some of the primary
skills of being a programmer. Looking up resources and researching how to resolve issues often leads to a better
understanding of the tasks that we are undertaking. With this, the process of finding resources that are the
most relevant to what we are actually searching for becomes more refined. Skills such as these can really
set apart experienced programmers from their less experienced counterparts. Another aspect that is closely
related to this is setting up an environment that is ideal for our optimal workflow. This can save immense
amounts of time in the long run, facilitating the ability to swiftly navigate through files and the code we are
working with, as well as other tasks.

> **Note:** A tool worth noting here is an editor known as "Vim". There is actually an extension that can
> can be downloaded in VS code called "Vim" by vscodevim. This allows the user to use vim motions and
> other shortcuts associated with the editor. Some of its shortcuts may conflict with
> preexisting shortcuts in VS Code (favoring VS Code), but adjustments can be made in one's keybindings if
> desired.
>
> It may be worth looking into this tool before making the switch, as it drastically changes how a user
> interacts with files when editing them. In the long run, mastering a tool like this can greatly speed up
> development tasks, taking away the need for reliance on a mouse, instead navigating purely
> through the keyboard. This can be nice to use in VS Code and other text editors as well, as they also
> allow us to interact with the GUI (Graphical User Interface) while providing its motions. The link below can
> provide a quick introduction to this experience, though paying for the resource is likely not necessary
> unless one truly desires. Navigating through code and text are probably the purist ways to learn the
> tool, however dull it may be at times. That said, some may enjoy the gamification provided by this site.
>
> [Vim-Adventures](https://vim-adventures.com/)

Now that we have reached the end of this section, the time has come to start discussing the implementation
details of the website. As a precursor, there is a bonus chapter directly after this chapter for a practical
introduction to a web page built with HTML, CSS, and minimal JavaScript. This will guide the reader through
creating a site for their resume, and may be a helpful portfolio piece for the future. Originally this web page
was designed as a concept, but after considering the difficulty of jumping straight into a full blown React
frontend site, this was added as a supplement. An additional benefit of this bonus chapter is that it will
introduce the reader to GitHub Pages, which will allow the reader to host a similar site that others can
navigate to on the internet.

If the reader is already comfortable with web development they may choose to skip this bonus portion. From the
beginning of the main site's discussion, files will be presented based on their difficulty and relation to other
files. The intent of this is to allow for a gentle introduction to all of the new concepts we have outlined
here. With this in mind, that means we will not be going from top to bottom with the source code at first.
After settling into the source code, as well as becoming more familiar with the overall logic, we will begin to
peel back the curtains to greater degrees. Eventually, we will being dissecting files from top to bottom,
attempting to demonstrate how a developer may walk through a set of files they are working on.

In reality, when someone is new to a project, they typically will only navigate to the files that are
relevant to the task that they have at hand. It is usually unrealistic to gain an understanding of every part of
a site just to start contributing to a project. Especially today, some code bases have so much logic that it is
likely impossible for one person to have a complete understanding of these code bases. At this point, it usually
comes down to certain roles and specializations having an understanding of particular units of the code.

It may be helpful to gloss through some sections of the site we will be studying in order to gain more of a
general understanding, or be exposed to new ideas. Though, fixating on gaining a complete understanding at first
may be unproductive. As we continue exploring the site through the reading, it will make more sense to devote
time to understanding specific sections of it after having been exposed to similar concepts.
