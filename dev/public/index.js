/* global jQuery, rb_calendar */

///
/// Immediately-invoked Function Expressions (IIFE)s
/// rb_calendar Extension
/// Module Pattern with Imports and Exports
///

(function($public, $window, undefined) {
    /*privat ->*/
    var _private = {};

    /*<-privat*/
    /*public->*/
    _private.default_mount_id = '#App';

    $public.init = function(args) {

        if (args.mount_id) {
            _private.init_calendar_grid(args.mount_id);
        }
        else{
            _private.init_calendar_grid($_private.default_mount_id);
        }
    };
    /*<-public*/
}(window.rb_calendar = (window.rb_calendar || {}), window, jQuery));

window.addEventListener('DOMContentLoaded', function() {

    rb_calendar.init({
        mount_id: '#app'
    });

    // // Let’s extend the rb_calendar with new functionality:
    // (function($public, undefined) {
    //
    //     $public.sayGoodbye = function() {
    //         this.say('goodbye');
    //     };
    //
    // })(window.rb_calendar = (window.rb_calendar || {}));
    // rb_calendar.sayGoodbye(); // goodbye

});