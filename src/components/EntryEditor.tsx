import { Editor, Monaco, OnChange } from '@monaco-editor/react'
import { defaultInputEditorValue } from '../constants/defaults'
import DeepOcean from "../themes/deep-ocean.json"
import { useEditorStore } from '../store/editorStore';
import { flatten } from 'flat';

const handleEditorDidMount = (monaco: Monaco) => {
  monaco.editor.defineTheme('DeepOcean', {
    base: 'vs-dark',
    inherit: true,
    ...DeepOcean,
    rules: []
  });
};




export const EntryEditor = () => {
  const { setOutputValue } = useEditorStore()

  const handleChange: OnChange = (value) => {
    const jsonText = value ?? '';

    try {
      const parsed = JSON.parse(jsonText);
      const outputValue = flatten(parsed)
      setOutputValue(JSON.stringify(outputValue, null, 2))
    } catch (err) {
      if (err instanceof Error) {
        console.warn(err.message);
      }
    }
  };

  return (
    <Editor
      theme='DeepOcean'
      language='json'
      height="50vh"
      defaultValue={defaultInputEditorValue}
      onChange={handleChange}
      options={{
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
  )
}

