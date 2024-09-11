$(window).on('load', function () {

  $("a").each(function () {
    var link = $(this);
    var linkText = link.attr("href");

    // Check if the link is defined and not null
    if (typeof linkText !== 'undefined' && linkText !== null) {

      // Check if the link URL is not related to the current page
      if (linkText.indexOf(window.location.hostname) == -1
        && linkText.slice(0, 1) !== '#'
        && !linkText.includes('javascript')
        && !linkText.startsWith('tel')
        && !linkText.startsWith('mailto')) {

        // If the link is not related to the current page, set the target attribute to "_blank" to open it in a new tab
        link.attr("target", "_blank");
      }
      else {
        link.attr("target", "_self");
      }

      if (link.attr("href").includes('viewer.html')) {
        link.attr("target", "_blank");
      }

    }
  });

  // Get the website link
  var websiteLink = window.location.hostname;

  // Find all forms with POST method and action attribute
  $('form[method="post"][action]').each(function () {
    // Get the action value
    var linkText = $(this).attr('action');

    // Check if the action value is empty
    if (!linkText) {
      // Handle empty action value (add your validation logic here)
      console.log('Action value is empty');
      return;
    }

    // Check if the action value is different from the website link
    if (linkText.indexOf(websiteLink) == - 1 && linkText.slice(0, 1) !== '#' && !linkText.includes('javascript')) {
      // Add target="_blank" attribute
      $(this).attr('target', '_blank');
    }
  });

})
