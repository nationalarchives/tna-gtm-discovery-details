jQuery(window).on('load', () => {

    let $dataContent = $('meta[name=WT\\.cg_n]').attr('content'),
        $metaName = $('meta[name=WT\\.cg_n]').attr('name');

    if ( $metaName === 'WT.cg_n') { $metaName = 'DiscoveryContentGroup'; }

    dataLayer.push({
        'event'         : 'Discovery',
        'eventCategory' : 'Details Page',
        'eventAction'   : $metaName,
        'eventLabel'    : $dataContent
    });
});