'use client';

import { useState, useEffect } from 'react';

import { deleteLink, getAllLinks } from '../actions/actions';

function EditLinks() {
  const [links, setLinks] = useState<[string, string][]>([]);
  const domain = process.env.NEXT_PUBLIC_BASE_PATH + '/';
  useEffect(() => {
    const updateLinks = async () => {
      const links = await getAllLinks();
      setLinks(links);
      console.log(links);
    };

    updateLinks();
  }, []);

  const handleDeleteLink = (link: string, index: number) => {
    deleteLink(link);

    // temporary reload as more time is needed to improve this
    window.location.reload();
  };

  return (
    <div className="mb-4">
      <label htmlFor="long-url">
        <div className="flex items-center">
          <span className="text-lg font-semibold">
            {links.map((link, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg mb-4 p-4 flex justify-between"
              >
                <div>
                  <div className="text-blue-600">
                    {domain}
                    {link[0]}
                  </div>
                  <div className="font-normal">{link[1]}</div>
                </div>
                <div>
                  {' '}
                  <button
                    onClick={() => handleDeleteLink(link[0], index)}
                    className="ml-8 gap-x-2 rounded-lg border border-transparent bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </span>
        </div>
      </label>
    </div>
  );
}

export default EditLinks;
