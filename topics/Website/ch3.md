## Chapter 3: Setting Up a Development Environment

We are almost ready to start coding and interacting with the site we will be learning with. The
initial setup may take several steps based on the operating system that you are currently using
(Windows, Mac, or Linux), but I hope to provide you the necessary resources to accomplish this
in the current chapter. If you are using Mac or Linux, you may have an easier time setting everything
up initially. Personally, I develop on Windows through the Windows Subsystem for Linux (WSL) for my
personal projects, and use Mac for my professional development. Mac OS behaves very similarly to
Linux, but is actually closer to UNIX (the first operating system to be created). Linux was based
on UNIX, but is open-source, where UNIX actually requires a license to use. Due to this, Mac and
Linux can provide a similar experience from their terminals (Bash is both of their default shells). On the other hand, Windows has a unique shell from both of these, having its own syntax.

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
Once this is up and running, we will go through the plugins that will be used alongside our project.
Recently a very helpful plugin has become wildly popular (GitHub Co-Pilot), and allows AI auto-completion
and code suggestions while you are writing your code through ChatGPT. For the moment this plugin requires
a subscription to use, so we will not be relying on it, but this may change in the future. As an
alternative, you can always copy and paste your code on the [ChatGPT Website](https://chat.openai.com/)
for AI assistance. The main difference with this method is that the suggestions will not be directly in
your IDE, so you will have to have a web browser open while you are coding, and have to jump back and
forth between the two windows. This is also useful to have open anyway if you would like to ask for
explanations about any code you come across or programming related questions, as it allows for a more
conversational format.
