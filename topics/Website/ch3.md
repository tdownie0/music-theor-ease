## Chapter 3: Setting Up a Development Environment

We are almost ready to start coding and interacting with the site we will be learning with. The
initial setup may take several steps based on the operating system that you are currently using
(Windows, Mac, or Linux), but I hope to provide you the necessary resources to accomplish this
in the current chapter. If you are using Mac or Linux, you may have an easier time setting everything
up initially. Personally, I develop on Windows through the Windows Subsystem for Linux (WSL) for my
personal projects, and use Mac for my professional development. Mac OS behaves very similarly to
Linux, but is actually closer to UNIX (the first operating system to be created). Linux was based
on UNIX, but is open-source, where UNIX actually requires a license to use. Due to this, Mac and
Linux can provide a similar experience from their terminals (Bash is both of their default shells). On the
other hand, Windows has a unique shell from both of these, having its own syntax.

> **Note**: The terminal is a program that allows you access to command-line interfaces (CLIs), and
> the shell is what interprets and executes commands provided to the terminal.

Since Windows behaves differently in it's terminal, things like PowerShell have come along to help
developers use commands from operating systems like Linux and Mac (PowerShell also provides several
more capabilities than Windows' default Command Prompt, but a more unified syntax is also helpful).
WSL came out after PowerShell was created, and allows you to use a Linux kernel that runs directly
on Windows. This is extremely helpful as it allows for a similar local development experience across all
the operating systems. Virtual machines were also commonly used for this task in order to allow access to
a Linux or Mac OS environment for development, since Windows tended to be much more difficult to set up on
it's own.

We may go over some of the basic commands related to Linux and navigating directory structures from the
command line, but there is no need to be overly focused on this material at the moment. The main purpose
of this is so that we can install the packages we need and get our local development environment running.

> **Windows Users**: Here is a link to Microsoft's documentation. In most cases it is probably better to
> link their resources instead of providing manual steps here as their process may change due to future
> updates. These resources will be maintained by Microsoft, so they will be updated alongside any
> occurrences such as this.
>
> [How to install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

## Installing Visual Studio Code

Our next step will be installing our rich text editor, which will be Visual Studio Code. There are several
options when it comes to rich text editors and IDEs (Integrated Development Environment), and I am sure
you will have exposure to multiple if you decide to keep learning coding going forward. Using tools such
as these really can make a world of difference with your coding experience. There was a time when these
tools did not exist, and you may come across curriculums that do not reach for these programs  
right away. It is certainly possible to code without them, and may give you quicker access to start
coding, but you will be missing out on many modern features that are pretty much expected in any
professional environment. An analogy would be if you decided to write a paper and used Notepad instead of
Microsoft Word or Google Docs. By doing so, you would be missing out on many features that have come to
be expected when creating text documents, such as changing the font styles, font size, spell checking, and
much more.

Visual Studio Code is a free, feature rich, allows for plugins, and has many customizability
options. A link can be found here, [VS Code](https://code.visualstudio.com/docs/introvideos/basics),
and comes with a helpful video to explain the layout and some features of the editor. Do not feel that
you will need to create any files along with the video, but it may be helpful for a general overview.
Once this is up and running, we will go through getting the code for our project as well as installing
the plugins that will be used alongside it. Recently a very helpful plugin has become wildly popular
(GitHub Co-Pilot), and allows AI auto-completion and code suggestions while you are writing your code
through ChatGPT. For the moment this plugin requires a subscription to use, so we will not be relying on
it, but this may change in the future. As an alternative, you can always copy and paste your code on the
[ChatGPT Website](https://chat.openai.com/) for AI assistance. The main difference with this method is
that the suggestions will not be directly in your IDE, so you will have to have a web browser open while
you are coding, and have to jump back and forth between the two windows. This is also useful to have open
anyway if you would like to ask for explanations about any code you come across or programming related
questions, as it allows for a more conversational format.

## Retrieving the Source Code

In order to get the source code on our machines, we will be using a program called git. This is an
industry standard and is a distributed version control system. It allows you to track the history of
your code, create multiple versions, and enables you to collaborate with other programmers for your
source code. We will be covering some of the features of git in more depth later on, but for now will
be using it to specifically get the source code that we will be working with on your local machine.
If you are on windows, you will be running these commands in your WSL terminal, and if you are on
Mac OS or Linux you will be doing this in their respective terminals. Once the terminal is open there
will be a few basic commands we will run so that we can create a directory and organize where we will
be storing our code.

With your terminal open, you will use the command `mkdir tutorial` (you may replace tutorial with any
name that you wish for your directory, referred to as folders from the Windows graphical interface).
Here `mkdir` stands for "make directory" and will create a new directory in order to store the source code
that we will be working on. This step is not necessary, but will help stay organized in the future if you
create multiple directories and files. Next, you will need to use `cd tutorial` if you used tutorial as
your directory name, or replace it with whatever directory name you chose. The `cd` command stands for
"change directory", and will navigate your current location in the terminal to the directory that you
specified. Once inside this directory we will now clone our code repository. If you are reading this,
that means you most likely currently at the code repository (the central location for our source code) if
you are within your web browser. I will walk you through the cloning process as if you were visiting any
source code that you wished to interact with on github.

Here is a link to the main page of the repository: <https://github.com/Duncan06/music-theor-ease>. Once
you navigate to this page you will see the typical layout for a github page. You will see several tabs,
the repository name, metrics, and many other things. What we are specifically are looking for is the
green button that says "<> Code", and has a downwards arrow next to it. Once you click on this, you
will see a tab labelled HTTPS that is currently selected with the web URL
<https://github.com/Duncan06/music-theor-ease.git> in the text field. You can copy this link with the
copy icon next to it that displays "Copy url to clipboard" in hover text. Once you do so, you can now
navigate back to your terminal and type `git clone https://github.com/Duncan06/music-theor-ease.git`
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

There are several more extensions you can download as well, but this should be enough to get us up and
running. A recommendation for "Prettier" is to actually go to your "File" tab at the top left of your
screen, then select "Preferences", and then "Keyboard Shortcuts". Once you do this you can type
"Prettier" into the top search bar and you will see the keybinding associated with it. Personally I use
"Shift + Alt + L" for my own keybinding, and you are free to change this to whatever is comfortable
for you. I find that this does not interfere with my other keybindings. You will find many chances to
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

> **Note:** I will also be providing an auxillary section going over an editor known as "Vim". There is
> actually an extension you can download for VS code called "Vim" by vscodevim. This allows you to use
> vim motions and some shortcuts associated with the editor, but some of its shortcuts may conflict with
> preexisting shortcuts in VS Code. Many of these can be handled through adjusting keybindings, but the
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
> go further in this site you can consider it as an option then.
>
> [Vim-Adventures](https://vim-adventures.com/)
