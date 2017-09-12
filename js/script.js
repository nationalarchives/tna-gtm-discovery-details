'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
jQuery(window).on('load', function () {

    var $metaDataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaDataName = $('meta[name=WT\\.cg_n]').attr('name');

    if ($metaDataName === 'WT.cg_n') {
        $metaDataName = 'DiscoveryContentGroup';
    }

    /* Pushing stuff to Google's Data Layer */
    dataLayer.push({
        'event': 'Discovery',
        'eventCategory': 'Details Page',
        'eventAction': $metaDataName,
        'eventLabel': $metaDataContent
    });
});
//# sourceMappingURL=script.js.map
