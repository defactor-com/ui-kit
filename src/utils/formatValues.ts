export const formatLargeNumber = (value: number): string => {
    if (value >= 1_000_000_000_000) {
        return `${(value / 1_000_000_000_000).toFixed(0)} T`;
    } else if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toFixed(0)} B`;
    } else if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(0)} M`;
    } else if (value >= 1_000) {
        return `${(value / 1_000).toFixed(0)} K`;
    }
    return value.toString();
};
