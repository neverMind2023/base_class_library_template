interface AdbOptions {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
    logging?: boolean;
    pool?: AdbPoolOptions;
}
interface AdbPoolOptions {
    max: number;
    min: number;
    idle: number;
}
export default AdbOptions;
