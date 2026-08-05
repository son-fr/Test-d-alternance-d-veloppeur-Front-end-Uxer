This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Button Component

## Objectif

This project consists of creating multiple Button component that uses props.

## Usage

All props are optional, and they all have default values.

```code

    <Button propName={value} />

    <ButtonGroup>
        <Button propName={value} />
    </ ButtonGroup>

    <Button_icon propName={value} />

```

propName = the name of the prop (e.g. text)
value = the value passed to the prop (e.g. "Hello world")

## Button Props


### `disabled`

This prop defines if the button is disabled or not.

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Example:

```tsx
<Button disabled={true} />
```

### `size`

This prop defines size of the button.

- **Type:** `string`
- **Required:** No
- **Default:** XS

There are 3 available sizes:

- `M`
- `S`
- `XS`

Example:

```tsx
<Button size='M' />
```

### `text`

This prop defines the text displayed inside the button.

- **Type:** `string`
- **Required:** No
- **Default:** undefined

Example:

```tsx
<Button text="Hello world" />
```

### `font_param`

This prop defines the parameter of the font used by the button.

- **Type:** `Font_param`
- **Required:** No
- **Default:** {
                    font: inter,
                    weight: 500,
                    style: 'normal',
                }


**Detail Type:*** `Font param`

- `font` **Type : font**
- `weight` **Type : number**
- `style` **Type : string**

There are 5 available fonts:

- `inter`
- `lusitana`
- `manrope`
- `space_grotesk`
- `sora`

The font must be imported before using it.

There are 2 available weight:

- `400`
- `500`
- `600`
- `700`

There are 2 available style:

- `normal`
- `italic`

Only the font Inter have the style italic available. 

Example:

```tsx
import { manrope } from "@/app/ui/font";

<Button font_param={{   font:manrope, 
                        weight:700, 
                        style:'normal'}} />
```

### `badge_font_param`

This prop defines the parameter of the font used by the badge of the button.

- **Type:** `Font_param`
- **Required:** No
- **Default:** {
                    font: inter,
                    weight: 600,
                    style: 'normal',
                }


**Detail Type:*** `Font param`

see font_param

Example:

```tsx
import { manrope } from "@/app/ui/font";

<Button badge_font_param={{     font:manrope, 
                                weight:700, 
                                style:'normal'}} />
```

### `style`

This prop defines the style used by the button.

- **Type:** `string`
- **Required:** No
- **Default:** `Primary`

There are 4 available styles:

- `Primary`
- `Secondary`
- `Ghost`
- `Destructive`

Example:

```tsx

<Button style='Primary' />
```

### `position`

This prop defines the positions of the items inside the button.

- **Type:** `string`
- **Required:** No
- **Default:** `center_center`

The first value est the position vertically, the second is the position horizontally

**List Positions Available**

```

    'left_up' , 'center_up' , 'right_up' , 
    'left_center' , 'center_center' , 'right_center' , 
    'left_bottom' , 'center_bottom' , 'right_bottom'

```

Example:

```tsx
<Button position="left_up" />
```

### `icons`

This prop defines the icons inside the button.

- **Type:** `Icons`
- **Required:** No
- **Default:** {
                    leading_icon: 'none', 
                    trailing_icon: 'none',
                } 

***Detail Type:*** `Icons`

- `left_icon` **Type : string**
- `right_icon` **Type : string**

**List Icons Available**

```

        'none' ,

        'archive' , 
        'arrow-counter-clockwise' , 'arrow-down' , 'arrow-left' , 'arrow-right' , 'arrow-square-in' , 'arrow-up-right' , 'arrow-up' , 
        'at' , 'barcode' , 'basket' , 'bell-simple' , 'book-bookmark' , 'building-apartment' , 'building-office' , 'building' , 'buildings' , 
        'calendar-dots' , 'camera-slash' , 'camera' , 
        'caret-down' , 'caret-left' , 'caret-right' , 'caret-up-down' , 'caret-up' , 
        'chart-bar' , 'chart-pie' , 'chat-text' , 'chats' , 
        'check-circle-fill' , 'check-circle' , 'check' , 'checks' , 
        'clock-counter-clockwise' , 'clock' , 'compass-tool' , 'credit-card' , 
        'database' , 'dots-three-vertical' , 'dots-three' , 'download-simple' , 
        'envelope' , 'export' , 'eye-slash' , 'eye' , 
        'file-text' , 'flag-banner-fold' , 'flag-banner' , 'flag-checkered' , 'flag-pennant' , 'flag' , 
        'gauge' , 'gear-six' , 'gift' , 'globe' , 'golf' , 'gps-fix' , 'gps' , 
        'heart' , 'house' , 
        'identification-card' , 'info' , 
        'lifebuoy' , 'lightning' , 'link' , 'list-bullets' , 'list' , 
        'magnifying-glass' , 'map-pin-area' , 'map-pin' , 'minus-circle' , 'minus' , 
        'notches' , 'notepad' , 
        'package' , 'paper-plane-tilt' , 'paperclip' , 'password' , 
        'pencil-simple' , 'phone' , 'Placeholder icon' , 'plus-circle' , 'plus' , 
        'printer' , 'prohibit-inset' , 'prohibit' , 'pulse' , 
        'question' , 
        'receipt' , 'rows' , 
        'scales' , 'scan' , 'shield-check' , 'shopping-cart' , 'sidebar-simple' , 
        'sign-in' , 'sign-out' , 'sliders-horizontal' , 'sliders' , 'sparkle' , 'stack-simple' , 'stack' , 'star-fill' , 'star' , 'suitcase' , 
        'table' , 'tag-chevron' , 'tag-simple' , 'tag' , 
        'text-align-left' , 'text-b' , 'text-italic' , 'text-underline' , 
        'ticket' , 'traffic-cone' , 'trash' , 'trend-down' , 'trend-up' , 'trophy' , 
        'upload-simple' , 'user' , 'users-three' , 'users' , 
        'warning-circle-fill' , 'warning-circle' , 'warning-diamond' , 'warning-octagon' , 'warning' , 
        'x-circle-fill' , 'x-circle-fill' , 'x-circle' , 'x'


```


Example:

```tsx
<Button icons={{leading_icon: 'golf', trailing_icon: 'archive'}} />
```

### `button_shape`

This prop defines the shape of the button.

- **Type:** `string`
- **Required:** No
- **Default:** `rounded`

**List Shapes Available**

```

'rectangle' , 'rounded' , 'semi-rounded' , 'feather' , 
'left-to-right' , 'right-to-left' ,  
'semi-rounded-left-to-right' , 'semi-rounded-right-to-left'

```

Example:

```tsx
<Button button_shape="left-to-right" />
```

### `badge`

This prop defines the value inside the badge.

- **Type:** `string`
- **Required:** No
- **Default:** undefined

Example:

```tsx
<Button badge='3' />
```

## Button_icon Props

### `disabled`

This prop defines if the button is disabled or not.

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Example:

```tsx
<Button disabled={true} />
```

### `size`

This prop defines size of the button.

- **Type:** `string`
- **Required:** No
- **Default:** XS

There are 3 available sizes:

- `M`
- `S`
- `XS`

Example:

```tsx
<Button size='M' />
```

### `style`

This prop defines the style used by the button.

- **Type:** `string`
- **Required:** No
- **Default:** `Primary`

There are 4 available styles:

- `Primary`
- `Secondary`
- `Ghost`
- `Destructive`
- `Alpha_Dark`
- `Alpha_Light`

Example:

```tsx

<Button style='Primary' />
```

### `icon`

This prop defines the icon inside the button.

- **Type:** `string`
- **Required:** No
- **Default:** 'none'

**List Icons Available**

```

        'none' ,

        'archive' , 
        'arrow-counter-clockwise' , 'arrow-down' , 'arrow-left' , 'arrow-right' , 'arrow-square-in' , 'arrow-up-right' , 'arrow-up' , 
        'at' , 'barcode' , 'basket' , 'bell-simple' , 'book-bookmark' , 'building-apartment' , 'building-office' , 'building' , 'buildings' , 
        'calendar-dots' , 'camera-slash' , 'camera' , 
        'caret-down' , 'caret-left' , 'caret-right' , 'caret-up-down' , 'caret-up' , 
        'chart-bar' , 'chart-pie' , 'chat-text' , 'chats' , 
        'check-circle-fill' , 'check-circle' , 'check' , 'checks' , 
        'clock-counter-clockwise' , 'clock' , 'compass-tool' , 'credit-card' , 
        'database' , 'dots-three-vertical' , 'dots-three' , 'download-simple' , 
        'envelope' , 'export' , 'eye-slash' , 'eye' , 
        'file-text' , 'flag-banner-fold' , 'flag-banner' , 'flag-checkered' , 'flag-pennant' , 'flag' , 
        'gauge' , 'gear-six' , 'gift' , 'globe' , 'golf' , 'gps-fix' , 'gps' , 
        'heart' , 'house' , 
        'identification-card' , 'info' , 
        'lifebuoy' , 'lightning' , 'link' , 'list-bullets' , 'list' , 
        'magnifying-glass' , 'map-pin-area' , 'map-pin' , 'minus-circle' , 'minus' , 
        'notches' , 'notepad' , 
        'package' , 'paper-plane-tilt' , 'paperclip' , 'password' , 
        'pencil-simple' , 'phone' , 'Placeholder icon' , 'plus-circle' , 'plus' , 
        'printer' , 'prohibit-inset' , 'prohibit' , 'pulse' , 
        'question' , 
        'receipt' , 'rows' , 
        'scales' , 'scan' , 'shield-check' , 'shopping-cart' , 'sidebar-simple' , 
        'sign-in' , 'sign-out' , 'sliders-horizontal' , 'sliders' , 'sparkle' , 'stack-simple' , 'stack' , 'star-fill' , 'star' , 'suitcase' , 
        'table' , 'tag-chevron' , 'tag-simple' , 'tag' , 
        'text-align-left' , 'text-b' , 'text-italic' , 'text-underline' , 
        'ticket' , 'traffic-cone' , 'trash' , 'trend-down' , 'trend-up' , 'trophy' , 
        'upload-simple' , 'user' , 'users-three' , 'users' , 
        'warning-circle-fill' , 'warning-circle' , 'warning-diamond' , 'warning-octagon' , 'warning' , 
        'x-circle-fill' , 'x-circle-fill' , 'x-circle' , 'x'


```


Example:

```tsx
<Button icons={{leading_icon: 'golf', trailing_icon: 'archive'}} />
```

### `button_shape`

This prop defines the shape of the button.

- **Type:** `string`
- **Required:** No
- **Default:** `rounded`

**List Shapes Available**

```

'rectangle' , 'rounded' , 'semi-rounded' , 'feather' , 
'left-to-right' , 'right-to-left' ,  
'semi-rounded-left-to-right' , 'semi-rounded-right-to-left'

```

Example:

```tsx
<Button button_shape="left-to-right" />
```
