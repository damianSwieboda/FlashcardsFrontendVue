export const passwordValidator = (password: string) => {



    const isPasswordValid = () => {
        return password.trim().match('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd!@#$%^&*()-_=+{};:,<.>]{8,}$') ? true : false

    }

    return isPasswordValid

}

