"use client";

import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/Settings/Sidebar";
import {
  AuthenticatedScreen,
  GetLoggedInUser,
  HttpRequest,
  HttpRequestFile,
} from "@/helpers";
import { useRouter } from "next/navigation";
import styles from "./profile_settings.module.css";
import DEFAULT_IMAGE from "./../../../assets/images/DEFAULT.jpg";
import Image from "next/image";
import Spinner from "./../../components/Spinner";

const ProfileSettingsPage = () => {
  const user = GetLoggedInUser();
  const router = useRouter();
  const imageRef = useRef(null);

  const [profileImg, setProfileImg] = useState();
  const [loadingProfileImg, setLoadingProfileImg] = useState(false);

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
    const request = HttpRequestFile("/api/user/upload-media", [e]);

    request
      .then((e) => e.json())
      .then((e) => setProfileImg(e.data?.urls?.[0]))
      .finally(() => setLoadingProfileImg(false));
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
                            alt={user?.name}
                          />
                        ) : (
                          <Image src={DEFAULT_IMAGE} alt={user?.name} />
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
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@yahoo.com"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <button type="button" className="btn btn-primary">
                    Save Changes
                  </button>
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
