export const formatDate = (data) =>{

    const options = {
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric"
    }
    return data.toLocaleDateString('ru-RU', options)
}