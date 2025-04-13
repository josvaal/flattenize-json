import { Component } from 'react'
import { EntryEditor } from './components/EntryEditor'
import ResponsiveGrid from './components/ResponsiveGrid'
import { OutputEditor } from './components/OutputEditor'

export class App extends Component {
  render() {
    return (
      <div>
        <ResponsiveGrid leftComponent={<EntryEditor />} rightComponent={<OutputEditor />} />
      </div>
    )
  }
}

export default App
