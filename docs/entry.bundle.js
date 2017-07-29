webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var insert = __webpack_require__(2);
var normalize = __webpack_require__(3);

insert(normalize);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var inserted = [];

module.exports = function (css) {
    if (inserted.indexOf(css) >= 0) return;
    inserted.push(css);
    
    var elem = document.createElement('style');
    var text = document.createTextNode(css);
    elem.appendChild(text);
    
    if (document.head.childNodes.length) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
    }
    else {
        document.head.appendChild(elem);
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var currentTime = document.getElementById("currentTime"),
    currentMonth = document.getElementById("currentMonth"),
    dayUl = document.getElementById("dayUl"),
    presentMonth = document.getElementById("presentMonth"),
    pagePre = document.getElementById("pagePre"),
    pageNext = document.getElementById("pageNext"),
    presentDay = document.getElementById("presentDay"),
    dayEventcontent = document.getElementById("dayEventcontent"),
    dayEventAdd = document.getElementById("dayEventAdd");

function Calendar() {
    this.currentYears = new Date().getFullYear();
    this.currentMonths = new Date().getMonth() + 1;
    this.currentDates = new Date().getDate();
    this.currentYMD = this.currentYears + "" + (parseInt(this.currentMonths - 1) < 10 ? "0" + parseInt(this.currentMonths) : parseInt(this.currentMonths - 1)) + "" + (parseInt(this.currentDates) < 10 ? "0" + parseInt(this.currentDates) : parseInt(this.currentDates));

    this.presentYears = new Date().getFullYear();
    this.presentMonths = new Date().getMonth() + 1;

    this.selectDate = "";
    this.currentDayTasks = {};
    this.days = [];
    this.dayHaveTask = new Set();
    this.todoLists = {};
    this.init();
    this.todolistRender();
    document.getElementById("curToday").click();
}

Calendar.prototype.init = function () {
    var _this = this;

    _this.timeToggle();
    setInterval(function () {
        _this.timeToggle();
    }, 1000);

    _this.dayToggle();

    for (var key in localStorage) {
        _this.dayHaveTask.add(key);
    }

    _this.monthRender();

    _this.insertLocalStorage();

    dayUl.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
            var _dayLi = dayUl.childNodes;
            for (var i = _dayLi.length - 1; i >= 0; i--) {
                if (_dayLi[i].className.indexOf("select-day") != -1) {
                    _dayLi[i].classList.remove("select-day");
                    break;
                }
            }

            e.target.classList.add("select-day");
            _this.selectDate = document.getElementsByClassName("select-day")[0];
            var _date2 = e.target.dataset.date;

            var _day = new Date(_date2.slice(0, 4), _date2.slice(4, 6) - 1, _date2.slice(6, 8)).getDay();
            var _week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

            presentDay.innerHTML = _week[_day] + "  " + _date2.toString().slice(6);

            if (localStorage[_date2]) {
                _this.currentDayTasks = JSON.parse("{" + localStorage[_date2] + "}");
                if (_this.dayHaveTask.has(_date2)) {
                    _this.todolistRender(_date2);
                } else {
                    dayEventcontent.innerHTML = "&nbsp;&nbsp;&nbsp;无事件";
                }
            } else {
                dayEventcontent.innerHTML = "&nbsp;&nbsp;&nbsp;无事件";
            }
        }
    });
    document.getElementById("curToday").click();

    pagePre.addEventListener("click", function () {
        _this.currentMonths == 1 ? (_this.currentMonths = 12, _this.currentYears--) : _this.currentMonths--;
        _this.monthRender();
    });

    pageNext.addEventListener("click", function () {
        _this.currentMonths == 12 ? (_this.currentMonths = 1, _this.currentYears++) : _this.currentMonths++;
        _this.monthRender();
    });

    currentMonth.addEventListener("click", function () {
        _this.currentMonths = _this.presentMonths;
        _this.currentYears = _this.presentYears;
        _this.monthRender();

        document.getElementById("curToday").click();
    });

    dayEventcontent.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI" && e.target.id) {
            var _selectDate = _this.selectDate.dataset.date;

            e.target.classList.toggle("todo-finish");
            var _jsonLocal = JSON.parse("{" + localStorage[_selectDate] + "}");
            var _da = _jsonLocal[_selectDate][e.target.id.slice(4)].finish = !_jsonLocal[_selectDate][e.target.id.slice(4)].finish;
            localStorage[_selectDate] = JSON.stringify(_jsonLocal).slice(1, JSON.stringify(_jsonLocal).length - 1);
        } else if (e.target && e.target.nodeName == "SPAN") {
            if (e.target.className == "add-task-ok") {
                var _id = e.target.dataset.id;
                var _selectDate2 = document.getElementsByClassName("select-day")[0].dataset.date || _id;

                var inputV = document.getElementById("task" + _id).value.trim();
                if (inputV == "") {
                    document.getElementById("task" + _id).placeholder = "先输入，mdzz";
                } else {
                    var _todo = "\"" + _id + "\":{\"text\":\"" + inputV + "\",\"finish\":false}";

                    if (localStorage[_selectDate2]) {
                        localStorage[_selectDate2] = localStorage[_selectDate2].slice(0, 12) + _todo + "," + localStorage[_selectDate2].slice(12);
                    } else {
                        localStorage[_selectDate2] = "\"" + _selectDate2 + "\":{" + _todo + "}";
                    }
                    if (_this.dayHaveTask.has(_id.toString())) {
                        _this.todolistRender(_date);
                    }
                }

                var _par = e.target.parentNode;
                _par.id = "task" + _id;
                _par.innerHTML = inputV;
                var _spandel = document.createElement("span");
                _spandel.innerHTML = "x";
                _spandel.dataset.id = _id;
                _spandel.dataset.type = "del";
                _spandel.className = "add-task-del";
                _par.appendChild(_spandel);
                _this.dayHaveTask.add(_selectDate2);

                _this.selectDate.classList.add("today-has-task");
            }
            if (e.target.className == "add-task-del") {
                var _id2 = e.target.dataset.id;
                var _selectDate3 = document.getElementsByClassName("select-day")[0].dataset.date || _id2;

                document.getElementById("task" + _id2).remove();

                var _jsonLocal2 = JSON.parse("{" + localStorage[_selectDate3] + "}");

                var f = 0;
                for (var k in _jsonLocal2[_selectDate3]) {
                    f++;
                }

                delete _jsonLocal2[_selectDate3][_id2];

                var t = 0;
                for (var _k2 in _jsonLocal2[_selectDate3]) {
                    t++;
                }

                if (t == 0) {
                    _this.dayHaveTask.delete(_selectDate3);
                    localStorage.removeItem(_selectDate3);
                    document.getElementsByClassName("select-day")[0].classList.remove("today-has-task");
                    dayEventcontent.innerHTML = "&nbsp;&nbsp;&nbsp;无事件";
                } else {
                    localStorage[_selectDate3] = JSON.stringify(_jsonLocal2).slice(1, JSON.stringify(_jsonLocal2).length - 1);
                }
            }
        }
    });

    dayEventAdd.addEventListener("click", function () {
        var _selectDate = document.getElementsByClassName("select-day")[0].dataset.date;
        if (!_this.dayHaveTask.has(_selectDate.toString())) {
            dayEventcontent.innerHTML = "";
        }
        var _li = document.createElement("li"),
            _input = document.createElement("input"),
            _spanok = document.createElement("span"),
            _spandel = document.createElement("span");
        var _date = new Date(),
            _year = _date.getFullYear(),
            _month = _date.getMonth(),
            _dates = _date.getDate(),
            _hour = _date.getHours(),
            _minute = _date.getMinutes(),
            _seconds = _date.getMilliseconds(),
            taskId = _this.currentYMD + "" + (_hour < 10 ? "0" + _hour : _hour) + "" + (_minute < 10 ? "0" + _minute : _minute) + "" + (_seconds < 10 ? "0" + _seconds : _seconds);
        _input.type = "text";
        _input.placeholder = "请在此输入";
        _input.className = "task-text-input";
        _input.id = "task" + taskId;
        _li.appendChild(_input);
        _spanok.innerHTML = "✓";
        _spanok.dataset.id = taskId;
        _spanok.dataset.type = "ok";
        _spanok.className = "add-task-ok";
        _li.appendChild(_spanok);
        _spandel.innerHTML = "x";
        _spandel.dataset.id = taskId;
        _spandel.dataset.type = "del";
        _spandel.className = "add-task-del";
        _li.appendChild(_spandel);

        dayEventcontent.insertBefore(_li, dayEventcontent.firstChild);
        document.getElementById("task" + taskId).focus();
    });
};

Calendar.prototype.todolistRender = function (selectdate) {
    var _date = selectdate || this.currentYMD;
    var childs = dayEventcontent.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
        dayEventcontent.removeChild(childs.item(i));
    }

    var cdt = this.currentDayTasks;

    for (var key in cdt[_date]) {
        var _li = document.createElement("li");
        var _span1 = document.createElement("span");
        _li.id = "task" + key;
        _li.innerHTML = cdt[_date][key].text;
        if (cdt[_date][key].finish) {
            _li.className = "todo-finish";
        }
        _span1.innerHTML = "x";
        _span1.dataset.id = key;
        _span1.dataset.type = "del";
        _span1.className = "add-task-del";
        _li.appendChild(_span1);

        dayEventcontent.appendChild(_li);
    }
};

Calendar.prototype.monthRender = function () {
    dayUl.innerHTML = "";
    this.days = [];
    presentMonth.innerHTML = this.currentYears + " 年 " + this.currentMonths + " 月";
    this.monthFirstDay = this.getfirstDayWeek(this.currentYears, this.currentMonths - 1);
    this.monthDays = this.getMonthDays(this.currentYears, this.currentMonths);
    var cFrag = document.createDocumentFragment();
    this.monthFirstDay == 0 ? this.monthFirstDay = 7 : "";
    if (this.monthFirstDay > 1) {
        var lastMonthDays = this.getMonthDays(this.currentYears, this.currentMonths - 1);

        for (var i = this.monthFirstDay - 1; i > 0; i--) {
            this.days.unshift(lastMonthDays - i + 1);
            var li = document.createElement("li");
            li.innerHTML = lastMonthDays - i + 1;
            li.dataset.date = this.currentYears + "" + (parseInt(this.currentMonths - 1) < 10 ? "0" + parseInt(this.currentMonths - 1) : parseInt(this.currentMonths - 1)) + "" + (lastMonthDays - i + 1);

            if (this.dayHaveTask.has(li.dataset.date)) {
                li.classList.add("today-has-task");
            }
            cFrag.appendChild(li);
        }
    }
    for (var _i = 1; _i <= this.monthDays; _i++) {
        this.days.push(_i);
        var _li2 = document.createElement("li");
        _li2.innerHTML = _i;
        _li2.dataset.date = this.currentYears + "" + (parseInt(this.currentMonths) < 10 ? "0" + parseInt(this.currentMonths) : parseInt(this.currentMonths)) + "" + (_i < 10 ? "0" + _i : _i);
        _li2.className = "cur-m";
        if (_i == this.currentDates && this.currentMonths == this.presentMonths && this.currentYears == this.presentYears) {
            _li2.classList.add("cur-today");
            _li2.classList.add("select-day");
            _li2.id = "curToday";
        }

        if (this.dayHaveTask.has(_li2.dataset.date)) {
            _li2.classList.add("today-has-task");
        }
        cFrag.appendChild(_li2);
    }
    if (this.monthFirstDay + this.monthDays < 42) {
        var m = 42 - this.monthFirstDay - this.monthDays;
        for (var _i2 = 1; _i2 < m + 2; _i2++) {
            this.days.push(_i2);
            var _li3 = document.createElement("li");
            _li3.innerHTML = _i2;
            _li3.dataset.date = this.currentYears + "" + (parseInt(this.currentMonths + 1) < 10 ? "0" + parseInt(this.currentMonths + 1) : parseInt(this.currentMonths + 1)) + "" + (_i2 < 10 ? "0" + _i2 : _i2);

            if (this.dayHaveTask.has(_li3.dataset.date)) {
                _li3.classList.add("today-has-task");
            }
            cFrag.appendChild(_li3);
        }
    }
    dayUl.appendChild(cFrag);
};

Calendar.prototype.insertLocalStorage = function () {
    if (window.localStorage) {
        for (var k in this.todoLists) {
            if (localStorage[k]) {
                if (k == this.currentYMD) {
                    this.currentDayTasks = JSON.parse("{" + localStorage[k] + "}");

                    break;
                }
            } else {
                localStorage[k] = "\"" + k + "\":{";
                for (var _k in this.todoLists[k]) {
                    localStorage[k] += "\"" + _k + "\":{\"text\":\"" + this.todoLists[k][_k].text + "\",\"finish\":" + this.todoLists[k][_k].finish + "},";
                }
                localStorage[k] += "}";
                localStorage[k] = localStorage[k].replace('},}', '}}');
            }
        }
    }
};

Calendar.prototype.dayToggle = function () {
    var cu = new Date();
    currentMonth.innerHTML = cu.getFullYear() + "年" + parseInt(cu.getMonth() + 1) + "月" + cu.getDate() + "日";
};

Calendar.prototype.timeToggle = function () {
    var cuTime = new Date(),
        cuHours = cuTime.getHours() > 9 ? cuTime.getHours() : "0" + cuTime.getHours(),
        cuMinutes = cuTime.getMinutes() > 9 ? cuTime.getMinutes() : "0" + cuTime.getMinutes(),
        cuSeconds = cuTime.getSeconds() > 9 ? cuTime.getSeconds() : "0" + cuTime.getSeconds();
    currentTime.innerHTML = cuHours + ":" + cuMinutes + ":" + cuSeconds;
    if (cuHours == 0 && cuMinutes == 0 && cuSeconds == 1) {
        this.dayToggle();
    }
};

Calendar.prototype.getMonthDays = function (year, month) {
    var m = new Date(year, month);
    m.setDate(0);
    return m.getDate();
};

Calendar.prototype.getfirstDayWeek = function (year, month) {
    var m = new Date(year, month, 1);
    return m.getDay();
};

window.onload = function () {
    var ca = new Calendar();
};

/***/ })
],[0]);