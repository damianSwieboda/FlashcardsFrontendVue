export const emailValidator = (email: string) => {
    return /^\w+[\w.-]*@\w+([.-]?\w+)*\.\w{2,}$/.test(email.trim());
}
