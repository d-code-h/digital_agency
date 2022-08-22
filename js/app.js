document.querySelectorAll(".service").forEach((each) => {
  each.addEventListener("mouseover", function () {
    each.children[0].children[0].src =
      each.children[0].children[0].src.slice(0, -4) + "-hover.png";
  });
  each.addEventListener("mouseout", function () {
    each.children[0].children[0].src =
      each.children[0].children[0].src.slice(0, -10) + ".png";
  });
});
