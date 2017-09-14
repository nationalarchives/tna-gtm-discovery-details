'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the data attributes in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

$('.order-option-wrapper a').on('click', function (e) {
    e.preventDefault();
    var $this = $(undefined),
        $discovery = 'Discovery',
        $eventAction = 'Delivery option chosen',
        $eventLabel = $this.data('webtrendsCall');

    /* Pushing stuff to Google's Data Layer */
    dataLayer.push({
        'event': $discovery,
        'eventCategory': $discovery,
        'eventAction': $eventAction,
        'eventLabel': $eventLabel
    });
});
//# sourceMappingURL=gtmDiscoveryDataAttribute.js.map
