/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

function gtmLoadEvent(func){
    let oldOnLoad = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnLoad();
            func();
        };
    }
}
gtmLoadEvent(function(){
    let metaTag = document.querySelector('meta[name=WT\\.cg_n]'),
        $metaDataContent = metaTag.getAttribute("content"),
        $metaDataName = metaTag.getAttribute('name'),
        $discovery = 'Discovery';

    if ( $metaDataName === 'WT.cg_n') {

        /*Pushing stuff to Google's Data Layer*/
        dataLayer.push({
            'ContentGroup' : $metaDataContent
        });
    }
});