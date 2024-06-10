window.onload = function() {
  // get all label elements
  let labels = document.getElementsByTagName('label');
  console.log(labels);

  for (var i = labels.length - 1; i >= 0; i--) {
    if (labels[i].textContent.includes("Public")) {
      // remove the parent parent div of the label
      let parentDiv = labels[i].closest('div').parentElement;
      if (parentDiv) {
          parentDiv.remove();
      }
    }
  }
};