import React, { type FunctionComponent, type FormEvent, useState } from 'react'
import '@styles/index.scss'
import { findRestaurant } from '@services'
import { Form, ResultsTable, Loading } from '@components'
import { ResultsData } from '@/shared/types'

const App: FunctionComponent = () => {
  const [results, setResults] = useState<ResultsData[]>([])
  const [initialState, setInitialState] = useState(true)
  const [loadingResults, setLoadingResults] = useState(false)

  const formSubmitHandler = async (e: FormEvent, enableForm: () => void) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const input = ((formData.get('input') as string | null) ?? '').trim()

    if (!input) {
      window.alert('Please enter your input')
      return enableForm()
    }
      
    try {
      if (initialState) setInitialState(false)
  
      setLoadingResults(true)

      const { data } = await findRestaurant(input)

      setResults(data.results)
    } catch (err: any) {
      window.alert(err.message)
    } finally {
      enableForm()
      setLoadingResults(false)
    }
  }

  return (
    <>
      <h1 id="title">Restaurant Finder</h1>
      <Form submitHandler={formSubmitHandler} />
      { initialState ? null : (loadingResults ? <Loading /> : <ResultsTable results={results} />) }
    </>
  )
}

export default App
