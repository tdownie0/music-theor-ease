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
being GitHub Co-Pilot. This plugin allows for AI auto-completion and code suggestions while we are writing our
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
our code (though this is available with Co-Pilot as well now), or other code that we come across while
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
you navigate to this page you will see the typical layout for a github page. You will see several tabs,
the repository name, metrics, and many other things. What we are specifically are looking for is the
green button that says "<> Code", and has a downwards arrow next to it. Once you click on this, you
will see a tab labeled HTTPS that is currently selected with the web URL
<https://github.com/tdownie0/music-theor-ease.git> in the text field. You can copy this link with the
copy icon next to it that displays "Copy url to clipboard" in hover text. Once you do so, you can now
navigate back to your terminal and type `git clone https://github.com/tdownie0/music-theor-ease.git`
into it. Once this is done, you will then see that the repository has started downloading in your
current directory, and afterwards you should be left with a directory named "music-theor-ease" with the
source code from the repository. At this point, you have successfully downloaded the source code to your
local machine.

Once you reach this point, you can now use `cd music-theor-ease` to navigate to the directory. As a side
note, you may press tab after entering `cd m`, and your terminal will attempt to auto-complete what you
are typing based on the folders and files currently stored in the directory. As long as you do not have
any other files or folders starting with "m" in this directory, your terminal should correctly fill in
the remaining letters for you. This can greatly speed you up as you navigate through the command line
interface (CLI). Once inside the directory, you can now run `npm run dev` and either "ctrl + click" the
part that says <http://localhost:3000>, or manually type the address in your web browser to explore the
site that we will be studying in detail. This command runs a local development server so you can experience
the sites that you are currently working on. The site will only be available to you locally as long as
the local server is running.

## Installing Plugins

Lets walk through installing some plugins for our development. If you are still in the
"music-theor-ease" directory, you can actually type `code .` now that you have VS Code installed.
This command opens the text editor through the `code` command, and here the `.` represents the
current directory. You can actually navigate to the directory above your current location with
`cd ..`, and you will see both of these dot shorthands extremely often throughout all of your
programming endeavors, being very common in referencing "paths" to files. The term "path" is often
used to refer to the location of a file relative to the location of a file or directory that you
have in your system.

There are several helpful plugins that satisfy many programming related needs, such as intellisense,
debugging, formatting, and much more. In VS Code you will see will see on the leftmost side of the screen
a series of icons. Each of these will open a side panel when clicked on, and the one we will be looking
for at the moment will be the extensions option. For now this looks like four tiles with the top right
tile appearing that it will join the others to complete a square shape. If you are unsure which this is,
hovering over each of the icons should display the name of the icon next to it, so ours should say
"Extensions". When this is opened you will see a search bar at the top where you can type in the names of
the extensions you would like to download.

> **Windows Users:** An additional plugin you will need to install is the WSL plugin so that you can
> access your WSL files with VS Code. When you search for this you should it is created by Microsoft
> and has over 26 million downloads. Once this is done you may need to restart VS Code, but you will
> actually see a separate area for plugins to be installed for WSL. On my machine there is a top
> section for "LOCAL - INSTALLED" and another for "WSL: UBUNTU - INSTALLED". While working on code
> with WSL, you will need to install your plugins in the WSL section. You may need to open VS Code
> from within your WSL terminal by navigating to the folder you would like to open and typing `code .`
> as a command. You may not see the section until this, so do not worry if that is the case.

Here will be a list of some essential ones that will assist with this project and your day to day
programming experiences.

| Plugin Name                       | Publisher     | Purpose                                                                        |
| :-------------------------------- | :------------ | :----------------------------------------------------------------------------- |
| IntelliCode                       | Microsoft     | Auto-Complete and documentation references                                     |
| IntelliCode API Usage Examples    | Microsoft     | Displays relevant API (Application Programming Interface) usage examples       |
| Javascript and Typescript Nightly | Microsoft     | Gives you the latest versions of Typescript for intellisense (may be optional) |
| Jest                              | Orta          | Allows you to run Jest in VS Code                                              |
| Prettier - Code formatter         | Prettier      | Formats your code for you                                                      |
| Tailwind CSS IntelliSense         | Tailwind Labs | Intellisense for Tailwind CSS                                                  |
| Material Icon Theme               | Philipp Kief  | Material Design Icons for VS Code (Styles sidebar icons)                       |
| Gruvbox Theme                     | jdinhlife     | Color theme for your editor (I use Gruvbox Dark Hard at the moment)            |

There are several more extensions you can download as well, but this should be enough to get us up and
running. To change keyboard shortcuts you can actually go to your "File" tab at the top left of your
screen, then select "Preferences", and then "Keyboard Shortcuts". Once you do this you can type something like
"Prettier" into the top search bar and you will see the keybinding associated with it. Personally I use
"Shift + Alt + F" for my own keybinding (which is the default), and you are free to change this to whatever is
comfortable for you. I find that this does not interfere with my other keybindings. You will find many chances to
use this as we work on our files. You are also free to google examples of these extensions and follow
along with videos demonstrating their usages, though you may get enough experience first-hand as you
work along with this.

## Up and Running

Now that we have worked through that, we should have the proper setup and environment to finally start
checking out our code! I hope the setup went swiftly for you, and am thrilled you made it this far. I
anticipate this is an area for hiccups to pop up in the process, due to different machine setups,
operating systems, and unfamiliarity with the process. Google may help quite a bit with the process
so do not hesitate to search anything that is causing you issues. Ultimately, this is one of the primary
skills of being a programmer, looking up resources and doing research into how to resolve issues and
obtain a better understanding of any task that you are currently undertaking. Knowing how to look for
the correct resources can really make experienced programmers stand apart from their less experienced
counterparts. This statement is also true for setting up your coding environment through extensions and
such. Being able to setup your environment so that you can navigate swiftly through files and your code
base can save you immense amounts of time in the long run.

> **Note:** I will also be providing an auxiliary section going over an editor known as "Vim". There is
> actually an extension you can download for VS code called "Vim" by vscodevim. This allows you to use
> vim motions and some shortcuts associated with the editor, but some of its shortcuts may conflict with
> pre existing shortcuts in VS Code. Many of these can be handled through adjusting keybindings, but the
> process can be tedious and would ultimately requires familiarity to setup in the best way possible for
> your needs.
>
> I would hesitate reaching for it at the moment due to it drastically changing how you
> interact with files when editing them. In the long run, mastering something like this can speed up all
> your development tasks by allowing you to not have to reach for a mouse, instead navigating purely
> through your keyboard. I find this is nice in VS Code and other text editors as well, as they also
> allow you to interact with the GUI (Graphical User Interface), in addition to its motions. If you
> would like a brief taste you can check out the resource I will link below, though I would not encourage
> paying for the resource unless you truly desire if you happen to reach the end. I believe navigating
> through a text document is truly the best way to learn with the tool, however dull it may be at times.
> Maybe after going through the section I provide you for the resource, if you still feel inclined to
> go further in this site you can consider it as an option then. I do feel this may be a very useful
> resource for younger audiences, and those who are teaching in classroom settings.
>
> [Vim-Adventures](https://vim-adventures.com/)

If you made it through, it is now time to start discussing the implementation details of the website. As
mentioned before, I will be selecting the files that have a gentle introduction to all of this new
knowledge we have outlined. With this in mind, that means we will not be going from top to bottom with
the source code at first. After we get our bearings and are more familiar with the overall logic, we will
begin to peel back the curtain and try to navigate the site from top to bottom as you would expect when
walking through source code.

In reality, if you are new to a project, you typically will only navigate to the files that are
relevant to the task that you have at hand. It is typically unrealistic to understand every part of a site
you are working on before you start contributing to the project. Especially now, some code bases have so
much logic that it is most likely impossible for someone to have a complete understanding of the entirety
of the code base. At that point, it may actually come down to certain specializations having an understanding of a particular unit. It may be helpful to gloss through certain sections and expose
yourself to new ideas, but fixating on gaining a complete understanding at first may be an unproductive
way to spend your time. As you continue working in the code base you will surely be exposed to more areas
of it, and when the time naturally comes it can make more sense to invest your time in familiarizing
yourself with these areas.

With all of that said, let's move on to the website portion of this reading.
