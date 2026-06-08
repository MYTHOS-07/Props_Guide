# React Props Guide

## Overview
Props (short for "properties") are how you pass data from a parent component to a child component in React. They are read-only and help make components reusable and dynamic.

## What are Props?

Props are:
- **Read-only**: Cannot be modified by the child component
- **Passed down**: From parent to child components
- **Objects**: Contain key-value pairs of data
- **Functional arguments**: Similar to function parameters

## Basic Syntax

### Passing Props
```jsx
// Parent Component
function Parent() {
  return <Child name="John" age={25} />;
}
```

### Receiving Props
```jsx
// Child Component
function Child(props) {
  return <div>{props.name} is {props.age} years old</div>;
}
```

## Destructuring Props

Instead of accessing `props.name`, you can destructure:

```jsx
function Child({ name, age }) {
  return <div>{name} is {age} years old</div>;
}
```

## Default Props

Set default values for props:

```jsx
function Greeting({ name = "Guest", age = 18 }) {
  return <p>Hello {name}, age {age}</p>;
}
```

## PropTypes Validation

Validate props to catch bugs early:

```jsx
import PropTypes from 'prop-types';

function User({ name, age }) {
  return <div>{name} - {age}</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
```

## Children Props

Pass components as children:

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

// Usage
<Container>
  <p>This is a child element</p>
</Container>
```

## Passing Multiple Props

```jsx
function Profile({ name, email, phone, location }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// Usage
<Profile 
  name="Alice" 
  email="alice@example.com" 
  phone="123-456-7890" 
  location="NYC" 
/>
```

## Spread Operator with Props

Use spread operator to pass multiple props:

```jsx
const userInfo = { name: "Bob", age: 30, email: "bob@example.com" };

<User {...userInfo} />
```

## Key Points

✓ Props flow downward (parent to child only)
✓ Props are immutable
✓ Use PropTypes for type checking
✓ Default props provide fallback values
✓ Destructuring makes code cleaner
✓ Children allow flexible component composition

## Common Mistakes to Avoid

❌ Trying to modify props directly
❌ Not validating prop types
❌ Passing too many props (consider refactoring)
❌ Circular prop dependencies

## Resources
- [React Official Docs - Props](https://react.dev/learn/passing-props-to-a-component)
- [PropTypes Documentation](https://github.com/facebook/prop-types)
