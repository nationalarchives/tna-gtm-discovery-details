'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting multiple data groups in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
$(window).on('load', function () {

    var $dataCollection = [],
        $dscDocRef = $('meta[name=DCSext\\.docref]').attr('content'),
        $dscFilterType = $('meta[name=DCSext\\.filtertype]').attr('content'),
        $dscSearchType = $('meta[name=DCSext\\.searchtype]').attr('content'),
        $dscColltype = $('meta[name=DCSext\\.colltype]').attr('content'),
        $dscDsource = $('meta[name=DCSext\\.dsource]').attr('content'),
        $dscPlace = $('meta[name=DCSext\\.place]').attr('content'),
        $dscRdata = $('meta[name=DCSext\\.rdata]').attr('content'),
        $dscRepository = $('meta[name=DCSext\\.repository]').attr('content'),
        $ContentGroup = $('meta[name=WT\\.cg_n]').attr('content'),
        $discovery = 'Discovery';

    $dataCollection.push($dscDocRef, $dscSearchType, $dscFilterType, $dscColltype, $dscDsource, $dscPlace, $dscRdata, $dscRepository, $ContentGroup);

    var filterFunc = $dataCollection.filter(function ($filteredData) {
        return $filteredData !== undefined;
    });

    if (filterFunc.indexOf($ContentGroup) >= 0) {
        dataLayer.push({
            'ContentGroup': $ContentGroup
        });
        //console.log('1st Hello');
    }
    if (filterFunc.indexOf($dscRepository) >= 0) {
        dataLayer.push({
            'CollType': 'A2A'
        });
        //console.log('Hellooooo M8');
    }
    if (filterFunc.indexOf($dscSearchType) >= 0 || filterFunc.indexOf($dscFilterType) >= 0) {
        dataLayer.push({
            'event': $discovery,
            'eventCategory': $discovery,
            'eventAction': $dscFilterType,
            'eventLabel': $dscSearchType
        });
    }
});
//# sourceMappingURL=gtmMultipleDataCollection.js.map
