export const smartTitle = (title: string) => {
    if (title.length > 32) {
        return title.slice(0, 32).concat('...')
    }
    return title
}
