const nextElementInList = <T>(list: T[], element: T) => {
    const positionOfElement = list.indexOf(element);
    const nextElementIndex = (positionOfElement + 1) % list.length
    const nextElement = list[nextElementIndex]
    return nextElement
}

export default nextElementInList