# Card

To implement FloatingCard component into your project you'll need simply wrap your Card component into it:

```jsx
import FloatingCard from "@kiwicom/orbit-components/lib/FloatingCard";
import Card from "@kiwicom/orbit-components/lib/Card";
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent";
```

After adding import into your project you can use it simply like:

```jsx
<FloatingCard>
  <Card>
    <CardContent>Hello World!</CardContent>
  </Card>
</FloatingCard>
```

## Props

Table below contains all types of the props available in ButtonLink component.

| Name     | Type         | Default | Description                        |
| :------- | :----------- | :------ | :--------------------------------- |
| children | `React.Node` |         | The content of the FloatingCard.   |
| offset   | `number`     | `10`    | Sets offset from top during scroll |
