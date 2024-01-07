import React, { useEffect } from 'react'

const Loading = () => {
    useEffect(() => {
        /*
 * Noel Delgado | @pixelia_me
 * Logo: empathia.agency
*/

        const ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
        const reloadElementButton = document.getElementById('reload');
        const COLOURS = ['#6bd0e4', '#604eb1', '#c88e66', '#c955a9'];
        const INTERVAL = 60;
        const H = 10;
        const CY = H / 2;
        const PROGRESS_MAX = 100;
        const MAX_WIDTH = 400;
        const WIDTH_OFFSET = 40;

        let W;
        let CX;
        let gradient;
        let then = Date.now();
        let progress = 0;
        let _requestID;

        function loaded() {
            progress -= 1;

            const progress_pixels = progress * W / 100;
            const inversed_progress_pixels = W - progress_pixels;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, CY);
            ctx.globalAlpha = 0.07;
            ctx.strokeStyle = '#fff';
            ctx.lineTo(W - inversed_progress_pixels, CY);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = gradient;
            ctx.moveTo(W - inversed_progress_pixels, CY);
            ctx.lineTo(inversed_progress_pixels, CY);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.globalAlpha = 0.07;
            ctx.strokeStyle = '#fff';
            ctx.moveTo(progress_pixels, CY);
            ctx.lineTo(W, CY);
            ctx.stroke();
            ctx.closePath();

            _requestID = requestAnimationFrame(loaded);

            if (progress <= 50) {
                cancelAnimationFrame(_requestID);
                reloadElementButton.classList.add('active');
            }
        }

        function loading() {
            const progress_pixels = progress * W / 100;
            const half_progress_pixels = progress_pixels / 2;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.beginPath();
            ctx.globalAlpha = 0.5;
            ctx.strokeStyle = gradient;
            ctx.moveTo(0, CY);
            ctx.lineTo(CX - half_progress_pixels, CY);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.moveTo(CX - half_progress_pixels, CY);
            ctx.strokeStyle = gradient;
            for (var i = 0; i < progress_pixels / 2; i++) {
                const x = CX - half_progress_pixels + i * 2;
                const r = Math.floor(Math.random() * H) + 1;
                ctx.quadraticCurveTo(x, r, x, r);
            }
            ctx.quadraticCurveTo(CX + half_progress_pixels, CY, CX + half_progress_pixels, CY);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.globalAlpha = 0.5;
            ctx.moveTo(CX + half_progress_pixels, CY);
            ctx.strokeStyle = gradient;
            ctx.lineTo(W, CY);
            ctx.stroke();
            ctx.closePath();

            _requestID = requestAnimationFrame(handleLoading);
        }

        function handleLoading() {
            if (_requestID % 2) progress += 0.5;
            if (progress >= PROGRESS_MAX) return loaded();

            const now = Date.now();
            const delta = now - then;
            if (delta > INTERVAL) {
                then = now - delta % INTERVAL;
                return loading();
            }

            _requestID = requestAnimationFrame(handleLoading);
        }

        function startLoading() {
            progress = 0;
            reloadElementButton.classList.remove('active');
            _requestID = requestAnimationFrame(handleLoading);
        }

        function rescale() {
            const w = window.innerWidth;
            const ratio = window.devicePixelRatio;

            if (w > MAX_WIDTH + WIDTH_OFFSET) {
                W = MAX_WIDTH;
            } else {
                W = w - WIDTH_OFFSET;
            }

            if (ratio) {
                ctx.canvas.width = W * ratio;
                ctx.canvas.height = H * ratio;
                ctx.canvas.style.width = `${W}px`;
                ctx.canvas.style.height = `${H}px`;
                ctx.scale(ratio, ratio);
            } else {
                ctx.canvas.width = W;
                ctx.canvas.height = H;
            }

            CX = W / 2;
            gradient = ctx.createLinearGradient(0, 0, W, 0);
            gradient.addColorStop(0.2, COLOURS[0]);
            gradient.addColorStop(0.4, COLOURS[1]);
            gradient.addColorStop(0.6, COLOURS[2]);
            gradient.addColorStop(0.8, COLOURS[3]);
        }

        function setup() {
            startLoading();
            reloadElementButton.addEventListener('click', startLoading);
            window.addEventListener('resize', rescale);
            rescale();
        }

        window.onload = setup();
    }, [])

    return (
        <>
            <div class="loader">
                <div class="loader-inner">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/logo-empathia.png" width="25" height="33" alt="Empathia logo" />
                    <div class="canvas-wrapper">
                        <canvas class="loader-canvas"></canvas>
                        <div>
                            <svg viewBox="0 0 32 32" id="reload">
                                <path d="M28,16c-1.219,0-1.797,0.859-2,1.766C25.269,21.03,22.167,26,16,26c-5.523,0-10-4.478-10-10S10.477,6,16,6  c2.24,0,4.295,0.753,5.96,2H20c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v0.518  C21.733,2.932,18.977,2,16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c9.979,0,14-9.5,14-11.875C30,16.672,28.938,16,28,16z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading
