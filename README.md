![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JS Objects Modeling

## Prerequisites

-   Defining and calling functions
-   Dot syntax for JavaScript objects

## Objectives

-   Model real-world entities.
-   Compare entity traits with entity behavior.
-   Implement these models with JavaScript objects.
-   Compare attribute properties and method properties.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Abstraction and Modeling

The world is full of complex systems. Take weather, for example.

![Weather Forecast](https://upload.wikimedia.org/wikipedia/commons/c/c0/NOAA_Wavewatch_III_Sample_Forecast.gif)

There's a ton of information we could record about the weather. Yet when you
read the weather report in the morning, all of that information is distilled
down to a handful of numbers: 34 degrees fahrenheit, 20% chance of
precipitation, 4 degree windchill...

<!-- Stop & Jot -->
Why do you think that might be?

When you take something complex and then hide that complexity under a more simple interface, you are using a technique called **abstraction**. 

From [wikipedia](https://en.wikipedia.org/wiki/Abstraction_(software_engineering)): In software engineering and computer science, abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level.

<!-- Think-Pair-Share -->

<details>
<summary>How might abstraction be relevant as software developers? Take a
minute and discuss this with your squad.</summary>

We can use abstraction to represent real-world entities when we write software. This allows us to hide complex systems underneath easy to grasp objects and models. 
</details>


Think about the weather report that you are given by the weather lady. She gives you the temperature in your city, if it's going to rain or snow, level of precipitation, and the wind speed. This model of the weather system hides the complexity that is behind these measurements. 

A **model** is a simplified or partial representation of the real thing. Models are based on a real entity, and are used to represent the real entity in a system. Modeling is great for planning, designing, discussing, and understanding a system.

### Discussion

Let's take a look at a specific example: a Laptop. Suppose that we need to
represent a laptop in an application. What attributes are most important to
include in our model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might pick attributes like sale price, brand, amount of RAM, disc
space, and processor speed. However, if the application is for factories, e.g.
tracking laptops as they're being manufactured, things like sale price are
irrelevant; instead, we might want our model to include the production line
where the laptop was assembled, or the laptop's current stage of completion.

In order to decide what attributes we need to model, we use user stories, which
we'll talk about in more depth as we introduce the first project.

### Lab: Brainstorm

In your squads, pick one of the following examples and individually brainstorm
about abstractions and models you might use. Once you're done, discuss your
answers as a squad.

-   Reporting software that analyzes the performance of different members of a
sales team.

-   A computer game that allows a user to take the role of a unit commander or
general and simulates a battle based on his or her commands.

-   A hotel website that allows users to search for and manage reservations, which
includes making changes to the arrival date and room type.

-   An e-commerce platform that allows users to purchase products and pay for them
by credit card.

-   A platform for watching training videos (e.g. as part of a recertification
process) and answering questions about them.

## Demo: Modeling in JavaScript

Let's think about how might we construct a model in JavaScript as part of an
application. Models can be as simple as a single number -- for instance, a day's
weather can be modeled as 'temperature' or  'inches of snow expected'. Other
things, such as lists of similar items, are typically modeled by arrays; since
the items are all similar, an index is sufficient to distinguish them.

[Model of an array of crayons](lib/crayons.js)

-   Note that we're also abstracting away each crayon as a String - at the moment,
we're only interested in their colors.

Most of the time, though, what we want to model has **multiple attributes**,
often of different types: for instance, a car might have a make (String), model
(String), a release year (Number), and a mileage (Number). Because these
attributes are different, we also probably want to refer to them using
descriptive names. For this kind of use case, an Object is the best fit, since
its _properties_ are key-value pairs with String keys. Objects can also have
properties that hold functions, called _methods_, and these can stand in neatly
for any behaviors that we might want our model to have.

Suppose we needed to model a single crayon in JavaScript. We might come up with
something like this:

[Model a single crayon in JavaScript](lib/crayon.js)

As you can see, `crayon` has two ordinary traits, (which we call properties),
(`color` and `lengthInCM`); these map to attributes of the crayon that (presumably) are
relevant to our application. In addition, it also has a method called `getUsedUp`, which corresponds with a behavior that real crayons exhibit: getting shorter as they get used.

-   Let's do a quick refresher on object dot notation:
<details><summary>What do we write if we want to access a `crayon`'s `color` property?</summary>
we can
write `crayon.color`.
</details>

<details><summary>Similarly, if we want to access the _function stored inside_
the `getUsedUp` property, what can we write? </summary>
we can write `crayon.getUsedUp`.
</details>

<details><summary>Lastly, if we want to
treat that function as a method and invoke it from the object, what can we write?</summary>
we can write
`crayon.getUsedUp()`.
</details>


Back to our car example. We have a method, `addMileage`, which adjusts the `mileage` property of our `car` object. Instead of using the object's name in the dot notation, we can use a special keyword that helps us alter properties of an object:

[Model a car object](lib/car.js)

_more on `this` later_

### Code Along: Television

Now let's consider how we might model a TV. For this example, let's assume that
we're only concerned with using the TV, not selling it or anything like that.

When we interact with a TV, there's a short list of things that we typically do:

-   turn it on/off (toggle power)
-   increase or decrease the volume
-   increase or decrease the channel

In addition, there are a number of other features of the TV that might interest
us:

-   is it a plasma/LCD/LED TV?
-   what's the resolution?
-   how much power does it consume?

How could we model this in JavaScript? In your squads, take ten minutes and
write out a JavaScript object that represents all of the features and behaviors
of a TV listed above.

### Lab: Modeling in JavaScript

Say we are building a recipe website. Suppose that after careful research, we've
determined that the following things must be true about the application.

A recipe must have:

-   a name
-   an author
-   a list of steps
-   a list of ingredient quantities
-   a number of servings that the recipe yields

An ingredient quantity must have:

-   an ingredient
-   a unit of measure (e.g. teaspoons)
-   a quantity
-   notes (e.g. chopped fine)

An ingredient must have:

-   a name
-   a value indicating whether or not the ingredient is in your fridge/pantry

Additionally, as a bonus, the recipe should be able to:

-   print a list of its ingredients, in the following format:

> 1 cup of flour
>
> 2 tablespoons of butter
>
> ...

-   indicate whether the user needs to buy more ingredients, or whether the recipe
can be prepared as-is

How could we actually implement this in JavaScript? In your squads, try to come
up with a way to represent the abstractions given above using the tools we've
learned about so far (basic types like numbers, strings, and booleans; reference
types like arrays, objects, and functions). When you finish, we'll discuss our
answers as a class.

## Summary

Now you're thinking with abstraction!

Picking the right model(s) can make your problem much simpler; however, picking
the wrong model(s) can send you down a rabbit hole, so be thoughtful in what you
choose. Try running your models by someone else and see what they think!

[License](LICENSE)

Source code distributed under the MIT license. Text and ther assets copyright
General Assembly, Inc., all rights reserved.
