/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: 'justify'
  };
  $('.article-gallery').justifiedGallery(options);
}


$(document).ready(function() {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    /**
     * Display the menu if the menu icon is clicked.
     */
    var menu = $("#menu");
    var menu_icon = $("#menu-icon, #menu-icon-tablet");
    menu_icon.click(function() {
      if (menu.css('visibility') === 'hidden') {
        menu.css("visibility", "visible");
        menu_icon.addClass('active');
      } else {
        menu.css("visibility", "hidden");
        menu_icon.removeClass('active');
      }
      return false;
    });


    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($( "#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on('scroll', function() {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop){
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu's on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > ul > #top").hide();
          $("#actions-footer > ul > #menu").show();
        } else if (topDistance > 100) {
          $("#actions-footer > ul > #menu").hide();
          $("#actions-footer > ul > #top").show();
        }
      });
    }
  }
});
