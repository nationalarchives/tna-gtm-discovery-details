/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
$(window).on('load', () => {

    let $metaDataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaDataName = $('meta[name=WT\\.cg_n]').attr('name'),
        $discovery = 'Discovery';

    if ( $metaDataName === 'WT.cg_n') { $metaDataName = 'DiscoveryContentGroup'; }

    /* Pushing stuff to Google's Data Layer */
    dataLayer.push({
        'event'         : $discovery,
        'eventCategory' : $discovery,
        'eventAction'   : $metaDataName,
        'eventLabel'    : $metaDataContent
    });
});