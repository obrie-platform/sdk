interface UseForm {
    errors: string[],
    register: (elm: any) => any
    handleSubmit: (callback: (data: any) => any) => any
}

export const useForm = (): UseForm => {
    const data = {}

    return {
        errors: [],
        register(elm) {},
        handleSubmit(callback) {
            callback(data);
        }
    }
}