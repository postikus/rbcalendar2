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
            mount_id: '#calendar-app',
            foobar: 'foobar_private',
            cur_date: new Date()
        };

        _private.init_calendar_view = function($_calendar_v_mount_obj){
            cl('calendar view init');
            var calendar_view_html = '';
            $_calendar_v_mount_obj.html(calendar_view_html);
            cl('calendar view mounted');
        };

        _private.get_calendar_view_button_container = function () {
            var __calendar_view_button_html = '';
            __calendar_view_button_html += '<div class="col-12 text-right" id="filters-header-icons">';
                __calendar_view_button_html += '<i class="fas fa-th fa-active" id="calendar-view-button"></i> ';
                __calendar_view_button_html += '<i class="fas fa-list" id="list-view-button"></i>';
            __calendar_view_button_html += '</div>';
            return __calendar_view_button_html;
        };

        _private.get_search_html = function () {
            var __search_html = '';
            __search_html += '<input class="form-control" id="calendar-search" placeholder="Поиск">';
            return __search_html;
        };

        _private.get_checkbox_html = function (__q_object) {
          var __checkbox_html = '';
          __checkbox_html +=   '<div class="form-check">';
            __checkbox_html +=   '<input class="form-check-input" type="checkbox" value="" id="'+__q_object.id+'">';
            __checkbox_html += '<label class="form-check-label" for="'+__q_object.id+'">';
            __checkbox_html += __q_object.label;
            __checkbox_html += '</label>';
          __checkbox_html += '</div>';
          return __checkbox_html;
        };

        _private.get_checkboxs_html = function (__q_object) {
            var __checkboxs_html = '';
            __checkboxs_html += '<div class="filter-name" id="'+__q_object.id+'">'+__q_object.label+'</div>';
            for (var __checkbox_counter = 0; __checkbox_counter < __q_object.checkbox_array.length; __checkbox_counter++){
                __checkboxs_html += '<div class="form-check">';
                    __checkboxs_html += '<input class="form-check-input" type="checkbox" value="" id="'+__q_object.checkbox_array[__checkbox_counter].id+'">';
                    __checkboxs_html += '<label class="form-check-label" for="'+__q_object.checkbox_array[__checkbox_counter].id+'">';
                        __checkboxs_html += __q_object.checkbox_array[__checkbox_counter].label;
                    __checkboxs_html += '</label>';
                __checkboxs_html += '</div>';
            }
            return __checkboxs_html;
        };


            _private.get_filters_row_container = function (type, q_object) { //search/checkbox/checkboxs
            var __filter_row_html = '';
            __filter_row_html += '<div class="row filter-row-container">';
                __filter_row_html += '<div class="col-12 filter-col-container">';
                    switch (type){
                        case 'search':
                            __filter_row_html += _private.get_search_html();
                            break;
                        case 'checkbox':
                            __filter_row_html += _private.get_checkbox_html(q_object);
                            break;
                        case 'checkboxs':
                            __filter_row_html += _private.get_checkboxs_html(q_object);
                            break;
                        default:
                            __filter_row_html += '';
                            break;
                    }
                __filter_row_html += '</div>';
            __filter_row_html += '</div>';
            return __filter_row_html;
        };



        _private.get_filters_html = function(){
          var filters_html = '';
            filters_html += '<div>';
                filters_html += '<div class="row" id="filters-header-container">';
                filters_html += _private.get_calendar_view_button_container();
            filters_html += '</div>';
            filters_html += _private.get_filters_row_container('search');
            filters_html += _private.get_filters_row_container('checkbox', {id: 'defaultCheck9', label: 'Я участвую'});
            filters_html += _private.get_filters_row_container('checkbox', {id: 'defaultCheck8', label: 'Открыта регистрация'});
            filters_html += _private.get_filters_row_container('checkboxs', {
                id: 'test1',
                label: 'Форма обучения:',
                checkbox_array:[
                    {id: 'defaultCheck1', label: 'Внешнее'},
                    {id: 'defaultCheck2', label: 'Внутреннее'}
                ]
            });
            filters_html += _private.get_filters_row_container('checkboxs', {
                id: 'test2',
                label: 'Для кого:',
                checkbox_array:[
                    {id: 'defaultCheck3', label: 'Для руководителей'},
                    {id: 'defaultCheck4', label: 'Для сотрудников'}
                ]
            });
            filters_html += _private.get_filters_row_container('checkboxs', {
                id: 'test3',
                label: 'Тип:',
                checkbox_array:[
                    {id: 'defaultCheck5', label: 'Тренинги личной эффективности'},
                    {id: 'defaultCheck6', label: 'Менеджерские программы'},
                    {id: 'defaultCheck7', label: 'Профессиональное обучение'}
                ]
            });


            return filters_html;
        };


        _private.get_calendar_header_html = function(__curent_date){
            var __calendar_header_html = '';
            __calendar_header_html += '<div class="row justify-content-center" id="month-select-container">';
                __calendar_header_html += '<div class="col text-center" id="month-select-arrow-name">';
                    __calendar_header_html += '<span id="month-select-left-button">' +
                        '<button type="button" class="btn btn-outline-secondary btn-sm" id="month-select-arrow-left-button"><</button>' +
                    '</span>';
                    __calendar_header_html += '<span id="month-select-name-container">';
                        __calendar_header_html += __curent_date;
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
            calendar_weekday_html += '<div class="row" id="calendar-weekdays-container">';
                calendar_weekday_html += '<div class="col-12" id="weekdays-container">';
                    calendar_weekday_html += '<div class="weekday-name">Понедельник</div>';
                    calendar_weekday_html += '<div class="weekday-name">Вторник</div>';
                    calendar_weekday_html += '<div class="weekday-name">Среда</div>';
                    calendar_weekday_html += '<div class="weekday-name">Четверг</div>';
                    calendar_weekday_html += '<div class="weekday-name">Пятница</div>';
                calendar_weekday_html += '</div>';
            calendar_weekday_html += '</div>';

            return calendar_weekday_html;
        };

        _private.get_calendar_cell_html = function (__date) {
            var __calendar_cell_html = '';
            __calendar_cell_html += '<div class="calendar-cell">' +
                '<div class="calendar-cell-date text-right">'+__date+'</div>' +
            '</div>';
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

        _private.daysInMonth = function  (month, year) {
            return new Date(year, month, 0).getDate();
        };

        _private.CalendarObj = function (_date){
            var self = this;
            this.month_array = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            this.this_month = _date.getMonth();
            this.this_year = _date.getYear();
            this.this_month_name_ru = this.month_array[this.month];
            this.this_days_in_month = _private.daysInMonth(this.this_month, this.this_year);

        };


        _private.get_calendar_block_html = function (__current_date) {
            var calendar_object = new _private.CalendarObj(__current_date);
            var __calendar_block_html = '';
            __calendar_block_html += calendar_object.this_days_in_month;
            __calendar_block_html +=  '<div class="row" id="calendar-cells-container">';
                __calendar_block_html +=  '<div class="col-12">';
                    __calendar_block_html +=  '<div class="container-fluid no-padding">';
                    for (var __month_row=0; __month_row<5; __month_row++){
                        __calendar_block_html += _private.get_calendar_row_cells_html([{date: 1}, {date: 2}, {date: 3}, {date: 4}, {date: 5}]);
                    }
                    __calendar_block_html += '</div>';
                __calendar_block_html += '</div>';
            __calendar_block_html += '</div>';
            return __calendar_block_html;
        };

        _private.get_calendar_html = function(__current_date){
            var calendar_html = '';
            calendar_html += '<div id="calendar-container">';
                calendar_html += _private.get_calendar_header_html(__current_date);
                calendar_html += _private.get_weekdayheaders();
                calendar_html += _private.get_calendar_block_html(__current_date);
            calendar_html += '</div>';

            return calendar_html;

        };


        _private.init_calendar = function (_mount_id, _current_date) {
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
                                _calendar_inner_html += _private.get_calendar_html(_current_date);
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
        _options.init_calendar(_options.mount_id, _options.cur_date);
    };

    /*<-public*/
}(window.rb_calendar = (window.rb_calendar || {}), window, jQuery));