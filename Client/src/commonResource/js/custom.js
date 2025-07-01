// queastion 5
// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to
// a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right
// side of each <h3>. (Hint: everything up to this point can be achieved without using
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3>
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement
// the following feature)
$(document).ready(function () {
  let plus = $(".footer-links-wrapper h3");

  plus.on("click", function () {
    if ($(window).width() < 768) {
      console.log(this);
      $(this).next("ul").slideToggle();
      $(this).toggleClass("expanded");
    }
  });
  console.log($(window).width());
  $(window).on("resize", function () {
    location.reload();
  });
});
