---
title: "Hasura: How to pass a dynamic expression/condition using GraphQl"

description: "How to pass dynamic conditions/expressions to Hasrua GraphQl queries"
date: Tuesday, July 30, 2024
---

# Hasura: How to pass a dynamic expression/condition using GraphQl

We had a case in our app where we wanted to give the user ability filter questions by "answered" or "not_answered" or "all".

We have a flag in the questions table called "is_answered", it's pretty easy to use it like this

```gql
query getQuestions($subjectId: bigint, $is_answered: Boolean = true) {
  questions(
    where: {
      subject_id: { _eq: $subjectId }
      is_answered: { _eq: $is_answered }
    }
  ) {
    title
  }
}
```

by passing `$is_answered` we can retrieve either the answered or not answered questions. But what if want to retrieve both?

We thought we can just by passing `null` or `undefined` instrad of a boolean then Hasura will understand and will ignore the whole expression and retieve both, but Hasura throws an error if you do this.

## Solutions we have:

#### Solution (1): Multiple queries

You can have multiple queries, one that has the `$is_answered` parameter, and the other doesn't have it.. this might be okay for small queries or edge cases only, but if you have big queries and you do this, it will be hard to maintain those queries.

#### Solution (2): Use boolean expression `AndExp`

Hasura has several [boolean expressions](https://hasura.io/docs/latest/api-reference/graphql-api/query/#andexp) that you can use them.

One of them is `AndExp` we used it to fix this issue by passing the query a dynamic expression as bellow:

We updated our query to be:

```gql
query getQuestions(
  $subjectId: bigint
  $isAnsweredExpression: questions_bool_exp!
) {
  questions(
    where: { subject_id: { _eq: $subjectId }, _and: [$isAnsweredExpression] }
  ) {
    title
  }
}
```

We changed `$is_answered` param to `$isAnsweredExpression` with type: `questions_bool_exp!` where `questions` is our table name, you need to update it

Now this is how passed the expression to the query:

```js
await client.query({
  fetchPolicy: "no-cache",
  query,
  variables: {
    subjectId: 1,
    isAnsweredExpression:
      display == "all" ? {} : { is_answered: { _eq: display == "answered" } }
  }
});
```

`display` is the selected option by user it can be "all", "answered" or "not_answered".

if the user chooses "all", then we just need send `{}` and Hasura will ignore your expression and you will get both answered and not answered questions, if the user chooses "answered" or "not_answered", then you need to send the full expression like this `{ is_answered: { _eq: true }`

Hope this fixes your issue!

<br>
