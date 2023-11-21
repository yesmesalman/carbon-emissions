import React, { useEffect, useState } from "react";
import styles from "./MultiLevelSelect.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { HttpRequest } from "@/helpers";
import Spinner from "../Spinner";

export type OptionProp = {
  label: string;
  value: number;
  childrens: OptionProp[];
};

type SelectProps = {
  title: string;
  subTitle?: string;
  dataUrl: string;
  onSelect: (option: OptionProp | undefined) => void;
  id?: string;
};

const deSelectAllSelect = () => {
  const elements = document.querySelectorAll(".multi-level-select select");

  elements.forEach((selectElement) => {
    selectElement.value = "";
  });
};

const MultiLevelSelect = (props: SelectProps) => {
  const { title, subTitle, dataUrl, onSelect, id } = props;
  const [titles, setTitles] = useState<string[]>();
  const [selectionTree, setSelectionTree] = useState<OptionProp[][]>([]);
  const [loading, setLoading] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionProp | undefined>(
    undefined
  );

  useEffect(() => {
    const getData = () => {
      if (!showContainer) return;

      setLoading(true);
      const request = HttpRequest(dataUrl, {});

      request
        .then((e) => e.json())
        .then((e) => {
          setSelectionTree([e?.data]);
          setTitles([title]);
        })
        .finally(() => {
          setTimeout(() => setLoading(false), 1500);
        });
    };

    return getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUrl, showContainer]);

  const onSelectOption = (value: number, index: number) => {
    const option = selectionTree[index].find((x) => x.value === value);

    if (option?.childrens && option?.childrens.length > 0) {
      setSelectedOption(undefined);
      setTitles([...titles, option.label]);

      let updatedTree = [...selectionTree];
      updatedTree.length = index + 1;
      updatedTree = [...updatedTree, option.childrens];
      return setSelectionTree(updatedTree);
    } else {
      setSelectedOption(option);
      onSelect(option);
      return closeContainer();
    }
  };

  const closeContainer = () => {
    deSelectAllSelect();
    // setSelectedOption(undefined);
    setShowContainer(false);
  };

  return (
    <>
      <div
        className={`d-flex flex-column multi-level-select ${styles.select_container}`}
        style={{ width: showContainer ? 500 : 0 }}
      >
        <div
          onClick={closeContainer}
          className={`d-flex flex-column justify-content-center ${styles.select_container_header}`}
        >
          <AiOutlineClose size="28" />
        </div>
        <div
          className={`d-flex flex-column p-4 ${styles.select_content_container}`}
        >
          {title && <h5>{title}</h5>}
          {subTitle && <p>{subTitle}</p>}

          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          ) : (
            <>
              {selectionTree.map((e, index) => (
                <div className="row" key={`rows-${index}`}>
                  <div className="col">
                    <div className="form-group mt-4">
                      <label>{titles?.[index]} *</label>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          onSelectOption(Number(e.target.value), index)
                        }
                      >
                        <option key={`option-${index}`} value="">
                          Select
                        </option>
                        {e.map((o, i) => (
                          <option key={`option-${index}-${i}`} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          className={`d-flex justify-content-end overflow-hidden ${styles.select_container_footer}`}
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={closeContainer}
          >
            Close
          </button>
        </div>
      </div>
      <select
        className={`form-control ${selectedOption ? "text-green" : ""}`}
        onFocus={(e) => setShowContainer(true)}
        id={id}
      >
        <option value="">
          {selectedOption ? selectedOption.label : "Select Option"}
        </option>
      </select>
    </>
  );
};

export default MultiLevelSelect;
