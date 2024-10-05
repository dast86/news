export const formatTimeAgo = (dateString) =>{
const now = new Date(); 
const date = new Date(dateString); 
const secondePast = (now.getTime() - date.getTime()) / 1000

if (secondePast < 60) {
    return `${Math.floor(secondePast)}c назад`
}
if (secondePast < 3600) {
    return `${Math.floor(secondePast/60)}m назад`
}
if (secondePast <= 86400) {
    return `${Math.floor(secondePast/3600)}ч назад`
}
if (secondePast > 86400) {
    const day = Math.floor(secondePast/86400)
    return day === 1 ? `${day} день назад` : `${day} дней назад`
}

}
