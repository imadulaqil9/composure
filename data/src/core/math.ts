interface CoreMath {
    TWO_PI: number
    range(min: number, max?: number): number
    irange(min: number, max?: number): number
}

core.math = {
    TWO_PI: 2 * Math.PI,
    range(min, max = 0) {
        return min + (max - min) * Math.random()
    },
    irange(min, max = 0) {
        return Math.round(this.range(min, max))
    },
}
