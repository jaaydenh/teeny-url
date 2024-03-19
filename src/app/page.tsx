import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-[#2a6eff] to-[#123070f4]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="rounded-lg bg-white text-dark mb-0">
          <div className="p-0">
            <div
              id="homepage_create_tinyurl_form"
              role="dialog"
              className="py-4 px-5"
            >
              <form>
                <div className="mb-4">
                  <label htmlFor="long-url">
                    <div
                      className="flex items-center"
                      style={{ flex: '0 0 22px' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="20"
                        height="18"
                        className="mr-2"
                      >
                        <path
                          d="M10.27,6.64l2.88-2.88A10,10,0,0,1,24.59,1.35a11.54,11.54,0,0,1,6.05,6.06,10,10,0,0,1-2.4,11.44l-2.88,2.89.07-6.15A5.88,5.88,0,0,0,26.71,9.1,7.48,7.48,0,0,0,22.9,5.29a5.86,5.86,0,0,0-6.48,1.28ZM3.76,13.15,6.3,10.6A3.76,3.76,0,0,0,7.38,13l1.31,1.3-1.9,1.9a5.91,5.91,0,0,0-1.5,6.71A7.48,7.48,0,0,0,9.1,26.71a5.91,5.91,0,0,0,6.71-1.5l1.91-1.91L19,24.61a3.53,3.53,0,0,0,1,.7h0a3.92,3.92,0,0,0,1.16.35l.24,0-2.55,2.55A10,10,0,0,1,7.41,30.65a11.54,11.54,0,0,1-6-6.06A10,10,0,0,1,3.76,13.15Z"
                          className="a"
                        ></path>
                        <path
                          d="M17,19.21l-3.84,3.9c-2.5,2.54-6.7-1.89-4.27-4.35l3.83-3.9L9.22,11.3a1.07,1.07,0,0,1,0-1.5,1,1,0,0,1,.67-.31l11.35-.12a1,1,0,0,1,1.17,1.21l-.13,11.58a1,1,0,0,1-1.17.91,1.09,1.09,0,0,1-.6-.31Z"
                          className="b"
                        ></path>
                      </svg>
                      <span className="text-lg">Shorten a long URL</span>
                    </div>
                  </label>
                  <div>
                    <input
                      id="long-url"
                      type="text"
                      aria-label="Long URL"
                      placeholder="Enter long link here"
                      className="mt-4 block w-full rounded-lg border-2 border-gray-200 bor px-4 py-3 text-lg font-bold text-blue-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    />
                  </div>
                  <span
                    role="alert"
                    className="text-break"
                    data-test-id="homepage_create_tinyurl_validation_form"
                    style={{ display: 'none' }}
                  ></span>
                  <span
                    role="alert"
                    className="text-break"
                    data-test-id="homepage_create_tinyurl_validation_url"
                    style={{ display: 'none' }}
                  ></span>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="alias"
                    className="font-weight-seminormal mb-3"
                  >
                    <i className="fa-solid fa-fw fa-wand-magic-sparkles"></i>
                    <span className="ml-1">Customize your link</span>
                  </label>
                  <div className="mb-0">
                    <div className="col-md-7 mb-2 mb-md-0">
                      <div
                        dir="auto"
                        className="v-select v-select--tinyurl vs--single vs--searchable"
                        id="domain"
                      >
                        <div
                          id="vs2__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs2__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <span className="vs__selected">tinyurl.com</span>
                            <input
                              aria-autocomplete="list"
                              aria-labelledby="vs2__combobox"
                              aria-controls="vs2__listbox"
                              type="search"
                              autoComplete="off"
                              className="vs__search"
                            />
                          </div>
                          <div className="vs__actions">
                            <button
                              type="button"
                              title="Clear Selected"
                              aria-label="Clear Selected"
                              className="vs__clear"
                              style={{ display: 'none' }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                              >
                                <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                              </svg>
                            </button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="10"
                              role="presentation"
                              className="vs__open-indicator"
                            >
                              <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                            </svg>
                            <div
                              className="vs__spinner"
                              style={{ display: 'none' }}
                            >
                              Loading...
                            </div>
                          </div>
                        </div>
                        <ul
                          id="vs2__listbox"
                          role="listbox"
                          style={{ display: 'none', visibility: 'hidden' }}
                        ></ul>
                      </div>
                      <span
                        role="alert"
                        className="text-break"
                        id="homepage_create_tinyurl_validation_domain"
                        style={{ display: 'none' }}
                      ></span>
                    </div>
                    <div className="col-md-5 mb-0">
                      <div>
                        <input
                          id="alias"
                          aria-label="Alias"
                          type="text"
                          placeholder="Enter alias"
                          className="toned-placeholder bg-transparent rounded-xl text-green py-4 is-invalid"
                        />
                      </div>
                      <span
                        role="alert"
                        className="text-break"
                        data-test-id="homepage_create_tinyurl_validation_alias"
                        style={{ display: 'block' }}
                      >
                        Alias is not available.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-0">
                  <button
                    data-test-id="home_shortener_btn_create"
                    type="submit"
                    className="btn btn-block font-weight-seminormal btn-xl btn-green"
                  >
                    Shorten URL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
