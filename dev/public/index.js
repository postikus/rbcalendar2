/* global jQuery, rb_calendar */

///
/// Immediately-invoked Function Expressions (IIFE)s
/// rb_calendar Extension
/// Module Pattern with Imports and Exports
///

(function($public, $window, undefined) {
    var _private = {};
    var cl = function(msg){
        if(_private.mode === 'test'){
            console.log(msg);
        }
    };
    /*privat ->*/
    _private.state = 'start_init';
    _private.mode = 'prod';
    _private.default_mount_id = '#App';

    _private.init_calendar = function (_mount_id) {
        cl('Start mounting');
        var $_mount_obj = $(_mount_id);
        var _calendar_inner_html;
        if ($_mount_obj.length === 0){
            cl('No valid mount object parameter. Aborting...');
        }
        else{
            _calendar_inner_html = '';
            /*magic goes here -> */
            _calendar_inner_html += 'test';
            cl(_calendar_inner_html);
            /* <- magic goes here*/
            $_mount_obj.html(_calendar_inner_html);
        }
    };

    /*<-privat*/
    /*public->*/


    $public.init = function(args) {
        args = args || {};
        _private.mode = args.mode;
        if (args.mount_id) {
            _private.state = 'started';
            _private.init_calendar(args.mount_id);
        }
        else{
            _private.init_calendar(_private.default_mount_id);
        }
    };
    /*<-public*/
}(window.rb_calendar = (window.rb_calendar || {}), window, jQuery));

window.addEventListener('DOMContentLoaded', function() {

    rb_calendar.init({
        mount_id: '#rb_calendar'
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