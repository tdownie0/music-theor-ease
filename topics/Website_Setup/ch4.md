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

First, let us tackle the resetting/normalization topic used with this site. This is a process that manually sets
defaults for HTML elements on a page, with the goal of having them appear identically across all browsers.
Each browser has their own default styling rules for HTML elements. This leads to mostly minor differences in
display behaviors across browsers. For example, the spacing and margins of elements
could be smaller or larger. With enough minor differences though, this can ultimately cause our sites to look
very different on other browsers, possibly leading to content not wrapping properly or being awkwardly placed.
In the some cases these differences are hardly noticeable. Other times they can cause our sites to
appear broken, or possibly organize content in ways we had not intended. In order to correct this behavior, we
can apply resetting/normalization strategies.

Once the source code has been opened (which can be done by following the link above and clicking on
`index.html`), we can observe this portion of the code by scrolling down to the `<style>` tags section. Here, we
see a commented portion at the very top, and also multiple HTML elements being listed. Default styles are being
applied to these elements, often zeroing out values, as well as providing basic styling behavior. This is
referred to as a CSS reset. The particular one being implemented here has its source cited in the comments,
[Meyerweb CSS Reset](http://meyerweb.com/eric/tools/css/reset/), and is fairly popular. As
stated above, CSS frameworks like Tailwind typically take care of this for us. Still, this is good to be
knowledgeable of incase we are running into issues where our sites are appearing differently across different browsers.

To give a brief explanation, resetting focuses on removing all base styling applied by web browsers so
that we can specifically define how we would like to display each element on a page. Normalizing intends to
leave in place some of the base styling associated with HTML elements, but ensures those styles are as
consistent as possible across all browsers. This may also take in to account handling older browsers that need
to adapt with more modern ones. In some cases, this may require adding behavior to these older browsers so that
they can function as closely as possible to their modern counter parts. The following Stack Overflow page
provides a more detailed breakdown of the topic:
[Normalizing Versus Resetting](https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css).

## Typography & Font Sizes

From a design point of view, it is often good to keep things as consistent as possible. Choosing fonts that go
together is also part of this consideration. Luckily for us, there are resources that can help guide us with
making appropriate selections in this regard. This stretches into the realm of typography, which begins
dealing with multiple topics. Some examples would be multiple fonts interacting with each other, stylizing fonts
to convey specific meanings (such as _italicizing_), and giving the text on any presented medium a specific type
of voice. Considering all of this, for our site we kept things simple by selecting one font. At the top of the
source code, we see in the head section that we imported a font that is fairly common across the web, "Roboto".
This does not come with native CSS, and is imported with these specific lines in the `<head>` tags section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@300;400&display=swap"
  rel="stylesheet"
/>
```

The reader is also free to pick their own selection of fonts. One option to do so would be by visiting the
Google site referenced above: [Google Fonts](https://fonts.google.com/). Once the fonts desired are selected,
they can be added to a list of fonts on the site. This enables the user to have the options of generating an embed code like above, or downloading the fonts. How this is done may change in the future, but the site itself
has several helpful resources for making design decisions, and provides examples of how to use their api. Using
Google to search for videos on how to make selections and implement these selections may also be useful.

While creating this resume site, the following website was used to decide on font sizings (there are multiple
similar sites): [Typescale](https://typescale.com/). Perfect fourth was selected for scale, and "rem" was used as
a unit of measurement (1 rem is typically 16px on most browsers), as it is recommended for fonts. Being
presented with all the numbers and selection options here may seem quite overwhelming. Despite this, even
without having a total understanding of all the information, people tend to be able to discern what works
visually. Usually if visual ratios are off by a great degree, it really stands out. This can be helpful
if intended, but otherwise it may be disorienting or confusing. In contrast, if ratios are consistent and
uniform, visual information tends to be more appealing and easier to look at. Additionally, conveying the
information's voice, purpose, and desired impact may also be more evident. Using tools such as the site
referenced can greatly increase our consistency, and help with providing reliable calculations.

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
