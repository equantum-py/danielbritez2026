import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.ts'], theme: { extend: { colors: { carbon: '#0B0D0F', graphite: '#15191D', steel: '#2B3238', technical: '#F4F6F7', muted: '#A8B0B7', mechanic: '#00A85A', amber: '#F2A900' }, fontFamily: { sans: ['var(--font-inter)'], display: ['var(--font-barlow)'] }, boxShadow: { metal: '0 20px 60px rgba(0,0,0,.35)' } } }, plugins: [] };
export default config;
