# Joi error formatter

<img src="https://raw.githubusercontent.com/nivesh2/joi-error-formatter/master/joi-image.png" alt="dotenv" align="right" />

Returns single error message for multiple errors messages in joi error object.
Features:
- Zero-dependency,
- Simple and clean,
- less than 20 lines,
- Easy enough to add your own customizations on to it.

## Install

```bash
npm install joi-error-formatter --save
```

## Usage
Require it in your entry file:
```javascript
const joiErrorFormatter = require('joi-error-formatter')

const {error, value} = Joi.validate({ a: 'a string',b:123 }, {a: Joi.number(),b:Joi.date()},{ abortEarly: false })
let message = ''
if(error){
    // message contains all the errors
    message = joiErrorFormatter(error)
}
console.log(message)
```

That's it.

### Development Setup steps:
* clone the repo
* npm install --save-dev eslint-config-airbnb-base eslint eslint-plugin-import
* npm install

