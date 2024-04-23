## Chapter 3: Setting Up a Development Environment

We are almost ready to start coding and interacting with the site we will be learning with. The 
initial setup may take several steps based on the operating system that you are currently using
(Windows, Mac, or Linux), but I hope to provide you the neccessary resources to accomplish this
in the current chapter. If you are using Mac or Linux, you may have an easier time setting everything
up initially. Personally, I develop on Windows through the Windows Subsystem for Linux (WSL) for my
personal projects, and use Mac for my professional development. Mac OS behaves very similarly to 
Linux, but is actually closer to UNIX (the first operating system to be created). Linux was based
on UNIX, but is open-source, where UNIX actually requires a license to use. Due to this, Mac and 
Linux can provide a similar experience from their terminals (Bash is both of their's default shells). On the other hand, Windows has a unique shell from both of these, having it's own syntax. 

> **Note**: The terminal is a program that allows you access to command-line interfaces (CLIs), and
> the shell is what is what interprets and executes commands provided to the terminal. 

Since Windows behaves differently in it's terminal, things like PowerShell have come along to help
developers use commands from operating systems like Linux and Mac (PowerShell also provides several 
more capabilities than Windows' default Command Prompt, but a more unified syntax is also helpful). 
WSL came out after PowerShell was created, and allows you to use a Linux kernel that runs directly
on Windows. This is extremely helpful as it allows for a similar local development experience across all 
the operating systems. Virtual machines were also commonly used for this task in order to allow access to 
a Linux environment for development, since Windows tended to be much more difficult to setup on it's own. 

We may go over some of the basic commands related to Linux and navigating directory structures from the 
command line, but there is no need to be overly focused on this material at the moment. The main purpose
of this is so that we can install the packages we need and get our local development environment running.
