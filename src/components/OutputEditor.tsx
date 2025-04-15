import { Editor, Monaco } from '@monaco-editor/react'
import TokyoNight from "../themes/tokyo-night-storm-color-theme.json"
import { useEditorStore } from '../store/editorStore';
import { Button, Switch } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const handleEditorDidMount = (monaco: Monaco) => {
  monaco.editor.defineTheme('TokyoNight', {
    base: 'vs-dark',
    inherit: true,
    ...TokyoNight,
    rules: []
  });
};

export const OutputEditor = () => {
  const { outputValue, isInterface, interfaceValue, toggleIsInterface } = useEditorStore()

  return (
    <>
      <Editor
        className='component-shadow'
        theme='TokyoNight'
        language={isInterface ? 'typescript' : 'json'}
        height="50vh"
        value={isInterface ? interfaceValue : outputValue}
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Switch value={isInterface} style={{ width: "100%", height: "100%" }} checkedChildren="Typescript" unCheckedChildren="JSON" onClick={() => {
          toggleIsInterface()
        }} />
        <Button
          size='large'
          type='text'
          style={{ width: "100%", color: "#92CEEF" }}
          icon={<CopyOutlined />}
          onClick={() => {
            navigator.clipboard.writeText(outputValue)
          }}
        >
          Copy
        </Button>
      </div>
    </>
  )
}
