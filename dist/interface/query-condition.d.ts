interface QueryCondition {
    action: string;
    fields?: string[];
    field?: string;
    where?: QueryWhere;
}
interface QueryWhere {
    [key: string]: any;
}
export default QueryCondition;
