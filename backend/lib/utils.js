export function uniqueCount(scrapes) {
    return scrapes.filter((item, i, arr) => {
        if(i === 0) return true;
        const previousItem = arr[i - 1];
        return !(item.count === previousItem.count);
    });
}
