var x = x || $.ajax;
$.ajax = function(o) {
  var s = s || o.success;
  o.success = function(d) {
    if (d.correct_category) {
      $(".video-category-questions-div").show();
      var $categories = $(".video-category-options a.border-btn");
      for (var i=0; i<$categories.length; i++) {
        var $category = $($categories[i]);
        $category.css("border-color", "");
        if ($category.data("id") && $category.data("id")==d.correct_category) {
          console.info("Correct category is: " + $category.text());
          $category.css("border-color", "red");
        }
      }
    }
    s(d);
  };
  x(o);
};
