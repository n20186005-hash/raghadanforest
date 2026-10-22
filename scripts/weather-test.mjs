import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const source=fs.readFileSync('dist/weather.js','utf8'),validator=fs.readFileSync('dist/weather-data.js','utf8');assert.equal(source,fs.readFileSync('public/weather.js','utf8'));assert.equal(validator,fs.readFileSync('public/weather-data.js','utf8'));
const now=Date.now(),offset=10800,time=new Date(now+offset*1000).toISOString().slice(0,16),days=Array.from({length:7},(_,i)=>new Date(Date.parse(time.slice(0,10)+'T00:00:00Z')+i*86400000).toISOString().slice(0,10));
const fixture={utc_offset_seconds:offset,current:{time,temperature_2m:21,apparent_temperature:20,relative_humidity_2m:60,weather_code:3,wind_speed_10m:4},daily:{time:days,weather_code:Array(7).fill(3),temperature_2m_max:Array(7).fill(23),temperature_2m_min:Array(7).fill(16),precipitation_probability_max:Array(7).fill(0),uv_index_max:Array(7).fill(0)}};
const actual=process.argv[2]?JSON.parse(fs.readFileSync(process.argv[2],'utf8')):fixture;
let cases=0;
async function run(lang,state,mode,data=actual){const root={dataset:{lang,lat:'20.0221476',lon:'41.4332427'},innerHTML:'Loading'},events={},timers=[];let calls=0;
 const context={document:{readyState:state,getElementById:id=>id==='weather-widget'?root:null,addEventListener:(name,fn)=>events[name]=fn},AbortSignal,Date,console,encodeURIComponent,setTimeout:(fn,ms)=>timers.push({fn,ms}),fetch:async url=>{calls++;assert.match(url,/^\/api\/weather\?lat=20.0221476&lon=41.4332427$/);if(mode==='network')throw Error('network');return {ok:mode!=='503',json:async()=>{if(mode==='json')throw Error('json');return data;}};}};
 vm.runInNewContext(validator.replaceAll('export function','function')+'\n'+source.replace(/^import[^\n]+\n/,''),context);
 if(state==='loading'){assert.equal(calls,0);events.DOMContentLoaded();}for(let i=0;i<12;i++)await Promise.resolve();assert.equal(calls,1);
 const success=mode==='success';if(success){assert.match(root.innerHTML,lang==='en'?/Model time:/ : /\u0648\u0642\u062a \u0627\u0644\u0646\u0645\u0648\u0630\u062c:/);assert.match(root.innerHTML,/UTC\+3/);assert.match(root.innerHTML,lang==='en'?/7-day forecast/:/\u062a\u0648\u0642\u0639\u0627\u062a \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0633\u0628\u0639\u0629/);assert.equal(timers.length,1);assert(timers[0].ms>0&&timers[0].ms<=10800000);timers[0].fn();assert.match(root.innerHTML,lang==='en'?/Could not load/:/\u062a\u0639\u0630/);}
 else {assert.match(root.innerHTML,lang==='en'?/Could not load/:/\u062a\u0639\u0630/);assert(!root.innerHTML.includes('°'));assert.equal(timers.length,0);}cases++;}
for(const lang of ['ar','en'])for(const state of ['loading','complete']){
 const html=fs.readFileSync(lang==='en'?'dist/en/index.html':'dist/index.html','utf8');assert(html.indexOf('id="weather-widget"')<html.indexOf('src="/weather.js"'));assert.match(html,/<script[^>]*type="module"[^>]*src="\/weather.js"/);assert(html.includes('https://open-meteo.com/'));
 for(const mode of ['success','network','503','json'])await run(lang,state,mode);
 for(const mutate of [d=>delete d.current,d=>d.current.temperature_2m=null,d=>d.current.time='2020-01-01T00:00',d=>d.current.time='<img src=x>',d=>d.daily.time.pop(),d=>d.daily.temperature_2m_max[2]=null,d=>d.current.time=new Date(now+86400000).toISOString().slice(0,16)]){const bad=structuredClone(fixture);mutate(bad);await run(lang,state,'invalid',bad);}
 await run(lang,state,'success',fixture);
}
console.log(JSON.stringify({result:'PASS',cases,coverage:'Actual built module/validator, Arabic/English, real recorded provider payload when supplied, loading/ready init order, HTTP/JSON/network faults, null/missing/malformed/expired/future data, seven days, zero UV, on-screen expiry. VM DOM fixture, not browser layout or live production.'}));
