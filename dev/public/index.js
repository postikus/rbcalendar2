/* global jQuery, rb_calendar */

///
/// Immediately-invoked Function Expressions (IIFE)s
/// rb_calendar Extension
/// Module Pattern with Imports and Exports
///

;(function($public, $window, undefined) {
    var cl = function(msg){
        if(_private.mode === 'test'){
            console.log(msg);
        }
    };

    /*privat ->*/
    var _private = {
        state: 'start_init',
        mode: 'prod',
        default_mount_id: '#App'
    };


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
            _calendar_inner_html += '<div id="calendar-app">\n' +
                '    <div class="container-fluid" id="calendar-app-container">\n' +
                '        <div class="row">\n' +
                '            <div class="col-9" id="calendar-mount-container">\n' +
                '                <div id="calendar-container">\n' +
                '                    <div class="row justify-content-center" id="month-select-container">\n' +
                '                        <div class="col text-center" id="month-select-arrow-name">\n' +
                '                            <span id="month-select-left-button"><button type="button" class="btn btn-outline-secondary btn-sm" id="month-select-arrow-left-button"><</button></span>\n' +
                '                            <span id="month-select-name-container">\n' +
                '                                Март 2019\n' +
                '                            </span>\n' +
                '                            <span id="month-select-right-button"><button type="button" class="btn btn-outline-secondary btn-sm" id="month-select-arrow-right-button">></button></span>\n' +
                '                            <!--<div class="position-absolute">month-select-container</div>-->\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="row" id="calendar-weekdays-container">\n' +
                '                        <div class="col-12">\n' +
                '                            <div class="container-fluid">\n' +
                '                                <div class="row">\n' +
                '                                    <div class="col-12" id="weekdays-container">\n' +
                '                                        <div class="weekday-name">Понедельник</div>\n' +
                '                                        <div class="weekday-name">Вторник</div>\n' +
                '                                        <div class="weekday-name">Среда</div>\n' +
                '                                        <div class="weekday-name">Четверг</div>\n' +
                '                                        <div class="weekday-name">Пятница</div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="row" id="calendar-cells-container">\n' +
                '                        <div class="col-12">\n' +
                '                            <div class="container-fluid">\n' +
                '                                <div class="row calendar-cells">\n' +
                '                                    <div class="col-12">\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">3</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">4</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">5</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">6</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">7</div></div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                                <div class="row calendar-cells">\n' +
                '                                    <div class="col-12">\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">10</div></div>\n' +
                '                                        <div class="calendar-cell calendar-cell-today"><div class="calendar-cell-date text-right">11</div></div>\n' +
                '                                        <div class="calendar-cell">\n' +
                '                                            <div class="calendar-cell-date text-right">12</div>\n' +
                '                                            <div class="calendar-event ce-2">\n' +
                '                                                <div class="calendar-event-container container-fluid">\n' +
                '                                                    <div class="row">\n' +
                '                                                        <div class="col-9">\n' +
                '                                                            <div class="calendar-event-type calendar-event-type-red"></div>\n' +
                '                                                            <span class="calendar-event-name">Welcome</span>\n' +
                '                                                        </div>\n' +
                '                                                        <div class="col-3">\n' +
                '                                                            <div class="calendar-event-icons text-right">\n' +
                '                                                                12 <i class="fa fa-users"></i>\n' +
                '                                                            </div>\n' +
                '                                                        </div>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">13</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">14</div></div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                                <div class="row calendar-cells">\n' +
                '                                    <div class="col-12">\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">17</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">18</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">19</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">20</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">21</div></div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                                <div class="row calendar-cells">\n' +
                '                                    <div class="col-12">\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">24</div></div>\n' +
                '                                        <div class="calendar-cell">\n' +
                '                                            <div class="calendar-cell-date text-right">25</div>\n' +
                '                                            <div class="calendar-event ce-4">\n' +
                '                                                <div class="calendar-event-container container-fluid">\n' +
                '                                                    <div class="row">\n' +
                '                                                        <div class="col-9">\n' +
                '                                                            <div class="calendar-event-type calendar-event-type-green"></div>\n' +
                '                                                            <span class="calendar-event-name">Управление временем</span>\n' +
                '                                                        </div>\n' +
                '                                                        <div class="col-3">\n' +
                '                                                            <div class="calendar-event-icons text-right">\n' +
                '                                                                5 <i class="fa fa-users"></i>\n' +
                '                                                            </div>\n' +
                '                                                        </div>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">26</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">27</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">28</div></div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                                <div class="row calendar-cells">\n' +
                '                                    <div class="col-12">\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">31</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">1</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">2</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">3</div></div>\n' +
                '                                        <div class="calendar-cell"><div class="calendar-cell-date text-right">4</div></div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div id="grid-container" class="d-none">\n' +
                '                    <div class="row grid-header-container"><div class="col"></div></div>\n' +
                '                    <div class="row grid-event-container">\n' +
                '                        <div class="col-6">\n' +
                '                            <div class="card">\n' +
                '                                <h5 class="card-header card-header-blue">Управление временем</h5>\n' +
                '                                <div class="card-body">\n' +
                '                                    <div class="row">\n' +
                '                                        <div class="col-9">\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="fas fa-calendar-day"></i> 03.03.2019 - 05.03.2019\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="far fa-clock"></i> 09:00 - 18:00\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="col-3">\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <div class="text-right">\n' +
                '                                                        14 <i class="fa fa-users"></i>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <div class="text-right">\n' +
                '                                                        3 <i class="fa fa-heart fa-red"></i>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        <div class="col-6">\n' +
                '                            <div class="card">\n' +
                '                                <h5 class="card-header card-header-red">Управление временем</h5>\n' +
                '                                <div class="card-body">\n' +
                '                                    <div class="row">\n' +
                '                                        <div class="col-9">\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="fas fa-calendar-day"></i> 03.03.2019 - 05.03.2019\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="far fa-clock"></i> 09:00 - 18:00\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="col-3">\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <div class="text-right">\n' +
                '                                                        14 <i class="fa fa-users"></i>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <div class="text-right">\n' +
                '                                                        3 <i class="fa fa-heart fa-red"></i>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="row grid-event-container">\n' +
                '                        <div class="col">\n' +
                '                            <div class="card">\n' +
                '                                <h5 class="card-header card-header-green">Welcome</h5>\n' +
                '                                <div class="card-body">\n' +
                '                                    <div class="row">\n' +
                '                                        <div class="col-9">\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="fas fa-calendar-day"></i> 22.03.2019 - 25.03.2019\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="row">\n' +
                '                                                <div class="col">\n' +
                '                                                    <i class="far fa-clock"></i> 09:00 - 18:00\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="col-3">\n' +
                '                                            <div class="text-right">\n' +
                '                                                3 <i class="fa fa-users"></i> 2 <i class="fa fa-heart fa-red"></i>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <!--<div class="position-absolute">calendar-container</div>-->\n' +
                '            </div>\n' +
                '            <div class="col-3" id="filters-container">\n' +
                '                <div>\n' +
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
                '                    <!--<div class="row filter-row-container">-->\n' +
                '                        <!--<div class="col-12 filter-col-container">-->\n' +
                '                            <!--<div class="filter-name">Checkbox:</div>-->\n' +
                '                            <!--<div class="form-check">-->\n' +
                '                                <!--<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">-->\n' +
                '                                <!--<label class="form-check-label" for="defaultCheck1">-->\n' +
                '                                    <!--Выбрать-->\n' +
                '                                <!--</label>-->\n' +
                '                            <!--</div>-->\n' +
                '                            <!--<div class="form-check">-->\n' +
                '                                <!--<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>-->\n' +
                '                                <!--<label class="form-check-label" for="defaultCheck2">-->\n' +
                '                                    <!--Выключен-->\n' +
                '                                <!--</label>-->\n' +
                '                            <!--</div>-->\n' +
                '                        <!--</div>-->\n' +
                '                    <!--</div>-->\n' +
                '                    <!--<div class="row filter-row-container">-->\n' +
                '                        <!--<div class="col-12 filter-col-container">-->\n' +
                '                            <!--<div class="filter-name">Radio:</div>-->\n' +
                '                            <!--<div class="form-check">-->\n' +
                '                                <!--<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>-->\n' +
                '                                <!--<label class="form-check-label" for="exampleRadios1">-->\n' +
                '                                    <!--Стандартно вариант-->\n' +
                '                                <!--</label>-->\n' +
                '                            <!--</div>-->\n' +
                '                            <!--<div class="form-check">-->\n' +
                '                                <!--<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">-->\n' +
                '                                <!--<label class="form-check-label" for="exampleRadios2">-->\n' +
                '                                    <!--Выбрать-->\n' +
                '                                <!--</label>-->\n' +
                '                            <!--</div>-->\n' +
                '                            <!--<div class="form-check disabled">-->\n' +
                '                                <!--<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>-->\n' +
                '                                <!--<label class="form-check-label" for="exampleRadios3">-->\n' +
                '                                    <!--Выключен-->\n' +
                '                                <!--</label>-->\n' +
                '                            <!--</div>-->\n' +
                '                        <!--</div>-->\n' +
                '                    <!--</div>-->\n' +
                '                    <!--<div class="row filter-row-container">-->\n' +
                '                        <!--<div class="col-12 filter-col-container">-->\n' +
                '                            <!--<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select:</label>-->\n' +
                '                            <!--<select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">-->\n' +
                '                                <!--<option selected>Выберите...</option>-->\n' +
                '                                <!--<option value="1">Раз</option>-->\n' +
                '                                <!--<option value="2">Два</option>-->\n' +
                '                                <!--<option value="3">Три</option>-->\n' +
                '                            <!--</select>-->\n' +
                '                        <!--</div>-->\n' +
                '                    <!--</div>-->\n' +
                '                </div>\n' +
                '                <!--<div class="position-absolute">filters-container</div>-->\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
            /* <- magic goes here*/
            _private.state = 'mounted';
            cl('Mounted');
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