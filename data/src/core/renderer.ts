class CoreRendererContext2D {
    ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
    }

    draw(is_outline: boolean = false) {
        is_outline ? this.ctx.stroke() : this.ctx.fill()
    }

    set_fill(color: string) {
        this.ctx.fillStyle = color
    }

    set_stroke(color: string) {
        this.ctx.strokeStyle = color
    }

    set_color(color: string) {
        this.ctx.strokeStyle = this.ctx.fillStyle = color
    }

    circle(x: number, y: number, r: number, is_outline: boolean = false) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, core.math.TWO_PI)
        this.draw(is_outline)
    }

    clear(w: number = this.ctx.canvas.width, h: number = this.ctx.canvas.height) {
        this.ctx.clearRect(0, 0, w, h)
    }
}

interface CoreRenderer {
    create(ctx: CanvasRenderingContext2D): CoreRendererContext2D
}

core.renderer = {
    create(ctx) {
        return new CoreRendererContext2D(ctx)
    }
}
