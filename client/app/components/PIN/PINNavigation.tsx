const tabs = [
  "Summary",
  "Details",
  "GHG emissions",
  "Co-benefits",
  "Viability",
];

type PINNaviagtionProp = {
  activeIndex: number;
};

const PINNaviagtion = (props: PINNaviagtionProp) => {
  const { activeIndex } = props;

  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab, index) => (
        <li key={`tab-${index}`} className="nav-item">
          <a
            className={`nav-link ${activeIndex >= index && "active"}`}
            href="#"
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PINNaviagtion;
