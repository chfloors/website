"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { emailHandleSubmit } from "../lib/sendEmail";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form onSubmit={() => setSubmitted(true)} action={emailHandleSubmit}>
      <div className="row py-4">
        <div className="col-9 d-flex flex-column mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control input-box"
              id="fullNameInput"
              name="fullNameInput"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control input-box"
              id="emailInput"
              name="emailInput"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control input-box"
              placeholder="Provide important details here..."
              id="contentInput"
              name="contentInput"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="mb-3 ms-auto">
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
  );
}