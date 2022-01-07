export const courses = [
    {
        id: 1,
        course: "CSC 205",
        code: "205"
    },
    {
        id: 2,
        course: "CSC 207",
        code: "207"
    },
    {
        id: 3,
        course: "GNS 201",
        code : "201"
    },
    {
        id: 4,
        course: "CSC 204",
        code : "204"
    },
    {
        id: 5,
        course: "CSC 206",
        code : "206"
    },
    {
        id: 6,
        course: "ECN 214",
        code : "214"
    },
    {
        id: 7,
        course: "EMT 301",
        code : "301"
    }
]
export const getCourseTitle = (value, array) => {
    const result = array.filter(element => value === element.code) 
    return result[0].course
}