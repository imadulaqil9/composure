(() => {
    const canvas = document.createElement('canvas')
    const draw = core.renderer.create(canvas.getContext('2d')!)

    const step = core.runner.create(() => {
        draw.clear()
        draw.set_color('white')
        draw.circle(100, 100, 50)
    })

    const resize_canvas = (w: number, h: number) => {
        canvas.width = w
        canvas.height = h
        canvas.style.width = `${w}px`
        canvas.style.height = `${h}px`
    }

    core.events.on('resize', ev => {
        resize_canvas(ev.width, ev.height)
    })

    core.events.on('dom_content_loaded', () => {
        document.body.appendChild(canvas)
        resize_canvas(window.innerWidth, window.innerHeight)
        core.runner.start(step)
    })
})()
