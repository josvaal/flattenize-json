import { Editor, Monaco } from '@monaco-editor/react'
import TokyoNight from "../themes/tokyo-night-storm-color-theme.json"
import { ConvertionType, useEditorStore } from '../store/editorStore';
import { flatten, unflatten } from 'flat';
import { Select } from 'antd';

const handleEditorDidMount = (monaco: Monaco) => {
  monaco.editor.defineTheme('TokyoNight', {
    base: 'vs-dark',
    inherit: true,
    ...TokyoNight,
    rules: []
  });
};

export const EntryEditor = () => {
  const { setOutputValue, type, setType, inputValue, setInputValue } = useEditorStore()

  const handleChange = (value?: string) => {
    console.log(value)
    console.log(type)
    setInputValue(value ?? "")
    const jsonText = value ?? '';

    try {
      const parsed = JSON.parse(jsonText);
      const outputValue = type == "flat" ? flatten(parsed) : unflatten(parsed)
      setOutputValue(JSON.stringify(outputValue, null, 2))
    } catch (err) {
      if (err instanceof Error) {
        console.warn(err.message);
      }
    }
  };

  return (
    <>
      <Editor
        className='component-shadow'
        theme='TokyoNight'
        language='json'
        height="50vh"
        value={inputValue}
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
      <div>
        <Select
          defaultValue="flat"
          style={{ width: "100%" }}
          onChange={(value: ConvertionType) => {
            setType(value)
            try {
              const parsed = JSON.parse(inputValue);
              const outputValue = value === "flat" ? flatten(parsed) : unflatten(parsed);
              setOutputValue(JSON.stringify(outputValue, null, 2));
            } catch (err) {
              if (err instanceof Error) {
                console.warn(err.message);
              }
            }
          }}
          options={[
            { value: 'flat', label: 'Flatten' },
            { value: 'unflat', label: 'Unflatten' },
          ]}
        />
      </div>
    </>
  )
}

