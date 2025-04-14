import { Component } from 'react'
import { EntryEditor } from './components/EntryEditor'
import ResponsiveGrid from './components/ResponsiveGrid'
import { OutputEditor } from './components/OutputEditor'
import { Header } from './components/Header'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResponsiveGrid leftComponent={<EntryEditor />} rightComponent={<OutputEditor />} />
      </div>
    )
  }
}

export default App
