export function uniqueCount(scrapes) {
    return scrapes.reduce((accumulator, scrape) => {
        // Check if this scrape is already in accumulator
        if (!accumulator.find(element => element.count === scrape.count)) {
            return [...accumulator, scrape];
        }
        return accumulator;
    }, []);
}