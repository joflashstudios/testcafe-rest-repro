# testcafe-rest-repro
Reproduces the TestCafe rest syntax issue

# Running
Clone the repo, then install and run:

`npm install`

`npm test`

# Dependencies
Just TestCafe (and node, etc of course)
The defect page is hosted at https://joflashstudios.github.io/

# Details
It appears that the issue pops up whenever rest syntax is used in conjuction with dynamic property access, like so (from the defect page):
```javascript
let x = {};
let key = 'arbitrary';
x[key] = function(...args) {

}
//Kablewy!
//Note that TestCafe crashes even though nothing ever *invokes* this function
```
