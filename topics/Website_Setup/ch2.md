## Chapter 2: HTML and CSS

Before we get into the logic of making our website, we will have to go over how the presentation
happens in the first place. HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are
the key ingredients here. HTML is responsible for the content, and CSS is responsible for the
presentation of that content. Typically, a site will follow its HTML structure, but CSS can be used
to manipulate the presentation to be different from what would be expected. This is generally not recommended
with CSS, as it makes the site hard to navigate for individuals with accessibility concerns. At
the same time, CSS must have these capabilities so that it is able to render animations correctly,
placing elements eventually in their expected position.

The basics of both of these languages come from a fairly simple set of rules, and we will be touching
on all of these. HTML has quite a vast amount of possible elements that can be declared on a page,
and being fully aware of all of them is pretty impressive. With that said, there really are only a few
essential tags to be aware of along with their properties. After being introduced to these, managing
how things are placed on a page will be much easier. The more specific one is with these HTML tags,
the more they will have implicit CSS rules associated with them, and possibly more default functionality as
well. Tags are also important to use in the manner that they were designed for. This enables people with
accessibility concerns using devices like screen readers and such to still have access to your content. It is
very confusing for these users if tags are used when they are not intended to be used in certain circumstances,
possibly preventing them from interacting with the content as anticipated.

With all of that said, no one is expected to be a master of the subject right from the beginning. Diving
into properly handling accessibility on websites is also its own specialty. There are numerous
government jobs that specify that they would like hire somebody with this skill set, often listed as having
an understanding or familiarity with Section 508 and WCAG 2.0 standards in their descriptions. Both of these
have detailed requirements for several contexts where one would have to structure HTML a specific way
in order to present information correctly to all users.

> **Note:** Section 508 is from the Rehabilitation Act of 1973 requiring Federal agencies
> to make their electronic and information technology (EIT), also referred to as information and
> communication technology (ICT), accessible to people with disabilities. WCAG 2.0 standards come
> from the W3C (World Wide Web Consortium), which is the main international standards organization for
> World Wide Web. This organization was founded by Tim Berners-Lee, who also created the World Wide
> Web, HTML, the URL system, and HTTP.

Accessibility was highlighted here to point out that individuals in these positions study HTML deeply. Many
frontend developers do not have a thorough understanding of these standards. That is why it is common to
see these positions open as well as other general front-end positions. These individuals may be more
responsible for adjusting the final product to work, instead of having to deal with building it
as well. Google Analytics is also a common service on websites nowadays, allowing for gathering data
about how users use our websites. This can also become a specialty with regards to setting it up
properly and utilizing the service.

There are actually websites that are designed to help people create websites, referred to as a CMS (Content
Management System), such as WordPress, Wix, Drupal, Shopify, and plenty of others. These sites often
provide tools to integrate services like Google Analytics, abstracting the code needed to implement the
features. By contrast, we will be creating our website from our own source code, not relying on
these tools. This may require more effort, but in the long run it often allows for far more
customizability, no overhead costs from third parties and all their included services, and ultimately
more control over our website. Despite this, developers can still find jobs related to CMS roles, focused on
things such as setting up plugins and streamlining services like Google Analytics. This may also be a
development option if a client is unable maintain code to run a website by themselves, but would still
like to actively manage the site themselves with drag and drop features and other options.

## HTML

HTML is fundamentally made up of a system of tags in order to present content on a page. Below is a
common list of these tags.

### General Layout Section Tags

|    Tag     | Description                                                                                                                                                         |
| :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  `<html>`  | The root element of an HTML document and contains all other HTML elements. It typically includes attributes such as `lang` to specify the language of the document. |
|  `<head>`  | Contains metadata about the HTML document, such as the title, character set, stylesheets, scripts, and other essential information for the browser.                 |
| `<title>`  | Defines the title of the HTML document, which appears in the browser's title bar or tab.                                                                            |
|  `<body>`  | Encloses the main content of the HTML document, including text, images, links, and other elements visible on the webpage.                                           |
| `<header>` | Typically contains introductory content or navigational elements for a section or the entire document, such as logos, headings, or navigation menus.                |
|  `<main>`  | Represents the main content section of the HTML document. It typically contains the primary content of the page.                                                    |
| `<footer>` | Defines the footer section of the HTML document, typically containing information about the author, copyright, contact details, or links to related resources.      |
|  `<div>`   | A generic container that divides the HTML document into distinct sections or divisions. It is often used for layout purposes and to group related elements.         |
|  `<span>`  | Inline container used to apply styles or manipulate text within a larger block of content. It is commonly used for styling purposes.                                |
| `<style>`  | Contains CSS rules to style the HTML document's elements. It can be placed in the `<head>` section, within the `<body>` section, or outside both.                   |

### Text and Image Section Tags

|       Tag       | Description                                                                     |
| :-------------: | :------------------------------------------------------------------------------ |
| `<h1>` - `<h6>` | Heading tags used to define headings of different levels, one through six.      |
|      `<p>`      | Represents a paragraph of text.                                                 |
|      `<a>`      | Creates hyperlinks, allowing users to navigate to other web pages or resources. |
|     `<img>`     | Inserts images into the HTML document.                                          |

### Data Presentation Section Tags

|    Tag    | Description                                                                                                                                                                                                                                   |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<table>` | Defines a table in HTML. It acts as a container for all other table-related elements such as rows (`<tr>`) and headers (`<th>`) or data cells (`<td>`).                                                                                       |
|  `<tr>`   | Represents a table row within the `<table>` element. Each `<tr>` tag defines a new row in the table, containing one or more table cells (`<th>` or `<td>`).                                                                                   |
|  `<th>`   | Defines a table header cell within a `<tr>` element. It represents a header for a column or row in the table. Content inside `<th>` tags is typically bold and centered by default, distinguishing it from regular table data cells (`<td>`). |
|  `<td>`   | Represents a table data cell within a `<tr>` element. It contains data or content for a specific row and column in the table. Content inside `<td>` tags is typically aligned left by default.                                                |
|  `<ol>`   | Ordered list in HTML, which presents a list of items in a specific sequence or order, usually numbered.                                                                                                                                       |
|  `<ul>`   | Unordered list in HTML, typically used to present a list of items without any specific order or sequence.                                                                                                                                     |
|  `<li>`   | List item within an ordered or unordered list (`<ol>` or `<ul>`). Each `<li>` tag defines a single item in the list.                                                                                                                          |

### Data Input Section Tags

|     Tag      | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `<form>`   | Defines an HTML form that allows users to input data which can be submitted to a server for processing. The `<form>` tag typically contains various input elements such as text fields, checkboxes, radio buttons, and buttons. It specifies the action to be performed when the form is submitted and may also include attributes like method and action to control the submission behavior.   |
|  `<input>`   | Represents an input control within an HTML form, allowing users to enter data. The `<input>` tag can be used to create various types of input fields, such as text fields (type="text"), checkboxes (type="checkbox"), radio buttons (type="radio"), buttons (type="button"), and more. The specific type of input is defined using the type attribute.                                         |
|  `<button>`  | Defines a clickable button within an HTML form. The `<button>` tag can be used to create buttons for submitting forms (type="submit"), resetting form fields (type="reset"), or executing custom JavaScript actions (type="button"). The content of the button is specified between the opening and closing `<button>` tags.                                                                    |
|  `<select>`  | Represents a dropdown list within an HTML form, allowing users to select one or more options from a list of predefined choices. The `<select>` tag contains one or more `<option>` tags, each defining an individual option within the dropdown list. Users can choose an option by clicking on the dropdown arrow and selecting from the available options.                                    |
| `<textarea>` | Defines a multiline text input control within an HTML form, allowing users to enter multiple lines of text. The `<textarea>` tag is used when longer text input is required, such as for user comments or messages. The size of the textarea can be customized using attributes like rows and cols, and the initial content can be specified between the opening and closing `<textarea>` tags. |

Another note about the data input section tags directly above is that they can be used outside of the `<form>`
tag as well. These can be wired up to have functionality with JavaScript, as we will see, but have default
behavior associated with them when contained within a `<form>` tag. With all of the tags above, we can go a
surprisingly long way. It can be observed that many of them serve multiple purposes as well, especially when
combined together. Here is a demonstration of the result for a simple page:

```html
<html>
  <body>
    <p>Hi!</p>
  </body>
</html>
```

We see here that the same named tag for an element comes at the end of where the content is provided
for the element, but has a prefix of `/` with it. This is referred to as a closing tag. Each section
is thought of being wrapped in the previous areas content area, until it reaches that sections closing
tag. There are also self closing tags, meaning there is only one tag provided instead of two. These are
used typically when there would not be content to put between the tags, instead expecting a value or linking to
a resource. Examples of such tags would be `<input />` and `<img />`. Both of these rely on the HTML
attributes they are passed as we will be seeing shortly. It is also acceptable to write these as `<input>`
and `<img>`. Some may find it preferable to include the closing `/`, as it can cue to us that this tag does
not have a complementary closing tag whenever we scan over files containing HTML.

We will be seeing multiple HTML layouts as we go over the site our studies will be focused on, so this just
illustrates some basic structure. Another interesting concept we will observe is that libraries like React allow
us to make portions of HTML code and put them together. This allows us to break up the logic and interactions
into smaller chunks, called components. These look similar to self closing tags, and for example, if a
component was named "MyComponent", it would appear as `<MyComponent />`. An added bonus of being able to do
this is that we can reuse components that serve specific, or potentially several needs. This saves us from
having to write the same portion of code multiple times.

## CSS

Now that there is content for a webpage, we need a way to add font-styles, colors, shapes, animations,
and placement. This is where CSS comes in. Just like HTML tags, CSS has several property names that affect
different aspects of the content being presented. In general, setting up a desired layout can be
tricky at first, but learning layout systems like Flexbox and CSS Grid Layout can help us quite a bit.
Nowadays, tools like ChatGPT can be extremely helpful when trying to style something, as it can provide us with
a base layout to work off of or rapid samples. With tools such as this, we can spend less time looking up
specific property names that are needed for our concepts, and additionally may be provided with simple examples
as a basis.

Later in this chapter there will be links to various sites that have CSS learning material, through games,
videos, and readings. These will allow for a gradual introduction to the subject, as well as exposure to more
advanced concepts and structures. In addition, one could always visit a site they like and inspect the page or
pages themselves. We will go over developer tools within the browser at more depth later on, but by right
clicking a web page and then selecting the "Inspect" option, one's developer tools will open. If this was
performed on a specific part of the page, it typically highlights that portion of HTML and will display all
the CSS properties, among other useful information.

Another common set of tools in web development are CSS frameworks. These provide shorthand class names to
quickly add properties to HTML elements, as well as taking care of typical CSS properties associated
with certain HTML elements like buttons. Depending on the framework, one may be able to add simple
animations as well. In our case, the site in study actually uses Tailwind CSS as a framework. This is a very
popular framework in the industry at the moment. The site also uses another library, DaisyUI, which
is built around using this CSS framework. These technologies were selected in order to demonstrate how
much power can be leveraged out of such tools, providing for quick and consistent development.

Though the site uses the Tailwind CSS framework, we will still be going over some of the
fundamentals with CSS. There are many aspects to CSS, but frameworks related to it will make much more sense
once we establish an understanding of how it works by itself. The shorthands associated with these frameworks
may also prove helpful in remembering some of the full property names as well, highlighting where properties
share similarities with others.

## Attributes & Selectors

HTML allows for attributes to be added to its elements, which enables us to use CSS selectors for
indicating which elements we wish to stylize, as well as other tasks.

```html
<div>1st</div>
<div id="second">2nd</div>
<div class="third">3rd</div>
<img src="image.jpg" />

<label for="name">Name (4 to 8 characters):</label>
<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10"
/>
```

| Selector name                                              | What does it select                                                                                              | Example                                                                                |
| :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| Element selector (sometimes called a tag or type selector) | All HTML elements of the specified type.                                                                         | p <br> selects `<p>`                                                                   |
| ID selector                                                | The element on the page with the specified ID. On a given HTML page, each id value should be unique.             | #my-id <br> selects `<p id="my-id">` or `<a id="my-id">`                               |
| Class selector                                             | The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.  | .my-class <br> selects `<p class="my-class">` and `<a class="my-class">`               |
| Attribute selector                                         | The element(s) on the page with the specified attribute.                                                         | img[src] <br> selects `<img src="myimage.png">` but not `<img>`                        |
| Pseudo-class selector                                      | The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) | a:hover <br> selects `<a>`, but only when the mouse pointer is hovering over the link. |

> **Note:** The above table, as well as the `<label>` and `<input>` examples are from
> <https://developer.mozilla.org>. Mozilla is behind the creation of Firefox (web browser) and other
> technologies. The entire site has multiple helpful resources for HTML, CSS, and Javascript development.
> This resource is extremely valuable and highly recommended as a reference for anyone curious about learning
> more.
>
> [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and
> [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) by
> [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/Community/Roles_teams#contributor)
> are licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

In the code section above we see examples of HTML elements with multiple types of attributes, and one
without any. These elements were presented in an order corresponding with the table above. If we were
to use an element selector for the first HTML `<div>` element, we would only need to specify `div` for our
selection. The next element `<div id="second">` could be selected by `#second`. Next, the
`<div class="third">` would be selected by `.third`. Following this, we have `<img src="image.jpg" />`.
Just as the table above indicates, we can actually specify that only `<img>` tags with a `src` attribute
will be selected with `img[src]`. This can also be used for specific types like `button[type="submit"]`.

For the last part, there is a `<label>` and an `<input>` element. We see `label` accepts an attribute,
`<label for='name'>`. This indicates that the label belongs to an HTML element, in this case
`<input id='name'>` (The `<input>` element will be presented in portions here, due to the length of its
attributes). This is specified so that screen readers and other assistive technologies may have an accurate
description of what is being presented, such as the input field here. The link to the input page included in the
citation above goes over a vast amount of types, attributes, pseudo-classes, and much more that an `<input>` tag
can accept. There is no need to memorize all of this information, but getting a sense of an input's
capabilities may prove helpful in determining when to reach for it as a resource. Utilizing native HTML
elements has the added benefit of providing default functionality, as well as handling presentation for
assistive technologies when used properly, and for their intended purposes. Here, we see the name attribute
was also set to a value of name, `<input name='name'>`. When this input is submitted, it will be submitted as a
key value pair to the server, so that the name specified will be the key, and the value will be the contents of
the input field itself.

## Specificity

With HTML attributes and CSS selectors out of the way, we will now explore specificity.
CSS has a hierarchy of importance when it comes to declaring styles to associate with CSS selectors.

| Selector         | Specificity                 | Example               |
| :--------------- | :-------------------------- | :-------------------- |
| ID Selector      | Highest specificity (1-0-0) | `#id`                 |
| Class Selector   | Medium specificity (0-1-0)  | `.class`              |
| Element Selector | Lowest specificity (0-0-1)  | `div`, `p`, `a`, etc. |

Here we see that the ID selector is the highest specificity. The number scheme next to it, (1-0-0), corresponds
to the following structural representation, ((number of IDs)-(number of Classes)-(number of Elements)).
Starting from left to right, a style is applied to an element based on its highest level of specificity, and
then by the amount of that selector's specificity. The following is a demonstration of this.

```html
<div id="first" class="first second">One</div>
<div id="second" class="second third">Two</div>
<div id="fourth" class="fourth">
  <div>Three</div>
  <div class="fifth">Four</div>
  <div id="sixth">Five</div>
</div>
```

```css
<style>
  /* 0-1-1 */
  div.first {
    color: blue;
  }
  /* 0-1-0 */
  .second {
    color: yellow;
  }
  /* 0-2-0 */
  .second.third {
    color: brown;
  }
  /* 0-1-0 */
  .fourth {
    color: orange;
  }
  /* 0-2-0 */
  .fourth .fifth {
    color: purple;
  }
  /* 1-0-0 */
  #first {
    color: green;
  }
  /* 1-0-0 */
  #sixth {
    color: gray;
  }
  /* 2-0-0 */
  #fourth #sixth {
    color: red;
  }
</style>
```

After analyzing the HTML elements above, we see that one HTML element can have multiple classes. This is done
by putting a space between their names when defining the element,
`<div id="first" class="first second">1st</div>`. By contrast, an element may only have one ID. Let us
start from top to bottom with these elements.

We have `<div id="first" class="first second">1st</div>` for our first element. This has an ID and class of
`first`, as well as a class of `second`. Now with our current knowledge, we know that styles pertaining to the
ID `first` will take precedence over all other specificity, unless there are multiple of the same rank.
CSS selectors that include the `first` or `second` class as well could also influence the style, but would
need an ID selector for `first` along with them to override a single ID selector. Our last consideration would
be the element itself, which is a `<div>`.

If we glance at the `<style>` section of the code, we see a list of CSS selectors and
their associated styles within `{}`. The first selector is `div.first`, which would affect this element, since
it is a `<div>` and has a class of `first`. In this case the two selectors are chained together, so the style
would only apply to elements that match both requirements directly. The selector below this, `.second`, would
also apply. Since we have two possibilities now, we can compare their specificity. Their specificities
correspond to their comments above, being `0-1-1` and `0-1-0`. Looking at both, we see that they have the same
number of IDs, `0`, and classes, `1`. The first selector additionally contains an element, so it has a `1` where
the other has a `0`. This would lead to the first style selector applying to the HTML element, as it is more
specific. With that in mind, the only other selector that would apply directly is the `#first` selector. Here we
have an id of `first`, so `#first` applies. Its specificity is `1-0-0`, and since this is greater than the
`0-1-1`, this selector will override the previous two selectors, leaving us with the color green for our text.

I will let you attempt to figure out the others from here. The only tricky ones left may be
`.fourth .fifth` and `#fourth #sixth`. With a space between the two, this indicates that the child of
an HTML element must have the second selector listed, but the parent must have the first. These child
elements are directly nested in the parent HTML element. Here is a table of the solution:

| Text  | Colors |
| :---- | ------ |
| One   | green  |
| Two   | brown  |
| Three | orange |
| Four  | purple |
| Five  | red    |

Knowing what selectors may apply can get tricky when things start to become deeply nested. Another
aspect that can be difficult is that multiple styles can come from multiple selectors. Using the
web inspector in your browser's developer tools can be helpful with this, allowing you to see which
selectors are currently applying. We will go more into that shortly. Knowledge of this can be helpful
when using other libraries (or packages from other developers) that have their own styles. Instead of
having to redefine their logic, you just override them. A modern trend with recent CSS frameworks
is to use multiple classes that define specific properties directly. By comparison, the approach
above would be used to target specific elements on the page, and style them directly as you want. With
these CSS frameworks approach, the idea is to never have to define a specific selector for an element,
but to have it stack classes of all the properties it would like to include. Some take this approach
as going against the ideal way of using CSS, which would take only as much room as necessary in the
HTML. This could also shadow the use of native logic for CSS like its combinators, which specify
more exact rules of elements relative to the element and the selector it is being placed on. At the
same time, having these classes with specific properties saves us from defining selectors for elements
on our pages over and over again, and can actually lead to consistency naturally since everything is
composed of the same shared base of classes. There will be links at the end of this material to more
advanced concepts of CSS and commonly used properties.

## Margin, Border, and Padding

Now we will get into some of the principle layout properties of CSS, and take a look at the developer
tools. Personally, I use Google Chrome quite a bit for development, but also Firefox, Brave, and Edge.
All of these browsers when open can be right clicked on in their background (so long as their is not
and image or something natural in the way), and in the context menu that appears, you should see
"Inspect" or something similar as the last option. I encourage you to open a web browser and follow
along to see this (Chrome may be the easiest as some of the tabs can show slightly different information).
If "Inspect" is selected and you end up on the "Elements" tab (which should be the left most tab next
to "Console") you will see a box with the word "position" that has four 0's, one for the top, right,
bottom, and left, as well as the words margin, border, and padding. Each of these is nested one inside
of the other. Together, these dictate the position, sizing, and divisions of space with regards to the
border. If you had `<p>Hello</p>`, this would be the region referred to as the content. The padding
would be the space around the content of the element. The border would be the region that is typically
used to outline an element, appearing to make a box around it. Then the margin is the additional space
that surrounds this border region.

Together, all these regions make up what is known as the "Box Model" (Content, padding, border, margin).
If you had trouble opening the correct spot in your inspector, googling "Box Model" may help you find
your place once you see an image representation. All of these respond to the same base property aspects,
which are top, right, bottom, and left. It is convention and has been established that those properties
are always referred to in that specific order, clockwise starting from the top.

```css
.first {
  margin-top: 0px;
  margin-right: 8px;
  margin-bottom: 8px;
  margin-left: 4px;
}

.first-condensed {
  /* In order: top, right, bottom, left */
  margin: 0 8px 8px 4px;
}

.second {
  padding-top: 0px;
  padding-right: 8px;
  padding-bottom: 0px;
  padding-left: 8px;
}

.second-condensed {
  /* top & bottom, left & right */
  padding: 0 8px;
}

.third {
  border-style: solid;
  border-width: 2px;
  border-right-style: dotted;
  border-bottom-style: double;
  border-left-style: ridge;
}

.fourth {
  /* border-width, border-style (required), border-color */
  border: 2px solid blue;
  border-radius: 6px;
}
```

Above we have multiple examples of margin, padding, and border. Inside `.third`, we also see
that border has some additional properties along with it. Border is probably the most diverse of the
three since it has many style options. Across all of them, we see that they refer to a top, right,
bottom, and left type of property. There shorthands are also present, since many of these are used
together frequently. We see in `.first-condensed` that four values are listed
`margin: 0 8px 8px 4px`. These values correspond to their positions in order from the comment above.
Also, there is an example in `.second-condensed` where we see `padding: 0 8px;`. This will also work
for margin, and the first value defines the top and bottom, while the second defines left and right, as
stated in the comment above. Going back to `.third`, we see all the sides are defined but top. In this
case border-style was also used, so this will be its default value, while the other sides are overrode
by their corresponding properties. In `.fourth` we see a much shorter version. The property definition
`border: 2px solid blue;` gives the element its width and style, just `.third` above, while also
providing a color. I also included `border-radius: 6px;` as border-radius is a very common property
to use in order to round out sharp edges from borders.

## Flexbox and CSS Grid

We have touched many of the essential aspects of CSS, and I do not intend to bog you down with much
more information on the topic, as you will see plenty of examples first hand, and will have sites
to explore further possibilities. Two CSS layout models in particular have become very common
over the past years, allowing for easier placement of elements on the page, as well as their adaptations
of the page changing in size. These two models are Flexbox and CSS Grid. There is quite a bit that
you can do with both of these, and some of their properties have similar names.

> **Note:** In my opinion, some interactive game sites cover the general use cases for these very well.
> The first two sites listed will be games:
>
> [Flexbox Froggy](https://flexboxfroggy.com/)  
> [Grid Garden](https://cssgridgarden.com/)
>
> Also, I will link the original videos where I had learned more about these layout models. This
> resource also has a javascript course that I would highly recommend as well.
>
> [What The Flexbox?!](https://flexbox.io/)  
> [CSS Grid](https://cssgrid.io/)  
> [Javascript30](https://javascript30.com/)  
> [Wes Bos (Creator's main site)](https://wesbos.com/)
>
> Another resource that I found very recently also covers much of the same material as this chapter
> and has several helpful images and interactive portions that will help guide your learning. The site
> is truly exceptional and really goes in depth for front-end related topics. I will link the pages that
> directly relate to this content, but also the main site which actually covers modern frameworks in depth,
> focusing on React, Angular, and Vue. The first two links relate directly to this chapter, but the last
> would be great to keep as a resource to come back to if you would like a more holistic view of front-end
> frameworks and a chance to really understand their inner workings.
>
> [CSS Fundamentals](https://unicorn-utterances.com/posts/css-fundamentals)  
> [Understanding The DOM: How Browsers Show Content On-Screen](https://unicorn-utterances.com/posts/understanding-the-dom)  
> [The Framework Field Guide](https://unicorn-utterances.com/collections/framework-field-guide)

If you spend the time to go over "Flexbox Froggy" and "Grid Garden", you should have a decent
understanding of what the two layouts can accomplish. The resources at the bottom also give great
examples through a course format if you would like to build along with videos. I would check them out
if you would like more information, but these courses should take much longer than the games above.
When going through the sites, if you feel like you have enough of a general understanding, I am sure
the website we will be going over will help solidify an understanding for some basic uses. Both of
these layouts are very powerful. Resources like chatGPT may help you decide which setup will be more
conducive to your site, or give you a basic template.

## Conclusion

This should cover the breadth of the general uses of HTML with CSS. There are far too many
properties in both to fully cover here. With CSS there are things such as properties that allow for
animations, CSS variables, and managing and importing fonts and icons. Then with HTML, as mentioned
before, there are unique challenge sets to make sure that a site is 100% covered for accessibility
standards. We will get a better look at animations with the site we will be covering, and see more
advanced considerations for layout structures.
