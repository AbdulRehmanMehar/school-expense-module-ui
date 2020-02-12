
export interface Module {
  id?: string;
  name: string;
}

export interface ModuleState {
  working: boolean;
  modules: Module[];
  error: string;
}
