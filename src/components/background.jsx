import React, { useEffect, useMemo } from 'react'
import './background.css'
import star1 from '../assets/star1.svg'
import star2 from '../assets/star2.svg'


function Background(){
    // create a stable set of stars positioned around the left and right thirds (seeded Poisson-disk for even spacing)
    const stars = useMemo(() => {
        const arr = []
        const count = 12
        const leftRange = { min: 5, max: 27 }
        const rightRange = { min: 73, max: 95 }
        const minTop = 6
        const maxTop = 92

        // seeded LCG PRNG
        const makeSeededRng = (seed) => {
            let state = seed >>> 0
            return () => {
                state = (state * 1664525 + 1013904223) >>> 0
                return state / 4294967296
            }
        }

        // Poisson-disk sampling on [0,1]x[0,1] using seeded RNG
        const poissonDiskSamples = (seed, minDist = 0.08, maxAttempts = 30, limit = 200) => {
            const rnd = makeSeededRng(seed)
            const cellSize = minDist / Math.SQRT2
            const gridW = Math.ceil(1 / cellSize)
            const gridH = gridW
            const grid = new Array(gridW * gridH).fill(null)
            const samples = []
            const process = []

            // first sample
            const first = [rnd(), rnd()]
            samples.push(first)
            process.push(first)
            grid[Math.floor(first[0] / cellSize) + Math.floor(first[1] / cellSize) * gridW] = first

            while (process.length && samples.length < limit) {
                const idx = Math.floor(rnd() * process.length)
                const point = process[idx]
                let accepted = false
                for (let i = 0; i < maxAttempts; i++){
                    const r = minDist * (1 + rnd())
                    const a = 2 * Math.PI * rnd()
                    const nx = point[0] + Math.cos(a) * r
                    const ny = point[1] + Math.sin(a) * r
                    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) continue

                    const gx = Math.floor(nx / cellSize)
                    const gy = Math.floor(ny / cellSize)
                    let ok = true
                    for (let yy = Math.max(0, gy - 2); yy <= Math.min(gridH - 1, gy + 2); yy++){
                        for (let xx = Math.max(0, gx - 2); xx <= Math.min(gridW - 1, gx + 2); xx++){
                            const neighbor = grid[xx + yy * gridW]
                            if (!neighbor) continue
                            const dx = neighbor[0] - nx
                            const dy = neighbor[1] - ny
                            if (dx * dx + dy * dy < minDist * minDist) { ok = false; break }
                        }
                        if (!ok) break
                    }
                    if (ok){
                        const p = [nx, ny]
                        samples.push(p)
                        process.push(p)
                        grid[gx + gy * gridW] = p
                        accepted = true
                        break
                    }
                }
                if (!accepted) process.splice(idx, 1)
            }
            return samples
        }

        const SEED = 28262628 // change seed to get a different deterministic layout
        const minDist = 0.20 // increase for more spacing, decrease to pack more stars
        const normalized = poissonDiskSamples(SEED, minDist, 30, 128)

        // fallback: if sampler returned too few points, fall back to a simple spread
        const use = normalized.length >= count ? normalized : Array.from({ length: count }, (_, i) => [ (i%2)*0.5 + 0.25, (i+1)/(count+1) ])

        // map normalized samples into left/right thirds, alternating sides for visual balance
        for (let i = 0; i < count; i++){
            const p = use[i % use.length]
            const isLeft = (i % 2) === 0
            const xNorm = p[0]
            const yNorm = p[1]
            const left = isLeft
                ? (leftRange.min + xNorm * (leftRange.max - leftRange.min))
                : (rightRange.min + xNorm * (rightRange.max - rightRange.min))
            const top = Math.max(0, Math.min(100, minTop + yNorm * (maxTop - minTop)))

            // deterministic size/image/timings based on index and seed
            const rng = makeSeededRng(SEED + i)
            const size = 18 + Math.round(rng() * 46)
            const img = rng() < 0.5 ? star1 : star2
            const duration = (1.6 + rng() * 3.2).toFixed(2)
            const delay = (rng() * 4).toFixed(2)

            arr.push({ id: i, left, top, size, img, duration, delay })
        }

        return arr
    }, [])


    useEffect(() => {
        const items = document.querySelectorAll('.parallax-item')
        let ticking = false


        function onScroll(){
            const scrollY = window.scrollY || window.pageYOffset
            if (!ticking){
                window.requestAnimationFrame(() => {
                    items.forEach(el => {
                        const speed = parseFloat(el.dataset.speed) || 0
                        el.style.transform = `translateY(${scrollY * speed}px)`
                    })
                    ticking = false
                })
                ticking = true
            }
        }


        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return(
        <div className="bg-container" aria-hidden="true">
            {/* soft pastel gradient layer */}
            <div className="gradient parallax-item" data-speed="-0.12" />


            {/* stars layer - generated randomly and twinkle */}
            <div className="stars parallax-item" data-speed="0.22">
                {stars.map(s => (
                    <img
                        key={s.id}
                        src={s.img}
                        alt=""
                        className="star"
                        draggable="false"
                        style={{
                            left: `${s.left}%`,
                            top: `${s.top}%`,
                            width: `${s.size}px`,
                            // custom properties control per-star twinkle animation
                            '--twinkle-duration': `${s.duration}s`,
                            '--twinkle-delay': `${s.delay}s`
                        }}
                    />
                ))}
            </div>


            {/* decorative clouds (CSS-rendered for crisp pastel look) */}
            <div className="cloud cloud--1 parallax-item" data-speed="-0.06" />
            <div className="cloud cloud--2 parallax-item" data-speed="0.08" />
        </div>
    )
}


export default Background