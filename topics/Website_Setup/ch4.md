## Chapter 4: Additional Site with HTML and CSS Examples (Bonus)

I decided to add this chapter after the setup chapter for our main site as it would be easier to walk through
with a code editor for the example. After starting the chapters for the main site we will be covering, I was
concerned that React with Typescript may be quite a bit to tackle without a simpler introduction site that
focused mainly on HTML and CSS. There was actually a personal project I had started a while back to make a
personal resume site, but I had thought this book may be a better fit for that purpose. At the same time,
having a site that potential employers can see your basic understanding of websites most likely will never
count against you. There was a bit of flare I added to it so that it had some user interaction capabilities,
but in essence it is still a static page (a page where the content is always the same, never having its content
swapped out based on state or retrieving more data to display).

With this, I hope it will scratch the surface of what you can do with mostly just HTML and CSS, as well as
a slight amount of JS sprinkled in. In some cases, this may be more than enough for a site you are planning
to create, without including the overhead from a frontend library like React. Sometimes less is more. Another
interesting aspect is that we will be able to go over some of the UI/UX decisions for the site, including
normalizing the site for multiple browsers, selecting a color palette, and deciding on font sizing. The main
site this book was created for uses Tailwind to address normalizing the site across multiple browsers, as well
as font and color selections, and DaisyUI takes care of the color palette with those colors.

Knowledge of these topics will help you in the future if you decide to custom make sites from scratch, including
the design decisions. It will also give you a deeper appreciation of what CSS frameworks like Tailwind take
care of ahead of time for you. This chapter is labelled as a "bonus" chapter as it will include an additional
site to look it, though minimal in its content. If you are already familiar with HTML and CSS from past
experience you may not need this chapter, but it may also touch on design decisions you may not be fully
familiar with. I would also encourage you to make your own version of this site, possibly using this one as
a template, so that you could have your own personal resume site to exhibit to other professionals.

## Resume Web Page

As with the last chapter, I will actually link the github repo this chapter will be discussing. There will
also be a link of the live site that is hosted by GitHub Pages, which is a service that GitHub provides to host
personal repos with static content.

> **Resume Site Links**  
> [Resume GitHub Repo](https://github.com/tdownie0/resume)  
> [Resume site hosted by GitHub Pages](https://tdownie0.github.io/resume/)

The second link will display to you the actual site we will be discussing, and you can interact with it to see
its features and capabilities. You can get a feel for the site, and see if you would like to create something
similar. In summary the page mainly has links to its separate sections that are display, has tiles that hover
when they are hovered over, and has a "Back to Top" button that will scroll you back to the top of the page (
this button is the only part that includes any Javascript for functionality.)

We have already covered how to apply classes to HTML elements and how they are used, so we will not be covering
that in depth, but this should give you some more real life examples to get familiar with.

## Normalization

First, I would like to tackle the normalization topic included in the site. This is a process that "normalizes"
the HTML elements on the page, so that they can display as closely to identical as possible across browsers.
Each browser sets up its own predefined styling rules for HTML elements, leading to less or more spacing and
display behaviors for that specific browser. This ultimately causes your site to look different when visited from
different browsers. In the some cases the difference is hardly notable, but in others it can cause your site to
appear broken or organize it in ways you had not intended. In order to correct this, we can use normalization.

If you scroll down to the `<style>` tags section of the site, you will see there is a commented section at the
very top that includes multiple HTML elements being listed. Along with these, there are default styles being
applied, often zeroing out values, and giving similar elements basic styling behavior. There are multiple kinds
of normalizations you can choose to go with, but the styling used as cited in the comments
[http://meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/) is fairly popular. As
stated above, CSS frameworks like Tailwind may take care of this for you, but this is a good to be knowledgeable
of if you are running into issues of your site appearing differently on different browsers.

## Font Sizes

From a design point of view, it is good to keep things as consistent as possible. Choosing fonts that go together
is also a consideration, and there are sites to help you make selections for this, but I kept things simple with
selecting one font. You can actually see at the top of the page in the header I import a fairly commonly used
font across the web, being "Roboto". This does not came with native CSS, and is imported with these lines in the
`<head>` tags section of the site:

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
