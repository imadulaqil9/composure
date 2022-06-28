interface Core {
    events: CoreEvents
    math: CoreMath
    input: CoreInput
    runner: CoreRunner
    renderer: CoreRenderer
}

const core: Core = {} as any
