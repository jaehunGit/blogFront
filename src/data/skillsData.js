import HtmlLogo from "../assets/images/htmlLogo.png";
import JsLogo from "../assets/images/javascriptLogo.png";
import ReactLogo from "../assets/images/reactLogo.png";
import JQueryLogo from "../assets/images/jqueryLogo.png";
import JavaLogo from "../assets/images/javaLogo.png";
import JavaSpringLogo from "../assets/images/javaspringLogo.png";
import MySQLLogo from "../assets/images/mysqlLogo.png";
import OracleDBLogo from "../assets/images/oracleLogo.png";
import GitLogo from "../assets/images/gitLogo.png";
import SVNLogo from "../assets/images/svnLogo.png";
import JiraLogo from "../assets/images/jiraLogo.png";
import BitbucketLogo from "../assets/images/bitbucketLogo.png";

export const frontendSkills = [
  {
    title: "HTML/CSS",
    imageSrc: HtmlLogo,
    items: [
      "원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.",
      "빌드시스템(Gulp)과 템플릿 엔진(ejs, jade)의 사용이 가능합니다.",
      "Css 최신 문법이 숙지되어 있고 Css 프리프로세서 Sass를 사용할 수 있습니다.",
    ],
  },
  {
    title: "JavaScript",
    imageSrc: JsLogo,
    items: [
      "기본적인 데이터 구조와 알고리즘을 이해하고 있습니다.",
      "모던 JavaScript 프레임워크와 라이브러리를 사용할 수 있습니다. (React)",
      "브라우저 개발자 도구를 활용하여 디버깅할 수 있습니다.",
    ],
  },
  {
    title: "React",
    imageSrc: ReactLogo,
    items: [
      "컴포넌트 기반 아키텍처를 이해하고 있습니다.",
      "상태 관리(State Management)를 위해 useState 및 useReducer 훅을 사용할 수 있습니다.",
      "리액트 라우터(React Router)를 사용하여 SPA 내에서 페이지 전환을 구현할 수 있습니다.",
    ],
  },
  {
    title: "jQuery",
    imageSrc: JQueryLogo,
    items: [
      "DOM 조작을 위해 jQuery의 다양한 메서드를 사용할 수 있습니다.",
      "이벤트 핸들링을 jQuery로 간편하게 구현할 수 있습니다.",
      "AJAX 요청을 jQuery로 처리하여 비동기 통신을 구현할 수 있습니다.",
    ],
  },
];

export const backendSkills = [
  {
    title: "Java",
    imageSrc: JavaLogo,
    items: [
      "객체 지향 프로그래밍 원칙에 따라 코드를 작성할 수 있습니다.",
      "Java 8 이상의 최신 기능을 활용하여 코드를 작성할 수 있습니다.",
      "멀티스레딩과 동시성 제어에 대한 기본적인 이해와 사용 경험이 있습니다.",
    ],
  },
  {
    title: "Java Spring",
    imageSrc: JavaSpringLogo,
    items: [
      "Spring Framework를 사용한 애플리케이션 개발 경험이 있습니다.",
      "Spring Boot를 사용하여 웹 애플리케이션을 구축할 수 있습니다.",
      "JPA를 사용한 ORM(Object-Relational Mapping) 구현 경험이 있습니다.",
    ],
  },
  {
    title: "SQL (MySQL)",
    imageSrc: MySQLLogo,
    items: [
      "기본적인 SQL 쿼리를 작성하고 데이터를 조작할 수 있습니다.",
      "데이터베이스 스키마를 설계하고 관계형 데이터베이스 구조를 이해합니다.",
      "JOIN, 서브쿼리 등 다양한 SQL 구문을 활용할 수 있습니다.",
    ],
  },
  {
    title: "OracleDB",
    imageSrc: OracleDBLogo,
    items: [
      "Oracle Database에서 SQL을 사용하여 데이터를 관리할 수 있습니다.",
      "데이터베이스 테이블과 관계를 설계하고 생성할 수 있습니다.",
      "기본적인 백업과 복구 절차를 이해하고 실행할 수 있습니다.",
    ],
  },
];

export const toolsSkills = [
  {
    title: "Git",
    imageSrc: GitLogo, // Git 로고 이미지 경로
    items: [
      "Git을 사용하여 소스 코드 버전 관리를 할 수 있습니다.",
      "브랜치를 활용한 기능 개발 및 코드 병합 경험이 있습니다.",
      "커밋 메시지 작성 규칙을 준수하여 기록을 남길 수 있습니다.",
    ],
  },
  {
    title: "SVN",
    imageSrc: SVNLogo, // SVN 로고 이미지 경로
    items: [
      "SVN을 사용하여 버전 관리를 할 수 있습니다.",
      "브랜치와 태그를 활용한 코드 관리 경험이 있습니다.",
      "SVN 서버와 클라이언트 설정 및 사용 경험이 있습니다.",
    ],
  },
  {
    title: "Jira",
    imageSrc: JiraLogo, // Jira 로고 이미지 경로
    items: [
      "Jira를 사용하여 프로젝트 이슈 및 작업을 관리할 수 있습니다.",
      "백로그, 스프린트, 칸반 보드를 활용한 애자일 개발 경험이 있습니다.",
      "이슈 트래킹과 보고서를 통해 프로젝트 진행 상황을 추적할 수 있습니다.",
    ],
  },
  {
    title: "Bitbucket",
    imageSrc: BitbucketLogo, // Bitbucket 로고 이미지 경로
    items: [
      "Bitbucket을 사용하여 소스 코드를 관리하고 협업할 수 있습니다.",
      "Pull Request를 통해 코드 리뷰와 병합 작업을 할 수 있습니다.",
      "프로젝트와 저장소를 관리하고 접근 권한을 설정할 수 있습니다.",
    ],
  },
];
