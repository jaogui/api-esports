'use client'
// import { useState } from "react"
// import fetchDefault from "./axios/axiosConfig"
import FormApi from "./Components/FormApi"
import { AppProvider } from "./AppContext"

export default function Home() {
  // const [inputKey, setInput] = useState('')
  // const [infoLogin, setInfoLogin] = useState([''])

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const fetchResponse = await fetchDefault('/status', {
  //       headers: {
  //         "x-rapidapi-key": inputKey,
  //       }
  //     });
  //     const dataFetch = await fetchResponse.data.results;
  //     console.log(dataFetch)

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <AppProvider>
      <section className="flex flex-col flex-1 h-screen bg-zinc-800 gap-3">
        <form className="flex flex-col gap-2">
          {/* <div className="flex flex-col gap-2">
          <label htmlFor="keyAccess" className="text-sm">Insira key para acesso:</label>
          <input
            className="w-[280px] rounded-sm focus:outline-none bg-zinc-400 px-2 py-0.5 text-zinc-900"
            type="text"
            name="keyAccess"
            id="keyAccess"
            value={inputKey}
            onChange={({ target }) => setInput(target.value)}
          />
          <button type="submit" className="bg-green-600 w-24 mt-1 rounded-sm hover:bg-green-500">Acessar</button>
        </div> */}

          <FormApi

          />
        </form>
      </section >
    </AppProvider>

  )
}
