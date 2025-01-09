# State Management

The State Management in this application is a self-brew solution providing a flat state object whose properties can be accessed and modified using signals.
The state is build by a [`StateBuilder`](./src/lib/state-builder.ts) class that combines all state slices into a single state object.

## Read/Write State Slices

| Constructors      | Storage          | Trigger               |
| ----------------- | ---------------- | --------------------- |
| localStorageState | localStorage     | On every state change |
| sessionState      | sessionStorage   | On every state change |
| routerState       | URL query params | Synchronized with URL |
| transientState    | None             | On every state change |

## Derived State Slices

A number of state properties are derived from other state properties in [`GlobalState`](./src/lib/global-state.ts).
These properties are read-only and are computed on every dependent signal change.

## Classes

### [`read-write/localstorage-state`](./src/lib/read-write/localstorage-state.ts)

The `localStorageState` function persists a slice of the state to the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
The state is hydrated from the local storage on application start and is persisted to the local storage on every state change.

### [`read-write/session-state`](./src/lib/read-write/session-state.ts)

The `sessionState` function holds the session state of the application which is also persisted to the [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
The state is hydrated from the session storage on application start and is persisted on every state change.

### [`read-write/router-state`](./src/lib/read-write/router-state.ts)

The `routerState` function holds a slice of the state as routing query parameters.
The state is synchronized with the current URL query parameters.

### [`read-write/transient-state`](./src/lib/read-write/transient-state.ts)

The `transientState` function holds transient state that is not persisted and exists only in memory.

### [`readonly/browser-state`](./src/lib/readonly/browser-state.ts)

This function constructs derived state properties with browser specific information.

### [`readonly/rule-parsing`](./src/lib/readonly/rule-parsing.ts)

This function constructs derived state properties concerned with parsing the rules.

### [`readonly/rule-analysis`](./src/lib/readonly/rule-analysis.ts)

This function constructs derived state properties concerned with analyzing the rules and extracting information from them.

### [`GLOBAL_STATE`](./src/lib/global-state.ts)

The `GLOBAL_STATE` injection key that combines all state slices into a single state object.
All artifacts using state management should inject this token to access and modify the state via its signals.

### [`StateBuilder`](./src/lib/state-builder.ts)

The `StateBuilder` class is used to construct the state object from the state slices.

## Extending the State

If a new state property is required it should be added to the state slice where it should be persisted.
Add the initial value and the type to the `initialState` object in the respective read-write state slices and add a mapping in the state creator function.

If the property is derived from other properties it has to be added to one of the derived state slices in the `readonly` folder.
