// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var getChildrenByClassName = function(element) {

    let elementsWithClassName = [];

    // no matter what:
    //   check if class name exists
    //   if yes, add to result
    //   if no, start result empty
    if (element.classList) {
      if (element.classList.contains(className)) {
        elementsWithClassName.push(element);
      }
    }
    // debugger;
    // recursive case:
    //   element has children
    //   return result plus value of recursive calls on each child
    if (element.hasChildNodes()) {
      let children = element.childNodes;
      for (let i = 0; i < children.length; i++) {
        elementsWithClassName = elementsWithClassName.concat(getChildrenByClassName(children[i]));
      }
    }

    // in base case of no children, this still returns correct elements
    return elementsWithClassName;
  };

  return getChildrenByClassName(document.body);
};
