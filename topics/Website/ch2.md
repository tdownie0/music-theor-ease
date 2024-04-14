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
and being fully aware of all of them is pretty impressive. There really are only a few essential
tags to be aware of along with their properties. Once we have these, you will be able
to manage putting most things on a page correctly. The more specific you get with these HTML tags,
the more they have implicit CSS rules associated with them. Tags are also important to use in the
manner that they were designed for, so that people with accessibility concerns that use screen
readers and such still have access to your content. It is very confusing for these users if tags
are used when they are not intended to be used in certain circumstances, possibly preventing them from
interacting with the content as you anticipated.

All of that said, you are not expected to be a master at the subject right from the beginning. Going
into properly handling accessibility on websites is also its own speciality. If you look for
relevant positions, you will often see government jobs specifying that they would like somebody
who has an understanding or a familiarity with Section 508 and WCAG 2.0 standards. Both of these
have detailed requirements for several contexts where you would have to structure HTML to present
certain information to a user.

> **Note:** Section 508 is from the Rehabilitation Act of 1973 requiring Federal agencies
> to make their electronic and information technology (EIT), also referred to as information and
> communication technology (ICT), accessible to people with disabilities. WCAG 2.0 standards comes
> from W3C (World Wide Web Consortium), which is the main international standards organization for
> World Wide Web. This organization was founded by Tim Berners-Lee, who also created the World Wide
> Web, HTML, the URL system, and HTTP.

I point this out just to highlight that individuals in these positions study HTML deeply. Many
frontend developers do not have a thorough understanding of these standards. That is why you may
see these positions open as well as other general front-end positions. These individuals may be more
responsible for adjusting the final product to work, instead of having to deal with building it
as well. Google Analytics is also a common service on websites nowadays, allowing for gathering data
about how users use your website. This can also become a specialty with regards to setting it up
properly and utilizing the service.

There are actually websites that are designed to help you create websites, referred to as a CMS (Content
Management System), such as WordPress, Wix, Drupal, Shopify, and plenty of others. These sites often
provide tools to integrate services like Google Analytics, abstracting the code needed to implement the
features. By contrast, we will be making our website completely from our own source code, not relying on
these services. This may require more effort, but in the long run it often allows for more
customizability, no overhead costs from the third party and all their included services, and ultimately
more control over your website. Developers can still find jobs related to CMS roles, focused on things
such as setting up plugins and streamlining services like Google Analytics. This may also be a development
option if the person you are working for is unable to run website by themselves, but would still like to
actively manage the site themselves.

## HTML

HTML is fundamentally made up of a system of tags in order to present content on a page. Below is a
common list of these tags.

### General Layout Section Tags

|    Tag     | Desciription                                                                                                                                                        |
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

|       Tag       | Desciription                                                                    |
| :-------------: | :------------------------------------------------------------------------------ |
| `<h1>` - `<h6>` | Heading tags used to define headings of different levels, one through six.      |
|      `<p>`      | Represents a paragraph of text.                                                 |
|      `<a>`      | Creates hyperlinks, allowing users to navigate to other web pages or resources. |
|     `<img>`     | Inserts images into the HTML document.                                          |

### Data Presentation Section Tags

|    Tag    | Desciription                                                                                                                                                                                                                                  |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<table>` | Defines a table in HTML. It acts as a container for all other table-related elements such as rows (`<tr>`) and headers (`<th>`) or data cells (`<td>`).                                                                                       |
|  `<tr>`   | Represents a table row within the `<table>` element. Each `<tr>` tag defines a new row in the table, containing one or more table cells (`<th>` or `<td>`).                                                                                   |
|  `<th>`   | Defines a table header cell within a `<tr>` element. It represents a header for a column or row in the table. Content inside `<th>` tags is typically bold and centered by default, distinguishing it from regular table data cells (`<td>`). |
|  `<td>`   | Represents a table data cell within a `<tr>` element. It contains data or content for a specific row and column in the table. Content inside `<td>` tags is typically aligned left by default.                                                |
|  `<ol>`   | Ordered list in HTML, which presents a list of items in a specific sequence or order, usually numbered.                                                                                                                                       |
|  `<ul>`   | Unordered list in HTML, typically used to present a list of items without any specific order or sequence.                                                                                                                                     |
|  `<li>`   | List item within an ordered or unordered list (`<ol>` or `<ul>`). Each `<li>` tag defines a single item in the list.                                                                                                                          |

### Data Input Section Tags

|     Tag      | Desciription                                                                                                                                                                                                                                                                                                                                                                                    |
| :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `<form>`   | Defines an HTML form that allows users to input data which can be submitted to a server for processing. The <form> tag typically contains various input elements such as text fields, checkboxes, radio buttons, and buttons. It specifies the action to be performed when the form is submitted and may also include attributes like method and action to control the submission behavior.     |
|  `<input>`   | Represents an input control within an HTML form, allowing users to enter data. The `<input>` tag can be used to create various types of input fields, such as text fields (type="text"), checkboxes (type="checkbox"), radio buttons (type="radio"), buttons (type="button"), and more. The specific type of input is defined using the type attribute.                                         |
|  `<button>`  | Defines a clickable button within an HTML form. The `<button>` tag can be used to create buttons for submitting forms (type="submit"), resetting form fields (type="reset"), or executing custom JavaScript actions (type="button"). The content of the button is specified between the opening and closing `<button>` tags.                                                                    |
|  `<select>`  | Represents a dropdown list within an HTML form, allowing users to select one or more options from a list of predefined choices. The `<select>` tag contains one or more `<option>` tags, each defining an individual option within the dropdown list. Users can choose an option by clicking on the dropdown arrow and selecting from the available options.                                    |
| `<textarea>` | Defines a multiline text input control within an HTML form, allowing users to enter multiple lines of text. The `<textarea>` tag is used when longer text input is required, such as for user comments or messages. The size of the textarea can be customized using attributes like rows and cols, and the initial content can be specified between the opening and closing `<textarea>` tags. |

With the tags above, you can go a surprisingly long way. You can see that these tags serve multiple
purposes, and when they are actually used on a page they are laid out such as this:

```html
<html>
  <body>
    <p>Hi!</p>
  </body>
</html>
```

We see here that the same named tag for an element comes at the end of where the content is provided
for the element, but has a prefix of "/" with it. This is referred to as a closing tag. Each section
is thought of being wrapped in the previous areas content area, until it reaches that sections closing
tag. There are also self closing tags, meaning there is only one tag provided instead of two. These are
used typically when there would not be content to put between tag, instead expecting a value or linking to a
resource. Examples of such tags would be `<input />` and `<img />`. Both of these rely on the HTML
attributes they are passed as we will be seeing shortly. It is also acceptable to write these as `<input>`
and `<img>`. You may find it preferable to include the closing "/", as it will cue you that this tag does
not have a closing tag as you scan over multiple HTML files.

We will be seeing multiple HTML layouts as we go over the site, so I just want to get across the basic
structure. Another interesting thing we will see is that libraries like React allow us to make portions of
HTML code and put them together. This allows us to break up the logic and interactions into smaller chunks,
called components. They look similar to self closing tags, and an example component named "MyComponent" would
be `<MyComponent />`. The added bonus of being able to do this, is that we can reuse components that will
fit several needs, instead of having to write the portion of code over again.

## CSS

Now that there is content for a webpage, we need a way to add font-styles, colors, shapes, animations,
and placement. This is where CSS comes in. Just like HTML tags, CSS has several property names that affect
different aspects of the content being presented. In general, setting up a layout you desire can be
tricky at first, but learning layout systems like Flexbox and CSS Grid Layout can help quite a bit.
Nowadays, if you wish to style something ChatGPT can be extremely helpful in trying to provide a
layout to work off of. With this, you would not have to look up all the specific property names and
may get a simple example as a basis. There will also be links to sites that have CSS learning material
through games that allow you to experience a gradual introduction, as well as more advanced
selectors. Last, you can always visit a site you like and inspect the page. We will go over developer
tools within the browser more in depth, but if you right click a web page and select the "inspect"
option, the developer tools will open. If you performed this action on a specific part of the page,
it typically highlights that portion of HTML and will show you all the CSS properties.

Another trend in web development is actually CSS frameworks. These provide shorthand class names to
quickly add properties to HTML elements, as well as taking care of typical CSS properties associated
with certain HTML elements like buttons. Depending on the framework, you may be able to add simple
animations as well. In our case, this site actually used Tailwind CSS as a framework. This is a very
popular framework in the industry at the moment. The site also used another library, DaisyUI, which
is built around using the CSS framework. These were used to show how much power can be leveraged out
of tools like this for quick and consistent development.

Though the site uses the Tailwind CSS framework, I would still like to introduce you to some of the
fundamentals with CSS. There are many aspects to it, but once you have a bit of an understanding
of how it works by itself, the frameworks will make much more sense. The shorthands may help you remember
some of the full property names as well, highlighting where properties share similarities.

## Attributes & Selectors

HTML allows for attributes to be added to its elements, allowing for us to use CSS selectors to
indicate which elements we wish to stylize.

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
> https://developer.mozilla.org. Mozilla is behind the creation of Firefox (web browser) and other
> technologies. The entire site has multiple helpful resources for HTML, CSS, and Javascript development. I
> highly encourage you to use this as a resource if you are ever curious to learn more.
>
> [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and
> [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) by
> [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/Community/Roles_teams#contributor)
> are licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

In the code section above we see examples of HTML elements with multiple types of attributes, and one
without any. I presented the HTML elements to go along with the order of the table above. If we were
to do an element selector for the first HTML `<div>` element, we would only need to specify we are
selecting `div`. The next element `<div id="second">` could be selected by `#second`. Next, the
`<div class="third">` would be selected by `.third`. Next, we have `<img src="image.jpg" />`. Like
the table above indicates, we can actually specify that only `<img>` tags with a `src` attribute will
be selected with `img[src]`. This can also be used for specific types like `button[type="submit"]`.

For the last part, there is a `<label>` and an `<input>` element. We see `label` accepts an attribute,
`<label for='name'>`. This actually indicates that the label belongs to the HTML element, in this case
`<input id='name'>` (I'm only providing a portion of this element at a time due to its length). This is
specified so that screen readers and other assistive technology have a description of things, such as an
input field here. The link to the input page in the citation above goes over the vast amount of types,
attributes, pseudo-classes, and much more that an `<input>` tag may accept. I would not worry about
feeling the need to remember all of that information, but getting a sense of its capabilities will be
helpful to know if you may be able to reach for it as a resource. A nice thing about staying with native
HTML elements is that assistive technology is automatically handled with HTML elements for their specific
purposes. Here the name attribute was also set to name, `<input name='name'>`. When this input is
submitted, the input is submitted as a key value pair to the server, so the name specified will be the key,
and the value the input actually holds will be the value.

## Specificity

With HTML attributes and CSS selectors out of the way, we will now explore specificity.
CSS has a hierarchy of importance when it comes to declaring styles to associate with CSS selectors.

| Selector         | Specificity                 | Example               |
| :--------------- | :-------------------------- | :-------------------- |
| ID Selector      | Highest specificity (1-0-0) | `#id`                 |
| Class Selector   | Medium specificity (0-1-0)  | `.class`              |
| Element Selector | Lowest specificity (0-0-1)  | `div`, `p`, `a`, etc. |

Here we see that the ID selector is the highest specificity. The number next to it (1-0-0) corresponds
to this structure representation ((number of IDs)-(number of Classes)-(number of Elements)). Starting
from left to right, if the number of selectors is greater in a selector definition for a certain
type of HTML element, then that definition will apply to the element.

```html
<div id="first" class="first second">1st</div>
<div id="second" class="second third">2nd</div>
<div id="fourth" class="fourth">
  <div>4th</div>
  <div class="fifth">5th</div>
  <div id="sixth">6th</div>
</div>
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
    color: grey;
  }
  /* 2-0-0 */
  #fourth #sixth {
    color: red;
  }
</style>
```

Looking at the above you probably noticed that HTML elements can have multiple classes. This is done
by putting a space between their names when defining the element
`<div id="first" class="first second">1st</div>`. By contrast, an element may only have one ID.