
var Joekolade = Joekolade || {};

Joekolade.preload = {
    init: function(){
        $('body').addClass('loading--active');
    }
};

$(function(){
    Joekolade.preload.init();
});


// if (typeof document.addEventListener === 'function') {
//     document.addEventListener('Neos.PageLoaded', function(event) {
//         // Do stuff
//     }, false);
// }
