function wrapInArray<T>(item: T): T[]{
    return [item]
}
wrapInArray(42)
wrapInArray("kk ok")
wrapInArray({})



function pair<A ,B>(a: A, b: B): [A, B] {
    return [a, b]
}
pair("hello", 20)
pair("hello", "my fren")
pair("hello", {fav: "gin"})



interface box<T> {
    content: T
}
export const numberBox: box<number> = {content: 10}
export const numberBox1: box<string> = {content: "hello"}



interface Apipro<T> {
    status: number;
    data: T
}
export const res: Apipro<{flavor: string}> = {
    status: 20,
    data: {flavor: "eerr"}
}