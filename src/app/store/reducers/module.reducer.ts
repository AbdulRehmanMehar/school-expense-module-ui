import { ModuleActionTypes, ModuleActions } from './../actions/module.actions';
import { ModuleState } from './../models/module.model';


const moduleState: ModuleState = {
  modules: [],
  working: false,
  error: undefined,
};


export function ModuleReducer(state: ModuleState = moduleState, action: ModuleActions) {
  switch (action.type) {
    case ModuleActionTypes.ADD:
      state.working = true;
      state.error = undefined;
      return state;

    case ModuleActionTypes.ADD_SUCCESS:
      state.working = false;
      state.error = undefined;
      state.modules.push(action.payload);
      return state;

    case ModuleActionTypes.ADD_FAILURE:
      state.working = false;
      state.error = 'Something went wrong while adding module';
      return state;

    case ModuleActionTypes.LOAD:
      state.modules = [];
      state.working = true;
      state.error = undefined;
      return state;

    case ModuleActionTypes.LOAD_SUCCESS:
      state.working = false;
      state.error = undefined;
      state.modules.push(action.payload);
      return state;

    case ModuleActionTypes.LOAD_FAILURE:
      state.working = false;
      state.error = 'Something went wrong while loading modules';
      return state;

    default:
      return state;
  }
}

