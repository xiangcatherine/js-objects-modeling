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

Break into pairs; as a group, pick one of the following examples, and individually brainstorm about a set of abstractions that might reasonably be used to represent each of the following examples. Once you're done, share your thoughts with your partner.

- Reporting software that analyzes the performance of different members of a sales team.

- A computer game that allows a user to take the role of a unit commander or general and simulates a battle based on his or her commands.

- A hotel website that allows users to search for and manage reservations, which includes making changes to the arrival date and room type.

- An ecommerce platform that allows users to purchase products and pay for them by credit card.

- A platform for watching training videos (e.g. as part of a recertification process) and answering questions about them.

- A recipe website; when users change the number of dinner guests, the site adjusts each recipes accordingly.


## Objects - Properties and Methods

The way that JavaScript objects represent the attributes and behaviors of our chosen abstractions are through **properties** and **methods**. Properties are something you've already seen - keys, which correspond to some value. For instance, if we had an object representing a crayon, and it had a 'color', we might represent that like so:

```javascript
{
  color: 'blue'
}
```
> We'd also probably want to put it in a variable so that we can refer to it later.

Methods are just a special type of property - specifically, properties whose values are functions. Because they are functions, methods can execute code whenever they get called. This is a very effective proxy for something's behavior.

Let's consider how we might represent a TV using a JavaScript object. For this example, let's assume that we're only concerned with using the TV, not selling it or anything like that. When we interact with a TV, there's a short list of things that we typically do:
- turn it on/off (toggle power)
- increase or decrease the volume
- increase or decrease the channel
In addition, there are a number of other features of the TV that might interest us:
- is it a plasma/LCD/LED TV?
- what's the resolution?
- how much power does it consume?

If we wanted to represent all of these things in a JavaScript Object, and keep it in a variable called `tv`, we might write something like this:

```javascript

var tv = {
    type: 'plasma',
    resolution: '1080i',
    powerConsumption: '150W',
    togglePower: function() { /* Some code here. */ },
    changeVolume: function() { /* Some code here. */ },
    changeChannel: function() { /* Some code here. */ },
    goToChannel: function(channelNumber) { /* Some code here. */ }
};

```

To access any of those properties or methods, we can write (using dot syntax):

```javascript
  tv.type
    => 'plasma'
  tv.togglePower
    => [function]
  tv.togglePower()
    => ...
```

### Lab :: Objects - Properties and Methods

Let's revisit one of the examples from the previous lab - say, the computer game. Let's suppose that, in our game, you control a variety of different types of 'fighter' units.

Infantry
An 'infanty' unit has:
 - a 'health' of 2
 - a 'speed' of 2

Artillery
An 'artillery' unit has:
- a 'health' of 2
- a 'speed' of 1

Cavalry
An 'cavalry' unit has:
- a 'health' of 1
- a 'speed' of 3

Each of these units also has a method called 'attack' which takes another character as an argument. The 'attack' method should print the text "HIT" and force the defender to deduct some amount ('strength') from their 'health'.

The strength values for each unit are:
- infantry : 1
- artillery : 3
- cavalry : 2

Let's write the code to represent this aspect of the game! Go to `lib/battlegame.js` and write your code there.

Bonus:
Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.

## Summary :: Objects as Custom Abstractions

Now you're thinking with objects!

Picking the right set of abstractions can make your problem much simpler; however, picking the wrong set can send you down a rabbit hole, so be thoughtful in what you choose. Try running your design by someone else and see what they think!

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and ther assets copyright
General Assembly, Inc., all rights reserved.
