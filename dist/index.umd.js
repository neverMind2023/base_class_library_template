(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('sequelize')) :
    typeof define === 'function' && define.amd ? define(['exports', 'sequelize'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.base_template = {}, global.sequelize));
})(this, (function (exports, sequelize) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */


    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function isEmptyFields(value) {
        return Array.isArray(value) && value.length === 0 || !value;
    }
    function getTodayYmd() {
        var today = new Date();
        var year = today.getFullYear();
        var month = (today.getMonth() + 1).toString().padStart(2, '0');
        var day = today.getDate().toString().padStart(2, '0');
        var formattedDate = "".concat(year).concat(month).concat(day);
        return formattedDate;
    }

    var ADBUtils = /** @class */ (function () {
        function ADBUtils(options) {
            var _this = this;
            this._initConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    try {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.sequelize.authenticate().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.info('Connection has been established successfully.');
                                        // console.info('Start to init Adb models...');
                                        // await this._initModel();
                                        resolve();
                                        return [2 /*return*/];
                                    });
                                }); }).catch(function (err) {
                                    console.error('Unable to connect to the database:', err);
                                    reject(err);
                                });
                            })];
                    }
                    catch (error) {
                        console.error('Unable to connect to the database:', error);
                    }
                    return [2 /*return*/];
                });
            }); };
            this._closeConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.sequelize.close()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            this.initConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._initConnection()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            this.closeConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._closeConnection()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            this._getActionCount = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionCount err, must provide action');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT COUNT(messageKey) AS sum FROM action_".concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Exec _getActionCount error:', error_1);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._generateQuerySql = function (whereAndFieldsCond, orignSql) {
                var sql = "";
                var fields = whereAndFieldsCond.fields, where = whereAndFieldsCond.where, action = whereAndFieldsCond.action;
                if (!isEmptyFields(fields)) {
                    var fieldsListStr = fields === null || fields === void 0 ? void 0 : fields.join(',');
                    sql = "SELECT ".concat(fieldsListStr, " FROM action_").concat(action, " ");
                }
                else {
                    sql = orignSql || '';
                }
                if (where) {
                    if (typeof where !== 'object') {
                        throw new Error('Where condition must be a object');
                    }
                    var isFirstProperty_1 = true;
                    Object.keys(where).forEach(function (key) {
                        var valueType = typeof where[key];
                        var value;
                        if (valueType === 'number') {
                            value = where[key];
                        }
                        else if (valueType === 'string') {
                            value = "'".concat(where[key], "'");
                        }
                        if (isFirstProperty_1) {
                            sql += "WHERE ".concat(key, " = ").concat(value, " ");
                            isFirstProperty_1 = false;
                        }
                        else {
                            sql += "AND ".concat(key, " = ").concat(value, " ");
                        }
                    });
                }
                return sql;
            };
            this._getActionCountByToday = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionCountByToday err, must provide action');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT COUNT(messageKey) AS sum FROM action_".concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND DATE_FORMAT(submited_at,'%Y%m%d') = DATE_FORMAT(NOW(),'%Y%m%d') ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_2 = _a.sent();
                            console.error('Exec _getActionCountByToday error:', error_2);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionCountByWeek = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionCountByWeek err, must provide action');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT COUNT(messageKey) AS sum FROM action_".concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND YEARWEEK(DATE_FORMAT(submited_at,'%Y-%m-%d'))=YEARWEEK(NOW()) ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_3 = _a.sent();
                            console.error('Exec _getActionCountByWeek error:', error_3);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionCountByMonth = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionCountByMonth err, must provide action');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT COUNT(messageKey) AS sum FROM action_".concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND DATE_FORMAT(submited_at,'%Y%m') = DATE_FORMAT(CURDATE(),'%Y%m') ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_4 = _a.sent();
                            console.error('Exec _getActionCountByMonth error:', error_4);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionFieldSum = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionFieldSum err, must provide action');
                            if (!query.field)
                                throw new Error('_getActionFieldSum err, must provide field');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT SUM(".concat(query.field, ") AS sum FROM action_").concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_5 = _a.sent();
                            console.error('Exec _getActionFieldSum error:', error_5);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionFieldSumByToday = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionFieldSumByToday err, must provide action');
                            if (!query.field)
                                throw new Error('_getActionFieldSumByToday err, must provide field');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT SUM(".concat(query.field, ") AS sum FROM action_").concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND DATE_FORMAT(submited_at,'%Y%m%d') = DATE_FORMAT(NOW(),'%Y%m%d') ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_6 = _a.sent();
                            console.error('Exec _getActionFieldSumByToday error:', error_6);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionFieldSumByWeek = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionFieldSumByWeek err, must provide action');
                            if (!query.field)
                                throw new Error('_getActionFieldSumByWeek err, must provide field');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT SUM(".concat(query.field, ") AS sum FROM action_").concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND YEARWEEK(DATE_FORMAT(submited_at,'%Y-%m-%d'))=YEARWEEK(NOW()) ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_7 = _a.sent();
                            console.error('Exec _getActionFieldSumByWeek error:', error_7);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionFieldSumByMonth = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionFieldSumByMonth err, must provide action');
                            if (!query.field)
                                throw new Error('_getActionFieldSumByMonth err, must provide field');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT SUM(".concat(query.field, ") AS sum FROM action_").concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " AND DATE_FORMAT(submited_at,'%Y%m') = DATE_FORMAT(CURDATE(),'%Y%m') ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_8 = _a.sent();
                            console.error('Exec _getActionFieldSumByMonth error:', error_8);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getActionDayCounts = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getActionDayCounts err, must provide action');
                            if (!query.field)
                                throw new Error('_getActionDayCounts err, must provide field');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            sql = "SELECT COUNT(times) AS sum FROM\n                        (\n                        SELECT DISTINCT(DATE_FORMAT(".concat(query.field, ",'%Y%m%d')) AS times FROM action_").concat(query.action, " \n                        ");
                            sql = this._generateQuerySql(query, sql);
                            sql += " )  ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data[0].sum];
                        case 3:
                            error_9 = _a.sent();
                            console.error('Exec _getActionDayCounts error:', error_9);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this._getContinuousSumDaysToNow = function (query) { return __awaiter(_this, void 0, void 0, function () {
                var sql, data, _a, sum, end_date, begin_date, date, ymd, error_10;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!query || !query.action)
                                throw new Error('_getContinuousSumDaysToNow err, must provide action');
                            if (!query.field)
                                throw new Error('_getContinuousSumDaysToNow err, must provide field');
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            sql = "SELECT continuous_days AS sum , end_date, begin_date FROM ( \n                SELECT userID, MIN(submited_at) begin_date, MAX(submited_at) end_date, COUNT(*) continuous_days FROM ( \n                SELECT userID, submited_at, DATE_SUB(submited_at,INTERVAL(ROW_NUMBER() OVER (ORDER BY submited_at)) DAY) data_group FROM \n                (SELECT DISTINCT userId, DATE_FORMAT(submited_at,'%Y-%m-%d') AS submited_at FROM action_".concat(query.action, " ");
                            sql = this._generateQuerySql(query, sql);
                            sql += "  ) a ) b GROUP BY userID,data_group) c ORDER BY end_date DESC LIMIT 0,1 ";
                            return [4 /*yield*/, this.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })];
                        case 2:
                            data = _b.sent();
                            if (data.length == 0) {
                                return [2 /*return*/, 0];
                            }
                            else {
                                _a = data[0], sum = _a.sum, end_date = _a.end_date, begin_date = _a.begin_date;
                                date = end_date.replace(/-/g, '');
                                begin_date = begin_date.replace(/-/g, '');
                                ymd = getTodayYmd();
                                if (date == ymd) {
                                    return [2 /*return*/, sum];
                                }
                                else {
                                    if (parseInt(ymd) - parseInt(date) == 1) {
                                        if (parseInt(begin_date) == parseInt(date)) {
                                            return [2 /*return*/, 1];
                                        }
                                        else {
                                            return [2 /*return*/, parseInt(ymd) - parseInt(begin_date)];
                                        }
                                    }
                                    return [2 /*return*/, 0];
                                }
                            }
                        case 3:
                            error_10 = _b.sent();
                            console.error('Exec _getContinuousSumDaysToNow error:', error_10);
                            return [2 /*return*/, 0];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this.getActionCount = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionCount(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionCountByToday = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionCountByToday(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionCountByWeek = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionCountByWeek(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionCountByMonth = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionCountByMonth(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionFieldSum = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionFieldSum(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionFieldSumByToday = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionFieldSumByToday(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionFieldSumByWeek = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionFieldSumByWeek(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionFieldSumByMonth = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionFieldSumByMonth(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getActionDayCounts = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getActionDayCounts(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            this.getContinuousSumDaysToNow = function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._getContinuousSumDaysToNow(query)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            console.info('Adb utils begin to init...');
            console.info('Adb DB Options: ', options);
            if (!options)
                throw new Error('Must provide adb options');
            this.options = options;
            this.models = {};
            this.sequelize = new sequelize.Sequelize(options.database, options.username, options.password, {
                dialect: 'mysql',
                host: options.host,
                logging: options.logging == undefined ? true : options.logging,
                // pool: {
                //     max: 5,
                //     min: 0,
                //     idle: 10000
                // },
            });
            ADBUtils.instance = this;
        }
        ADBUtils.getAdbInstance = function (options) {
            if (!ADBUtils.instance) {
                ADBUtils.instance = new ADBUtils(options);
                // (ADBUtils.instance as any).initConnection();
            }
            return ADBUtils.instance;
        };
        ADBUtils.instance = null;
        return ADBUtils;
    }());
    var getAdbClient = (function () {
        var instance = null;
        return function (options) {
            if (!instance) {
                instance = new ADBUtils(options);
            }
            return instance;
        };
    })();
    var injectAdbUtilsToReq = function (server, obj) {
        if (!server)
            throw new Error('injectAdbUtilsToReq err, must provide express/koa server instance');
        if (!obj)
            throw new Error('injectAdbUtilsToReq err, must provide inject object');
        try {
            server.use(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (typeof obj.then === 'function') {
                        obj.then(function (db) {
                            req.adb = db;
                        });
                    }
                    else {
                        req.adb = obj;
                    }
                    next();
                    return [2 /*return*/];
                });
            }); });
        }
        catch (error) {
            console.error('injectAdbUtilsToReq error:', error);
        }
    };

    Object.defineProperty(exports, 'Op', {
        enumerable: true,
        get: function () { return sequelize.Op; }
    });
    Object.defineProperty(exports, 'QueryTypes', {
        enumerable: true,
        get: function () { return sequelize.QueryTypes; }
    });
    exports.ADBUtils = ADBUtils;
    exports.getAdbClient = getAdbClient;
    exports.injectAdbUtilsToReq = injectAdbUtilsToReq;

}));
