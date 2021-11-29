export const secondlevel = [
    {
        id: 1,
        course: "CSC205",
        request_id: 205
    },
    {
        id: 2,
        course: "CSC207",
        request_id: 207
    },
    {
        id: 3,
        course: "GNS201",
        request_id : 201
    },
    {
        id: 4,
        course: "CSC204",
        request_id : 204
    },
    {
        id: 5,
        course: "CSC206",
        request_id : 206
    },
    {
        id: 6,
        course: "ECN214",
        request_id : 214
    }
]
export const getRequest = (value, array) => {
    const result = array.filter(element => value ===element.course) 
    return result[0].request_id
}