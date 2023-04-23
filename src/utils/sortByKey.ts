export const sortByKey = <T>(
    array: T[],
    key: keyof T,
    type: 'desc' | 'asc' = 'asc'
): T[] => {
    const copy = [...array]
    return copy.sort((a, b) => {
        if (a[key] < b[key]) {
            return type === 'desc' ? 1 : -1
        }
        if (a[key] > b[key]) {
            return type === 'desc' ? -1 : 1
        }
        return 0
    })
}
