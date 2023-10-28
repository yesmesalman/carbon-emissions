"use client";

import styles from "./Breadcrumb.module.css";
import { RxSlash } from "react-icons/rx";
import { useRouter } from "next/navigation";

type BreadcrumbType = {
  items: ItemProp[];
};

type ItemProp = {
  label: string;
  link: string;
};

const Breadcrumb = (props: BreadcrumbType) => {
  const router = useRouter();
  const { items } = props;
  return (
    <div className="container">
      <h4 className={styles.breadcrumb_text}>
        {items.map((e, i) => {
          const lastItem = i === items.length - 1;

          return (
            <>
              <a
                key={`bc-${e.label}`}
                href="#!"
                onClick={() => {
                  if (!lastItem && e.link !== "") router.push(e.link);
                }}
                className={lastItem ? styles.active : ""}
              >
                {e.label}
              </a>
              {!lastItem && (
                <span>
                  <RxSlash size="20" />
                </span>
              )}
            </>
          );
        })}
      </h4>
    </div>
  );
};

export default Breadcrumb;
