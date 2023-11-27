export const emailValidator = (email: string) => {

    const isEmailValid = () => {
        return email.trim().match('^[w.-]+@[a-zA-Zd.-]+.[a-zA-Z]{2,}$') ? true : false
    }

    return isEmailValid
}

