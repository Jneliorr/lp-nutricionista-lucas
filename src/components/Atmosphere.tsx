import { useEffect, useRef, useState } from 'react'
import { fragmentSource, vertexSource } from '../shaders/atmosphere'
export default function Atmosphere({ theme }: { theme: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [generation, setGeneration] = useState(0)
  useEffect(() => {
    const canvas = ref.current!; const gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' })
    if (!gl) { canvas.dataset.renderer='fallback'; return }
    const shaders: WebGLShader[] = []; let program: WebGLProgram | null = null; let buffer: WebGLBuffer | null = null
    let frame = 0; let visible = true; let lost = false; let last = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    function compile(type: number, source: string) {
      const shader = gl!.createShader(type); if (!shader) throw new Error('Shader indisponível')
      shaders.push(shader); gl!.shaderSource(shader, source); gl!.compileShader(shader)
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) throw new Error(gl!.getShaderInfoLog(shader) || 'Falha no shader')
      return shader
    }
    try {
      program = gl.createProgram(); if (!program) throw new Error('Programa indisponível')
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource)); gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource)); gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'Falha no programa')
      gl.useProgram(program); buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
      const position = gl.getAttribLocation(program, 'a_position'); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0)
      const resolution = gl.getUniformLocation(program,'u_resolution'), time = gl.getUniformLocation(program,'u_time'), color = gl.getUniformLocation(program,'u_color')
      gl.uniform3fv(color, [7/255, 89/255, 101/255])
      canvas.dataset.renderer='webgl'
      function render(now: number) {
        if (lost || document.hidden || !visible) return
        if (now-last>32 || reduced.matches) {
          const dpr = Math.min(window.devicePixelRatio || 1, 1.5); const width = Math.round(canvas.clientWidth*dpr), height = Math.round(canvas.clientHeight*dpr)
          if (canvas.width!==width || canvas.height!==height) { canvas.width=width;canvas.height=height;gl!.viewport(0,0,width,height) }
          gl!.uniform2f(resolution,width,height);gl!.uniform1f(time,reduced.matches?0:now/1000);gl!.drawArrays(gl!.TRIANGLES,0,6);last=now
        }
        if(!reduced.matches) frame=requestAnimationFrame(render)
      }
      const resume = () => { cancelAnimationFrame(frame); render(performance.now()) }
      const resize = new ResizeObserver(resume);resize.observe(canvas)
      const intersection = new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;resume()});intersection.observe(canvas)
      const lose = (event: Event) => {event.preventDefault();lost=true;cancelAnimationFrame(frame)}
      const restore = () => { setGeneration(value => value + 1) }
      canvas.addEventListener('webglcontextlost',lose);canvas.addEventListener('webglcontextrestored',restore)
      document.addEventListener('visibilitychange',resume); reduced.addEventListener('change',resume);resume()
      return ()=>{cancelAnimationFrame(frame);resize.disconnect();intersection.disconnect();document.removeEventListener('visibilitychange',resume);reduced.removeEventListener('change',resume);canvas.removeEventListener('webglcontextlost',lose);canvas.removeEventListener('webglcontextrestored',restore);if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s))}
    } catch { if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));canvas.style.display='none' }
  }, [theme, generation])
  return <canvas ref={ref} className="atmosphere" aria-hidden="true" />
}
