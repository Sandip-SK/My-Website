/* ==========================================================================
   Sandip Kundu — Senior SRE Portfolio Interactive Engine
   ========================================================================== */

(function () {
  'use strict';

  // ---- Verified Resume Data ----
  const SKILLS_DATA = [
    {
      category: 'programming',
      label: 'Programming & Automation',
      icon: 'terminal',
      accent: 'text-sky-400',
      items: ['Python', 'Go', 'Bash', 'Git', 'API-Driven Automation', 'Operational Workflow Automation']
    },
    {
      category: 'cloud',
      label: 'Cloud & Infrastructure',
      icon: 'cloud',
      accent: 'text-emerald-400',
      items: ['AWS EC2', 'VPC & IAM', 'Elastic Load Balancing', 'Amazon RDS', 'Amazon S3', 'Public / Private / Hybrid Cloud', 'High Availability']
    },
    {
      category: 'containers',
      label: 'Containers & Orchestration',
      icon: 'boxes',
      accent: 'text-indigo-400',
      items: ['Kubernetes', 'Amazon EKS', 'Docker', 'Containerized Microservices', 'Distributed Systems']
    },
    {
      category: 'iac',
      label: 'IaC & CI/CD',
      icon: 'git-branch',
      accent: 'text-cyan-400',
      items: ['Terraform', 'Ansible', 'GitHub Actions', 'Configuration Management', 'Deployment Automation', 'Zero-Downtime Releases']
    },
    {
      category: 'observability',
      label: 'Observability & Telemetry',
      icon: 'activity',
      accent: 'text-amber-400',
      items: ['Prometheus', 'Grafana', 'Mimir', 'Loki', 'Alertmanager', 'Elasticsearch & Kibana', 'Jaeger', 'Distributed Tracing']
    },
    {
      category: 'databases',
      label: 'Databases',
      icon: 'database',
      accent: 'text-sky-400',
      items: ['PostgreSQL', 'MySQL', 'Amazon RDS']
    },
    {
      category: 'sre',
      label: 'SRE & Operations',
      icon: 'shield-check',
      accent: 'text-emerald-400',
      items: ['SLI / SLO & Error Budgets', 'Incident Management & RCA', 'Disaster Recovery (RTO/RPO)', 'Chaos Engineering', 'Runbooks & Production Readiness']
    }
  ];

  const PROJECTS_DATA = {
    aiops: {
      title: 'Autonomous AI-Driven IT Operations Platform',
      badge: 'AIOps · 1st Place Hackathon Winner',
      summary: 'Architected an AIOps orchestration platform that parses ITSM incident context, maps incidents to predefined remediation plans, and executes operational actions through integrated tooling.',
      highlights: [
        'Parses incoming ITSM context automatically to identify root-cause signatures and match validated remediation playbooks.',
        'Designed Human-in-the-Loop (HITL) approval gates for high-impact remediation to balance automation speed, operational accountability, and change safety.',
        'Won 1st Place at the GSC GTE EmploAI Hackathon (Société Générale) for developing a contextual AI-powered ITSM execution engine.'
      ],
      stack: ['Python', 'AIOps', 'ITSM APIs', 'Human-in-the-Loop Gates', 'Workflow Orchestration'],
      flow: ['ITSM Ticket Ingest', 'Context Parser & Playbook Selector', 'HITL Approval Gate', 'Automated Remediation Execution']
    },
    monitoring: {
      title: 'Cloud-Native Monitoring Platform',
      badge: 'Observability · 31 Services',
      summary: 'Built a Kubernetes-based observability platform powered by Prometheus, Grafana, and Alertmanager to provide unified telemetry across 31 cloud and private-cloud services.',
      highlights: [
        'Monitors 31 production services with unified metrics ingestion, SLO dashboards, and Critical User Journey validation.',
        'Reduced alert fatigue by 27% through refined alert routing, deduplication, and actionable threshold tuning.',
        'Paired with Loki, Mimir, Elasticsearch/Kibana, and Jaeger for end-to-end metrics, logs, and distributed tracing.'
      ],
      stack: ['Kubernetes', 'Prometheus', 'Grafana', 'Alertmanager', 'Loki / Mimir', 'Jaeger'],
      flow: ['31 Cloud Services', 'Prometheus & Loki Collectors', 'Alertmanager Deduplication (-27% Noise)', 'Grafana SLO Dashboards']
    },
    chaos: {
      title: 'Chaos Engineering Automation',
      badge: 'Resiliency · Proactive DR',
      summary: 'Implemented targeted failure-injection automation to continuously validate service resiliency and surface critical single points of failure before they cause production outages.',
      highlights: [
        'Continuously injects controlled faults across availability-zone and service dependencies to test failover behavior.',
        'Surfaces hidden single points of failure early in the release lifecycle to harden production readiness.',
        'Complements large-scale Disaster Recovery validation (RTO/RPO) recognized with a Société Générale SPOT Award.'
      ],
      stack: ['Chaos Engineering', 'Python', 'Kubernetes', 'AWS Multi-AZ', 'RTO/RPO Validation'],
      flow: ['Steady-State SLO Baseline', 'Targeted Fault Injection', 'Automated Failover Observation', 'Resiliency Hardening']
    }
  };

  const TERMINAL_COMMANDS = {
    help: [
      { type: 'info', text: 'Available commands:' },
      { type: 'cmd', text: '  whoami       — Engineer profile & current role' },
      { type: 'cmd', text: '  slo --status — Verified production reliability metrics' },
      { type: 'cmd', text: '  stack        — Core cloud, IaC & observability stack' },
      { type: 'cmd', text: '  awards       — Hackathon & leadership recognition' },
      { type: 'cmd', text: '  contact      — Direct email, phone & LinkedIn' },
      { type: 'cmd', text: '  clear        — Clear terminal screen' }
    ],
    whoami: [
      { type: 'success', text: 'Sandip Kundu — Senior Site Reliability Engineer' },
      { type: 'text', text: 'Company  : Société Générale (Promoted Apr 2026 | Joined Jul 2022)' },
      { type: 'text', text: 'Location : Bengaluru, India' },
      { type: 'text', text: 'Focus    : Cloud-Native Platforms, Python/Go Automation, Observability, AIOps & DR' }
    ],
    'slo --status': [
      { type: 'success', text: '[HEALTHY] API Availability        : 99.9% SLO maintained' },
      { type: 'success', text: '[HEALTHY] End-to-End Provisioning : 97% success rate' },
      { type: 'info', text: '[IMPACT ] Provisioning Cycle Time : 2+ hours -> 30 minutes (Terraform + Ansible)' },
      { type: 'info', text: '[IMPACT ] Sev-1 Detection / Noise : -30% MTTD | -25% false positives | -27% alert fatigue' },
      { type: 'info', text: '[IMPACT ] Toil & Incident Speed   : 10+ hrs/wk eliminated | -50% Tier-1 resolution time' }
    ],
    stack: [
      { type: 'info', text: 'Languages     : Python, Go, Bash, Git' },
      { type: 'info', text: 'Cloud & K8s   : AWS (EC2, VPC, IAM, ELB, RDS, S3), Kubernetes, Amazon EKS, Docker' },
      { type: 'info', text: 'IaC & CI/CD   : Terraform, Ansible, GitHub Actions (Zero-Downtime Releases)' },
      { type: 'info', text: 'Observability : Prometheus, Grafana, Mimir, Loki, Alertmanager, ELK, Jaeger' }
    ],
    awards: [
      { type: 'success', text: '★ 1st Place — GSC GTE EmploAI Hackathon, Société Générale (AI-powered ITSM engine)' },
      { type: 'success', text: '★ SPOT Award — Large-scale zero-downtime Disaster Recovery on Private Cloud Datacenters' },
      { type: 'success', text: '★ Bronze Medallist — Academic excellence in MCA (9.53 CGPA, VIT) & BCA (8.49 CGPA)' }
    ],
    contact: [
      { type: 'info', text: 'Email    : sandipkundu06.sk@gmail.com' },
      { type: 'info', text: 'Phone    : +91-8210827318' },
      { type: 'info', text: 'LinkedIn : https://www.linkedin.com/in/sandip-kundu-a4b63020b/' }
    ]
  };

  // ---- Toast Helper ----
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = '<span style="color:#34d399;font-weight:700;">✓</span><span>' + escapeHtml(message) + '</span>';
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 2800);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function copyToClipboard(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(label + ' copied to clipboard');
      }).catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(label + ' copied to clipboard');
    } catch (e) {
      showToast('Copy failed — please copy manually: ' + text);
    }
    ta.remove();
  }

  // ---- Theme Switcher ----
  function initTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    let saved = 'dark';
    try {
      saved = localStorage.getItem('sk-portfolio-theme') || 'dark';
    } catch (e) { /* sandbox safe */ }

    applyTheme(saved);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
        try {
          localStorage.setItem('sk-portfolio-theme', next);
        } catch (e) { /* sandbox safe */ }
        showToast(next === 'light' ? 'Switched to Light Mode' : 'Switched to Obsidian Dark Mode');
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sun = document.getElementById('icon-sun');
    const moon = document.getElementById('icon-moon');
    if (sun && moon) {
      sun.classList.toggle('hidden', theme === 'light');
      moon.classList.toggle('hidden', theme !== 'light');
    }
  }

  // ---- Hero Specialty Typing Effect ----
  function initTypewriter() {
    const el = document.getElementById('typed-specialty');
    if (!el) return;
    const phrases = [
      'Cloud-Native AWS & Kubernetes Platforms',
      'Python, Go & Terraform Automation',
      'AIOps & Self-Healing Observability',
      'Zero-Downtime CI/CD & Disaster Recovery'
    ];
    let pIdx = 0;
    let cIdx = phrases[0].length;
    let deleting = false;

    function tick() {
      const current = phrases[pIdx];
      if (!deleting) {
        el.textContent = current.slice(0, cIdx + 1);
        cIdx++;
        if (cIdx === current.length) {
          deleting = true;
          setTimeout(tick, 2200);
          return;
        }
        setTimeout(tick, 42);
      } else {
        el.textContent = current.slice(0, cIdx - 1);
        cIdx--;
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(tick, 320);
          return;
        }
        setTimeout(tick, 24);
      }
    }

    setTimeout(() => {
      deleting = true;
      tick();
    }, 2400);
  }

  // ---- Interactive Service-Mesh Hero Canvas ----
  function initMeshCanvas() {
    const canvas = document.getElementById('mesh-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let nodes = [];
    let animId = null;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
      const count = Math.min(48, Math.max(20, Math.floor((width * height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 1.2
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const nodeColor = isLight ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.55)';
      const lineBase = isLight ? [2, 132, 199] : [56, 189, 248];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 135) {
            const alpha = (1 - dist / 135) * (isLight ? 0.16 : 0.22);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${lineBase[0]}, ${lineBase[1]}, ${lineBase[2]}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 160) {
          const alpha = (1 - mdist / 160) * 0.35;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      if (!reducedMotion) {
        animId = requestAnimationFrame(draw);
      }
    }

    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    window.addEventListener('resize', () => {
      if (animId) cancelAnimationFrame(animId);
      resize();
      draw();
    });

    resize();
    draw();
  }

  // ---- Scroll Progress, Active Nav & Reveal Observer ----
  function initScrollEffects() {
    const progressBar = document.getElementById('scroll-progress');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar && docHeight > 0) {
        progressBar.style.width = Math.min(100, (scrollTop / docHeight) * 100) + '%';
      }

      let current = 'hero';
      sections.forEach((sec) => {
        if (scrollTop >= sec.offsetTop - 160) {
          current = sec.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.section === current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Intersection Observer for Reveal + Metric Counters
    if ('IntersectionObserver' in window) {
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

      const counterObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });

      document.querySelectorAll('[data-count]').forEach((el) => counterObs.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    }
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  // ---- Filterable Skills Grid ----
  function renderSkills(filter) {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    const filtered = filter === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === filter);

    grid.innerHTML = filtered.map((group) => `
      <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center ${group.accent}">
              <i data-lucide="${group.icon}" class="w-5 h-5"></i>
            </div>
            <h3 class="font-semibold text-base tracking-tight">${escapeHtml(group.label)}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            ${group.items.map((item) => `
              <span class="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-400/20 bg-slate-500/10 text-[var(--text-primary)]">
                ${escapeHtml(item)}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }

  function initSkillFilters() {
    const pills = document.querySelectorAll('.filter-pill[data-filter]');
    pills.forEach((btn) => {
      btn.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        renderSkills(btn.dataset.filter);
      });
    });
    renderSkills('all');
  }

  // ---- Interactive SRE Terminal ----
  function initTerminal() {
    const output = document.getElementById('terminal-output');
    const form = document.getElementById('terminal-form');
    const input = document.getElementById('terminal-input');
    const quickBtns = document.querySelectorAll('[data-term-cmd]');
    if (!output || !form || !input) return;

    function runCommand(rawCmd) {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;

      const echo = document.createElement('div');
      echo.className = 'font-mono text-xs sm:text-sm mb-1.5';
      echo.innerHTML = '<span class="text-emerald-400">sandip@sre-prod</span><span class="text-slate-500">:~$</span> <span class="text-sky-300">' + escapeHtml(rawCmd.trim()) + '</span>';
      output.appendChild(echo);

      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      const lines = TERMINAL_COMMANDS[cmd];
      if (!lines) {
        const err = document.createElement('div');
        err.className = 'font-mono text-xs sm:text-sm text-amber-400 mb-3';
        err.textContent = `Command not found: "${rawCmd.trim()}". Type "help" to see available commands.`;
        output.appendChild(err);
      } else {
        const block = document.createElement('div');
        block.className = 'mb-3 space-y-1';
        lines.forEach((l) => {
          const div = document.createElement('div');
          const color = l.type === 'success' ? 'text-emerald-400'
            : l.type === 'info' ? 'text-sky-300'
            : l.type === 'cmd' ? 'text-slate-300'
            : 'text-slate-200';
          div.className = 'font-mono text-xs sm:text-sm ' + color;
          div.textContent = l.text;
          block.appendChild(div);
        });
        output.appendChild(block);
      }
      output.scrollTop = output.scrollHeight;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      runCommand(input.value);
      input.value = '';
    });

    quickBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        runCommand(btn.dataset.termCmd);
      });
    });

    // Seed initial output
    runCommand('slo --status');
  }

  // ---- Project Architecture Modal ----
  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const titleEl = document.getElementById('modal-title');
    const badgeEl = document.getElementById('modal-badge');
    const summaryEl = document.getElementById('modal-summary');
    const flowEl = document.getElementById('modal-flow');
    const listEl = document.getElementById('modal-highlights');
    const stackEl = document.getElementById('modal-stack');
    if (!modal) return;

    function openModal(key) {
      const data = PROJECTS_DATA[key];
      if (!data) return;
      titleEl.textContent = data.title;
      badgeEl.textContent = data.badge;
      summaryEl.textContent = data.summary;
      flowEl.innerHTML = data.flow.map((step, i) => `
        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-lg text-xs font-mono bg-sky-500/15 border border-sky-400/30 text-sky-300">${escapeHtml(step)}</span>
          ${i < data.flow.length - 1 ? '<span class="text-slate-500 font-mono">→</span>' : ''}
        </div>
      `).join('');
      listEl.innerHTML = data.highlights.map((h) => `
        <li class="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
          <span class="text-emerald-400 mt-1">▹</span>
          <span>${escapeHtml(h)}</span>
        </li>
      `).join('');
      stackEl.innerHTML = data.stack.map((s) => `
        <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-500/15 border border-slate-400/20">${escapeHtml(s)}</span>
      `).join('');

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-project-modal]').forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.dataset.projectModal));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
  }

  // ---- Experience Toggle ----
  function initExperienceExpanders() {
    document.querySelectorAll('[data-exp-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.expToggle;
        const panel = document.getElementById(targetId);
        if (!panel) return;
        const isHidden = panel.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Show Full Impact Details ↓' : 'Collapse Details ↑';
      });
    });
  }

  // ---- Mobile Navigation Menu ----
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }

  // ---- Command Palette (Ctrl+K / Cmd+K) ----
  function initCommandPalette() {
    const palette = document.getElementById('cmd-palette');
    const openBtn = document.getElementById('cmd-open-btn');
    const closeBtn = document.getElementById('cmd-close-btn');
    const input = document.getElementById('cmd-search');
    const list = document.getElementById('cmd-list');
    if (!palette || !list || !input) return;

    const actions = [
      { label: 'Jump to Overview & Hero', hint: '#hero', run: () => navigateTo('#hero') },
      { label: 'Jump to Production Impact Metrics', hint: '#metrics', run: () => navigateTo('#metrics') },
      { label: 'Jump to Interactive SRE Terminal', hint: '#terminal', run: () => navigateTo('#terminal') },
      { label: 'Jump to Technical Skills', hint: '#skills', run: () => navigateTo('#skills') },
      { label: 'Jump to Experience Timeline', hint: '#experience', run: () => navigateTo('#experience') },
      { label: 'Jump to Featured Projects', hint: '#projects', run: () => navigateTo('#projects') },
      { label: 'Jump to Education & Achievements', hint: '#achievements', run: () => navigateTo('#achievements') },
      { label: 'Jump to Contact', hint: '#contact', run: () => navigateTo('#contact') },
      { label: 'Copy Email (sandipkundu06.sk@gmail.com)', hint: 'Action', run: () => copyToClipboard('sandipkundu06.sk@gmail.com', 'Email') },
      { label: 'Copy Phone (+91-8210827318)', hint: 'Action', run: () => copyToClipboard('+91-8210827318', 'Phone number') },
      { label: 'Toggle Dark / Light Theme', hint: 'Theme', run: () => document.getElementById('theme-toggle')?.click() }
    ];

    function navigateTo(hash) {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }

    function render(query) {
      const q = (query || '').toLowerCase();
      const matches = actions.filter((a) => a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q));
      list.innerHTML = matches.length
        ? matches.map((a, idx) => `
          <button type="button" data-cmd-idx="${idx}" class="w-full text-left px-4 py-2.5 rounded-xl hover:bg-sky-500/15 flex items-center justify-between text-sm transition-colors">
            <span>${escapeHtml(a.label)}</span>
            <span class="text-xs font-mono text-slate-400">${escapeHtml(a.hint)}</span>
          </button>
        `).join('')
        : '<div class="px-4 py-6 text-center text-sm text-slate-400">No matching commands found.</div>';

      list.querySelectorAll('[data-cmd-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const item = matches[parseInt(btn.dataset.cmdIdx, 10)];
          closePalette();
          if (item) item.run();
        });
      });
    }

    function openPalette() {
      palette.classList.remove('hidden');
      palette.classList.add('flex');
      input.value = '';
      render('');
      setTimeout(() => input.focus(), 40);
    }

    function closePalette() {
      palette.classList.add('hidden');
      palette.classList.remove('flex');
    }

    if (openBtn) openBtn.addEventListener('click', openPalette);
    if (closeBtn) closeBtn.addEventListener('click', closePalette);
    palette.addEventListener('click', (e) => { if (e.target === palette) closePalette(); });
    input.addEventListener('input', () => render(input.value));

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (palette.classList.contains('hidden')) openPalette();
        else closePalette();
      } else if (e.key === 'Escape' && !palette.classList.contains('hidden')) {
        closePalette();
      }
    });
  }

  // ---- Copy Buttons ----
  function initContact() {
    document.querySelectorAll('[data-copy-value]').forEach((btn) => {
      btn.addEventListener('click', () => {
        copyToClipboard(btn.dataset.copyValue, btn.dataset.copyLabel || 'Text');
      });
    });
  }

  // ---- Interactive Face & Eye Mouse-Tracking Portrait ----
  function initPortraitTracking() {
    const stage = document.getElementById('portrait-stage');
    const tiltEl = document.getElementById('portrait-tilt');
    const glareEl = document.getElementById('portrait-glare');
    const leftPupil = document.getElementById('eye-left-pupil');
    const rightPupil = document.getElementById('eye-right-pupil');
    const leftLid = document.getElementById('eye-left-lid');
    const rightLid = document.getElementById('eye-right-lid');
    if (!stage || !tiltEl || !leftPupil || !rightPupil) return;

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let targetX = 0; // -1 to 1
    let targetY = 0; // -1 to 1
    let curX = 0;
    let curY = 0;
    let glareX = 50;
    let glareY = 30;
    let rafId = null;

    function updateFromClientPoint(clientX, clientY) {
      const rect = stage.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const cx = rect.left + rect.width * 0.54;
      const cy = rect.top + rect.height * 0.28; // eye level inside 1024x1024 portrait

      const dx = (clientX - cx) / Math.max(window.innerWidth * 0.45, 280);
      const dy = (clientY - cy) / Math.max(window.innerHeight * 0.45, 240);

      targetX = Math.max(-1, Math.min(1, dx));
      targetY = Math.max(-1, Math.min(1, dy));

      glareX = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      glareY = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
      stage.classList.add('tracking-active');
    }

    window.addEventListener('mousemove', (e) => {
      updateFromClientPoint(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        updateFromClientPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      stage.classList.remove('tracking-active');
    });

    function animate() {
      curX += (targetX - curX) * 0.14;
      curY += (targetY - curY) * 0.14;

      // 3D Head / Portrait tilt toward cursor
      const rotY = curX * 11;   // deg
      const rotX = -curY * 8.5; // deg
      const shiftX = curX * 5;
      const shiftY = curY * 4;
      tiltEl.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0)`;

      // Dynamic cyan/emerald specular sheen
      if (glareEl) {
        glareEl.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(56, 189, 248, 0.22), rgba(16, 185, 129, 0.10) 38%, transparent 70%)`;
      }

      // Precision eye pupil offset (clamped inside natural eye socket bounds)
      const eyeDx = curX * 5.2;
      const eyeDy = curY * 2.3;
      const pupilTransform = `translate(${eyeDx.toFixed(2)}px, ${eyeDy.toFixed(2)}px)`;
      leftPupil.style.transform = pupilTransform;
      rightPupil.style.transform = pupilTransform;

      rafId = requestAnimationFrame(animate);
    }

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);

    // Subtle natural blink cycle
    function scheduleBlink() {
      const delay = 3600 + Math.random() * 2800;
      setTimeout(() => {
        if (leftLid && rightLid) {
          leftLid.style.transform = 'scaleY(1)';
          rightLid.style.transform = 'scaleY(1)';
          setTimeout(() => {
            leftLid.style.transform = 'scaleY(0)';
            rightLid.style.transform = 'scaleY(0)';
            scheduleBlink();
          }, 130);
        }
      }, delay);
    }
    scheduleBlink();
  }

  // ---- Boot ----
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTypewriter();
    initMeshCanvas();
    initScrollEffects();
    initSkillFilters();
    initTerminal();
    initProjectModal();
    initExperienceExpanders();
    initMobileMenu();
    initCommandPalette();
    initContact();
    initPortraitTracking();

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });
})();
