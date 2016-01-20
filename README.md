![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives

- Model real-world entities.
- Compare entity traits with entity behavior.
- Implement these models with objects.
- Compare attribute properties and method properties.

## Prerequisites

- Chapters 5 and 6 of Fundamentals
- Defining and calling functions
- Dot syntax for JavaScript objects

## Abstraction and Modeling

The world is full of complex systems. Take weather, for example.

![Weather Forecast](https://upload.wikimedia.org/wikipedia/commons/c/c0/NOAA_Wavewatch_III_Sample_Forecast.gif)

There's a ton of information we could record about the weather. Yet when you read the weather report in the morning, all of that information is distilled down to a handful of numbers: 34 degrees fahrenheit, 20% chance of precipitation, 4 degree windchill... <!-- Stop & Jot --> Why do you think that is?

Let's consider another example : a scientist trying to come up with a set of rules to describe how something behaves. To make these rules, the scientist must typically make many simplifying assumptions - otherwise, the rules get too complicated. The process of figuring out which part of the problem to keep (and which ones to ignore or assume away) is called _abstraction_. By abstracting away irrelevant information, the scientist can then construct a _model_, a simplified representation of the original problem.

<!-- Think-Pair-Share -->
How might abstraction and modeling be relevant as software developers? Take a minute and discuss this with your squad.

Let's take a look at a specific example: a laptop. Suppose that we need to represent a laptop in an application. What attributes are most important to include in our model?

As it turns out, the answer to that question depends heavily on what the application will do and how it will be used. If the application is for selling laptops, we might be pick attributes like sale price, brand, amount of RAM, disc space, and processor speed. However, if the application is for factories, e.g. tracking laptops as they're being manufactured, things like sale price are irrelevant; instead, we might want our model to include the production line where the laptop was assembled, or the laptop's current stage of completion.

### Lab

In your squads, pick one of the following examples and individually brainstorm about abstractions and models you might use. Once you're done, discuss your answers as a squad.

- Reporting software that analyzes the performance of different members of a sales team.

- A computer game that allows a user to take the role of a unit commander or general and simulates a battle based on his or her commands.

- A hotel website that allows users to search for and manage reservations, which includes making changes to the arrival date and room type.

- An e-commerce platform that allows users to purchase products and pay for them by credit card.

- A platform for watching training videos (e.g. as part of a recertification process) and answering questions about them.

- A recipe website; when users change the number of dinner guests, the site adjusts ingredient quantities accordingly.

## Modeling in JavaScript

Let's think about how might we construct a model in JavaScript as part of an application. Models can be as simple as a single number -- for instance, a day's weather can be modeled as 'temperature' or  'inches of snow expected'. Other things, such as lists of similar items, are typically modeled by arrays; since the items are all similar, an index is sufficient to distinguish them.
```
let beatles = ['John', 'Paul', 'George', 'Ringo'];
```
> Note that we're also abstracting away each Beatle as a String - at the moment, we're only interested in their first names.

Most of the time, though, what we want to model has **multiple attributes**, often of different types: for instance, a car might have a make (String), a release year (Number), and a mileage (Number). Because these attributes are different, we also probably want to refer to them using descriptive names. For this kind of use case, an Object is the best fit, since its _properties_ are key-value pairs with String keys. Objects can also have properties that hold functions, called _methods_, and these can stand in neatly for any behaviors that we might want our model to have.

Suppose we needed to model a single crayon in JavaScript. We might come up with something like this.
```javascript
let crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function(){
    this.lengthInCM -= 0.5;
  }
}
```

As you can see, `crayon` has two ordinary properties, (`color` and `lengthInCM`); these map to attributes of the crayon that (presumably) are relevant to our application. In addition, it also has a method called `getUsedUp`, which corresponds with a behavior that real crayons exhibit - getting shorter as they get used.

> Just as a refresher, if we want to access `crayon`'s `color` property, we can write `crayon.color`. Similarly, if we want to access the function stored inside the `getUsedUp` property, we can write `crayon.getUsedUp`. Lastly, if we want to treat that function as a method and invoke it from the object, we can write `crayon.getUsedUp()`.

Now let's consider how we might model a TV. For this example, let's assume that we're only concerned with using the TV, not selling it or anything like that.

When we interact with a TV, there's a short list of things that we typically do:
- turn it on/off (toggle power)
- increase or decrease the volume
- increase or decrease the channel
In addition, there are a number of other features of the TV that might interest us:
- is it a plasma/LCD/LED TV?
- what's the resolution?
- how much power does it consume?

How could we model this in JavaScript? In your squads, take five minutes and write out a JavaScript object that represents all of the features and behaviors of a TV listed above.

### Lab
>If you haven't already, please fork and clone this repo.

Let's revisit one of the examples from the previous lab - say, the computer game. Suppose that, in this game, you control one of three different military units, with the following properties:

| Unit | Health | Speed | Strength |
|:-:|:-:|:-:|:-:|
| Infantry | 2 | 2 | 1 |
| Artillery | 2 | 1 | 3 |
| Cavalry | 1 | 3 | 2 |

You'll be writing the code necessary to model out each of these three units inside `lib/battlegame.js`.

In addition to the properties above, each of these units should also be able to attack other units via an `attack` method that takes the "target" unit as an argument. The `attack` method should print the text `"HIT"` and force the defender to take damage (i.e. to deduct the `strength` of the attacker from their `health`).

##### Bonus Challenge:
Write a stand-alone function called `battle` which takes two units as arguments. The two units should attack each other until one of them dies (`health` falls to 0 or below). The character with the higher `speed` value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.

## Summary

Now you're thinking with abstraction!

Picking the right model(s) can make your problem much simpler; however, picking the wrong model(s) can send you down a rabbit hole, so be thoughtful in what you choose. Try running your models by someone else and see what they think!

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and ther assets copyright
General Assembly, Inc., all rights reserved.
