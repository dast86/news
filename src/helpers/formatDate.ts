export const formatDate = (data: Date) =>{

    const options: Intl.DateTimeFormatOptions = {
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric"
    }
    return data.toLocaleDateString('ru-RU', options)
}