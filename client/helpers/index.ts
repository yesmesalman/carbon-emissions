import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export type ValidationType = {
  field: string;
  message: string;
};

export function ApiResponse(
  success: any,
  message: any,
  data: any,
  validation: Boolean = false,
  validationArr: ValidationType[] = []
) {
  let statusResponse = {
    status: 400,
  };

  if (success) {
    statusResponse = {
      status: 200,
    };
  }

  if (validation) {
    statusResponse = {
      status: 200,
    };
    message = "VALIDATION_ERROR";
    data = validationArr;
  }

  return NextResponse.json({ success, message, data }, statusResponse);
}

export function Encrypt(e: any) {
  const base64String = btoa(e);
  return base64String;
}

export function Decrypt(e: any) {
  const base64String = atob(e);
  return base64String;
}

export function createToken(data: any) {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
    // expiresIn: "2h",
  });

  return token;
}

export function verifyToken(token: any) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded;
}

export function getLoggedInUser(token: any) {
  let user = verifyToken(token);

  return user?.user;
}

export function HttpRequest(url: string, body: object) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(body);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(url, requestOptions);
}

export function CleanValidationMessages() {
  var alerts = document.querySelectorAll(".alert");
  if (alerts) {
    for (var i = 0; i < alerts.length; i++) {
      alerts[i].classList.add("d-none");
    }
  }

  var elements = document.querySelectorAll(".invalid-feedback");
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  }

  var elements = document.querySelectorAll(".is-invalid");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("is-invalid");
  }
}

export function ShowValidations(errors: ValidationType[]) {
  CleanValidationMessages();

  errors.forEach((error) => {
    const element = document.getElementById(error?.field);

    var newElement = document.createElement("div");
    newElement.className = "invalid-feedback";
    newElement.textContent = error?.message;

    if (element) {
      element.classList.add("is-invalid");
      element?.parentNode?.insertBefore(newElement, element.nextSibling);
    }
  });
}

export function ShowWarningAlert(message: string) {
  const element = document.getElementsByClassName("alert-danger")[0];
  if (element) {
    element.innerHTML = message;
    element.classList.remove("d-none");
  }
}

export function ShowSuccessAlert(message: string) {
  const element = document.getElementsByClassName("alert-success")[0];
  if (element) {
    element.innerHTML = message;
    element.classList.remove("d-none");
  }
}

export function saveInLocalStorage(key: string, e: any) {
  localStorage.setItem(key, JSON.stringify(e));
}

export function getFromLocalStorage(key: string) {
  var retrieved = localStorage.getItem(key);

  if (retrieved !== null) {
    return JSON.parse(retrieved);
  } else {
    return undefined;
  }
}

export function NonAuthenticatedScreen(router: any) {
  const CONFIG = getFromLocalStorage("CONFIG");

  if (CONFIG) {
    return router.push("/dashboard");
  }
}

export function AuthenticatedScreen(router: any) {
  const CONFIG = getFromLocalStorage("CONFIG");

  if (!CONFIG) {
    return router.push("/login");
  }
}

export function PerformLogout(router: any) {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.clear();
    return router.push("/login");
  }
}
