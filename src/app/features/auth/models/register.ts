export interface RegisterObj {
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    role?: string;
}

export interface LoginObj {
    password?: string;
    email?: string;
}
