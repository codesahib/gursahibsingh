import React from 'react';
import ProjectScreenshot from './ProjectScreenshot';
import EngineeringWork from '../projects/EngineeringWork';
export default function SelectedWork() { return (<section className="work" id="work" aria-labelledby="work-heading">
          <div className="work-intro"><p className="eyebrow">02 / Things I’ve built</p>
          <h2 id="work-heading">From work. For fun.</h2></div>
          <div className="work-list">
          <EngineeringWork />
          <div className="projects">
            <details className="project featured" id="project-terminal" open>
              <summary><span className="project-number">01</span><span><span className="project-name">Master Control Terminal</span><span className="project-meta">Personal project · FastAPI / React / TypeScript / PostgreSQL</span></span><span className="project-arrow" aria-hidden="true">↗</span></summary>
              <div className="project-body"><ProjectScreenshot /><p>I built a personal finance console to bring account activity, contribution room, holdings, and portfolio performance into one place.</p><span className="mono">Under the hood</span><p>Holdings and profit/loss are derived from transactions. The app handles contributions, trades, dividends, transfers, and currency exchanges, with funding checks and protection against selling more units than are held.</p><p>It also tracks RRSP, TFSA, and FHSA contribution room, combines market prices with manual valuations, and includes portfolio history, allocation views, and JSON backup/restore.</p><p><a href="https://github.com/codesahib/Master-Control-Terminal" target="_blank" rel="noopener noreferrer">Explore the project on GitHub ↗</a></p></div>
            </details>
            <details className="project" id="project-operations">
              <summary><span className="project-number">02</span><span><span className="project-name">Operations platform</span><span className="project-meta">At Brickeye · FastAPI / React / PostgreSQL</span></span><span className="project-arrow" aria-hidden="true">↗</span></summary>
              <div className="project-body"><p>I led the architecture and development of a multi-tenant operations platform, working with the operations team to replace Airtable-based tracking.</p><span className="mono">The interesting part</span><p>Keeping device assignments and settings in sync with ThingsBoard, while supporting 3,200+ managed entities across 500+ organizations. FastAPI, React/TypeScript, PostgreSQL, and Redis connected the pieces.</p><p className="muted">Professional work · source code is private.</p></div>
            </details>
            <details className="project" id="project-csv">
              <summary><span className="project-number">03</span><span><span className="project-name">Talk-to-My-CSV</span><span className="project-meta">Personal project · Streamlit / LangChain / Ollama</span></span><span className="project-arrow" aria-hidden="true">↗</span></summary>
              <div className="project-body"><p>A natural-language interface for asking questions about CSV datasets, without writing SQL or code.</p><span className="mono">The experiment</span><p>Bringing Streamlit, LangChain, Ollama, and Chroma together to explore a more conversational way to work with data.</p></div>
            </details>
            <details className="project" id="project-rules">
              <summary><span className="project-number">04</span><span><span className="project-name">When telemetry needs to become action</span><span className="project-meta">At Brickeye · Python / PostgreSQL / Event-driven systems</span></span><span className="project-arrow" aria-hidden="true">↗</span></summary>
              <div className="project-body"><p>I built and deployed a custom rules engine to evaluate device telemetry, generate alarms, and trigger notifications.</p><span className="mono">What kept me thinking</span><p>Reliable execution when things go wrong: transactional outbox patterns, idempotency, retries, dead-letter queues, and advisory locks.</p><p className="muted">Professional work · source code is private.</p></div>
            </details>
          </div>
          <p className="work-footnote">Open a project for the story behind it. More experiments on <a className="blue" href="https://github.com/codesahib" target="_blank" rel="noopener noreferrer">GitHub ↗</a></p>
          </div>
        </section>); }
