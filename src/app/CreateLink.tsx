'use client';

import { useFormState } from 'react-dom';

import { createLink } from '../app/actions/actions';

const initialState = {
  message: '',
  shortLink: '',
};

function CreateLink({ domain }: { domain: string }) {
  const [state, formAction] = useFormState(createLink, initialState);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="long-url">
          <div className="flex items-center">
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
            <span className="text-lg font-semibold">Shorten a long URL</span>
          </div>
        </label>
        <div>
          <input
            id="long-url"
            name="longUrl"
            type="text"
            required
            placeholder="Enter long link here"
            className="mt-4 block w-full rounded-lg border-2 border-gray-200 bor px-4 py-3 text-lg font-bold text-blue-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
          />
          <p aria-live="polite" className="text-red-600 mt-2">
            {state?.message}
          </p>
        </div>
      </div>
      {state?.shortLink && (
        <div className="mb-4">
          <label htmlFor="teeny-url">
            <span className="text-lg">Teeny URL</span>
          </label>
          <div>
            <input
              id="teeny-url"
              name="teenyUrl"
              type="text"
              value={process.env.NEXT_PUBLIC_BASE_PATH + '/' + state?.shortLink}
              className="mt-4 block w-full rounded-lg border-2 border-gray-200 bor px-4 py-3 text-lg font-bold text-blue-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
            />
          </div>
        </div>
      )}
      <div className="mb-10">
        <label htmlFor="alias" className="mb-3">
          <span className="text-lg">Customize your link</span>
        </label>
        <div>
          <input
            id="alias"
            type="text"
            placeholder="Enter alias"
            className="mt-4 block w-full rounded-lg border-2 border-gray-200 bor px-4 py-3 text-lg font-bold text-blue-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="items-center  gap-x-2 rounded-lg border border-transparent bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 w-full"
        >
          Shorten URL
        </button>
      </div>
    </form>
  );
}

export default CreateLink;
