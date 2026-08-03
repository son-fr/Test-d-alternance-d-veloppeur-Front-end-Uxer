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

This project consists of creating a Button component that uses props.

## Usage

All props are optional, and they all have default values.

```code

    <Button propName={value} />

```

propName = the name of the prop (e.g. text)
value = the value passed to the prop (e.g. "Hello world")

## Props


### `disabled`

This prop defines if the button is disabled or not.

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Example:

```tsx
<Button disabled={true} />
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
                    weight: 400,
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

### `height`

This prop defines the height of the button.

- **Type:** `number`
- **Required:** No
- **Default:** `15`

Example:

```tsx
<Button height={50} />
```

### `width`

This prop defines the width of the button.

- **Type:** `number`
- **Required:** No
- **Default:** `15`

Example:

```tsx
<Button width={50} />
```

### `color`

This prop defines the colors of for types of the button default, hover, focus, and disabled.

- **Type:** `Colors_state`
- **Required:** No
- **Default:** {
                    default : 'none',
                    hover: 'none',
                    focus: 'none',
                    disabled: 'none',
                }

***Detail Type:*** `Colors_state`

- `default` **Type : string**
- `hover` **Type : string**
- `disabled` **Type : string**
- `disabled` **Type : string**

**List Colors Available**

```

        'none'
        
        /*Neutral*/

        'Neutral/Grey/50' , 'Neutral/Grey/100' , 'Neutral/Grey/200' , 'Neutral/Grey/300' , 'Neutral/Grey/400' , 'Neutral/Grey/500' , 'Neutral/Grey/600' , 'Neutral/Grey/700' , 'Neutral/Grey/800' , 'Neutral/Grey/900' , 'Neutral/Grey/950' ,
        'Neutral/White/5' , 'Neutral/White/10' , 'Neutral/White/20' , 'Neutral/White/30' , 'Neutral/White/40' , 'Neutral/White/50' , 'Neutral/White/60' , 'Neutral/White/70' , 'Neutral/White/80' , 'Neutral/White/90' , 'Neutral/White/100' ,
        'Neutral/Black/5' , 'Neutral/Black/10' , 'Neutral/Black/20' , 'Neutral/Black/30' , 'Neutral/Black/40' , 'Neutral/Black/50' , 'Neutral/Black/60' , 'Neutral/Black/70' , 'Neutral/Black/80' , 'Neutral/Black/90' , 'Neutral/Black/100' ,

        /*Brand*/

        'Brand/Fairway/50' , 'Brand/Fairway/100' , 'Brand/Fairway/200' , 'Brand/Fairway/300' , 'Brand/Fairway/400' , 'Brand/Fairway/500' , 'Brand/Fairway/600' , 'Brand/Fairway/700' , 'Brand/Fairway/800' , 'Brand/Fairway/900' , 'Brand/Fairway/950' ,
        'Brand/Hazard/50' , 'Brand/Hazard/100' , 'Brand/Hazard/200' , 'Brand/Hazard/300' , 'Brand/Hazard/400' , 'Brand/Hazard/500' , 'Brand/Hazard/600' , 'Brand/Hazard/700' , 'Brand/Hazard/800' , 'Brand/Hazard/900' , 'Brand/Hazard/950' ,
        'Brand/Clubhouse/50' , 'Brand/Clubhouse/100' , 'Brand/Clubhouse/200' , 'Brand/Clubhouse/300' , 'Brand/Clubhouse/400' , 'Brand/Clubhouse/500' , 'Brand/Clubhouse/600' , 'Brand/Clubhouse/700' , 'Brand/Clubhouse/800' , 'Brand/Clubhouse/900' , 'Brand/Clubhouse/950' ,
        'Brand/Bunker/50' , 'Brand/Bunker/100' , 'Brand/Bunker/200' , 'Brand/Bunker/300' , 'Brand/Bunker/400' , 'Brand/Bunker/500' , 'Brand/Bunker/600' , 'Brand/Bunker/700' , 'Brand/Bunker/800' , 'Brand/Bunker/900' , 'Brand/Bunker/950' ,

        /*Semantic*/

        'Semantic/Red/50' , 'Semantic/Red/100' , 'Semantic/Red/200' , 'Semantic/Red/300' , 'Semantic/Red/400' , 'Semantic/Red/500' , 'Semantic/Red/600' , 'Semantic/Red/700' , 'Semantic/Red/800' , 'Semantic/Red/900' ,'Semantic/Red/950' ,
        'Semantic/Orange/50' , 'Semantic/Orange/100' , 'Semantic/Orange/200' , 'Semantic/Orange/300' , 'Semantic/Orange/400' , 'Semantic/Orange/500' , 'Semantic/Orange/600' , 'Semantic/Orange/700' , 'Semantic/Orange/800' , 'Semantic/Orange/900' ,'Semantic/Orange/950' ,
        'Semantic/Green/50' , 'Semantic/Green/100' , 'Semantic/Green/200' , 'Semantic/Green/300' , 'Semantic/Green/400' , 'Semantic/Green/500' , 'Semantic/Green/600' , 'Semantic/Green/700' , 'Semantic/Green/800' , 'Semantic/Green/900' ,'Semantic/Green/950' ,
        'Semantic/Blue/50' , 'Semantic/Blue/100' , 'Semantic/Blue/200' , 'Semantic/Blue/300' , 'Semantic/Blue/400' , 'Semantic/Blue/500' , 'Semantic/Blue/600' , 'Semantic/Blue/700' , 'Semantic/Blue/800' , 'Semantic/Blue/900' ,'Semantic/Blue/950' ,
        'Semantic/Cyan/50' , 'Semantic/Cyan/100' , 'Semantic/Cyan/200' , 'Semantic/Cyan/300' , 'Semantic/Cyan/400' , 'Semantic/Cyan/500' , 'Semantic/Cyan/600' , 'Semantic/Cyan/700' , 'Semantic/Cyan/800' , 'Semantic/Cyan/900' ,'Semantic/Cyan/950' ,
        'Semantic/Indigo/50' , 'Semantic/Indigo/100' , 'Semantic/Indigo/200' , 'Semantic/Indigo/300' , 'Semantic/Indigo/400' , 'Semantic/Indigo/500' , 'Semantic/Indigo/600' , 'Semantic/Indigo/700' , 'Semantic/Indigo/800' , 'Semantic/Indigo/900' ,'Semantic/Indigo/950' ,
        'Semantic/Pink/50' , 'Semantic/Pink/100' , 'Semantic/Pink/200' , 'Semantic/Pink/300' , 'Semantic/Pink/400' , 'Semantic/Pink/500' , 'Semantic/Pink/600' , 'Semantic/Pink/700' , 'Semantic/Pink/800' , 'Semantic/Pink/900' ,'Semantic/Pink/950' ,
        'Semantic/Rose/50' , 'Semantic/Rose/100' , 'Semantic/Rose/200' , 'Semantic/Rose/300' , 'Semantic/Rose/400' , 'Semantic/Rose/500' , 'Semantic/Rose/600' , 'Semantic/Rose/700' , 'Semantic/Rose/800' , 'Semantic/Rose/900' ,'Semantic/Rose/950' ,
        'Semantic/Yellow/50' , 'Semantic/Yellow/100' , 'Semantic/YellowRed/200' , 'Semantic/Yellow/300' , 'Semantic/Yellow/400' , 'Semantic/Yellow/500' , 'Semantic/Yellow/600' , 'Semantic/Yellow/700' , 'Semantic/Yellow/800' , 'Semantic/Yellow/900' ,'Semantic/Yellow/950'
```

Example:

```tsx
<Button color={{ default: 'Neutral/Grey/50',
                    hover: 'Semantic/Cyan/400', 
                    focus: 'Semantic/Rose/600', 
                    disabled: 'Brand/Fairway/950'}} />
```

### `position`

This prop defines the positions of the items inside the button.

- **Type:** `string`
- **Required:** No
- **Default:** `center_center`

The first value est the position vertically, the second is the position horizontally

**List Positions Available**
 | 'center_up' | 'right_up' | 
 *         'left_center' | 'center_center' | 'right_center' | 
 *         'left_bottom' | 'center_bottom' | 'right_bottom'} position - The position of the text, first value position align ( ↔ ), second value position justify ( ↕ ). (default: "center_center")
 * @param {Icons} icons - The icons chose on the left or on the right of the button (chose between all the icons in /icons/ only need the name of the file). (default: {
                                                                                                                                                                            left_icon: 'none', 
                                                                                                                                                                            right_icon: 'none',
                                                                                                                                                                        })
 * @param {ItemsSize} items - The size of the items (in px), first value is the size of the left_icons, the second value is the size of the text, the third value is the size of the right_icon and the fourth value is the size of the badge . (default: {
                                                                                                                                                                                                                                                                left_icon: 15, 
                                                                                                                                                                                                                                                                font_size: 20,
                                                                                                                                                                                                                                                                right_icon: 15,
                                                                                                                                                                                                                                                                badge: 15,    
                                                                                                                                                                                                                                                            })
 * @param {'rectangle' | 'round
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
                    left_icon: 'none', 
                    right_icon: 'none',
                } 

***Detail Type:*** `Icons`

- `left_icon` **Type : string**
- `right_icon` **Type : string**

**List Colors Available**

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
<Button icons={{left_icon: 'golf', right_icon: 'archive'}} />
```

### `items_size`

This prop defines the sizes of all the items inside the button.

- **Type:** `ItemsSize`
- **Required:** No
- **Default:** {
                    left_icon: 15, 
                    font_size: 20,
                    right_icon: 15,
                    badge: 15,    
                }

***Detail Type:*** `ItemsSize`

- `left_icon` **Type : number**
- `font_icon` **Type : number**
- `right_icon` **Type : number**
- `badge` **Type : number**

The size is in px.

Example:

```tsx
<Button items_size={{left_icon: 25, font_size: 25, right_icon: 25, badge: 20}} />
```

### `button_shape`

This prop defines the shape of the button.

- **Type:** `string`
- **Required:** No
- **Default:** `rounded`

**List Shapes Available**

```

'rectangle' , 'rounded' , 'feather' , 'left-to-right' , 'right-to-left'

```

Example:

```tsx
<Button button_shape="left-to-right" />
```

### `shadow`

This prop defines Description of what this prop does.

- **Type:** `Shadows`
- **Required:** No
- **Default:** `none`

***Detail Type:*** `Shadows`

- `shadow` **Type : string**

**List Shadows Available**

```

        'none' , 

        'shadow-xs-down' , 'shadow-s-down' , 'shadow-m-down' , 'shadow-l-down' , 'shadow-xl-down' , 'shadow-2xl-down' , 
        'shadow-xs-up' , 'shadow-s-up' , 'shadow-m-up' , 'shadow-l-up' , 'shadow-xl-up' , 'shadow-2xl-up' ,
        'focusring-primary'

```
Example:

```tsx
<Button shadow='shadow-2xl-down' />
```

### `border`

This prop defines the size of the border of the button.

- **Type:** `number`
- **Required:** No
- **Default:** `0`

The size is in px.

Example:

```tsx
<Button border={1} />
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
