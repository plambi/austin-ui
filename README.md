# React Components

This repo contains a collection of React components I have found myself repeatedly copy and pasting across projects. It also contains a premade page that showcases all of the components.

## Dependencies

Components in this repo use Tailwind for styling, and use the colors found in globals.css

# Installation

Clone this repo into your components folder, then copy and paste the color definitions from globals.css into your globals.css.

## Standards

-   All components use the same color and size types found in types.ts as configuration props. Some componenets do not have multiple colors, they all have sizes though.
-   I chose not to centralize the component Tailwind color definitions to prevent heavily polluting the namespace. However given that the text fields (number, area, and normal) all share classes, and the checkboxes also do I need a better standard for this.
-   Components that "choose" accept a "choice" and "setChoice" prop for updating your state variable
-   Components that "set" accept a "value" and "setValue" prop for updating your state variable

## Issues

-   Remove duplicate definitions for checkbox color and size classes
-   Remove duplicate definitions for colors, and size of text, area, and number fields
-   Number field does not handle negatives
-   CheckboxGroup and RadioGroup !compact spacing has incorrect click area
