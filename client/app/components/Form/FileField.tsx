import { useUser } from "@/Contexts/UserContext";
import { HttpRequestFile } from "@/helpers";
import { useState } from "react";
import styles from "./FileField.module.css";
import Spinner from "../Spinner";

type FileFieldProp = {
  id: string;
  title: string;
  onChange: (e: any) => void;
};

const FileField = ({ id, title, onChange }: FileFieldProp) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const uploadPicture = (e: any) => {
    setLoading(true);

    const request = HttpRequestFile(
      "/api/user/upload-media",
      [e],
      "overview",
      user?.id
    );

    request
      .then((e) => e.json())
      .then((e) => onChange(e.data?.urls?.[0]))
      .finally(() => setLoading(false));
  };

  const onChangeFile = (e: any) => {
    if (!e) return;

    uploadPicture(e.target.files[0]);
  };

  return (
    <div className="form-group">
      <label>{title} *</label>
      {loading && (
        <div className={styles.loading_container}>
          <Spinner size={20} borderWidth={1} />
          <span className="black-light-text font-size-14">
            Kindly wait to verify and upload the file.
          </span>
        </div>
      )}
      <input
        className="form-control"
        type="file"
        onChange={onChangeFile}
        id={id}
      />
    </div>
  );
};

export default FileField;
