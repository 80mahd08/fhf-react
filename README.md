<h1 style="text-align:center">FHF-REACT</h1>

<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/80mahd08/fhf-react/main/logo.png" />
</p>

## Introduction

 This framework provides a collection of reusable components and styles to help you build responsive and flexible web layouts effortlessly.

## Components

### ClearFix

A utility component for clearing floats and ensuring proper layout.

```jsx
<ClearFix />
```

### Container

A flexible container component with optional styles and class names.

```jsx
<Container>
  {/* Your content goes here */}
</Container>
```

### FlexContainer

A flexible container for creating flex layouts.

```jsx
<FlexContainer>
  {/* Flex items go here */}
</FlexContainer>
```

### FlexItem

A flexible container for creating flex layouts.

```jsx
<FlexItem>
  {/* Your content goes here */}
</FlexItem>
```

### DivV

A responsive div component with visibility and hidden classes based on different screen sizes.

```jsx
<DivV visibleIn="md" hiddenIn="lg">
  {/* Your content goes here */}
</DivV>
```

### RespImg

A responsive image component that scales with the width of its container.

```jsx
<RespImg src="your-image-url" alt="Image Alt Text" />
```

### RespVideo

A responsive video component similar to RespImg.

```jsx
<RespVideo src="your-video-url" alt="Video Alt Text" />
```

### RespGridFill

A responsive grid component with a specified column size and optional gap between items.

```jsx
<RespGridFill size={100} gap={20}>
  {/* Grid items go here */}
</RespGridFill>
```

### RespGridFit

Similar to RespGridFill, but with auto-fitting columns.

```jsx
<RespGridFit size={100} gap={20}>
  {/* Grid items go here */}
</RespGridFit>
```

### UnstyledList

An unordered list component with no list styles.

```jsx
<UnstyledList>
  {/* List items go here */}
</UnstyledList>
```

### NavUl

A styled ul component for navigation items.

```jsx
<NavUl>
  {/* Navigation items go here */}
</NavUl>
```

### RespHeading

A responsive heading component with different font sizes based on the heading level.

```jsx
<RespHeading element="h2">
  {/* Your heading text goes here */}
</RespHeading>
```

### Circle

A circular container component.

```jsx
<Circle>
  {/* Your content goes here */}
</Circle>
```

### ResBackgImg

A responsive background image component for specified HTML elements.

```jsx
<RespBackgImg element="div" url="path/*">
  {/* Your content goes here */}
</RespBackgImg>
```

### Styles

A responsive background image component for specified HTML elements.

```jsx
import { styles, mergeStyles , styleHover , styleActive }  from "fhf-react/styles";
import { mergeRefs } from "fhf-react"

const Comp = () =>{
  const { refLightHover , styleLightHover } = styles.bgLightHover()
  const { refOfActive , styleOfActive } = styleActive(styles.extremeRounded , styles.bg("green"))

    return(
        <div ref={mergeRefs(refLightHover , refOfActive)} style={mergeStyles(styles.centerPosition,styles.fitContentHW , styleLightHover , styleOfActive )}>
          {/* Your centered content goes here */}
        </div>
    )
}

export default Comp
```
Feel free to explore and use these components and styles to create modern and responsive user interfaces in your React projects.

Happy coding!
