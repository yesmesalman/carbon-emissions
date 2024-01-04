"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AuthenticatedScreen,
  GetProjectPINScreen,
  HttpRequest,
} from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import Button from "@/app/components/Form/Button";
import styles from "./documents.module.css";
import FileField from "@/app/components/Form/FileField";
import { useUser } from "@/Contexts/UserContext";

type DocumentProp = {
  title: string;
  document: string;
  edit: boolean;
  check_errors: boolean;
  saved: boolean;
};

const DEFAULT_DOCUMENT = {
  title: "",
  document: "",
  edit: true,
  check_errors: false,
  saved: false,
};

const OverviewPage = () => {
  const { user } = useUser();
  const project_id = GetProjectPINScreen();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [projectDocuments, setProjectDocuments] = useState<DocumentProp[]>([]);
  const [projectDocumentError, setProjectDocumentError] = useState(false);

  const [companyDocuments, setCompanyDocuments] = useState<DocumentProp[]>([]);
  const [companyDocumentError, setCompanyDocumentError] = useState(false);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressClose = () => {
    router.push("/portfolio/project");
  };

  const goToNextStep = useCallback(() => {
    return router.push(`/portfolio/pdd?project=${GetProjectPINScreen()}`);
  }, [router]);

  const saveDocuments = () => {
    setLoading(true);

    const request = HttpRequest("/api/project/documents", {
      token: user?.token,
      project_id,
      documents: [
        ...projectDocuments.map((e) => ({
          title: e.title,
          type: "project",
          document: e.document,
        })),
        ...companyDocuments.map((e) => ({
          title: e.title,
          type: "project",
          document: e.document,
        })),
      ],
    });

    request
      .then((e) => e.json())
      .then(() => goToNextStep())
      .finally(() => setLoading(false));
  };

  const onPressNextStep = async () => {
    setProjectDocumentError(false);
    setCompanyDocumentError(false);

    if (projectDocuments.filter((e) => e.saved).length === 0) {
      return setProjectDocumentError(true);
    }

    if (companyDocuments.filter((e) => e.saved).length === 0) {
      return setCompanyDocumentError(true);
    }

    saveDocuments();
  };

  const onPressAddCompanyDocument = () => {
    setCompanyDocuments((prevState) => [...prevState, DEFAULT_DOCUMENT]);
  };

  const updateCompanyDocument = (
    key: string,
    value: string | boolean,
    index: number
  ) => {
    setCompanyDocuments((prevState) =>
      prevState.map((e, i) => (i === index ? { ...e, [key]: value } : e))
    );
  };

  const onPressSaveCompanyDocument = (e: DocumentProp, index: number) => {
    if (!e.title || !e.document) {
      return updateCompanyDocument("check_errors", true, index);
    }

    updateCompanyDocument("edit", false, index);
    updateCompanyDocument("check_errors", true, index);
    updateCompanyDocument("saved", true, index);
    return;
  };

  const onPressRemoveCompanyDocument = (index: number) => {
    setCompanyDocuments((prevState) => prevState.filter((_, i) => i !== index));
  };

  const onPressAddDocument = () => {
    setProjectDocuments((prevState) => [...prevState, DEFAULT_DOCUMENT]);
  };

  const updateDocument = (
    key: string,
    value: string | boolean,
    index: number
  ) => {
    setProjectDocuments((prevState) =>
      prevState.map((e, i) => (i === index ? { ...e, [key]: value } : e))
    );
  };

  const onPressSaveDocument = (e: DocumentProp, index: number) => {
    if (!e.title || !e.document) {
      return updateDocument("check_errors", true, index);
    }

    updateDocument("edit", false, index);
    updateDocument("check_errors", true, index);
    updateDocument("saved", true, index);
    return;
  };

  const onPressRemoveDocument = (index: number) => {
    setProjectDocuments((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <Screen activeTabIndex={2}>
      <h3>Upload and verify your documents</h3>
      <h6>
        Here you can share and verify important documents related to your
        project and company.
      </h6>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4 mt-4">
        <div className="row pt-2">
          <h6>Project documents</h6>
          {projectDocumentError && (
            <span className="text-red mb-2 font-size-14">
              Please add any document
            </span>
          )}
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Document(s)</th>
                  <th scope="col">..</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {projectDocuments.map((p, index) =>
                  p.edit ? (
                    <tr key={`doc-${index}`}>
                      <td>
                        <div className="form-group">
                          <label>Title</label>
                          <input
                            className={`form-control ${
                              p.check_errors && !p.title && "is-invalid"
                            }`}
                            type="text"
                            onChange={(e) =>
                              updateDocument("title", e.target.value, index)
                            }
                            value={p.title}
                          />
                        </div>
                      </td>
                      <td>
                        <FileField
                          id={`doc-${index}`}
                          title="Document file"
                          className={`form-control ${
                            p.check_errors && !p.document && "is-invalid"
                          }`}
                          onChange={(e) => updateDocument("document", e, index)}
                        />
                      </td>
                      <td className="align-bottom text-end">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => onPressSaveDocument(p, index)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => onPressRemoveDocument(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={`doc-${index}`}>
                      <td className="align-middle">{p.title}</td>
                      <td className="align-middle">
                        <a href={p.document} target="_blank">
                          Document
                        </a>
                      </td>
                      <td className="align-bottom text-end">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => updateDocument("edit", true, index)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            {projectDocuments.length < 5 && (
              <button className="btn btn-primary" onClick={onPressAddDocument}>
                Add Document
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="row pb-4 mt-4">
        <div className="row pt-2">
          <h6>Company documents</h6>
          {companyDocumentError && (
            <span className="text-red mb-2 font-size-14">
              Please add any document
            </span>
          )}
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Document(s)</th>
                  <th scope="col">..</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {companyDocuments.map((p, index) =>
                  p.edit ? (
                    <tr key={`doc-${index}`}>
                      <td>
                        <div className="form-group">
                          <label>Title</label>
                          <input
                            className={`form-control ${
                              p.check_errors && !p.title && "is-invalid"
                            }`}
                            type="text"
                            onChange={(e) =>
                              updateCompanyDocument(
                                "title",
                                e.target.value,
                                index
                              )
                            }
                            value={p.title}
                          />
                        </div>
                      </td>
                      <td>
                        <FileField
                          id={`doc-${index}`}
                          title="Document file"
                          className={`form-control ${
                            p.check_errors && !p.document && "is-invalid"
                          }`}
                          onChange={(e) =>
                            updateCompanyDocument("document", e, index)
                          }
                        />
                      </td>
                      <td className="align-bottom text-end">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => onPressSaveCompanyDocument(p, index)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => onPressRemoveCompanyDocument(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={`doc-${index}`}>
                      <td className="align-middle">{p.title}</td>
                      <td className="align-middle">
                        <a href={p.document} target="_blank">
                          Document
                        </a>
                      </td>
                      <td className="align-bottom text-end">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            updateCompanyDocument("edit", true, index)
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            {projectDocuments.length < 5 && (
              <button
                className="btn btn-primary"
                onClick={onPressAddCompanyDocument}
              >
                Add Document
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="f-flex flex-row mt-4">
        <button
          onClick={onPressClose}
          type="button"
          className="btn btn-outline-primary"
        >
          Close
        </button>
        <Button
          className="btn btn-primary ml-8"
          onClick={onPressNextStep}
          label="Next Step"
          loading={loading}
          disabled
        />
      </div>
    </Screen>
  );
};

export default OverviewPage;
