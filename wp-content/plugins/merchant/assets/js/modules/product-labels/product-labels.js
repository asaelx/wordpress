"use strict";

;
(function ($, window, document, undefined) {
  'use strict';

  $(document).ready(function () {
    $(document).on('wc-product-gallery-after-init', function (e, $el, params) {
      var $slides = $($el).find('.woocommerce-product-gallery__image');
      if ($slides.length > 1) {
        var $productLabel = $($el).find('.merchant-product-labels').clone();
        $($el).find('.merchant-product-labels').remove();
        $slides.append($productLabel);
      }
    });
  });
})(jQuery, window, document);