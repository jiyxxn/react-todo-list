import { createContext, useContext, useReducer } from 'react';

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, mockData);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

const mockData = [
  {
    id: 0,
    isDone: true,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'React 실습하기',
    date: new Date().getTime(),
  },
];
