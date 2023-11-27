import { HttpRequest, generateRandomString } from "@/helpers";
import styles from "./Risks.module.css";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RisksTypeProp } from "@/app/api/details/risks-type/route";

type RiskProp = {
  id: string;
  type: string;
  description: string;
  mitigation: string;
  saved?: boolean;
};

const Risks = (params: any) => {
  const { setRisks: setRisksTypesParent } = params;
  const [risksTypes, setRisksTypes] = useState<RisksTypeProp[]>([]);

  const [risks, setRisks] = useState<RiskProp[]>([]);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/details/risks-type", {});

      request.then((e) => e.json()).then((e) => setRisksTypes(e.data));
    };

    return getData();
  }, []);

  const onPressAddNewRisk = () => {
    setRisks((e) => [
      ...e,
      {
        id: generateRandomString(10),
        type: "",
        description: "",
        mitigation: "",
        saved: false,
      },
    ]);
  };

  const onPressSave = (id: any) => {
    updateItemValue(id, "saved", true);
    setRisksTypesParent(risks);
  };

  const onPressClose = (e: string) => {
    setRisks((prevItems) => prevItems.filter((item) => item.id !== e));
  };

  const updateItemValue = (itemId: string, key: string, value: any) => {
    setRisks((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, [key]: value } : item
      )
    );
  };

  return (
    <div className={`${styles.risks_container} mt-4`}>
      <div className={styles.risks_header}>
        <div className={styles.risks_header_row}>
          <div className={styles.risks_header_column_risk_type}>
            <span className="text-white font-size-12">Risk Type</span>
          </div>
          <div className={styles.risks_header_column_risk_description}>
            <span className="text-white font-size-12">Description</span>
          </div>
          <div className={styles.risks_header_column_risk_mitigation_strategy}>
            <span className="text-white font-size-12">Mitigation strategy</span>
          </div>
          <div className={styles.risks_header_column_risk_actions}>
            <span className="text-white font-size-12">Actions</span>
          </div>
        </div>
      </div>
      {risks.map((r, index) => (
        <div key={r.id} className={styles.risks_row}>
          <div className={styles.risks_column_risk_type}>
            {risks[index].saved ? (
              <span>
                {risksTypes.find((e) => e.id === Number(risks[index].type))
                  ? risksTypes.find((e) => e.id === Number(risks[index].type))
                      ?.name
                  : "Select"}
              </span>
            ) : (
              <select
                className="form-control font-size-12"
                onChange={(e) => updateItemValue(r.id, "type", e.target.value)}
              >
                <option key={`risks-type-0`} value={""}>
                  Select Risk Type
                </option>
                {risksTypes.map((r) => (
                  <option key={`risks-type-${r.id}`} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className={styles.risks_column_risk_description}>
            {risks[index].saved ? (
              <span>{risks[index].description}</span>
            ) : (
              <textarea
                onChange={(e) =>
                  updateItemValue(r.id, "description", e.target.value)
                }
                className="form-control"
                rows={2}
              >
                {risks[index].description}
              </textarea>
            )}
          </div>
          <div className={styles.risks_column_risk_mitigation_strategy}>
            {risks[index].saved ? (
              <span>{risks[index].mitigation}</span>
            ) : (
              <textarea
                onChange={(e) =>
                  updateItemValue(r.id, "mitigation", e.target.value)
                }
                className="form-control"
                rows={2}
              >
                {risks[index].mitigation}
              </textarea>
            )}
          </div>
          <div className={styles.risks_column_risk_actions}>
            {risks[index].saved === false ? (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => onPressSave(r.id)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary ml-2"
                  onClick={() => onPressClose(r.id)}
                >
                  Close
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => updateItemValue(r.id, "saved", false)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
      <div className={`${styles.risks_row} ${styles.risks_row_btn}`}>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onPressAddNewRisk}
        >
          <FaPlus /> Add new Risk
        </button>
      </div>
    </div>
  );
};

export default Risks;
