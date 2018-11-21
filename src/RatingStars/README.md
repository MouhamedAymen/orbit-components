# RatingStars
To implement RatingStars component into your project you'll need to add the import:
```jsx
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
```
After adding import into your project you can use it simply like:
```jsx
<RatingStars rating={3} size="medium" color="attention" format="hotel" />
```
## Props
Table below contains all types of the props available in RatingStars component.

| Name         | Type                | Default      | Description                      |
| :-------     | :------------------ | :----------- | :------------------------------- |
| color        | [`enum`](#enum)     | `"primary"`  | The color of stars.
| dataTest     | `string`            |              | Optional prop for testing purposes.
| size         | [`enum`](#enum)     | `"small"`    | The size of stars.
| format       | [`enum`](#enum)     | `"normal"`    | The `"normal"` format display also empty stars. `"hotel"` format display only full stars.
| **rating**   | `number`            |              | The rating number to display.


### enum

| size       | color          | format      |
| :--------- | :------------- | :---------- |
| `"small"`  | `"primary"`    | `"normal"`
| `"medium"` | `"secondary"`  | `"hotel"`
| `"large"`  | `"attention"`  |
