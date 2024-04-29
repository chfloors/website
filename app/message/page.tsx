"use client";

import { useState } from "react";
import { emailHandleSubmit } from "../lib/sendEmail";
import clsx from "clsx";

export default function Message() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{ minHeight: "100vh" }}>
      <div className="row py-5">
        <h1 className="fs-4 text-center text-primary m-0 p-0">Get In Touch</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2">
          Let us know your thoughts
        </h2>
      </div>

      <form onSubmit={() => setSubmitted(true)} action={emailHandleSubmit}>
        <div className="row py-4">
          <div className="col-9 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control input-box"
                id="fullNameInput"
                placeholder="Full Name"
                name="fullNameInput"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control input-box"
                id="emailInput"
                placeholder="Email Address"
                name="emailInput"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control input-box"
                id="subjectInput"
                name="subjectInput"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control input-box"
                placeholder="Content"
                id="contentInput"
                name="contentInput"
                rows={3}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className={clsx("btn btn-primary mb-3", {
                  disabled: submitted,
                })}
              >
                {submitted ? "Sent!" : "Send"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
