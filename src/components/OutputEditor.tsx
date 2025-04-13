import { Editor, Monaco } from '@monaco-editor/react'
import DeepOcean from "../themes/deep-ocean.json"
import { useEditorStore } from '../store/editorStore';

const handleEditorDidMount = (monaco: Monaco) => {
  monaco.editor.defineTheme('DeepOcean', {
    base: 'vs-dark',
    inherit: true,
    ...DeepOcean,
    rules: []
  });
};

export const OutputEditor = () => {
  const { outputValue } = useEditorStore()

  return <Editor
    theme='DeepOcean'
    language='json'
    height="50vh"
    value={outputValue}
    options={{
      readOnly: true,
      wordWrap: "on",
      minimap: {
        enabled: false,
      },
      scrollbar: {
        vertical: "hidden"
      },
      fontSize: 15
    }}
    beforeMount={handleEditorDidMount}
  />
}
