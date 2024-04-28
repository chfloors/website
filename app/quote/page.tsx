export default function Quote() {
  return (
    <main>
      <div className="row pt-5">
        <h1 className="fs-4 text-center text-primary m-0 p-0">Get A Quote</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2">
          Let Us Know What Interests You
        </h2>
      </div>

      <form>
        <div className="row py-4">
          <div className="col-9 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control input-box"
                id="fullNameInput"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control input-box"
                id="emailInput"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control input-box"
                placeholder="Provide important details here..."
                id="contentInput"
                rows={3}
              ></textarea>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary mb-3">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}