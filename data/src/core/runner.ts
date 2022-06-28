type CoreRunnerFunction = (running_time: number) => any

interface CoreRunner {
    create(fn: CoreRunnerFunction): CoreRunnerFunction
    start(fn: CoreRunnerFunction): number
    stop(handle: number): void
}

core.runner = {
    create(fn) {
        const step = (t: number) => {
            fn(t)
            window.requestAnimationFrame(step)
        }
        return step
    },
    start(fn) {
        return window.requestAnimationFrame(fn)
    },
    stop(n) {
        window.cancelAnimationFrame(n)
    },
}
