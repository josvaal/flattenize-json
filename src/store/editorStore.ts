import { create } from 'zustand';
import { defaultInputEditorValue, defaultInterfaceValue, defaultOutputEditorValue } from '../constants/defaults';

export type ConvertionType = "flat" | "unflat"

interface EditorState {
  type: ConvertionType
  inputValue: string;
  outputValue: string;
  isInterface: boolean;
  interfaceValue: string;
  setType: (value: ConvertionType) => void;
  setInputValue: (value: string) => void;
  setOutputValue: (value: string) => void;
  toggleIsInterface: () => void;
  setInterfaceValue: (value: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  type: "flat",
  inputValue: defaultInputEditorValue,
  outputValue: defaultOutputEditorValue,
  isInterface: true,
  interfaceValue: defaultInterfaceValue,
  setType: (value: ConvertionType) => set(() => ({ type: value })),
  setInputValue: (value) => set(() => ({ inputValue: value })),
  setOutputValue: (value) => set(() => ({ outputValue: value })),
  toggleIsInterface: () => set((state) => ({ isInterface: !state.isInterface })),
  setInterfaceValue: (value) => set(() => ({ interfaceValue: value }))
}));

