export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'QA Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Troubleshooting', href: '#troubleshooting' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  eyebrow: 'QA ENGINEER',
  titleStart: '서비스 품질을 책임지는',
  titleAccent: 'QA 엔지니어',
  titleEnd: ', 홍성우입니다.',
  description:
    '요구명세서를 분석하여 테스트 케이스를 설계하고 UI를 자동화하며\n발견한 문제를 재현 가능한 기록으로 남기는 QA 엔지니어 홍성우입니다.',
  primaryAction: '프로젝트 보기',
  secondaryAction: '문제 해결 사례',
  strengths: [
    { number: '01', label: '테스트 설계', detail: '정상·예외 흐름' },
    { number: '02', label: 'UI 자동화', detail: 'Selenium · Playwright' },
    { number: '03', label: '결함 분석', detail: '재현 · 원인 확인' },
  ],
}

export const aboutContent = {
  eyebrow: 'ABOUT',
  title: '팀과 함께 문제를 찾고,\n더 나은 품질을 만들어갑니다.',
  description:
    '요구사항을 사용자 흐름으로 나누고, 예외 상황까지 확인할 수 있는 테스트 케이스를 설계합니다.\n반복 검증이 필요한 UI 흐름은 자동화하고, 발견한 문제는 누구나 같은 조건에서 재현할 수 있도록 기록합니다.\n테스트 결과를 전달하는 데서 그치지 않고, 팀이 원인을 확인하고 다음 작업을 이어갈 수 있는 근거를 만드는 QA 엔지니어를 지향합니다.',
  strengths: [
    {
      number: '01',
      title: '테스트 설계',
      description: '요구사항과 사용자 흐름을 기준으로 정상·예외 케이스를 나누어 테스트합니다.',
    },
    {
      number: '02',
      title: 'UI 자동화',
      description: '반복 검증이 필요한 사용자 흐름을 Selenium과 Playwright로 자동화했습니다.',
    },
    {
      number: '03',
      title: '결함 분석',
      description: '화면의 실패에서 멈추지 않고 DOM, 세션과 네트워크 상태를 확인했습니다.',
    },
    {
      number: '04',
      title: '결과 공유',
      description: '재현 조건과 테스트 결과를 버그 리포트, 결과 보고서와 README로 남겼습니다.',
    },
  ],
}

export const skillsContent = {
  eyebrow: 'QA SKILLS',
  title: '기술 스택',
  description: 'QA 엔지니어로서 학습하고 활용해온 기술과 도구입니다.',
  groups: [
    {
      category: '언어·테스트 프레임워크',
      tools: ['Python', 'pytest'],
    },
    {
      category: '웹 UI 테스트 자동화',
      tools: ['Selenium', 'Playwright'],
    },
    {
      category: 'API 테스트',
      tools: ['requests', 'Postman'],
    },
    {
      category: '성능 테스트',
      tools: ['JMeter'],
    },
    {
      category: '테스트 리포팅·이슈 관리',
      tools: ['Allure', 'Jira', 'Google Sheets'],
    },
    {
      category: '협업 도구',
      tools: ['Jenkins', 'GitLab', 'GitHub', 'Discord', 'Notion'],
    },
  ],
}

export const projectsContent = {
  eyebrow: 'PROJECTS',
  title: '주요 프로젝트',
  description: '',
  projects: [
    {
      id: 'ai-helpy',
      number: '01',
      meta: '2026.07.09 ~ 2026.07.24',
      team: '3인 팀 프로젝트',
      title: 'AI Helpy Chat QA',
      summary: '다양한 브라우저와 사용자 흐름을 자동화 테스트로 검증했습니다.',
      cardHighlights: [
        '로그인·회원가입·예외 흐름 TC 작성 및 최종 보완',
        'Selenium으로 Chrome UI 자동화 테스트 구현',
        '버그 리포트 작성 및 프로젝트 발표 자료 제작',
      ],
      tools: ['Python', 'pytest', 'Selenium', 'WebDriver Manager', 'GitLab'],
      goal: 'AI Helpy Chat(dev)의 로그인·회원가입·AI 채팅·대화 관리·에이전트 생성 등 주요 사용자 흐름을 Chrome·Edge·Firefox 환경에서 검증하고, 반복 확인이 필요한 시나리오를 자동화한 프로젝트입니다.',
      testScope: '팀 전체는 로그인, 회원가입, AI 채팅(기본 응답·웹 검색·이미지 생성), 대화 관리(검색·이름 변경·삭제), 에이전트 생성, 사이드바·푸터 UI를 검증했습니다. 저는 로그인·회원가입·기타 예외 케이스의 테스트 케이스 작성을 담당했고, 해당 범위를 포함한 Chrome 자동화 테스트를 구현했습니다.',
      toolUsage: [
        'Python, Selenium, pytest로 Chrome 기반 UI 자동화 테스트를 구성했습니다.',
        'WebDriver Manager로 Chrome 드라이버 관리를 지원하고, GitLab에서 코드 공유와 수정을 진행했습니다.',
        'Discord와 Notion으로 테스트 이슈와 진행 상황을 팀과 공유했습니다.',
      ],
      role: [
        '로그인·회원가입·기타 예외 케이스 TC 작성',
        'Chrome 자동화 테스트 구현',
        '영역별 TC 취합 및 최종 보완 작업',
        '버그 리포트와 발표 자료 작성',
      ],
      results: [
        '전체 테스트 케이스 247건',
        '자동화 대상 72건',
        'Chrome 자동화 구현 54건',
        '전체 테스트 실행 결과: 243건 중 235건 Pass (96.7%)',
      ],
      bugs: [
        '동일한 속성의 입력 요소가 DOM에 함께 존재해 발생한 요소 식별 문제',
        '짧은 시간 뒤 자동으로 사라져 확인이 어려운 Toast 메시지',
        'AI 응답 시간 차이로 인해 화면 상태 확인 시점이 달라지는 사례',
      ],
      troubleshooting: [
        '중복 DOM은 더 구체적인 XPath로 대상 요소를 구분해 탐색했습니다.',
        'Toast는 개발자 도구의 디버거 일시 정지로 DOM을 고정한 뒤 Locator를 확인했습니다.',
      ],
      improvements: [
        '입력값 경계, 오류, 사용자 예외 흐름을 더 보완해 테스트 케이스의 완성도를 높이는 방향을 확인했습니다.',
        '학습 중심의 분업에서 생긴 중복 로직은 공통화하고, 브라우저 설정은 매개변수화하는 개선점을 정리했습니다.',
        '학습을 우선해 생성형 AI 사용을 최소화하고 직접 구현하면서 자동화 테스트 구현 속도가 느렸습니다. 다음 프로젝트에서는 AI를 적극 활용해 설계·구현·검토 과정을 효율화하는 경험을 쌓고 싶습니다.',
        '페이지 객체 모델(POM) 방식을 적용해 페이지별 요소와 동작을 분리하고, 중복 코드를 줄이는 구조도 경험해 보고 싶습니다.',
      ],
      automationTable: {
        caption: '자동화 대상 72개 테스트 케이스 기준',
        rows: [
          { feature: '회원가입 (정상 경로)', chrome: '✓', edge: '-', firefox: '-', note: '정상 흐름 검증' },
          { feature: '로그인 (성공·실패·유효성)', chrome: '✓', edge: '✓', firefox: '-', note: '예외 케이스 처리' },
          { feature: 'AI 대화 메인', chrome: '✓', edge: '✓', firefox: '✓', note: '메시지 전송 및 응답 대기' },
          { feature: '에이전트 생성', chrome: '✓', edge: '✓', firefox: '✓', note: '입력값 검증 및 생성 확인' },
          { feature: '사이드바 제어', chrome: '✓', edge: '✓', firefox: '✓', note: '대화 목록 및 이력 관리' },
          { feature: '푸터 (Footer)', chrome: '-', edge: '✓', firefox: '-', note: '링크 및 레이아웃 검증' },
        ],
        results: { chrome: '54 / 72\n75.0%', edge: '68 / 72\n94.4%', firefox: '62 / 72\n86.1%' },
        note: '브라우저별 수치는 중복 구현을 포함하며, 전체 자동화 대상 테스트 케이스는 72건입니다.',
        summary: '전체 247건 중 주요 사용자 흐름과 상태 변화를 확인하는 72건을 자동화 대상으로 선정했습니다. Chrome에서는 54건을 구현했으며, 이름 변경·삭제의 핵심 흐름을 먼저 검증했습니다. 테스트 케이스는 모달의 헤더·안내 문구·버튼 노출·취소 상태 등 세부 항목까지 분리되어 있었고, 한정된 기간에는 대화 관리·검색·대화 목록 관련 18건의 세부 검증을 모두 자동화하지 못했습니다.',
      },
      bugReport: {
        title: 'TC-246 · 에이전트 만들기 레이아웃 깨짐',
        meta: '중요도 LOW · Windows, Chrome · 2026.07.22',
        reproduction: '에이전트 만들기 페이지에서 이름 입력 필드에 임의의 3,000자 이상 문자를 입력',
        expected: '최대 길이 100자로 입력이 제한됨',
        actual: '최대 길이 이후에도 입력되며 페이지 레이아웃이 깨짐',
        image: './project-assets/bug-report-slide12.png',
        video: undefined,
        mediaPlaceholder: undefined,
        alt: '에이전트 이름 입력 길이 제한 미적용으로 레이아웃이 깨진 화면',
      },
      testResultEvidence: null,
      resultMetrics: null,
      ciEvidence: [],
      postmanEvidence: null,
      jiraEvidence: null,
      teamConventions: null,
      comparisonEvidence: [],
      troubleshootingEvidence: [
        {
          title: '중복 DOM 요소 처리',
          description: '서로 다른 화면에 동일한 메시지 입력 요소가 DOM에 함께 존재해, 더 구체적인 XPath로 대상 요소를 구분했습니다.',
          image: './project-assets/troubleshooting-duplicate-dom-slide14.png',
          video: undefined,
          alt: '서로 다른 화면의 동일한 메시지 입력 요소와 개발자 도구에서 확인한 DOM 구조',
        },
        {
          title: '일시적으로 사라지는 Toast 확인',
          description: '자동으로 사라지는 Toast를 개발자 도구의 스크립트 일시 정지 기능으로 멈춰 DOM과 Locator를 확인했습니다.',
          image: './project-assets/troubleshooting-toast-debugger.png',
          video: undefined,
          alt: '삭제 완료 Toast 메시지를 개발자 도구에서 일시 정지해 DOM 구조를 확인한 화면',
        },
      ],
    },
    {
      id: 'elice-lxp',
      number: '02',
      meta: '2026.08.26 ~ 2026.09.11',
      team: '4인 팀 프로젝트',
      title: 'Elice LXP QA',
      summary: '주요 사용자 흐름을 Playwright로 자동화하고, 실행 결과와 발견한 문제를 정리했습니다.',
      cardHighlights: [
        'Playwright로 E2E/UI/UX 주요 사용자 흐름 자동화',
        '테스트 결과 보고서·README 작성 및 Jira 이슈 관리',
        'GitLab Webhook · Jenkins · Allure CI 연동 보조',
      ],
      tools: ['Python', 'pytest', 'Playwright', 'Allure', 'Jenkins', 'GitLab'],
      goal: 'Elice LXP 서비스의 주요 학습 흐름을 E2E/UI/UX 관점에서 검증하고, 테스트 결과와 결함 정보를 팀이 다시 확인할 수 있도록 정리한 프로젝트입니다.',
      testScope: '팀 전체 범위는 API, API Security, E2E/UI/UX, Load 테스트였습니다. 저는 로그인, 학습 과목, 시험, 게시판 등 실제 사용자 흐름을 대상으로 E2E/UI/UX 테스트를 담당했습니다.',
      toolUsage: [
        'Python, pytest, Playwright로 사용자 흐름 기반 E2E/UI/UX 자동화 테스트를 구현했습니다.',
        'Allure 리포트로 실행 결과를 확인하고 QA 자동화 테스트 결과 보고서와 README를 작성했습니다.',
        'GitLab Webhook을 Jenkins에 연결하고, Jenkins에서 Allure 테스트 리포트를 확인할 수 있도록 연동했습니다.',
      ],
      role: [
        'E2E/UI/UX 테스트 담당',
        'QA 자동화 테스트 결과 보고서 작성',
        'README 작성',
        'GitLab Webhook·Jenkins Allure 연동 보조',
        'GitLab 브랜치 전략·PEP 8 코드 규칙 수립',
      ],
      results: [
        '과목 목록 자동 이동 현상 영향으로 실행 시점에 따라 Fail 5~7건이 발생',
      ],
      bugs: [],
      troubleshooting: [
        '[학습 과목] 클릭 후 기대한 학습 과목 목록 페이지 대신 SANDBOX 상세 페이지(최근 학습 과목 페이지)로 자동 이동하는 현상이 발생했습니다.',
        '최근 학습 과목 페이지로 이동한 경우에는 [클래스 홈] 버튼을 클릭한 뒤 학습 과목 카드의 [전체 보기] 버튼을 선택해 학습 과목 목록 페이지로 복귀하고, 해당 케이스는 Fail로 처리했습니다.',
        '학습 과목 목록 페이지로 복귀한 이유는 다음 테스트의 사전 조건이 학습 과목 목록 페이지이기 때문이며, 이후 SANDBOX 과목을 선택해 흐름을 이어갔습니다.',
      ],
      improvements: [
        '제한된 기간에는 핵심 사용자 흐름의 E2E/UI/UX 테스트를 우선 구현했습니다. 다음 프로젝트에서는 기간과 범위가 허용된다면 더 많은 핵심 기능까지 검증 범위를 넓히고 싶습니다.',
        '이번 프로젝트의 과제 중 하나인 Load 테스트에 실패했습니다. 이후에는 테스트 코드·JMeter 파일·실행 결과를 팀 전체가 중간부터 공유하고, 상호 리뷰 시간을 정해 품질을 함께 확인하고 싶습니다.',
        'GitLab Webhook, Jenkins, Allure 연동을 경험하며 CI 흐름을 이해했습니다. 다음에는 CD까지 연결해 보고 싶으며, 이를 위해 Docker Compose의 구성과 배포 흐름을 학습할 계획입니다.',
      ],
      automationTable: null,
      bugReport: {
        title: '중복 게시물 작성',
        meta: '게시판 글쓰기 · Chrome 테스트 결과 FAIL',
        reproduction: '게시판 글쓰기 페이지에서 필수 입력값을 작성한 뒤 [저장] 버튼을 1초 이내 연속 2회 이상 클릭하고 [글 목록] 버튼을 선택',
        expected: '작성한 게시글이 1개 생성됨',
        actual: '동일한 게시글이 2개 이상 생성됨',
        image: undefined,
        video: './project-assets/elice-duplicate-post.webm',
        mediaPlaceholder: undefined,
        alt: '저장 버튼 연속 클릭으로 동일 게시글이 여러 개 생성되는 재현 영상',
      },
      testResultEvidence: {
        title: 'Allure 실행 결과 확인',
        description: '이미지는 특정 Jenkins 실행의 Allure 리포트입니다. LOAD 테스트는 제외하여 Total 175건입니다.',
          image: './project-assets/elice-allure-run.png',
        alt: '특정 Jenkins 실행의 Allure 리포트 결과 화면',
      },
      resultMetrics: [
        { label: '전체 TC', value: '191건' },
        { label: 'E2E/UI/UX', value: '60건' },
        { label: 'PASS', value: '53건' },
        { label: 'FAIL', value: '7건' },
      ],
      ciEvidence: [
        {
          title: 'GitLab Webhook 연결',
          description: 'GitLab Push 이벤트가 Jenkins 작업을 호출하도록 Webhook을 연결했습니다. 공개용 이미지에서는 내부 URL과 토큰을 가렸습니다.',
          image: './project-assets/elice-gitlab-webhook-redacted.png',
          alt: '내부 URL과 토큰을 가린 GitLab Webhook 설정 화면',
        },
        {
          title: 'Jenkins Push Trigger 설정',
          description: 'GitLab 변경 사항이 Jenkins 실행으로 이어지도록 Push Events Trigger를 설정했습니다. 공개용 이미지에서는 내부 Webhook 주소를 가렸습니다.',
          image: './project-assets/elice-jenkins-trigger-redacted.png',
          alt: '내부 Webhook 주소를 가린 Jenkins GitLab Push Trigger 설정 화면',
        },
      ],
      jiraEvidence: {
        title: 'Jira 이슈 관리',
        description:
          'E2E/UI/UX 테스트에서 확인한 이슈를 Jira에 등록하고 진행 상태를 팀과 공유했습니다.',
        image: './project-assets/elice-jira-board.png',
        alt: 'E2E/UI/UX 테스트 이슈가 등록된 Jira 보드 화면',
      },
      postmanEvidence: {
        title: 'Postman API 사전조건 구성',
        description:
          'Postman으로 API 동작을 확인한 뒤, pytest 실행 전 시험 응시 상태를 초기화했습니다.',
        steps: [
          '재응시 허용 API 동작을 수동 검증',
          'pytest 실행 전 API 호출',
          '시험 응시 상태를 초기화해 동일 조건으로 시작',
        ],
        result: '특정 시험 응시 테스트를 반복 실행할 수 있는 사전조건을 구성했습니다.',
        image: './project-assets/elice-postman-reset-request.png',
        alt: 'Postman에서 시험 재응시 허용 API를 호출하는 화면',
      },
      teamConventions: {
        title: 'GitLab 브랜치 전략과 Python 코드 규칙',
        description: '프로젝트 시작 시 팀이 함께 따를 협업 기준을 정했습니다.',
        items: [
          {
            label: 'GitLab 브랜치 전략',
            detail:
              'main은 운영·배포 기준, dev는 개발 통합 기준으로 두고 feature/기능명과 fix/버그명 브랜치를 사용했습니다. Merge Request 후 팀장 머지로 dev에 반영하고, 릴리스 시점에는 검증된 변경 사항을 main에 반영했습니다.',
          },
          {
            label: 'Python 코드 규칙',
            detail:
              'PEP 8을 기준으로 코드 스타일을 통일했습니다. 변수명과 함수명은 소문자와 밑줄(_)을 사용하고, 클래스명은 각 단어의 첫 글자를 대문자로 작성했습니다. 변경되지 않는 상수는 대문자와 밑줄(_)을 사용했으며, 연산자 앞뒤에는 공백을 두되 기본값을 지정할 때는 = 앞뒤에 공백을 넣지 않았습니다.',
          },
        ],
        image: './project-assets/elice-team-conventions.png',
        alt: 'GitLab 브랜치 전략과 Python 코드 규칙을 함께 정리한 팀 문서 화면',
      },
      comparisonEvidence: [
        {
          title: '기대 결과 · 학습 과목 목록',
          description: '학습 과목 카드 목록이 표시되는 페이지',
          image: './project-assets/elice-course-list-expected.png',
          alt: '학습 과목 카드 목록이 표시된 기대 결과 페이지',
        },
        {
          title: '실제 결과 · SANDBOX 상세',
          description: '최근 학습 과목으로 자동 이동한 페이지',
          image: './project-assets/elice-course-list-actual.png',
          alt: 'SANDBOX 과목 상세 화면이 표시된 실제 결과 페이지',
        },
      ],
      troubleshootingEvidence: [
        {
          title: '최근 학습 페이지 자동 이동 대응 영상',
          description: '영상 11초에 [학습 과목] 클릭 시, 최근 학습 과목 페이지로 이동함\n 이를 확인하고 [클래스 홈] 클릭 -> 학습 과목 카드의 [전체 보기] 클릭하여 기대 결과 페이지로 이동 후 FAIL 처리',
          image: undefined,
          video: './project-assets/elice-exam-status-flow.webm',
          alt: '학습 과목 목록 자동 이동 대응 흐름을 재현한 영상',
        },
      ],
    },
  ],
}
