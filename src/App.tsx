import { useEffect, useRef, useState } from 'react'
import { aboutContent, heroContent, navigation, projectsContent, skillsContent } from './content'

type Project = (typeof projectsContent.projects)[number]

function ArrowDownRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 5v14m-6-6 6 6 6-6" />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger
    setSelectedProject(project)
  }

  const closeProject = () => setSelectedProject(null)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 880) setIsMenuOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const previousOverflow = document.body.style.overflow
    const focusTimer = window.setTimeout(() => modalRef.current?.focus(), 0)
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProject()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      lastTriggerRef.current?.focus()
    }
  }, [selectedProject])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    let animationFrame = 0

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const marker = window.scrollY + 82 + window.innerHeight * 0.22
        const currentSection = sections.reduce((current, section) => {
          return section.offsetTop <= marker ? section.id : current
        }, 'home')

        setActiveSection(currentSection)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#home" aria-label="홈으로 이동">
            <span className="brand-mark">HSW</span>
            <span className="brand-role">QA</span>
          </a>

          <nav className={`navigation ${isMenuOpen ? 'is-open' : ''}`} aria-label="주요 메뉴">
            {navigation.map((item) => {
              const sectionId = item.href.slice(1)

              return (
              <a
                key={item.href}
                className={activeSection === sectionId ? 'is-active' : ''}
                href={item.href}
                aria-current={activeSection === sectionId ? 'location' : undefined}
                onClick={() => {
                  setIsMenuOpen(false)
                  setActiveSection(sectionId)
                }}
              >
                {item.label}
              </a>
              )
            })}
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="grid-decoration" aria-hidden="true" />
          <div className="glow glow-left" aria-hidden="true" />
          <div className="glow glow-right" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">
              {heroContent.eyebrow}
            </p>

            <h1 id="hero-title">
              <span>{heroContent.titleStart}</span>
              <span>
                <strong>{heroContent.titleAccent}</strong>
                {heroContent.titleEnd}
              </span>
            </h1>

            <p className="hero-description">{heroContent.description}</p>

            <div className="hero-actions" aria-label="주요 이동">
              <a className="button button-primary" href="#projects">
                {heroContent.primaryAction}
                <ArrowDownRight />
              </a>
              <a className="button button-secondary" href="#troubleshooting">
                {heroContent.secondaryAction}
              </a>
            </div>

          </div>

          <a className="scroll-cue" href="#about" aria-label="About 영역으로 이동">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown />
          </a>
        </section>

        <section className="content-section about-section" id="about" aria-labelledby="about-title">
          <div className="section-inner">
            <header className="section-heading">
              <div className="section-kicker">
                <p>{aboutContent.eyebrow}</p>
              </div>
              <div>
                <h2 id="about-title">{aboutContent.title}</h2>
                <p className="section-description">{aboutContent.description}</p>
              </div>
            </header>
          </div>
        </section>

        <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-inner">
            <header className="section-heading">
              <div className="section-kicker">
                <p>{skillsContent.eyebrow}</p>
              </div>
              <div>
                <h2 id="skills-title">{skillsContent.title}</h2>
                <p className="section-description">{skillsContent.description}</p>
              </div>
            </header>

            <div className="skills-table-wrap">
              <table className="skills-table" aria-label="QA 기술 스택">
                <thead>
                  <tr>
                    <th scope="col">분류</th>
                    <th scope="col">기술·도구</th>
                  </tr>
                </thead>
                <tbody>
                  {skillsContent.groups.map((group) => (
                    <tr key={group.category}>
                      <th scope="row">{group.category}</th>
                      <td>{group.tools.join(' · ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-inner">
            <header className="section-heading">
              <div className="section-kicker">
                <p>{projectsContent.eyebrow}</p>
              </div>
              <div>
                <h2 id="projects-title">{projectsContent.title}</h2>
                <p className="section-description">{projectsContent.description}</p>
              </div>
            </header>

            <div className="project-grid">
              {projectsContent.projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-card-header">
                    <span className="project-number">{project.number}</span>
                    <p>{project.meta} · {project.team}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-contribution-label">MY CONTRIBUTION</p>
                  <ul className="project-highlights">
                    {project.cardHighlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul className="project-tools" aria-label={`${project.title} 사용 도구`}>
                    {project.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <button
                    className="project-detail-button"
                    type="button"
                    onClick={(event) => openProject(project, event.currentTarget)}
                  >
                    프로젝트 자세히 보기
                    <ArrowDownRight />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="anchor-targets" aria-hidden="true">
          <span id="troubleshooting" />
          <span id="contact" />
        </div>
      </main>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject()
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={modalRef}
            tabIndex={-1}
          >
            <header className="project-modal-header">
              <div className="project-modal-brand">
                <span className="project-modal-mark" aria-hidden="true">{selectedProject.number}</span>
                <h2 id="project-modal-title">{selectedProject.title}</h2>
              </div>
              <button className="modal-close-button" type="button" aria-label="프로젝트 상세 닫기" onClick={closeProject}>
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="project-modal-body">
              <div className="project-modal-meta">
                <span>{selectedProject.meta}</span>
                <span>{selectedProject.team}</span>
              </div>

              <section className="project-story-intro">
                <div>
                  <p className="project-detail-label">PROJECT OVERVIEW</p>
                  <h3>{selectedProject.summary}</h3>
                  <p>{selectedProject.goal}</p>
                </div>
              </section>

              <section className="project-story-section">
                <div className="project-story-heading">
                  <p>01 · TEST SCOPE</p>
                  <h3>테스트 범위</h3>
                </div>
                <p className="project-story-copy">{selectedProject.testScope}</p>
              </section>

              <section className="project-story-section">
                <div className="project-story-heading">
                  <p>02 · TOOLS & ROLE</p>
                  <h3>사용 도구와 나의 역할</h3>
                </div>
                <div className="project-story-columns">
                  <div>
                    <h4>사용 도구 · 활용 내역</h4>
                    <ul>{selectedProject.toolUsage.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <h4>팀 내 나의 역할</h4>
                    <ul>{selectedProject.role.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
                {selectedProject.ciEvidence.length > 0 && (
                  <div className="project-evidence-grid project-evidence-grid--compact">
                    {selectedProject.ciEvidence.map((evidence) => (
                      <figure key={evidence.title}>
                        <img src={evidence.image} alt={evidence.alt} loading="lazy" />
                        <figcaption>
                          <strong>{evidence.title}</strong>
                          <p>{evidence.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                {selectedProject.jiraEvidence && (
                  <figure className="jira-evidence">
                    <img
                      src={selectedProject.jiraEvidence.image}
                      alt={selectedProject.jiraEvidence.alt}
                      loading="lazy"
                    />
                    <figcaption>
                      <strong>{selectedProject.jiraEvidence.title}</strong>
                      <p>{selectedProject.jiraEvidence.description}</p>
                    </figcaption>
                  </figure>
                )}
                {selectedProject.teamConventions && (
                  <article className="team-convention-card">
                    <p className="project-detail-label">TEAM CONVENTIONS</p>
                    <h4>{selectedProject.teamConventions.title}</h4>
                    <p className="team-convention-intro">
                      {selectedProject.teamConventions.description}
                    </p>
                    <figure className="team-convention-hero-image">
                      <img
                        src={selectedProject.teamConventions.image}
                        alt={selectedProject.teamConventions.alt}
                        loading="lazy"
                      />
                    </figure>
                    <div className="team-convention-grid">
                      {selectedProject.teamConventions.items.map((item) => (
                        <div key={item.label}>
                          <strong>{item.label}</strong>
                          <p>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                )}
              </section>

              <section className="project-story-section">
                <div className="project-story-heading">
                  <p>03 · TEST RESULT</p>
                  <h3>테스트 결과</h3>
                </div>
                {selectedProject.automationTable ? (
                  <div className="automation-result">
                    <div className="automation-table-wrap">
                      <table>
                        <caption>{selectedProject.automationTable.caption}</caption>
                        <thead>
                          <tr>
                            <th scope="col">기능 구분</th>
                            <th scope="col">Chrome</th>
                            <th scope="col">Edge</th>
                            <th scope="col">Firefox (POM)</th>
                            <th scope="col">비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedProject.automationTable.rows.map((row) => (
                            <tr key={row.feature}>
                              <th scope="row">{row.feature}</th>
                              <td className={row.chrome === '-' ? 'is-not-implemented' : undefined}>{row.chrome}</td>
                              <td className={row.edge === '-' ? 'is-not-implemented' : undefined}>{row.edge}</td>
                              <td className={row.firefox === '-' ? 'is-not-implemented' : undefined}>{row.firefox}</td>
                              <td>{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">테스트 결과<br /><span>(Implemented / Total)</span></th>
                            <td>{selectedProject.automationTable.results.chrome.split('\n').map((line) => <span key={line}>{line}</span>)}</td>
                            <td>{selectedProject.automationTable.results.edge.split('\n').map((line) => <span key={line}>{line}</span>)}</td>
                            <td>{selectedProject.automationTable.results.firefox.split('\n').map((line) => <span key={line}>{line}</span>)}</td>
                            <td>브라우저별 구현·실행 TC</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <p className="automation-result-note">{selectedProject.automationTable.note}</p>
                    <p className="automation-result-summary">{selectedProject.automationTable.summary}</p>
                  </div>
                ) : selectedProject.resultMetrics ? (
                  <div className="result-metric-grid" aria-label="테스트 결과 요약">
                    {selectedProject.resultMetrics.map((metric) => (
                      <div className="result-metric-card" key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                ) : null}
                {selectedProject.testResultEvidence && (
                  <figure className="result-evidence">
                    <img src={selectedProject.testResultEvidence.image} alt={selectedProject.testResultEvidence.alt} loading="lazy" />
                    <figcaption>
                      <strong>{selectedProject.testResultEvidence.title}</strong>
                      <p>{selectedProject.testResultEvidence.description}</p>
                    </figcaption>
                  </figure>
                )}
                {selectedProject.bugReport ? (
                  <article className="bug-report-evidence">
                    <div className="bug-report-copy">
                      <p className="project-detail-label">BUG REPORT</p>
                      <h4>{selectedProject.bugReport.title}</h4>
                      <p className="bug-report-meta">{selectedProject.bugReport.meta}</p>
                      <dl>
                        <div><dt>재현 순서</dt><dd>{selectedProject.bugReport.reproduction}</dd></div>
                        <div><dt>기대 결과</dt><dd>{selectedProject.bugReport.expected}</dd></div>
                        <div><dt>실제 결과</dt><dd>{selectedProject.bugReport.actual}</dd></div>
                      </dl>
                    </div>
                    {selectedProject.bugReport.image ? (
                      <img src={selectedProject.bugReport.image} alt={selectedProject.bugReport.alt} loading="lazy" />
                    ) : selectedProject.bugReport.video ? (
                      <video controls preload="metadata" aria-label={selectedProject.bugReport.alt}>
                        <source src={selectedProject.bugReport.video} type="video/webm" />
                      </video>
                    ) : (
                      <div className="bug-report-media-placeholder" role="img" aria-label={selectedProject.bugReport.alt}>
                        <span>VIDEO EVIDENCE</span>
                        <p>{selectedProject.bugReport.mediaPlaceholder}</p>
                      </div>
                    )}
                  </article>
                ) : null}
              </section>

              <section className="project-story-section">
                <div className="project-story-heading">
                  <p>04 · TROUBLESHOOTING</p>
                  <h3>문제 해결 사례</h3>
                </div>
                <ul className="project-story-list">{selectedProject.troubleshooting.map((item) => <li key={item}>{item}</li>)}</ul>
                {selectedProject.comparisonEvidence.length > 0 && (
                  <div className="project-evidence-grid project-evidence-grid--comparison">
                    {selectedProject.comparisonEvidence.map((evidence) => (
                      <figure key={evidence.title}>
                        <img src={evidence.image} alt={evidence.alt} loading="lazy" />
                        <figcaption>
                          <strong>{evidence.title}</strong>
                          <p>{evidence.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                {selectedProject.troubleshootingEvidence.length > 0 && (
                  <div className="troubleshooting-evidence">
                    {selectedProject.troubleshootingEvidence.map((evidence) => (
                      <figure key={evidence.title}>
                        {evidence.image ? (
                          <img src={evidence.image} alt={evidence.alt} loading="lazy" />
                        ) : evidence.video ? (
                          <video controls preload="metadata" aria-label={evidence.alt}>
                            <source src={evidence.video} type="video/webm" />
                          </video>
                        ) : (
                          <div className="project-media-placeholder" role="img" aria-label={evidence.alt}>
                            <span>IMAGE EVIDENCE</span>
                            <p>공개용 캡처 준비 중</p>
                          </div>
                        )}
                        <figcaption>
                          <strong>{evidence.title}</strong>
                          <p>{evidence.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </section>

              <section className="project-story-section project-story-outro">
                <div className="project-story-heading">
                  <p>05 · RETROSPECTIVE</p>
                  <h3>회고 및 개선 방향</h3>
                </div>
                <ul className="project-story-list">{selectedProject.improvements.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
