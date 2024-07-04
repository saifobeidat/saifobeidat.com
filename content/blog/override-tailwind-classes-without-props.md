---
title: "Tawilind/Vue: Override Tailwind classes of a reusable Vue component without using props"
description: "Sometimes we face a case where we need to override a reusable' component base classes from outside, without the headache of defining tons of props. Instead we will be using the `initial` variant"
date: Friday, Nov 25, 2022
---

# Tailwind/Vue: Override Tailwind classes of a reusable Vue component without using props

Sometimes we face a case where we need to override a reusable' component base classes from outside, without the headache of defining tons of props. Instead we will be using the "initial" variant.

## Main Problem

We can't just pass the Tailwind classes to the component and it automatically will be take the priority and override the base classes

So, let's say we have this `AppButton.vue` component with these base classes: `w-8 font-extrabold`

```vue [AppButton.vue]
<template>
  <div class="w-8 font-extrabold">...</div>
</template>
```

and we wish to pass different font weight and width, we will be intuitively doing this in our home page:

```vue [AppButton.vue]
<template>
  <AppButton class="w-20 font-light" />
</template>
```

#### But that won't work always, why? It depends on the order of those

classes when they get compiled, in the above example, the base classes `w-8
font-extrabold` have higher order in the compiled stylesheet file which means
they have higher specificity

![tailwind](/blog/1-override-tailwind-classes-without-props.png)

<br>

::CompositeTitle
#left
Solution (1):

#right
Decrease the CSS specificity of the base classes
::

If we can guarantee that our base classes w-8 font-extrabold have less specificity, we can ensure that the passed classes from outside will override them

#### how?

To use the :where() pseudo selector!

::Quot
According to MDN, :where() is a CSS functional pseudo-class selector that takes in a list of selectors as an argument and applies the given styles to any element from that list. :where() is very useful for making a long selector list shorter
::

#### How can we benefit of `:where()`?

If we can have our base classes to be compiled to something similar to this:

```css
html: where(.initial .w-8, .initial .font-light);
```

#### The above code can be translated to:

Every item that is prefixed with the `.initial` class will take zero specificity, and by this our passed classes to the `AppButton` can override those zero specificity base classes

#### So how can we do this using Tailwind?

Add a new variant called `initial` to the Tailwind plugins array:

```js [tailwind.config.js]
module.exports = {
  plugins: [
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    }
  ]
};
```

#### Now we are able to prefix the base classes with initial:\* so the AppButton.vue will be as changed to:

```vue [AppButton.vue]
<template>
  <div class="initial:w-8 initial:font-extrabold">...</div>
</template>
```

#### It works now

We will find that the classes are overridden:

![tailwind](/blog/2-override-tailwind-classes-without-props.png)

<br>

::CompositeTitle
#left
Solution (2):

#right
Use Props
::

This solution is define the needed props "weight and width":

```vue [AppButton.vue]
<template>
  <div :class="[weight, width]">...</div>
</template>

<script>
export default {
  props: {
    weight: {
      type: "String",
      default: "font-extrabold"
    },
    width: {
      type: "String",
      default: "w-8"
    }
  }
};
</script>
```

#### And in our home template, we'll be passing them:

```vue [home.vue]
<template>
  <AppButton width="w-20" weight="font-light" />
</template>
```

I don't prefer this solution, as we need to add a prop for every new default base class.

Why to bloat the code with props when we can use the first solution.

::CompositeTitle
#left
Solution (3):

#right
Is to pass the classes as `!important`:
::

```vue
<template>
  <div class="!w-20 !font-light">...</div>
</template>
```

but I don't recommend it as it will override all the attached styles to that base class like lg:font-semibold

Thank you!
