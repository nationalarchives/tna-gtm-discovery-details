"use strict";

require("babel-polyfill");

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting multiple data groups in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
$(window).on('load', function () {

    /*let $discovery = 'Discovery';
     let tagContent = [
        {
            name: 'ContentGroup',
            selector: 'meta[name=WT\\.cg_n]',
        },
        {
            name: 'DocRef',
            selector: 'meta[name=DCSext\\.docref]'
        },
        {
            name: 'CollType',
            selector: 'meta[name=DCSext\\.colltype]'
        },
        {
            name: 'FilterType',
            selector: 'meta[name=DCSext\\.filtertype]'
        },
        {
            name: 'SearchType',
            selector: 'meta[name=DCSext\\.searchtype]'
        },
        {
            name: 'Dsource',
            selector: 'meta[name=DCSext\\.dsource]'
        },
        {
            name: 'Place',
            selector: 'meta[name=DCSext\\.place]'
        },
        {
            name: 'Rdata',
            selector: 'meta[name=DCSext\\.rdata]'
        },
        {
            name: 'Repository',
            selector: 'meta[name=DCSext\\.repository]'
        }
    ];
     let dummyArray = [];
     tagContent.forEach((i) => {
        let $el = $(i.selector);
        let content = $el.attr('content');
         if(content !== undefined) {
            let returnObj = {
                [i.name]: content
            };
            dummyArray.push(returnObj);
        }
    });
     console.log(dummyArray);*/

    var a = [1, 2, 3];
    a.includes(2); // true
    a.includes(4); // false
});
//# sourceMappingURL=gtmMultipleDataCollection.js.map
