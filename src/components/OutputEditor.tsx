import { Editor, Monaco } from '@monaco-editor/react'
import TokyoNight from "../themes/tokyo-night-storm-color-theme.json"
import { useEditorStore } from '../store/editorStore';
import { Button } from 'antd';
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
  const { outputValue } = useEditorStore()

  return (
    <>
      <Editor
        className='component-shadow'
        theme='TokyoNight'
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
      <div>
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
