i18n-message
==================

[![Build Status](https://travis-ci.org/justinklemm/i18n-strings-files.png)](https://travis-ci.org/justinklemm/i18n-strings-files)

Node.js module for processing .strings files used for localization in iOS/OSX development

## Installing with [npm](http://npmjs.org/)

```
npm install i18n-message
```

## Usage

i18n-message can be used to read a .properties file and parse it into an object.

Note that specifying an encoding is optional. If an encoding is not specified, UTF-16 will be used [as recommended by Apple](https://developer.apple.com/library/mac/documentation/macosx/conceptual/bpinternational/Articles/StringsFiles.html). It's important to understand the encoding of the file being read/written and make sure it's specified properly (if it's something other than UTF-16).
```properties
#sample properties file
default.username.label = Username
```
```js
// Include i18n-strings-files
const i18n = require('i18n-message');
const message = i18n('i18n/message.properties')
console.log(message.default.username.label);
// output: Username
```