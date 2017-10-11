/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
$(window).on('load', () => {

    let $metaDataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaDataName = $('meta[name=WT\\.cg_n]').attr('name'),
        $discovery = 'Discovery';

    if ( $metaDataName === 'WT.cg_n') {
        //$metaDataName = 'DiscoveryContentGroup'; (To be used later with other meta tags)

        /* Pushing stuff to Google's Data Layer */
        dataLayer.push({
            // 'event'         : $discovery, (To be used later with other meta tags)
            // 'eventCategory' : $discovery, (To be used later with other meta tags)
            // 'eventAction'   : $metaDataName, (To be used later with other meta tags)
            // 'eventLabel'    : $metaDataContent (To be used later with other meta tags)
            'ContentGroup' : $metaDataContent
        });
    }

});