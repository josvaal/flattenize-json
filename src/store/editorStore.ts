import { create } from 'zustand';
import { defaultInputEditorValue, defaultOutputEditorValue } from '../constants/defaults';


interface EditorState {
  inputValue: string;
  outputValue: string;
  setInputValue: (value: string) => void;
  setOutputValue: (value: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  inputValue: defaultInputEditorValue,
  outputValue: defaultOutputEditorValue,
  setInputValue: (value) => set(() => ({ inputValue: value })),
  setOutputValue: (value) => set(() => ({ outputValue: value }))
}));

