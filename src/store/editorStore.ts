import { create } from 'zustand';
import { defaultInputEditorValue, defaultOutputEditorValue } from '../constants/defaults';

export type ConvertionType = "flat" | "unflat"

interface EditorState {
  type: ConvertionType
  inputValue: string;
  outputValue: string;
  setType: (value: ConvertionType) => void;
  setInputValue: (value: string) => void;
  setOutputValue: (value: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  type: "flat",
  inputValue: defaultInputEditorValue,
  outputValue: defaultOutputEditorValue,
  setType: (value: ConvertionType) => set(() => ({ type: value })),
  setInputValue: (value) => set(() => ({ inputValue: value })),
  setOutputValue: (value) => set(() => ({ outputValue: value }))
}));

