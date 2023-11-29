export const passwordValidator = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_=+{};:,<.>]{8,}$/.test(password.trim());
};
