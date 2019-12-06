# fela-hashed

This enhancer modifies fela to emit atomic class and keyframe using declaration content hashes instead of the default incremental unique ID. The generated identifiers are deterministic across executions and environments.

## Installation

```sh
yarn add fela-hashed
```

or

```sh
npm i --save fela-hashed
```

## Usage

```js
import {createRenderer} from 'fela';
import hashed from 'fela-hashed';

const renderer = createRenderer({
  enhancers: [hashed()],
});

const rule = () => ({
  color: 'red',
  backgroundColor: 'blue',
});

renderer.renderRule(rule);
```

outputs

```css
._87ec8632 {
  color: red;
}

._1e5ffb80 {
  background-color: blue;
}
```

### Configuration

If you are have `devMode` enabled on the renderer, `fela-hashed` will emit verbose descriptive class names.

```js
import {createRenderer} from 'fela';
import hashed from 'fela-hashed';

const renderer = createRenderer({
  enhancers: [hashed()],
  devMode: true,
});

const rule = () => ({
  color: 'red',
  backgroundColor: 'blue',
});

renderer.renderRule(rule);
```

outputs

```css
.color_red_87ec8632 {
  color: red;
}

.backgroundColor_blue_1e5ffb80 {
  background-color: blue;
}
```

## License

Licensed under the [MIT License](http://opensource.org/licenses/MIT).
