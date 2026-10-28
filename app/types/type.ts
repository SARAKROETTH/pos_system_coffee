
export interface ApiRepone<T> {
    success:boolean,
    message?: string,
    data:T | null,
    error?: string
};