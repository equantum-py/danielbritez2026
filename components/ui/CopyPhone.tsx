'use client';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
export function CopyPhone() { const [copied,setCopied]=useState(false); return <button className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 text-sm font-bold text-technical" onClick={async()=>{await navigator.clipboard.writeText(portfolio.person.phoneDisplay); setCopied(true); setTimeout(()=>setCopied(false),1800)}}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Número copiado' : 'Copiar número'}</button> }
