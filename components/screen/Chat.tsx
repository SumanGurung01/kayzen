"use client";

import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import React, { useRef, useState } from "react";

function Chat() {
  // progress bar width acc to step number
  const progress: Record<number, string> = {
    1: "w-[33%]",
    2: "w-[66%]",
    3: "w-[100%]",
  };

  // setup progress data
  const progressSteps = [
    {
      title: "Bot Creation",
      steps: ["Config the bot", "Prompt configuration"],
    },
    {
      title: "Data Resources",
      steps: ["Upload files", "Add URLs", "Enter raw text information"],
    },
    {
      title: "Deploy",
      steps: ["Perview", "Embed code"],
    },
  ];

  // track the step number
  const [step, setStep] = useState<number>(1);

  // collecting the urls
  const [urls, setUrls] = useState<String[]>([]);
  const urlRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex">
      <div className="flex-1">
        <div id="progress" className={`h-2 bg-pink-500 ${progress[step]}`} />

        <div className="p-10">
          {/* Step 1 */}

          <div
            id="step-1"
            className={`w-full max-w-[600px] rounded-lg bg-white p-10 ${step !== 1 ? "hidden" : ""}`}
          >
            <p className="text-3xl font-bold">Create a Bot</p>

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">Bot Name</p>
            <input
              type="text"
              placeholder="Enter a name"
              className="w-full rounded-xl border-2 border-zinc-500 p-4 outline-none"
            />

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">Description</p>
            <textarea className="text-area-scrollbar h-40 w-full rounded-xl border-2 border-zinc-500 p-4 outline-none" />

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">Prompt</p>
            <input
              type="text"
              placeholder="Example: you are a sales agent, talk persuasively and respond to the answers politely"
              className="w-full rounded-xl border-2 border-zinc-500 p-4 outline-none"
            />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="center justify-end">
              <button
                className="center bg-gradient gap-2 rounded-lg p-2 pl-4 text-lg font-bold text-white"
                onClick={() => setStep(2)}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step-2"
            className={`w-full max-w-[600px] rounded-lg bg-white p-10 ${step !== 2 ? "hidden" : ""}`}
          >
            <p className="my-2 text-xl font-bold">Data Source</p>

            <div className="center w-full flex-col rounded-xl border-2 border-zinc-500 p-4 py-10">
              <p className="font-bold">Drag & Drop any Document</p>

              <p className="my-4 text-zinc-500">
                ( Support doc, txt, pdf, mp4 )
              </p>

              <input type="file" id="actual-btn" hidden />

              <label
                htmlFor="actual-btn"
                className="bg-gradient cursor-pointer rounded-lg px-4 py-2 font-bold text-white"
              >
                Choose File
              </label>
            </div>

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">URLs</p>

            <input
              type="text"
              className="w-full rounded-xl border-2 border-zinc-500 p-4 outline-none"
              placeholder="https://example.com"
              ref={urlRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (urlRef.current) {
                    setUrls([...urls, urlRef.current.value]);
                    urlRef.current.value = "";
                  }
                }
              }}
            />

            {urls.map((url: any) => {
              return (
                <div
                  className="center mx-4 justify-between border-b-2 border-zinc-300 p-2"
                  key={url}
                >
                  <p className="text-zinc-500">{url}</p>
                  <Trash
                    size={16}
                    onClick={() => {
                      const newUrl = urls.filter((u: any) => u !== url);
                      setUrls(newUrl);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              );
            })}

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">Prompt</p>
            <input
              type="text"
              placeholder="Example: you are a sales agent, talk persuasively and respond to the answers politely"
              className="w-full rounded-xl border-2 border-zinc-500 p-4 outline-none"
            />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="center justify-between">
              <button
                className="center bg-gradient gap-2 rounded-lg p-2 pr-4 text-lg font-bold text-white"
                onClick={() => setStep(1)}
              >
                <ChevronLeft size={16} /> Back
              </button>

              <button
                className="center bg-gradient gap-2 rounded-lg p-2 pl-4 text-lg font-bold text-white"
                onClick={() => setStep(3)}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Step 3 */}

          <div
            id="step-3"
            className={`w-full max-w-[600px] rounded-lg bg-white p-10 ${step !== 3 ? "hidden" : ""}`}
          >
            <p className="my-2 text-xl font-bold">Deploy</p>

            <div className="center w-full flex-col rounded-xl p-4 py-10">
              <button className="bg-gradient rounded-xl p-2 px-4 text-white">
                Preview
              </button>
            </div>

            <br></br>
            <br></br>

            <p className="my-2 text-xl font-bold">Embedded Code</p>
            <textarea className="text-area-scrollbar h-40 w-full rounded-xl border-2 border-zinc-500 p-4 outline-none" />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="center justify-between">
              <button
                className="center bg-gradient gap-2 rounded-lg p-2 pr-4 text-lg font-bold text-white"
                onClick={() => setStep(2)}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button className="center bg-gradient gap-2 rounded-lg p-2 px-4 text-lg font-bold text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Setup Progress */}
      <div className="h-screen w-full max-w-[30%] bg-white p-4">
        <p className="my-5 text-3xl font-bold">Setup Progress</p>
        {progressSteps.map((progress, index) => {
          return (
            <div key={progress.title} className="mb-10">
              <p className="my-2 text-2xl">
                {index + 1}. {progress.title}
              </p>

              {progress.steps.map((s) => {
                if (index + 1 <= step) {
                  return (
                    <p className="my-2 ml-8 text-xl text-zinc-500" key={s}>
                      {s}
                    </p>
                  );
                }

                return (
                  <div
                    className="my-4 ml-8 h-6 rounded-xl bg-zinc-100"
                    key={s}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
