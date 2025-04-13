import { create } from 'zustand';
import { defaultOutputEditorValue } from '../constants/defaults';


interface EditorState {
  outputValue: string;
  setOutputValue: (value: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  outputValue: defaultOutputEditorValue,
  setOutputValue: (value) => set(() => ({ outputValue: value }))
}));

