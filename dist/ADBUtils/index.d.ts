import AdbOptions from '../interface/adb-options';
import QueryCondition from '../interface/query-condition';
import { QueryTypes, Op } from 'sequelize';
declare class ADBUtils {
    private options;
    private sequelize;
    private models;
    private static instance;
    constructor(options: AdbOptions);
    static getAdbInstance(options: AdbOptions): ADBUtils;
    private _initConnection;
    private _closeConnection;
    initConnection: () => Promise<void>;
    closeConnection: () => Promise<void>;
    private _getActionCount;
    private _generateQuerySql;
    private _getActionCountByToday;
    private _getActionCountByWeek;
    private _getActionCountByMonth;
    private _getActionFieldSum;
    private _getActionFieldSumByToday;
    private _getActionFieldSumByWeek;
    private _getActionFieldSumByMonth;
    private _getActionDayCounts;
    private _getContinuousSumDaysToNow;
    getActionCount: (query: QueryCondition) => Promise<any>;
    getActionCountByToday: (query: QueryCondition) => Promise<any>;
    getActionCountByWeek: (query: QueryCondition) => Promise<any>;
    getActionCountByMonth: (query: QueryCondition) => Promise<any>;
    getActionFieldSum: (query: QueryCondition) => Promise<any>;
    getActionFieldSumByToday: (query: QueryCondition) => Promise<any>;
    getActionFieldSumByWeek: (query: QueryCondition) => Promise<any>;
    getActionFieldSumByMonth: (query: QueryCondition) => Promise<any>;
    getActionDayCounts: (query: QueryCondition) => Promise<any>;
    getContinuousSumDaysToNow: (query: QueryCondition) => Promise<any>;
}
declare const getAdbClient: (options: AdbOptions) => ADBUtils;
declare const injectAdbUtilsToReq: (server: any, obj: any) => void;
export { getAdbClient, ADBUtils, injectAdbUtilsToReq, QueryTypes, Op };
