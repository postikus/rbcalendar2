/* global jQuery, rb_calendar */

///
/// Immediately-invoked Function Expressions (IIFE)s
/// rb_calendar Extension
/// Module Pattern with Imports and Exports
///

;(function($public, $window, undefined) {
    var _private = {};
    $public.init = function(args) {
        args = args || {};
        _private = {
            state: 'start_init',
            mode: 'prod',
            mount_id: '#calendar-app'
            ,foobar: 'foobar_private'
        };

        _private.init_calendar_view = function($_calendar_v_mount_obj){
            cl('calendar view init');
            var calendar_view_html = '';
            $_calendar_v_mount_obj.html(calendar_view_html);
            cl('calendar view mounted');
        };

        _private.get_filters_html = function(){
          var filters_html = '';
            filters_html +=  '                <div>\n' +
              '                    <div class="row" id="filters-header-container">\n' +
              '                        <div class="col-12 text-right" id="filters-header-icons">\n' +
              '                            <i class="fas fa-th fa-active" id="calendar-view-button"></i>\n' +
              '                            <i class="fas fa-list" id="list-view-button"></i>\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                    <div class="row filter-row-container">\n' +
              '                        <div class="col-12 filter-col-container">\n' +
              '                            <input class="form-control" id="calendar-search" placeholder="Поиск">\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                    <div class="row filter-row-container">\n' +
              '                        <div class="col-12 filter-col-container">\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck9">\n' +
              '                                <label class="form-check-label" for="defaultCheck9">\n' +
              '                                    Я участвую\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck8">\n' +
              '                                <label class="form-check-label" for="defaultCheck8">\n' +
              '                                    Открыта регистрация\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                    <div class="row filter-row-container">\n' +
              '                        <div class="col-12 filter-col-container">\n' +
              '                            <div class="filter-name">Форма обучения:</div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n' +
              '                                <label class="form-check-label" for="defaultCheck1">\n' +
              '                                    Внешнее\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">\n' +
              '                                <label class="form-check-label" for="defaultCheck2">\n' +
              '                                    Внутреннее\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                    <div class="row filter-row-container">\n' +
              '                        <div class="col-12 filter-col-container">\n' +
              '                            <div class="filter-name">Для кого:</div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck3">\n' +
              '                                <label class="form-check-label" for="defaultCheck3">\n' +
              '                                    Для руководителей\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck4">\n' +
              '                                <label class="form-check-label" for="defaultCheck4">\n' +
              '                                    Для сотрудников\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                    <div class="row filter-row-container">\n' +
              '                        <div class="col-12 filter-col-container">\n' +
              '                            <div class="filter-name">Тип:</div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck5">\n' +
              '                                <label class="form-check-label" for="defaultCheck5">\n' +
              '                                    Тренинги личной эффективности\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck6">\n' +
              '                                <label class="form-check-label" for="defaultCheck6">\n' +
              '                                    Менеджерские программы\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                            <div class="form-check">\n' +
              '                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck7">\n' +
              '                                <label class="form-check-label" for="defaultCheck7">\n' +
              '                                    Профессиональное обучение\n' +
              '                                </label>\n' +
              '                            </div>\n' +
              '                        </div>\n' +
              '                    </div>\n' +
              '                </div>\n';

            return filters_html;
        };


        _private.get_calendar_header_html = function(){
            var __calendar_header_html = '';
            __calendar_header_html += '<div class="row justify-content-center" id="month-select-container">';
                __calendar_header_html += '<div class="col text-center" id="month-select-arrow-name">';
                    __calendar_header_html += '<span id="month-select-left-button">' +
                        '<button type="button" class="btn btn-outline-secondary btn-sm" id="month-select-arrow-left-button"><</button>' +
                    '</span>';
                    __calendar_header_html += '<span id="month-select-name-container">';
                        __calendar_header_html += 'Март 2019';
                    __calendar_header_html += '</span>';
                    __calendar_header_html += '<span id="month-select-right-button">' +
                        '<button type="button" class="btn btn-outline-secondary btn-sm" id="month-select-arrow-right-button">></button>' +
                    '</span>';
                __calendar_header_html += '</div>';
            __calendar_header_html += '</div>';

            return __calendar_header_html;
        };

        _private.get_weekdayheaders = function(){
            var calendar_weekday_html = '';
            calendar_weekday_html += '<div class="col-12">';
                calendar_weekday_html += '<div class="container-fluid">';
                    calendar_weekday_html += '<div class="row">';
                        calendar_weekday_html += '<div class="col-12" id="weekdays-container">';
                            calendar_weekday_html += '<div class="weekday-name">Понедельник</div>';
                            calendar_weekday_html += '<div class="weekday-name">Вторник</div>';
                            calendar_weekday_html += '<div class="weekday-name">Среда</div>';
                            calendar_weekday_html += '<div class="weekday-name">Четверг</div>';
                            calendar_weekday_html += '<div class="weekday-name">Пятница</div>';
                        calendar_weekday_html += '</div>';
                    calendar_weekday_html += '</div>';
                calendar_weekday_html += '</div>';
            calendar_weekday_html += '</div>';

            return calendar_weekday_html;
        };

        _private.get_calendar_cell_html = function (__date) {
            var __calendar_cell_html = '';
            __calendar_cell_html += '<div class="calendar-cell"><div class="calendar-cell-date text-right">'+__date+'</div></div>';
            return __calendar_cell_html;
        };

        _private.get_calendar_row_cells_html = function (__cells_array) {
            var __row_cells_html = '';
            __row_cells_html += '<div class="row calendar-cells">';
            __row_cells_html += '<div class="col-12">';
            for (var __cell_counter=0; __cell_counter < __cells_array.length; __cell_counter++){
                __row_cells_html += _private.get_calendar_cell_html(__cells_array[__cell_counter].date);
            }
            __row_cells_html += '</div>';
            __row_cells_html += '</div>';
            return __row_cells_html;
        };

        _private.get_calendar_html = function(){
            var calendar_html = '';
            calendar_html += '<div id="calendar-container">\n';
                calendar_html += _private.get_calendar_header_html();
                calendar_html += '<div class="row" id="calendar-weekdays-container">\n';
                    calendar_html += _private.get_weekdayheaders();
                    calendar_html += '</div>\n';
                    calendar_html +=  '<div class="row" id="calendar-cells-container">';
                        calendar_html +=  '<div class="col-12">';
                        calendar_html +=  '<div class="container-fluid">';
                        for (var __month_row=0; __month_row<5; __month_row++){
                            calendar_html += _private.get_calendar_row_cells_html([{date: 1}, {date: 2}, {date: 3}, {date: 4}, {date: 5}]);
                        }
                        calendar_html += '</div>';
                    calendar_html += '</div>';
                calendar_html += '</div>';
            calendar_html += '</div>';

            return calendar_html;

        };


        _private.init_calendar = function (_mount_id) {
            cl('Start mounting');
            var $_mount_obj = $(_mount_id);
            var _calendar_inner_html;
            if ($_mount_obj.length === 0){
                cl('No valid mount object parameter. Aborting...' + _mount_id);
            }
            else{
                _calendar_inner_html = '';
                /*magic goes here -> */
                _calendar_inner_html += '<div id="calendar-app">';
                    _calendar_inner_html += '<div class="container-fluid" id="calendar-app-container">';
                        _calendar_inner_html += '<div class="row">';
                            _calendar_inner_html += '<div class="col-9" id="calendar-mount-container">';
                                _calendar_inner_html += _private.get_calendar_html();
                            _calendar_inner_html += '</div>';
                            _calendar_inner_html += '<div class="col-3" id="filters-container">';
                                _calendar_inner_html += _private.get_filters_html();
                            _calendar_inner_html += '</div>';
                        _calendar_inner_html += '</div>';
                    _calendar_inner_html += '</div>';
                _calendar_inner_html += '</div>';
                /* <- magic goes here*/
                _private.state = 'mounted';
                cl('Mounted');
                $_mount_obj.html(_calendar_inner_html);
            }
        };



        var _options = (function (_private, $public){
            var __options = {};
            for (var private_attrname in _private) { __options[private_attrname] = _private[private_attrname]; }
            for (var public_attrname in $public) { __options[public_attrname] = $public[public_attrname]; }
            return __options;
        })(_private, args);

        var cl = function(msg){
            if(_options.mode === 'test'){
                console.log(msg);
            }
        };

        cl('_options:');
        cl(_options);

        _options.state = 'started';
        _options.init_calendar(_options.mount_id);
    };

    /*<-public*/
}(window.rb_calendar = (window.rb_calendar || {}), window, jQuery));