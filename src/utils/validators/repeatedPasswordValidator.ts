export const repeatedPasswordValidator = (password: string, repeatedPassword: string) => {
    return password.trim() === repeatedPassword.trim();
};
