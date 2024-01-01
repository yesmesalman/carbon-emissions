"use client";

import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/Settings/Sidebar";
import {
  AuthenticatedScreen,
  CleanValidationMessages,
  HttpRequest,
  HttpRequestFile,
  ShowValidations,
  ShowWarningAlert,
  saveInLocalStorage,
} from "@/helpers";
import { useRouter } from "next/navigation";
import styles from "./profile_settings.module.css";
import DEFAULT_IMAGE from "./../../../assets/images/DEFAULT.jpg";
import Image from "next/image";
import Spinner from "./../../components/Spinner";
import { useUser } from "./../../../Contexts/UserContext";
import Button from "@/app/components/Form/Button";

const ProfileSettingsPage = () => {
  const { user, updateUser } = useUser();
  const router = useRouter();
  const imageRef = useRef(null);

  const [profileImg, setProfileImg] = useState("");
  const [loadingProfileImg, setLoadingProfileImg] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user?.name ?? "");
      setUsername(user?.username ?? "");
      setProfileImg(user?.profile_picture ?? "");
    }
  }, [user]);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressChangeImage = () => {
    if (loadingProfileImg) return;

    // @ts-ignore
    imageRef.current.click();
  };

  const onChangeFile = (e: any) => {
    if (!e) return;

    setLoadingProfileImg(true);
    uploadPicture(e.target.files[0]);
  };

  const uploadPicture = (e: any) => {
    const request = HttpRequestFile(
      "/api/user/upload-media",
      [e],
      "user",
      user?.id
    );

    request
      .then((e) => e.json())
      .then((e) => {
        const picture_url = e.data?.urls?.[0];
        updateUser({
          profile_picture: picture_url,
        });

        setProfileImg(picture_url);
      })
      .finally(() => setLoadingProfileImg(false));
  };

  const updateName = (e: any) => {
    updateUser({
      name: e,
    });
    setName(e);
  };

  const onPressSaveChanges = () => {
    setLoading(true);

    const request = HttpRequest("/api/profile/edit-profile", {
      token: user?.token,
      name: name,
      username: username,
      profile_picture: profileImg,
    });

    request
      .then((e) => e.json())
      .then((e) => {
        CleanValidationMessages();

        if (e?.message === "VALIDATION_ERROR") {
          return ShowValidations(e?.data);
        }

        if (!e?.success) {
          return ShowWarningAlert(e?.message);
        }

        saveInLocalStorage("CONFIG", e?.data);
      })
      .catch((e) => {
        return ShowWarningAlert(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pt-4">
      <div className="container">
        <div className="mb-5">
          <Breadcrumb
            items={[
              { label: "Dashboard", link: "/dashboard" },
              { label: "Settings", link: "" },
              { label: "Profile Settings", link: "" },
            ]}
          />
        </div>
        <div className="d-flex align-items-start">
          <Sidebar />
          <div className="tab-content w-100">
            <div className="tab-pane fade show active">
              <h3 className="fw-bold">Profile Settings</h3>
              <input
                type="file"
                ref={imageRef}
                style={{ display: "none" }}
                onChange={onChangeFile}
              />
              <div
                className={`${styles.profile_picture_row} mt-4`}
                onClick={onPressChangeImage}
              >
                <div className={styles.profile_picture_content_container}>
                  <span className="font-size-16 black-light-text font-bold">
                    Profile Picture
                  </span>
                  <span className="font-size-10 black-light-text">
                    Upload your profile picture (recommended dimensions 400x400)
                  </span>
                </div>
                <div className={styles.profile_picture_container}>
                  <div className={styles.profile_picture}>
                    {loadingProfileImg ? (
                      <Spinner />
                    ) : (
                      <>
                        {profileImg ? (
                          <Image
                            src={profileImg}
                            width="80"
                            height="80"
                            alt={user?.name ?? ""}
                          />
                        ) : (
                          <Image src={DEFAULT_IMAGE} alt={user?.name ?? ""} />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <form>
                <div className="form-group mb-2 mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => updateName(e.target.value)}
                    id="name"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@yahoo.com"
                    value={user?.email}
                    disabled
                    id="email"
                  />
                </div>
                <div className="form-group mb-5 mt-4">
                  <Button
                    type="button"
                    className="btn btn-primary"
                    label="Save Changes"
                    onClick={onPressSaveChanges}
                    loading={loading || loadingProfileImg}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
