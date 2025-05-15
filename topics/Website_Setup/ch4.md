## Chapter 4: Additional Site with HTML and CSS Examples (Bonus)

The intent of this chapter is to provide additional source code that will be easier to walk through as an
example, as compared to the main site's code. Some may find that being exposed to React with Typescript can be
quite difficult to tackle at first, especially without a simpler introduction that focuses mainly on
HTML and CSS. As mentioned in the last chapter, this was more of a toy experiment when it was made, but it seems
like a suitable start for our purposes. The focus of this example site is to provide an interactive resume. In
general, sites such as this can become very complicated, as they are intended to catch the eyes of potential
employers. At the same time, having a site that these potential employers can interact with and observe some of
our basic understanding of websites can only count in our favor. There was a bit of interactivity
sprinkled into the site, allowing for some basic user interaction capabilities, but in essence it is still a
static web page (a page where the content is always the same, never having its content swapped out based on
state or retrieving more data to display).

With this example, the hope is to demonstrate what can be done with mostly just HTML and CSS, as well as
a slight amount of JS included. In some cases, this may be more than enough for a site that we are planning
to create, avoiding having to add the overhead from a frontend library such as React. Sometimes less is more.
Other interesting aspects of this example will be able going over UI/UX decisions, including
resetting/normalizing the site for multiple browsers, selecting a color palette, using non-native fonts, and
deciding on font sizings. The main site this reading was created for uses Tailwind, which already
addresses resetting and normalizing sites across multiple browsers, as well as font and color selections. In
addition, this site uses the DaisyUI library, which provides color palettes for working with these base colors
Tailwind provides and more.

Knowledge of these topics will be helpful for anyone that decides to make custom CSS and styling for sites.
This understanding will also provide a deeper appreciation for what CSS frameworks like Tailwind actually take
care of for us. If the reader happens to already be familiar with HTML and CSS from past experience they may not
need to go through this chapter. At the same time, delving into topics such as design decisions could impart
new knowledge that they are not already familiar with.

It is encouraged that the reader makes their own custom rendition of this site. This could include restyling
things as far as colors, positioning, or adding more elaborate interactions. The example given here can serve as
a base template, but a personal resume should be suited towards the specific individual.

## Resume Web Page

The github repo for this chapter is linked to directly below. There is also a link to the live version of
the site that is hosted by GitHub Pages. This is a service that GitHub provides to host personal repos
with static content.

> **Resume Site Links**  
> [Resume GitHub Repo](https://github.com/tdownie0/resume)  
> [Resume site hosted by GitHub Pages](https://tdownie0.github.io/resume/)

As mentioned, The second link displays the actual site we will be discussing, and can be interacted with to see
its features and capabilities. This will allow for anyone to get a feel for the site, and see if they would like
to create something similar. In summary, the page mainly has links to the separate sections being displayed,
tiles that hover when they are hovered over, and a "Back to Top" button that will scroll a viewer back to the top
of the page (this button is the only part that includes any Javascript for functionality.)

We have already covered how to apply classes to HTML elements and how they are used, so we will not be covering
that in depth, but this should give us some more real life examples to get familiar with.

## Reset and Normalization

First, I would like to tackle the resetting/normalization topic included in the site. This is a process that
sets the HTML elements on the page so that they can display as closely to identical as possible across browsers.
Each browser sets up its own predefined styling rules for HTML elements, leading to less or more spacing and
display behaviors for that specific browser. This ultimately causes your site to look different when visited from
different browsers. In the some cases the difference is hardly notable, but in others it can cause your site to
appear broken or organize it in ways you had not intended. In order to correct this, we can use
resetting/normalization.

If you scroll down to the `<style>` tags section of the site, you will see there is a commented section at the
very top that includes multiple HTML elements being listed. Along with these, there are default styles being
applied, often zeroing out values, and giving similar elements basic styling behavior. This is referred to as
a CSS reset. The one used here cited in the comments
[http://meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/) is fairly popular. As
stated above, CSS frameworks like Tailwind may take care of this for you, but this is a good to be knowledgeable
of if you are running into issues of your site appearing differently on different browsers.

To give a brief explanation, resetting focuses on removing all the styling applied by the base web browser so
that you can specifically define how you would like to display each element of the page. Normalizing intends to
leave some of base styling associated with HTML elements, but making them as consistent as possible across all
browsers. This may also take in to account handling older browsers that need to adapt with more modern ones,
adding behavior so they can function as identical to each other as possible. This Stack Overflow page gives a
more detailed breakdown and can allow you to explore the topic further:
[Normalizing Versus Resetting](https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css).

## Typography & Font Sizes

From a design point of view, it is good to keep things as consistent as possible. Choosing fonts that go together
is also a consideration, and there are sites to help you make selections for this. This stretches into the realm
of typography which begins dealing with multiple things such as multiple fonts interacting with each other,
stylizing fonts to convey specific meanings (such as italicizing), and giving the text on any presented
medium a specific type of voice. All of that considered, I chose to keep things simple by selecting one font.
You can actually see at the top of the page in the head section that I import a fairly commonly used font across
the web, being "Roboto". This does not came with native CSS, and is imported with these lines in the `<head>`
tags section of the site:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@300;400&display=swap"
  rel="stylesheet"
/>
```

You can pick your own selection of fonts by visiting the Google site that provides these fonts:
[Google Fonts](https://fonts.google.com/). Once you select the fonts you would like, you can add them to the list
of fonts you would like to use, and then at the end choose to get the embed code like above, or download the
fonts to use. How this is done may change in the future, but the site itself has several helpful resources with
making design decisions, and can give you examples of how to use the api. Using Google to find videos on how
to make selections and implement your selections may also be useful.

The site I used to choose my font sizes came from this or another similar site:
[Typescale](https://typescale.com/). With this I choose my scale to be a perfect fourth, and went with "rem" as
a unit of measurement, as it is recommended with fonts. Looking at the numbers and selection it provides may
seem like quite a bit of over information, but people tend to be pretty good at picking out when things happen
to be out of ratio with each other. Using tools like this greatly increases your consistency, and helps give
you reliable calculations.

## Color Palette

Deciding what colors mesh together can take a considerable amount of time, and starts to become fairly difficult
with the more colors that you add in. Once you pick the colors, you would also want to identify what will
be your primary, secondary, and accent colors. Using them in the appropriate manner can be the difference of
having your website "pop" and grab the eye of your users, or having users finding difficulty in identifying
the focal points of the site and appearing rather drab.

To aid with this, I use a color wheel from Adobe to help,
[Adobe Color](https://color.adobe.com/create/color-wheel). This site has several features, but I have used the
color wheel specifically in the past. Choosing the correct colors may be fairly subjective, but if you are
familiar with color theory, you may recognize the color harmony selection in the dropdown. These colors tend to
pair together nicely based on mathematical principles, and can be used in a consistent manner. There are
several videos online diving more into the details of applying color theory and using tools like the Adobe
color wheel, so feel free to browse as you see fit.

## Closing Thoughts

Putting together a website can consist of many factors and considerations, as compared to just slapping some
things together on a page. Having familiarity with resetting/normalization, font selection, and selecting a
color palette can be quite helpful in making your sites feel more professional. Having tools like this in your
back pocket to pull from can also help make your sites stand apart from the crowd, while also giving you talking
points about what influenced your determination of these selections.

Many types of professionals can study fonts and colors in depth, so it is easy to be overloaded with this
information while you are also trying to get your sites working from a technological standpoint. Seeing what
types of decisions have to be made while putting together things like a design system can also make you
appreciate the multiple sides of putting together a website, and slowly even creeping into creating a brand for
a company. I would like to leave you with two very professional design systems that really exemplify this, and
make it fully apparent why there are so many types of professionals that come into play when working on such
projects.

> **Design Systems**:  
> [Starbucks Creative Expression](https://creative.starbucks.com/)  
> [IBM's Carbon Design System](https://carbondesignsystem.com/)
