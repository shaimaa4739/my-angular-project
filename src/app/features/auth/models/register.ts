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

export interface ForgetPasswordObj{
    email:string
}

export interface ConfirmOtpObj{
    password?: string;
    email?:string
    otp?:string;
}
export interface ChangePasswordObj{
    password?: string;
    password_new?: string;
}