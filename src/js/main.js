// De-obfuscated by Tony.

'use strict';
/**
 * @return {undefined}
 */
function scroll_header() {
  var rotateMsg = $(".header");
  var rootDiv = $(".nav > ul");
  var $wrapper = $(".logo");
  var $node = $(".slider_img");
  if ($(window["document"])["scrollTop"]() > 20) {
    rotateMsg["addClass"]("header_small");
    rootDiv["css"]("top", "10px");
    $wrapper["addClass"]("logo_small");
    $node["addClass"]("s_stop");
  } else {
    rotateMsg["removeClass"]("header_small");
    rootDiv["css"]("top", "32px");
    $wrapper["removeClass"]("logo_small");
    $node["removeClass"]("s_stop");
  }
}
/**
 * @return {undefined}
 */
function nav_sub() {
  $(".nav li")["hover"](function() {
    if ($(window)["width"]() > 959) {
      $(".sub-menu", this)["slideDown"](300);
    }
  }, function() {
    $(".sub-menu", this)["slideUp"](50);
  });
}
/**
 * @return {undefined}
 */
function footer_top() {
  var RectBegin = $(".slider_sub")["outerHeight"](true);
  var tap = $(".content")["outerHeight"](true);
  var nearestPoint = $(".footer")["outerHeight"](true);
  var resampleValue = $(window)["height"]();
  var color;
  var RectEnd;
  if ($(window)["width"]() < 959) {
    /** @type {number} */
    RectEnd = 0;
  } else {
    /** @type {number} */
    RectEnd = 0;
  }
  if (tap + nearestPoint + RectBegin < resampleValue) {
    /** @type {number} */
    color = resampleValue - nearestPoint - tap - RectBegin - RectEnd;
    $(".footer")["css"]("top", color);
  } else {
    $(".footer")["css"]("top", "auto");
  }
}
$(window)["load"](function() {
  $(".footer")["css"]("opacity", "1");
  footer_top();
});
$(window["document"])["ready"](function() {
  nav_sub();
  if (navigator["userAgent"]["indexOf"]("MSIE 8.0") > 0) {
    $(".slider_img")["cover"]();
  }
  $("#slider")["responsiveSlides"]({
    manualControls : "#slider-pager",
    timeout : 5000,
    nav : true,
    auto : true
  });
  if ($(window)["width"]() > 959) {
    $(".slider_main")["height"]($(window)["height"]());
    var lstar = $(".logo")["offset"]()["left"];
    $(".rslides_tabs,.caption")["css"]("left", lstar);
  } else {
    $(".slider_main")["height"]($(window)["height"]() * 0.5);
  }
  $(window["document"])["on"]("scroll", function() {
    if ($(window)["width"]() < 959) {
      return false;
    }
    scroll_header();
  });
  $(".nav_icon")["click"](function() {
    $(".nav ul")["css"]("right", "0");
  });
  $(".side_close")["click"](function() {
    $(".nav ul")["css"]("right", "-150px");
  });
  /**
   * @return {undefined}
   */
  var onCompReady = function() {
    $(".icon_down")["animate"]({
      bottom : "30"
    }, 300)["animate"]({
      bottom : "35"
    }, 500)["animate"]({
      bottom : "33"
    }, 300);
  };
  setInterval(onCompReady, 3000);
  $(window["document"])["on"]("scroll", function() {
    if ($(window["document"])["scrollTop"]() > 50) {
      $(".icon_down,.mouse")["hide"]();
    }
  });
});
$(window)["resize"](function() {
  if ($(window)["width"]() > 959) {
    $(".slider_main")["height"]($(window)["height"]());
    var lstar = $(".logo")["offset"]()["left"];
    $(".rslides_tabs,.caption")["css"]("left", lstar);
  } else {
    $(".slider_main")["height"]($(window)["height"]() * .5);
    $(".rslides_tabs,.caption")["css"]("left", "0");
  }
  if ($(window)["width"]() < 959) {
    $(".nav ul")["css"]("top", "auto");
    $(".nav ul")["css"]("right", "-150px");
  }
  if ($(window)["width"]() > 959) {
    $(".nav ul")["css"]("right", "0");
    scroll_header();
  }
  footer_top();
});
$(document).ready(function() {
});

