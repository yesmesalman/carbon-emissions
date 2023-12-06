import { useEffect, useState } from "react";
import Spinner from "../../Spinner";
import styles from "./TargetSelector.module.css";
import { MdOutlineClose } from "react-icons/md";
import { HttpRequest } from "@/helpers";
import {
  DevelopmentGoalType,
  DevelopmentGoalTargetType,
  DevelopmentGoalIndicatorType,
} from "@/app/api/benefits/get-goals/route";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export type ItemProp = {
  SDG: DevelopmentGoalType;
  target: DevelopmentGoalTargetType;
  plan: string;
  indicators?: DevelopmentGoalIndicatorType[];
};

export type TargetSelectorProp = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  developmentGoals: number[];
  onChange: (e: ItemProp) => void;
};

const TargetSelector = (props: TargetSelectorProp) => {
  const { show, setShow, title, developmentGoals, onChange } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DevelopmentGoalType[]>([]);
  const [goal, setGoal] = useState<DevelopmentGoalType>();
  const [target, setTarget] = useState<DevelopmentGoalTargetType>();
  const [plan, setPlan] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [selectedIndicators, setSelectedIndicators] = useState<
    DevelopmentGoalIndicatorType[]
  >([]);

  const [goalError, setGoalError] = useState<boolean>(false);
  const [targetError, setTargetError] = useState<boolean>(false);
  const [planError, setPlanError] = useState<boolean>(false);

  const clearForm = () => {
    setGoal(undefined);
    setTarget(undefined);
    setPlan("");
    setSearch("");
    setSelectedIndicators([]);
  };

  useEffect(() => {
    const getData = () => {
      if (!show) return;

      setLoading(true);
      const request = HttpRequest("/api/benefits/get-goals", {
        development_goals: developmentGoals,
      });

      request
        .then((e) => e.json())
        .then((e) => setData(e?.data))
        .finally(() => setLoading(false));
    };

    return getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const getTargets = (indicators: DevelopmentGoalIndicatorType[]) => {
    if (!search) return indicators;

    return indicators.filter((f) => f.name.toLowerCase().includes(search));
  };

  const closeContainer = () => {
    clearForm();
    setShow(false);
  };

  const addIndicator = (e: DevelopmentGoalIndicatorType) => {
    setSelectedIndicators((prevState) => {
      const selectedItemIndex = prevState.findIndex((x) => x.id === e.id);

      if (selectedItemIndex === -1) {
        return [...prevState, e];
      } else {
        return prevState.filter((item) => item.id !== e.id);
      }
    });
  };

  const onPressSave = () => {
    setGoalError(false);
    setTargetError(false);
    setPlanError(false);

    if (!goal) return setGoalError(true);
    if (!target?.id) return setTargetError(true);
    if (!plan) return setPlanError(true);

    onChange({
      SDG: { id: goal.id, name: goal.name },
      target: {
        id: target.id,
        name: target.name,
        development_goal_id: target.development_goal_id,
      },
      plan,
      indicators: selectedIndicators,
    });

    return closeContainer();
  };

  if (!show) return null;

  return (
    <div
      className={`d-flex flex-column multi-level-select ${styles.select_container}`}
      style={{ width: 500 }}
    >
      <div
        onClick={closeContainer}
        className={`d-flex flex-column justify-content-center ${styles.select_container_header}`}
      >
        <MdOutlineClose size="28" />
      </div>
      <div
        className={`d-flex flex-column p-4 ${styles.select_content_container}`}
      >
        {title && (
          <h4>
            <b>{title}</b>
          </h4>
        )}

        {loading ? (
          <div className="d-flex justify-content-center mt-4">
            <Spinner />
          </div>
        ) : (
          <div>
            <div className="form-group mt-4">
              <label>SDG</label>
              <select
                className={`form-control ${goalError && "is-invalid"}`}
                onChange={(e) => {
                  const value = e.target.value;
                  setGoal(data.find((e) => e.id === Number(value)));
                }}
              >
                <option value="">Select</option>
                {data?.map((e) => (
                  <option key={`d-goal-${e.id}`} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
              {goalError && (
                <div className="invalid-feedback">Please select SDG</div>
              )}
            </div>

            {goal && goal.targets && (
              <div className="form-group mt-4">
                <label>Target</label>
                <select
                  className={`form-control ${targetError && "is-invalid"}`}
                  onChange={(e) => {
                    const value = e.target.value;
                    setTarget(
                      goal.targets?.find((e) => e.id === Number(value))
                    );
                  }}
                >
                  <option value="">Select</option>
                  {goal.targets.map((t) => (
                    <option key={`target-${t.id}`} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
                {targetError && (
                  <div className="invalid-feedback">Please select Target</div>
                )}
              </div>
            )}

            {target && (
              <>
                <div className="form-group mt-4">
                  <label>How you plan to achieve it *</label>
                  <textarea
                    className={`form-control ${planError && "is-invalid"}`}
                    rows={3}
                    id="description"
                    onChange={(e) => setPlan(e.target.value)}
                  >
                    {plan}
                  </textarea>
                  {planError && (
                    <div className="invalid-feedback">
                      Please write your Plan
                    </div>
                  )}
                </div>
                {target.indicators && (
                  <>
                    <div className="form-group mt-4">
                      <label>Indicators</label>
                      <label className="warning-text">
                        Choose indicators to measure your results
                      </label>
                    </div>
                    <hr />
                    <div className="form-group mt-4">
                      <input
                        className="form-control"
                        placeholder="Search..."
                        value={search}
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </>
                )}
                {target.indicators && (
                  <div className="mt-4">
                    {getTargets(target.indicators).map((i) => {
                      const selectedIndicator = selectedIndicators.find(
                        (si) => si.id === i.id
                      );
                      return (
                        <div
                          key={`indicator-${i.id}`}
                          className={styles.indicator}
                        >
                          <p className={styles.indicator_title}>{i.name}</p>
                          <p className={styles.indicator_description}>
                            {i.description}
                          </p>
                          {i.category && (
                            <p className={styles.indicator_categories}>
                              <b>Category: </b>
                              <span>{i.category}</span>
                            </p>
                          )}
                          <div>
                            {selectedIndicator ? (
                              <button
                                className="btn btn-success ml-4"
                                style={{
                                  padding: "4px 8px",
                                }}
                                onClick={() => addIndicator(i)}
                              >
                                <FaCheck size={12} />
                                <span className="font-size-12 ml-2">Added</span>
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                style={{
                                  padding: "4px 8px",
                                }}
                                onClick={() => addIndicator(i)}
                              >
                                <FaPlus size={12} />
                                <span className="font-size-12 ml-2">
                                  Add Indicator
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            <div
              className={` overflow-hidden mt-4 ${styles.select_container_footer}`}
            >
              <div className={`d-flex justify-content-start`}>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={closeContainer}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-4"
                  onClick={onPressSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetSelector;
