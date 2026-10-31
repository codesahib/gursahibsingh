(() => {
  const routes = {
    languages: { title:'A language for the problem.', description:'Python for backend services and application logic. TypeScript and JavaScript for interfaces.', skills:['Python','C++','JavaScript','TypeScript','Perl','Shell'], proof:'At Brickeye, I built FastAPI services and an event-driven rules engine in Python, alongside React/TypeScript interfaces. At Siemens Enlighted, I developed containerized edge services and a React/Python interface for real-time device monitoring and control.', link:'#about', linkText:'Follow my experience' },
    web: { title:'From interaction to API.', description:'The interface, the service behind it, and the contract connecting them.', skills:['React','Node','Django','FastAPI','Flask','Redux','GraphQL','Babel','Jest','Playwright','Clerk'], proof:'Master Control Terminal brings React and TypeScript together with FastAPI. At Brickeye, I built multi-tenant workflows and integrated Clerk for authentication; at ShyftLabs, I worked on React, Node, and GraphQL pricing workflows.', link:'#project-terminal', linkText:'Explore Master Control Terminal' },
    data: { title:'Give the data a backbone.', description:'Model the domain, make the queries work, and keep the numbers traceable.', skills:['PostgreSQL','MySQL','MongoDB'], proof:'Master Control Terminal derives holdings and profit/loss from transactions stored in PostgreSQL. At Brickeye, I reduced critical-path database operations from four to one or two. Earlier, I built MySQL-backed R&D dashboards at Siemens EDA.', link:'#project-terminal', linkText:'See the finance console' },
    ai: { title:'Make intelligence useful.', description:'LLM features and development workflows, with engineering oversight built in.', skills:['Agentic workflows','MCP servers','LLM application development','Prompt engineering'], proof:'At Siemens, a LangChain diagnostic prototype turned IoT logs into anomaly summaries and root-cause explanations, reducing investigation time by 45%. At Brickeye, I established agent-assisted development workflows with validation and quality gates.', link:'#project-csv', linkText:'Explore a personal AI experiment' },
    engineering: { title:'Think beyond the happy path.', description:'Architecture, debugging, and the habits that make software dependable.', skills:['Scalable software design','Design patterns and architecture','Debugging','Scripting','Automated testing','Microservices','Distributed systems','Domain-driven design'], proof:'My Brickeye rules engine uses a transactional outbox, idempotency, retries, dead-letter queues, and advisory locks. I also built Cypress E2E and Pact contract tests, automated in CI.', link:'#project-rules', linkText:'Explore the rules engine' },
    tools: { title:'Connect it. Ship it. See it.', description:'The infrastructure and collaboration tools around the code.', skills:['MQTT','Google Cloud Platform','Docker','Kubernetes','Kafka','OpenFGA','Atlassian MCP','Jira','Confluence','Git','Linux','Postman'], proof:'At Siemens, I bridged Kafka telemetry with UDMI workflows on GCP and managed supporting infrastructure with Terraform. At Brickeye, I designed an OpenFGA authorization model for organizations, projects, devices, and entities.', link:'#project-operations', linkText:'Explore the operations platform' }
  };
  const buttons = [...document.querySelectorAll('[data-route]')];
  const panel = document.getElementById('atlas-panel');
  function selectRoute(button, focus = false) {
    const key = button.dataset.route;
    const route = routes[key];
    buttons.forEach(item => { item.setAttribute('aria-selected',String(item === button)); item.tabIndex = item === button ? 0 : -1; });
    panel.setAttribute('aria-labelledby',button.id);
    const color = `var(--route-${key})`;
    panel.style.setProperty('--route',color);
    document.getElementById('atlas-route-label').textContent = `Route ${String(buttons.indexOf(button)+1).padStart(2,'0')} / ${button.querySelector('span').textContent}`;
    document.getElementById('atlas-title').textContent = route.title;
    document.getElementById('atlas-description').textContent = route.description;
    const list = document.getElementById('atlas-skills');
    list.replaceChildren(...route.skills.map(skill => { const li = document.createElement('li'); li.textContent=skill; return li; }));
    document.getElementById('atlas-proof-copy').textContent = route.proof;
    const link = document.getElementById('atlas-proof-link');
    link.href = route.link;
    link.textContent = route.linkText + ' \u2197';
    document.querySelectorAll('.track').forEach(track => track.classList.toggle('active',track.dataset.track === key));
    const activeTrack = document.querySelector(`[data-track="${key}"]`);
    const journey = document.getElementById('atlas-journey');
    journey.setAttribute('d',activeTrack.getAttribute('d'));
    journey.style.setProperty('--route',color);
    if(focus) button.focus();
  }
  buttons.forEach((button,index) => {
    button.addEventListener('click',() => selectRoute(button));
    button.addEventListener('keydown',event => {
      let next;
      if(['ArrowRight','ArrowDown'].includes(event.key)) next = (index+1)%buttons.length;
      if(['ArrowLeft','ArrowUp'].includes(event.key)) next = (index-1+buttons.length)%buttons.length;
      if(event.key === 'Home') next = 0;
      if(event.key === 'End') next = buttons.length-1;
      if(next !== undefined) { event.preventDefault(); selectRoute(buttons[next],true); }
    });
  });
  selectRoute(buttons[0]);
  document.getElementById('atlas-proof-link').addEventListener('click',event => {
    const target = document.querySelector(event.currentTarget.hash);
    if(target && target.tagName === 'DETAILS') target.open = true;
  });
})();
