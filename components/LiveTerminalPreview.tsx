"use client";

import React, { useState } from "react";
import { Terminal, Check, Play, Shield, Activity, RefreshCw } from "lucide-react";

export default function LiveTerminalPreview() {
  const [activeTab, setActiveTab] = useState<"tests" | "deploy" | "socket">("tests");

  const tabs = [
    { id: "tests" as const, label: "test-suite.sh", icon: <Check className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: "deploy" as const, label: "aws-deploy.yml", icon: <Activity className="w-3.5 h-3.5 text-cyan-400" /> },
    { id: "socket" as const, label: "realtime-sync.ts", icon: <RefreshCw className="w-3.5 h-3.5 text-amber-400" /> },
  ];

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#090d16]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>jeevan@engine-node:~</span>
          </div>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-all ${
                activeTab === tab.id
                  ? "bg-white/[0.08] text-white border border-white/[0.1] shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-2 min-h-[190px] text-slate-300 overflow-x-auto leading-relaxed">
        {activeTab === "tests" && (
          <div className="space-y-1.5">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">$</span>
              <span>npm run test:ci -- --coverage</span>
            </div>
            <div className="text-emerald-400">✓ Auth middleware & JWT payload verification (12ms)</div>
            <div className="text-emerald-400">✓ WebSocket monotonic revision reconciliation (28ms)</div>
            <div className="text-emerald-400">✓ High-throughput ledger aggregation query (19ms)</div>
            <div className="text-emerald-400">✓ Role-Based Access Control (RBAC) boundary checks (8ms)</div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-slate-400">
              <span className="text-emerald-300 font-semibold">Test Suites: 8 passed, 8 total</span>
              <span className="text-cyan-300 font-semibold">Tests: 57 passed (100%)</span>
              <span className="text-slate-400">Time: 1.482s</span>
            </div>
          </div>
        )}

        {activeTab === "deploy" && (
          <div className="space-y-1.5">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">$</span>
              <span>docker compose -f docker-compose.prod.yml up -d --build</span>
            </div>
            <div className="text-cyan-300">[+] Building 14.8s (18/18) FINISHED</div>
            <div className="text-slate-300">=&gt; [stage-1] compiling Next.js SSR bundle & assets</div>
            <div className="text-slate-300">=&gt; [aws-ec2] container healthcheck passed (HTTP 200 OK)</div>
            <div className="text-emerald-400">✓ Nginx SSL reverse proxy renewed (Let's Encrypt TLS 1.3)</div>
            <div className="text-emerald-300 font-semibold pt-1">
              🚀 Status: Live in Production @ Anju Siima / AWS EC2
            </div>
          </div>
        )}

        {activeTab === "socket" && (
          <div className="space-y-1.5">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">$</span>
              <span>wscat -c wss://syncspace.live/socket.io/stream</span>
            </div>
            <div className="text-indigo-300">&lt; connected: session_id = #0x82f1b (20fps cursor canvas)</div>
            <div className="text-slate-300">&gt; op: monotonic_insert {"{ rev: 142, doc: 'sync-engine' }"}</div>
            <div className="text-emerald-400">&lt; ack: conflict_free_resolved (delta: 0ms drift)</div>
            <div className="text-amber-300">&lt; broadcast: multi-tenant cursor [x: 482, y: 319]</div>
            <div className="text-slate-400 flex items-center gap-1.5 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-time channel synchronized. Listening for updates...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
