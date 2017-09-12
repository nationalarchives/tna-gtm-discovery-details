/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * by Punal Chotrani
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 **/
jQuery(window).on('load', () => {

    let $metaDataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaDataName = $('meta[name=WT\\.cg_n]').attr('name');

    if ( $metaDataName === 'WT.cg_n') { $metaDataName = 'DiscoveryContentGroup'; }

    /* Pushing stuff to Google's Data Layer */
    dataLayer.push({
        'event'         : 'Discovery',
        'eventCategory' : 'Details Page',
        'eventAction'   : $metaDataName,
        'eventLabel'    : $metaDataContent
    });

});