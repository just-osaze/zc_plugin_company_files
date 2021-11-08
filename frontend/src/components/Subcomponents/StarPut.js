import { React, useState } from "react";
import { useHistory } from "react-router";

function StarPutFile({ id, file }) {
  const [addStar, SetAddStar] = useState(false);

  const PutHistory = useHistory();

  const handleFilePut = () => {
    fetch(`https://companyfiles.zuri.chat/api/v1/files/starFile/${id}`, {
      method: "PUT"
    }).then((res) => (res.status === 200 ? PutHistory.push("/starred") : null));
  };

  return addStar ? (
    <>
      <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
        <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
          {/* content */}
          <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-p-10">
            {/* header */}
            <div className="tw-text-center sm:tw-text-left">
              <h3 className="md:tw-text-xl tw-text-2xl tw-text-text-grey tw-font-semibold">
                Starred File
              </h3>
            </div>
            {/* body */}
            <div className="tw-relative tw-pt-3">
              <p className="tw-mt-3 tw-mb-4 tw-text-text-grey tw-text-sm tw-text-center sm:tw-text-left">
                Do you want to Star ${file} File?
              </p>
            </div>
            {/* footer */}
            <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-end tw-pt-4 tw-rounded-b">
              <button
                className="tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-5 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => SetAddStar(false)}
              >
                Cancel
              </button>
              <button
                className="tw-bg-green-400 tw-text-white active:tw-bg-emerald-600 tw-font-semibold tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-xlg tw-outline-none focus:tw-outline-none tw-mb-1 tw-ease-linear"
                type="button"
                onClick={() => {
                  handleFilePut();
                  SetAddStar(false);
                }}
              >
                Star File
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default StarPutFile;
