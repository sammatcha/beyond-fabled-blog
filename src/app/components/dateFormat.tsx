// interface DateFormat{
//     month: 'string',
//     year: 'string'
// }
export default function dateFormat({date}:{date:string}) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "numeric",
        year: "numeric"
    }) 

    
}
