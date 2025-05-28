import React, { type FunctionComponent } from 'react'
import { ResultsTableProps } from '@/shared/types'

const ResultsTable: FunctionComponent<ResultsTableProps> = ({ results }) => {
  return (
    <div id="results-container">
      {
        results.length ? (
        <table id="results-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Cuisine</th>
              <th>Rating</th>
              <th>Price Level</th>
              <th>Operating Hours</th>
            </tr>
          </thead>
          <tbody>
            { results.map((result, index) => (
              <tr key={`result-${index}`}>
                <td>{ result.name }</td>
                <td>{ result.location.formatted_address || 'No address specified' }</td>
                <td>{ result.categories[0]?.name || 'Undetermined' }</td>
                <td>{ result.rating || 'N/A' }</td>
                <td>{ result.price || 'N/A' }</td>
                <td>{ result.hours.display ?? (result.hours.open_now ? 'Open today' : 'Closed today') }</td>
              </tr>
            )) }
          </tbody>
        </table>
        ) : (
          <p id="no-results">No results found</p>
        )
      }
    </div>
  )
}

export default ResultsTable
