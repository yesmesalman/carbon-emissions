import { useRouter } from "next/navigation";

type TabItem = {
  label: string;
  link: string;
};

export const ProjectTabs = [
  { label: "PIN", link: "/portfolio/project" },
  { label: "Overview", link: "/portfolio/overview" },
  { label: "Documents", link: "/portfolio/documents" },
  { label: "PDD", link: "/portfolio/pdd" },
  { label: "Registration", link: "/portfolio/registration" },
  { label: "Forwards", link: "/portfolio/forwards" },
];

export const PINTabs = [
  { label: "Summary", link: "/portfolio/project/summary" },
  { label: "Details", link: "/portfolio/project/details" },
  { label: "GHG emissions", link: "/portfolio/project/emissions" },
  { label: "Co-benefits", link: "/portfolio/project/benefits" },
  { label: "Viability", link: "/portfolio/project/viability" },
];

type PINNaviagtionProp = {
  activeIndex: number;
  tabs: TabItem[];
};

const PINNaviagtion = (props: PINNaviagtionProp) => {
  const router = useRouter();
  const { activeIndex, tabs } = props;

  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab, index) => (
        <li key={`tab-${index}`} className="nav-item">
          <a
            className={`nav-link ${activeIndex >= index && "active"}`}
            href="#!"
            onClick={() => router.push(tab.link)}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PINNaviagtion;
