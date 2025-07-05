# Day 01 - createElement 

## ✅ What I Learned

-what is createElement
-whaata is JSX
-what is root 
-what is rendor

## createElement

--React.createElement() is a function that returns a React element object.
It takes 3 arguments:

tag name ('h1', 'div', component, etc.)

props as an object ({ id: "title" })

children (what’s inside — text, elements, or arrays)

## example
const heading = React.createElement(
  "h1",
  { id: "title", className: "main-heading" },
  "Hello, Vivek!"
);


## JSX

--JSX stands for JavaScript XML.

It lets you write HTML-like syntax inside JavaScript:

## example

const element = <h1 className="title">Hello, Vivek!</h1>;

under the hood it use creatElement and JSX is better than createElement .

## example

React.createElement("h1", { className: "title" }, "Hello, Vivek!");

