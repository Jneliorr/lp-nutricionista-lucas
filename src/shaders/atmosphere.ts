export const vertexSource = `attribute vec2 a_position; void main(){ gl_Position=vec4(a_position,0.,1.); }`
export const fragmentSource = `
precision mediump float;
uniform vec2 u_resolution; uniform float u_time; uniform vec3 u_color;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
 vec2 uv=gl_FragCoord.xy/u_resolution; vec2 p=uv; p.x*=u_resolution.x/u_resolution.y;
 float t=u_time*.065;
 float wave=sin(p.x*2.1+sin(p.y*2.8+t)*.8+t)*.5+.5;
 float light=exp(-length((uv-vec2(.55+.18*sin(t),.5+.15*cos(t*.8)))*vec2(1.1,1.7))*2.4);
 float field=wave*.18+light*.28;
 vec3 color=mix(vec3(.953,.945,.949),u_color,field);
 color+=(hash(gl_FragCoord.xy)-.5)*.012;
 gl_FragColor=vec4(color,1.);
}`
