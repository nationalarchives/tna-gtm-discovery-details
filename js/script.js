'use strict';

jQuery(window).on('load', function () {

    var $dataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaName = $('meta[name=WT\\.cg_n]').attr('name');

    if ($metaName === 'WT.cg_n') {
        $metaName = 'DiscoveryContentGroup';
    }

    dataLayer.push({
        'event': 'Discovery',
        'eventCategory': 'Details Page',
        'eventAction': $metaName,
        'eventLabel': $dataContent
    });
});
//# sourceMappingURL=script.js.map
