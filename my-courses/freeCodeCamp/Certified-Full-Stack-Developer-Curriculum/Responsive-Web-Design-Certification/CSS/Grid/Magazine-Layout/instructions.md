Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab, you will design a magazine layout using CSS Grid, including concepts like grid rows and grid columns.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a main element with the class magazine-cover.

Your .magazine-cover should contain a header element for the title with the class title.

You should have four section elements in your page. The first three sections for magazine articles and a fourth section element for a cover image.

The four section elements should have a class attribute of feature-article, small-article1, small-article2, and cover-image, respectively.

You should set the display property of .magazine-cover to grid.

The .magazine-cover should have a grid-template-areas property that defines the layout of the grid:

The title spanning the top row.
A feature article spanning two columns and a cover image in the second row.
Two small articles and the cover image in the third row.
The .magazine-cover should have a grid-template-columns property that divides the space into three equal parts.

The .magazine-cover should have a grid-template-rows property. It should be set to auto for the first row, and divide equally the space occupied by the remaining two rows.

You should add a gap between grid items and set the width of the .magazine-cover to occupy most of the viewport width.

Note: Be sure to link your stylesheet in your HTML and apply your CSS.
